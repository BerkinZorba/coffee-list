import Card  from 'components/Card';
import { useCoffes } from 'hooks/useCoffes';

const App = () => {
  const {data: coffeeList} = useCoffes();
  

	return (
		<div className="bg-slate-100 h-full flex flex-wrap items-center justify-center">
			{coffeeList?.map(kahve => (
        <Card key={kahve.id} kahve={kahve} /> ))}
		</div>
	);
};

export default App;
