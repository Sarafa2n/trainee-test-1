import * as React from "react";
import { wrap } from 'smokescreen/Welter';
import { convert } from "@/utils/smoke";

/*
	Другие способы решение задачи:
	1 конвертировать текст в svg
	2 отдаем текст через CSS
 */

interface ISmokeTextProps {
	transform: any,
	children: string,
	parent: string,
}

interface ISmokeTextState {
	parent: string
}

class SmokeText extends React.Component<ISmokeTextProps, ISmokeTextState> {
	constructor(props) {
		super(props);

		this.state = {
			parent: this.props.parent.split(' ').map((item) => `.${item} `).join('')
		};
	}

	componentDidMount(): void {
		const elems = document.querySelectorAll(this.state.parent);

		elems.forEach((item) => {
			if (item) {
				wrap(item, `.${this.props.transform('smoke-item')}`);
			}
		});
	}

	render() {
		const {
			transform,
			children,
		} = this.props;

		const text = children.split(' ').map((item, idx) => React.createElement(
			'div',
			{ key: idx, className: transform('smoke') },
			convert(item)
			));

		return (
			<div className={transform('smoke-item')}>{text}</div>
		);
	}
} export default SmokeText;
