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
