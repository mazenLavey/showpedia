import { useContext, useEffect } from 'react';
import { DefaultDataContext } from 'context/DefaultDataContext';
import Select from 'react-select';
import './css/ShowsFilterBar.css';

const selectBoxStyles = {
    height: "100%",
    width: "100%",
    padding: "0px 24px",
    borderRadius: "8px",
    fontSize: "14px",
    lineHeight: "24px",
    color: "white",
    border: "1px solid transparent",
    backgroundClip: "padding-box",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    background: "#181a20",
    cursor: "pointer",
};

const selectMenu = {
    backgroundColor: "#181a20",
    padding: "8px 5px 8px 20px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "white",
};

const selectOption = {
    borderRadius: "8px",
    backgroundColor: "transparent",
    fontSize: "14px",
    color: "white",
    padding: "12px",
    cursor: "pointer",
};

const selectStyles = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        ...selectBoxStyles,
    }),
    input: (baseStyles, state) => ({
        ...baseStyles,
        color: "white",
    }),
    singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: "white",
    }),
    valueContainer: (baseStyles, state) => ({
        ...baseStyles,
        padding: "unset",
    }),
    indicatorSeparator: (baseStyles, state) => ({
        ...baseStyles,
        display: "none",
    }),
    menu: (baseStyles, state) => ({
        ...baseStyles,
        ...selectMenu,
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        ...selectOption,
        backgroundColor: state.isSelected ? "rgba(84, 94, 102, 0.2)" : "transparent",
    }),
};

const ShowsFilterBar = ( )=>{
    const {
        genresList,
        yearList,
        counrtyList,
        setFilterByGenre,
        setFilterByYear,
        setFilterByCounrtry,
    } = useContext(DefaultDataContext);

    const handleGenre = (option) => {
        if(option) {
            setFilterByGenre(option.value);
        } else {
            setFilterByGenre(null);
        }
    }

    const handleYear = (option) => {
        if(option) {
            setFilterByYear(option.value);
        } else {
            setFilterByYear(null);
        }
    }

    const handleCountry = (option) => {
        if(option) {
            setFilterByCounrtry(option.value);
        } else {
            setFilterByCounrtry(null);
        }
    }

    useEffect(() => {
        setFilterByGenre(null);
        setFilterByYear(null);
        setFilterByCounrtry(null);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='ShowsFilterBar'>
            <Select
                className="ShowsFilterBar__Container"
                classNamePrefix="ShowsFilterBox"
                name="genresList"
                placeholder="choose genre ..."
                options={genresList}
                styles={selectStyles}
                onChange={handleGenre}
                isClearable
            />
            <Select
                className="ShowsFilterBar__Container"
                classNamePrefix="ShowsFilterBox"
                name="yearList"
                placeholder="choose year ..."
                options={yearList}
                styles={selectStyles}
                onChange={handleYear}
                isClearable
            />
            <Select
                className="ShowsFilterBar__Container"
                classNamePrefix="ShowsFilterBox"
                name="counrtyList"
                placeholder="choose country ..."
                options={counrtyList}
                styles={selectStyles}
                onChange={handleCountry}
                isClearable
            />
        </div>
    );
};

export default ShowsFilterBar;