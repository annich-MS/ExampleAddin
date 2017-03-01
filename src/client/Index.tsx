import { observer } from "mobx-react";
import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import { Quote, store } from "./Quote";

@observer
class Index extends Component<{ quote: Quote }, undefined> {

	public constructor() {
		super();
		store.getQuote();
		Office.initialize = () => {
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<h1>Quote of the Day</h1>
				<p>{this.props.quote.quote}</p>
				<button onClick={replyWithQuote}>Reply With Quote</button>
			</div>);
	}
}

function replyWithQuote(): void {
	store.getQuote().then((quote: string) => {
		const item: Office.Types.MessageRead = Office.context.mailbox.item as Office.Types.MessageRead;
		item.displayReplyAllForm(`<br/><br/>${quote}<br /><small>Generated with the Quote of the Day app</small>`);
	});
}

render(<Index quote={store} />, document.getElementById("app"));
