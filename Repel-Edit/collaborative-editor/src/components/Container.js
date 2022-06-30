import React, { Component } from "react";
import VEditor from "./VEditor";
import "./style.css";
export default class Container extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="title"><span style={{color: "red"}}>&#123;</span> REPEL-Edit <span style={{color: "red"}}>&#125;</span></h1>
				<div className="econtainer">
					<VEditor />
				</div>
				<p class="quote">Code with colabaration...</p>
			</div>
		);
	}
}
