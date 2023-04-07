
export const showDataLoader = async ({params})=>{
    const [infoData, episodeData, castData] = await Promise.all([
        fetch(`https://api.tvmaze.com/shows/${params.showId}`).then(res => res.json()),
        fetch(`https://api.tvmaze.com/shows/${params.showId}/episodes`).then(res => res.json()),
        fetch(`https://api.tvmaze.com/shows/${params.showId}/cast`).then(res => res.json())
    ]);
    return [infoData, episodeData, castData]
}