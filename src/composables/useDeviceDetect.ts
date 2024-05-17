const useDeviceDetect = () => {
    const { userAgent } = navigator;
    const isPC = /(Windows|Macintosh|Linux)(?!.*Android)/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);
    const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

    return {
        isPC,
        isAndroid,
        isiOS
    };
};
export default useDeviceDetect;
export { useDeviceDetect };
