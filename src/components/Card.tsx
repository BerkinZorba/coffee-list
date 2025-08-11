import { useState, useEffect, useRef } from 'react';
import HiddenTitle from './hidden_cards/HiddenTitle';
import HiddenDesc from './hidden_cards/HiddenDesc';
import HiddenList from './hidden_cards/HiddenIng';


export type Coffee = {
	id: number;
	title: string;
	description: string;
	ingredients: string | string[];
	image: string;
};

export type Props = {
	kahve: Coffee;
};

const Card = ({ kahve }: Props) => {
	const [isTitleClamped, setIsTitleClamped] = useState(false);
	const [isDescClamped, setIsDescClamped] = useState(false);
	const [isIngClamped, setIsIngClamped] = useState(false);

	const descRef = useRef<HTMLSpanElement>(null);
	const titleRef = useRef<HTMLSpanElement>(null);
	const ingRef = useRef<HTMLDivElement>(null);

	const ingredients =
		typeof kahve.ingredients === 'string'
			? kahve.ingredients.split(',').map(i => i.trim())
			: kahve.ingredients;

	const pretty = ingredients.map(i =>
		i
			.split(' ')
			.map(w => w.charAt(0).toUpperCase() + w.slice(1))
			.join(' ')
	);

		useEffect(() => {
			if (titleRef.current) {
				setIsTitleClamped(
					titleRef.current.scrollHeight > titleRef.current.clientHeight
				);
			}
		}, [kahve.title]);

	useEffect(() => {
		if (descRef.current) {
			setIsDescClamped(
				descRef.current.scrollHeight > descRef.current.clientHeight
			);
		}
	}, [kahve.description]);

	useEffect(() => {
		if (ingRef.current) {
			setIsIngClamped(
				ingRef.current.scrollHeight > ingRef.current.clientHeight
			);
		}
	}, [pretty.join('|')]);

	return (
		<div className="flex flex-col m-4 shadow rounded-xl bg-white max-w-72">
			{/* Card Image */}
			<div className="w-full aspect-[4/3] bg-slate-100 rounded-t-xl overflow-hidden">
				<img
					src={kahve.image}
					alt={kahve.title}
					className="w-full h-full object-cover object-center"
					loading="lazy"
				/>
			</div>
			{/* Card Body */}
			<div className="flex flex-col flex-wrap p-4 pb-8 ">
				{/* Card title */}
				<div className="relative group">
					<span className="text-xl line-clamp-1" ref={titleRef}>
						{kahve.title}
					</span>

					{/* Extended title */}
					{isTitleClamped && <HiddenTitle title={kahve.title} />}
				</div>

				{/* Card description */}
				<div className="relative group">
					<span className="text-base text-slate-500 line-clamp-1" ref={descRef}>
						{kahve.description}
					</span>
					{/* Tooltip */}
					{isDescClamped && <HiddenDesc description={kahve.description} />}
				</div>

				{/* Badge Container */}
				<div className="relative group mt-2">
					{/* Clamped row */}
					<div
						className="flex flex-wrap gap-2 max-h-8 overflow-hidden"
						ref={ingRef}
					>
						{ingredients.map((x, i) => (
							<span
								key={`${x}-${i}`}
								className="text-orange-500 bg-orange-100 px-2 py-0.5 rounded border border-orange-500 text-sm"
							>
								{pretty[i]}
							</span>
						))}
					</div>

					{/* Full list on hover */}
					{isIngClamped && (
						<HiddenList ingredients={ingredients} pretty={pretty} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
