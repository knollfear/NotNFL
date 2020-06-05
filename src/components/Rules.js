import React from "react";

const Rules =[
    {
        text:(obj, isNot) =>{return `${isNot ? 'Not' : ''} ${obj.strTeam}`},
        rule: (obj, activeCard)=>{
            return obj.strTeam === activeCard.strTeam
        },
        cardRender: (obj) =>{return imgCard(obj)},
    },


];

const imgPrompt = (obj, isNot) =>{
    return (
        <div>
            {isNot ? 'not' : ''}
            <img src={obj.strTeamBadge } alt={obj.strTeamBadge}/>
        </div>
    )
};

const imgCard = (card) =>{
    return (
        <img src={card.strTeamBadge } alt={card.strTeamBadge}/>
    )
};

const txtCard = (card) =>{
    return <button>{card.txt}</button>
};

export default  Rules;
