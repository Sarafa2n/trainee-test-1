import * as React from 'react';
import { wrap } from 'smokescreen/Welter';
import { updateStyle } from '@/utils/slotSheet';


interface IImageProps {
	transform: any,
	src: string,
	height: number,
	width: number,
	index: number,
	locator: any,
}

class Image extends React.Component<IImageProps> {
	constructor(props) {
		super(props);

		const {
			src,
			height,
			width,
			transform,
			index,
			locator
		} = this.props;

		const styles =  {
			[`.${transform(`picture-item-${index}`)}`]: {
				'background': `url(${src})`,
				'height': `${height}px`,
				'width': `${width}px`,
			},
		};

		updateStyle(null, locator, styles);
	}

	componentDidMount() {
		const elems = document.querySelectorAll(`.${this.props.transform('picture')}`);

		elems.forEach((item) => {
			wrap(item, `.${this.props.transform('picture-item')}`);
		});
	}

	render() {
		const {
			index,
			transform,
		} = this.props;

		return (
			<div className={`${transform('picture-item')} ${transform(`picture-item-${index}`)}`} />
		);
	}
} export default Image;
