import React from 'react'

export type Props = {
  ingredients: string | string[];
  pretty: string | string[];
}

const HiddenList = ({ingredients, pretty} : Props) => {
  return (
		<div className="absolute left-2 bottom-8 mb-2 z-40 hidden group-hover:block">
			<div className="max-w-md rounded-lg bg-white p-3 shadow-xl border">
				<div className="flex flex-wrap gap-2">
					{ingredients.map((x, i) => (
						<span
							key={`${x}-${i}`}
							className="text-orange-500 bg-orange-100 px-2 py-0.5 rounded border border-orange-500 text-xs"
						>
							{pretty[i]}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default HiddenList