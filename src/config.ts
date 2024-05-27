import { ref } from 'vue';

import indexGame1 from '@/assets/index_game_5252.png';
import indexGame2 from '@/assets/index_game_5234.png';
import indexGame3 from '@/assets/index_game_5275.png';
import indexGame4 from '@/assets/index_game_5200.png';
import indexGame5 from '@/assets/index_game_5272.png';

import gameThumbnail1 from '@/assets/game_list_5252.png';
import gameThumbnail2 from '@/assets/game_list_5234.png';
import gameThumbnail3 from '@/assets/game_list_5275.png';
import gameThumbnail4 from '@/assets/game_list_5200.png';
import gameThumbnail5 from '@/assets/game_list_5272.png';

import gameBanner1 from '@/assets/game_banner_5252.png';
import gameBanner2 from '@/assets/game_banner_5234.png';
import gameBanner3 from '@/assets/game_banner_5275.png';
import gameBanner4 from '@/assets/game_banner_5200.png';
import gameBanner5 from '@/assets/game_banner_5272.png';

import gameBanner1En from '@/assets/game_banner_5252_en.png';
import gameBanner2En from '@/assets/game_banner_5234_en.png';
import gameBanner3En from '@/assets/game_banner_5275_en.png';
import gameBanner4En from '@/assets/game_banner_5200_en.png';
import gameBanner5En from '@/assets/game_banner_5272_en.png';

import gameVideoCn1 from '@/assets/video/5252_cn.mp4';
import gameVideoCn2 from '@/assets/video/5234_cn.mp4';
import gameVideoCn3 from '@/assets/video/5275_cn.mp4';
import gameVideoCn4 from '@/assets/video/5200_cn.mp4';
import gameVideoCn5 from '@/assets/video/5272_cn.mp4';

import gameVideoEn1 from '@/assets/video/5252_en.mp4';
import gameVideoEn2 from '@/assets/video/5234_en.mp4';
import gameVideoEn3 from '@/assets/video/5275_en.mp4';
import gameVideoEn4 from '@/assets/video/5200_en.mp4';
import gameVideoEn5 from '@/assets/video/5272_en.mp4';

import gameGIFCn1_1 from '@/assets/GIF/5252_cn_1.gif';
import gameGIFCn2_1 from '@/assets/GIF/5234_cn_1.gif';
import gameGIFCn3_1 from '@/assets/GIF/5275_cn_1.gif';
import gameGIFCn4_1 from '@/assets/GIF/5200_cn_1.gif';
import gameGIFCn5_1 from '@/assets/GIF/5272_cn_1.gif';

import gameGIFEn1_1 from '@/assets/GIF/5252_en_1.gif';
import gameGIFEn2_1 from '@/assets/GIF/5234_en_1.gif';
import gameGIFEn3_1 from '@/assets/GIF/5275_en_1.gif';
import gameGIFEn4_1 from '@/assets/GIF/5200_en_1.gif';
import gameGIFEn5_1 from '@/assets/GIF/5272_en_1.gif';

import gameGIFCn1_2 from '@/assets/GIF/5252_cn_2.gif';
import gameGIFCn2_2 from '@/assets/GIF/5234_cn_2.gif';
import gameGIFCn3_2 from '@/assets/GIF/5275_cn_2.gif';
import gameGIFCn4_2 from '@/assets/GIF/5200_cn_2.gif';
import gameGIFCn5_2 from '@/assets/GIF/5272_cn_2.gif';

import gameGIFEn1_2 from '@/assets/GIF/5252_en_2.gif';
import gameGIFEn2_2 from '@/assets/GIF/5234_en_2.gif';
import gameGIFEn3_2 from '@/assets/GIF/5275_en_2.gif';
import gameGIFEn4_2 from '@/assets/GIF/5200_en_2.gif';
import gameGIFEn5_2 from '@/assets/GIF/5272_en_2.gif';

export const contactConfig = ref(false);

export default {
    gameList: [
        {
            id: 5252,
            index: indexGame1,
            thumbnail: gameThumbnail1,
            thumbnailConfig: {
                outerShadow: '#3cff00',
                innerShadow: '#5aff00',
                innerOpacity: 0.84
            },
            banner: gameBanner1,
            banner_en: gameBanner1En,
            video_en: gameVideoCn1,
            video_cn: gameVideoEn1,
            gif_cn_1: gameGIFCn1_1,
            gif_cn_2: gameGIFCn1_2,
            gif_en_1: gameGIFEn1_1,
            gif_en_2: gameGIFEn1_2
        },
        {
            id: 5234,
            index: indexGame2,
            thumbnail: gameThumbnail2,
            thumbnailConfig: {
                outerShadow: '#ff00ea',
                innerShadow: '#de00ff',
                innerOpacity: 0.84
            },
            banner: gameBanner2,
            banner_en: gameBanner2En,
            video_en: gameVideoCn2,
            video_cn: gameVideoEn2,
            gif_cn_1: gameGIFCn2_1,
            gif_cn_2: gameGIFCn2_2,
            gif_en_1: gameGIFEn2_1,
            gif_en_2: gameGIFEn2_2
        },
        {
            id: 5275,
            index: indexGame3,
            thumbnail: gameThumbnail3,
            thumbnailConfig: {
                outerShadow: '#ff8a00',
                innerShadow: '#fcbe00',
                innerOpacity: 0.84
            },
            banner: gameBanner3,
            banner_en: gameBanner3En,
            video_en: gameVideoCn3,
            video_cn: gameVideoEn3,
            gif_cn_1: gameGIFCn3_1,
            gif_cn_2: gameGIFCn3_2,
            gif_en_1: gameGIFEn3_1,
            gif_en_2: gameGIFEn3_2
        },
        {
            id: 5200,
            index: indexGame4,
            thumbnail: gameThumbnail4,
            thumbnailConfig: {
                outerShadow: '#ff8a00',
                innerShadow: '#fcbe00',
                innerOpacity: 0.84
            },
            banner: gameBanner4,
            banner_en: gameBanner4En,
            video_en: gameVideoCn4,
            video_cn: gameVideoEn4,
            gif_cn_1: gameGIFCn4_1,
            gif_cn_2: gameGIFCn4_2,
            gif_en_1: gameGIFEn4_1,
            gif_en_2: gameGIFEn4_2
        },
        {
            id: 5272,
            index: indexGame5,
            thumbnail: gameThumbnail5,
            thumbnailConfig: {
                outerShadow: '#ff0073',
                innerShadow: '#ff68a8',
                innerOpacity: 0.84
            },
            banner: gameBanner5,
            banner_en: gameBanner5En,
            video_en: gameVideoCn5,
            video_cn: gameVideoEn5,
            gif_cn_1: gameGIFCn5_1,
            gif_cn_2: gameGIFCn5_2,
            gif_en_1: gameGIFEn5_1,
            gif_en_2: gameGIFEn5_2
        }
    ]
};
