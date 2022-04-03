const trimString = (str) => {
    const maxLength = 142;
    let trimmedString = str.substr(0, maxLength);
    
    return `${trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))}...`
}

export default trimString;