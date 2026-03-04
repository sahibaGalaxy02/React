import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

/*let foodItems = []"Dal", "Green Vegetables", "Roti ", "Salad", "Milk","Ghee","Curd","Fruits","Dry Fruits","Nuts","Seeds","Whole Grains","Legumes","Fish","Chicken","Eggs"];*/
let foodItems = ["Dal", "Green Vegetables", "Roti ", "Salad", "Milk","Ghee","Curd","Fruits","Dry Fruits","Nuts","Seeds","Whole Grains","Legumes","Fish","Chicken","Eggs"];



  if (foodItems.length === 0) {
  return <h1>No food items available</h1>;
}

  return (
  <>
      <h1>Healthy food</h1>
      <ul class="list-group">
{foodItems.map((item) => (
  <li class="list-group-item">
    {item}
  </li>
))}
</ul>
  </>
  )
   
}

export default App