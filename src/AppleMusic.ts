import { AppleMusic } from './internal/AppleMusic';

export const validate = AppleMusic.validateURL;

export const getInfo = async (query: string) => {
    const data = await AppleMusic.getInfo(query).catch(() => {});
    if (!data) return null;

    return {
        playlist: data.playlist ?? null,
        info: data.data ?? []
    };
};

export const important = true;
