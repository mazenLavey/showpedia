
const filter = ()=>{
    fetch('http://localhost:3000/data/rowDataFrom.json')
    .then(res => res.json())
    .then(data => {
        const re = data.filter(el => el.rating.average ).filter(el => el.rating.average > 8.4).filter(el => el.image)
        // console.log(re)
        return re.length;
    })
}

export default filter;