
function matchText(text) {
    if (text !== null) {
        let regex = /<\/?\s?[A-Za-z]+\s?\/?>/gm;
        let readyText = text.replace(regex, "");
        return readyText
    } else {
        return "No available information"
    }
};

export default matchText;