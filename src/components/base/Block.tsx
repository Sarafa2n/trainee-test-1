import * as React from 'react';
import { convert, reverse } from "@/utils/smoke";

export default ({children, ...props}) => {
	if (typeof children === 'string') {
		const content = children.split(' ').map((item) => reverse(convert(item))).join('');

		return (
			<div
				{...props}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		);
	}

	return (
		<div
			{...props}
		>{children}</div>
	);
};
