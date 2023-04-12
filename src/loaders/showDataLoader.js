
export const showDataLoader = async ({params})=>{
    try {
        const [infoData, episodeData, castData] = await Promise.all([
            fetch(`https://api.tvmaze.com/shows/${params.showId}`).then(res => res.json()),
            fetch(`https://api.tvmaze.com/shows/${params.showId}/episodes`).then(res => res.json()),
            fetch(`https://api.tvmaze.com/shows/${params.showId}/cast`).then(res => res.json())
        ]);
    return [infoData, episodeData, castData]
    } catch(e) {
        console.log("error from actors loader", e)
        throw new Error('Error fetching data');
    };
}