import React from "react";

import { SplitterProps } from "./@types/react-word-splitter";

function mergeWord(
	obj: string,
	eachClass: string,
	eachIdWithIndex: string,
	index: string
) {
	const span = document.createElement("span");
	const id = eachIdWithIndex + "__" + index;
	span.setAttribute("class", eachClass);
	span.setAttribute("id", id);
	span.textContent = obj;
	return span;
}

function getIndex(index: number, option: "number" | string[]) {
	if (option === "number") {
		return String(index + 1);
	} else {
		return option[index % option.length];
	}
}

function splitByOption(obj: string, rule: "words" | "chars") {
	if (rule === "words") {
		const splittedValue = obj.split("");
		return splittedValue;
	} else {
		const splittedValue = obj.split(" ");
		return splittedValue;
	}
}

function getEachNode(props: SplitterProps) {
	const splittedValue = splitByOption(props.words, props.rule);
	const nodes = splittedValue.map((obj: string, index: number) =>
		mergeWord(
			obj,
			props.eachClass,
			props.eachIdWithIndex,
			getIndex(index, props.indexOption)
		)
	);
	return nodes;
}

export default function Splitter(props: SplitterProps) {
    const nodes = getEachNode(props)
	return (
		<React.Fragment>
			{nodes}
		</React.Fragment>
	);
}

// export default class Splitter extends React.Component<SplitterProps, {}> {
// 	constructor(props: SplitterProps) {
// 		super(props);
// 	}
// 	render() {
// 		const nodes = getEachNode(this.props);
// 		return <React.Fragment>{nodes}</React.Fragment>;
// 	}
// }
