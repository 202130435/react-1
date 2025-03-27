import MyB from "./MyButton"
import { Button1, Button3 }  from "./ButtonLib"
import AP from "./AboutPage"
import Profile from "./Profile"
import './App.css'
import listItems from "./ShoppingList"
import ShoppingList from "./ShoppingList"

function MyButton() {
  return (
    <button>I'm a button</button>
  )
}

export default function App() {
  return (
    <div className="wrapper">
      <h1>Hello React</h1>
      <MyB /><br />
      <Button1 />&nbsp;
      <Button3 />
      <AP />
      <Profile />
      <ShoppingList />
    </div>
  );
}
