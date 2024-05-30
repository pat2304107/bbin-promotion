import { i18n, I18nLocaleKey } from '@/plugins/i18n';
import useUuid from './useUuid';
import useDeviceDetect from './useDeviceDetect';

/**
 * GTM 發送器
 * @param {Object} param0
 * @param {String} param0.event - 事件名稱
 * @param {String} param0.text - 文字
 * @param {String} param0.order - 版位順序
 * @param {String} param0.target_url - 目標連結
 * @param {String} param0.utm_source - 來源
 * @param {String} param0.lang - 語系
 * @param {String} param0.device - 裝置
 * @param {String} param0.UUID - UUID
 * @param {String} param0.memo - 備註
 */

let step = 1;

interface UseGtmSender {
    event: string;
    text?: string;
    order?: number;
    page_next?: string;
    page_prev?: string;
    target_url?: string;
    memo?: string;
}

interface ApiInfo extends UseGtmSender {
    device: 'PC' | 'Mobile';
    lang: I18nLocaleKey;
    UUID: string;
    date: string;
    step: number;
    utm_source?: string;
}

const UUID = useUuid();
const implementList: {
    event: string;
    order?: number;
}[] = [];

const useGtmSender = ({
    event,
    text,
    order,
    page_next,
    page_prev,
    target_url,
    memo
}: UseGtmSender = {
    event: '未定義名稱事件',
    text: undefined,
    order: undefined,
    page_next: undefined,
    page_prev: undefined,
    target_url: undefined,
    memo: undefined
}) => {
    const { dataLayer } = window;

    if (dataLayer) {
        // 避免曝光事件重複紀錄
        if (event.includes('曝光')) {
            implementList.push({
                event,
                order
            });
        }

        // utm_source query 獲取
        const utm = location.href.match(/[?&]utm_source=([^&]+).*$/);

        const getCurrentDate = () => {
            const now = new Date();

            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
        };

        const apiInfo: ApiInfo = {
            event,
            text,
            order,
            step,
            date: getCurrentDate(),
            page_next,
            page_prev,
            target_url,
            memo,
            lang: i18n.global.locale.value,
            device: useDeviceDetect().isPC ? 'PC' : 'Mobile',
            UUID,
            utm_source: utm ? utm[1] : undefined
        };

        const apiInfoKeys = Object.keys(apiInfo);

        // 濾除未夾帶欄位
        for (let i = 0; i < apiInfoKeys.length; i += 1) {
                type ApiInfoKey = keyof typeof apiInfo;

                if (apiInfo[apiInfoKeys[i] as ApiInfoKey] === undefined
                    || apiInfo[apiInfoKeys[i] as ApiInfoKey] === null
                    || apiInfo[apiInfoKeys[i] as ApiInfoKey] === ''
                ) delete apiInfo[apiInfoKeys[i] as ApiInfoKey];
        }

        console.log(apiInfo);
        dataLayer.push(apiInfo);

        step += 1;
    }
};

export default useGtmSender;
export { useGtmSender };
