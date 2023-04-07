import SeasonBtnCSS from './SeasonBtn.module.css';

const SeasonBtn = ({num, handelClick, selectedSeasons})=>{

    return (
        <div className={SeasonBtnCSS.btn} onClick={()=> handelClick(num)} style={selectedSeasons === num? {backgroundColor: "var(--orange-light)"} : null}>
            <p>Season {num}</p>
        </div>
    );
};

export default SeasonBtn;