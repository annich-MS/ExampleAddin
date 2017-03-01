import { observable } from "mobx";
import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import * as Agent from "superagent";

export class Quote {

    @observable public quote: string = "";

    public async getQuote(): Promise<string> {
        if (this.quote === "") {
            console.log("getting Quote");
            this.quote = await new Promise(resolve => {
                Agent.get("/quote", (err, res) => { resolve(res.text); });
            });
            console.log("got Quote " + this.quote);
        }
        return this.quote;
    }



}

export const store: Quote = new Quote();

