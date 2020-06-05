import React, { useState } from 'react';

const GameArea = ({cards, clickHandler, rule}) =>{
    return (
        <div>
            {cards.map((card)=>{
            let classes = 'card';
            if (card.isCorrect){
                classes += ' correct'

            }

            return (
                <div
                    key={`${card.idTeam}-${rule.val}`}
                    className={ classes }
                    onClick={() => {clickHandler(card)}}
                >

                    {rule.cardRender(card)}

                </div>
        )
        })}
        </div>
    )
};

export default GameArea
