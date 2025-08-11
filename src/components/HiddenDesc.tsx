import React from 'react';

export type Props = {
	description: string;
};

const HiddenDesc = ({ description }: Props) => {
	return (
		<div
			className="absolute z-20 hidden group-hover:block left-0 top-full mt-1 
                    max-w-xs whitespace-normal rounded-lg bg-slate-100 px-3 py-2 
                    text-xs text-slate-500 shadow-lg"
		>
			{description}
		</div>
	);
};

export default HiddenDesc;
