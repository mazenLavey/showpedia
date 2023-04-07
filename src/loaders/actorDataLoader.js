


export const actorDataLoader = async ({ params }) => {
    try {
        const [dataInfo, dataShows] = await Promise.all([
            fetch(`https://api.tvmaze.com/people/${params.actordId}`).then(res => {
                if(!res.ok) {
                    throw new Error('Error fetching data');
                }
                return res.json();
            }),
            fetch(`https://api.tvmaze.com/people/${params.actordId}/castcredits?embed=show`).then(res => {
                if(!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json()})
                .then(rowData => {
                const uniqueId = [];
                const cleanData = rowData.filter(el => el._embedded.show.image).filter(el => {
                    const isUnique = uniqueId.includes(el._embedded.show.id);
                    if (!isUnique) {
                        uniqueId.push(el._embedded.show.id);
                        return true;
                    } else {
                        return false;
                    };
                });
                return cleanData;
            })
        ])
        return [dataInfo, dataShows]
    } catch(e) {
        console.log("errrrrrrrrrrrrrrrrrrr", e)
        throw new Error('Error fetching data');
    }
}