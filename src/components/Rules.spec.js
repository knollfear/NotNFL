import React from 'react';
const NFL = require('../../public/NFL');
import Rules from "./Rules";

describe("Rules Test", function() {
    it("contains spec with an expectation", function() {
        const teams = NFL.teams;
        Rules.forEach(rule=>{
            cards.forEach( card => {
                expect(valueTextField(card, false, val)).toBe(card[val]);
                expect(valueTextField(card, true, val)).toBe(`Not ${card[val]}`);
                expect(valueRuleField(card, card, val)).toBe(true);
                const matches = cards.filter((activeCard) =>{
                    return valueRuleField(card, activeCard, val)
                });
                expect(matches.length).toBe(1)
            })
        })
    });
});

