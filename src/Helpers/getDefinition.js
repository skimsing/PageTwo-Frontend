const fetchDefinition = async (e) => {
    try {
        e.preventDefault();
        if(searchTerm) {
            const dictionary = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
            const dictObj = dictionary.data;
            setWord(dictObj);
        }
    } catch (error) {
        console.error("can't find the word, check for typos", error);
    }
}

export default fetchDefinition;