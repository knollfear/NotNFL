import React from "react";



const valueTextField = (team, isNot, val) =>{ return `${isNot ? 'Not ' : ''}${team[val]}` };
const valueRuleField = (obj, activeCard, val) =>{ return obj[val] === activeCard[val]};
const valueRuleObj = (val, text, rule, cardRender) =>{
    const key = Object.keys(val)[0];
    const value = val[key];
    return {
        text:(obj, isNot) =>{ return text ? text(obj, isNot, key) : valueTextField(obj, isNot, key) },
        rule: (obj, activeCard)=>{
            return rule ? rule(obj, activeCard, key) : valueRuleField(obj, activeCard, key)
        },
        cardRender: (obj) =>{return cardRender ? cardRender(obj, value) : imgCard(obj, value)},
        val,

    }
};

const imgPrompt = (obj, isNot, val) =>{
    return (
        <div>
            {isNot ? 'not' : ''}
            <img src={obj[val] } alt={obj[val]}/>
        </div>
    )
};

const stadiumCapacity = (obj, isNot, val) =>{
    return (
        <div>
            {txtPrompter(obj, isNot, val, {prefix: 'Stadium Capacity is '})}
        </div>
    )
};

const stadiumLocation = (obj, isNot, val) =>{
    return (
        <div>
            {txtPrompter(obj, isNot, val, {prefix: 'Stadium Location is '})}
        </div>
    )
};


const coach = (obj, isNot, val) =>{
    return (
        <div>
            {txtPrompter(obj, isNot, val, {prefix: 'Coached by '})}
        </div>
    )
};

const txtPrompter = (obj, isNot, val, extraText) =>{
    return  `${extraText.prefix || ''} ${isNot ? 'not ' : ''} ${obj[val]} ${extraText.suffix || ''}`
};

const imgCard = (card, val) =>{
    return (
        <img src={card[val] } alt={card[val]}/>
    )
};

const txtCard = (card, val) =>{
    return <button>{card[val]}</button>
};

const Rules =[
    valueRuleObj({strTeamBadge: 'strTeam' }, imgPrompt, null, txtCard),
    valueRuleObj({strTeam: 'strTeamBadge'}),
    valueRuleObj({strTeamBadge: 'strTeam' }, imgPrompt, null, txtCard),
    valueRuleObj({strTeamShort: 'strTeamBadge'}),
    valueRuleObj({strManager: 'strTeamBadge' }, coach),
    valueRuleObj({strStadiumLocation: 'strTeamBadge'}, stadiumLocation),
    valueRuleObj({strStadium: 'strTeamBadge'}, stadiumCapacity),
];

export default  Rules;
