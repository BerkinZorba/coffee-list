import { useState, useEffect } from 'react';
import Card, { Coffee } from 'components/Card';

const App = () => {
  //Usss
	const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

  //Uffs
  useEffect(() => {
    const API_URL = "https://api.sampleapis.com/coffee/iced";
    fetch(API_URL)
      .then((res) => res.json())
      .then((coffeeList) => setCoffeeList(coffeeList));
  }, [])
  

	return (
		<div className="bg-slate-100 h-full flex flex-wrap items-center justify-center">
			{coffeeList.map(kahve => (
        <Card key={kahve.id} kahve={kahve} /> ))}
		</div>
	);
};

export default App;
