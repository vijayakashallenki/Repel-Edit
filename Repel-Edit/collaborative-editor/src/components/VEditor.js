import React, { Component } from "react";
import Editor from "react-simple-code-editor";
import io from "socket.io-client";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const socket = io("http://localhost:8080");
export default class VEditor extends Component {
	state = {
		code: "//write your code here...\n",
	};
	componentDidMount() {
		this.writeOnEditor();
		socket.on("editor-data", (data) => {
			console.log("received ←");
			if (this.timeout !== undefined) clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
				this.setState({ code: data });
			}, 1000);
		});
	}
	writeOnEditor = () => {
		if (this.timeout !== undefined) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			console.log("sent →");
			socket.emit("editor-data", this.state.code);
		}, 1000);
	};

	render() {
		return (
			<div>
				<Editor
					value={this.state.code}
					onValueChange={(code) => {
						this.setState({ code });
						this.writeOnEditor();
					}}
					highlight={(code) => highlight(code, languages.js)}
					padding={10}
					style={{
						fontSize: 30,
						height: "600px",
					}}
				/>
			</div>
		);
	}
}
