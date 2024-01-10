import { getShowCast, getShowEpisodes, getShowInfoById } from "api/index";

export const showDataLoader = async ({params})=>{
    try {
        const [infoData, episodeData, castData] = await Promise.all([
            getShowInfoById(params.showId),
            getShowEpisodes(params.showId),
            getShowCast(params.showId),
        ]);
    return [infoData.data, episodeData.data, castData.data]
    } catch(err) {
        console.log("[error from actors loader]", err)
        throw new Error('Error fetching data');
    };
}