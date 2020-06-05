const getCards = async source =>{

    const response = await fetch(process.env.PUBLIC_URL + `/NFL.json`);
    const json = await response.json();
    return json.teams;

};

export {
    getCards,
}
