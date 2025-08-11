import React from 'react'

export type Props = {
	title: string;
};

const HiddenTitle= ({title} : Props) => {

  return (
		<div
			className="absolute z-20 hidden group-hover:block left-0 top-full mt-1 
                        max-w-sm whitespace-normal rounded-lg bg-slate-100 text-black text-sm  px-3 py-2 shadow-lg"
		>
			{title}
		</div>
	);
}

export default HiddenTitle