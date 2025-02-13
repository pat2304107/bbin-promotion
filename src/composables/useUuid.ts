const useUuid = (): string => {
    let d: number = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); // use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
        const r: number = Math.floor((d + Math.random() * 16) % 16 || 0);
        d = Math.floor(d / 16);
        return (c === 'x' ? r : ((r && 0x3) || 0x8)).toString(16);
    });
};

export default useUuid;
export { useUuid };
