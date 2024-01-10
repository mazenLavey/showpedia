import { getActorById, getActorCastcredits } from "api/index";

export const actorDataLoader = async ({ params }) => {

    try {
        const [showInfo, shows] = await Promise.all([
            getActorById(params.actordId),
            getActorCastcredits(params.actordId),
        ])

        const uniqueId = [];
        const actorShows = shows.data.filter(el => el._embedded.show.image).filter(el => {
            const isUnique = uniqueId.includes(el._embedded.show.id);
            if (!isUnique) {
                uniqueId.push(el._embedded.show.id);
                return true;
            } else {
                return false;
            };
        });


        return [showInfo.data, actorShows]
    } catch(err) {
        console.log("[error from actors loader]", err)
        throw new Error('Error fetching data');
    }
}