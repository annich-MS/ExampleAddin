import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";

class Index extends Component<undefined, undefined> {

	public render(): JSX.Element {
		return (<div>
				<h1>Success</h1>
				<p>You can now create the webapp of your dreams</p>
			</div>);
	}
}

render(<Index />, document.getElementById("app"));