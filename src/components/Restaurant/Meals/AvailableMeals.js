import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'pizza',
    description: 'Special cheese',
    price: 299,
  },
  {
    id: 'm2',
    name: 'Misal',
    description: 'A Spicy meal specialty!',
    price: 100,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 499,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem 
  key={meal.id} 
  
  name ={meal.name} 
  description={meal.description} 
  price={meal.price}
  />
  ))

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;