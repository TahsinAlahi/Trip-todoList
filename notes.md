1. Array.from({ length: 20 }, (\_, i) => i + 1) there are some other ways ---->
   Array.from({length:20}).map((\_,i) => i+1)
   [...Array(20)].map((\_,i) => i+1)
   --> Array(20) makes an array of empty array while [...Array(20)] makes an array of 20 undefined values.
   --> Undefined can be defined but empty valued can't.

2. Props are passed as an object. if its an object then it would be like object inside an object so in the component it have to be like ---->
   foo({prop}){
   {...keys} = prop
   }
   that way it will deconstruct twice.

3. Form in normally hits reload when it's submitted so ---->
   foo(event){event.preventDefault()}
   It stops that default reloading behavior.

4. Usually html form or input controls it's own state, like while typing it update value by themselves. As react is a control freak it made a concept like Controlled element. ---->
   Create a state at setState in to on change then use value={state}

5. In react state is unchangeable. Like ---->
   const [items,setItems] = useState([]) //here the items is initially []
   setItems(items => items.push(item)) // can't do that because push changes the items
   setItems(items => [...items, item]) //...items means all the other values of items and then in the end it adds item to the array.
   As you can see the [...items, item] is a whole new array that has a the values of items.

6. Should call the prop names as it's passed to the children ---->
   <Items onPassedProp={passedProp}/> //in parent component.
   passedProp(value) // in child component this is wrong calling and it will throw error.
   onPassedProp(value) // this is how the prop should be called. as its defined in parent component.

7. Could use this code to remove an item from an array ---->
   const newItems = items.filter((itemOfFunc) => itemOfFunc !== item)
   It filters out the unwanted item and make a new array.
   But also could use array.splice(index,count,...replaces) it mutate the actual array.

8. Need to review the sorting list part again!!!

9. Don't forget to use the homepage like 'https://tahsinalahi.github.io/trip-todo' tahsinalahi not TahsinAlahi.
