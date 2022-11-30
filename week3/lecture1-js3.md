
## Functions:
1. Regular function
```javascript
function greet1(){
    console.log("hello word~")
}
```
2. Arrow function
```javascript
const greet2 = () => console.log("hello world!");

## Scope:
1. Global Scope: can be accessed anywhere
```javascript
const a = 10;
console.log(a);
// a can be accessed anywhere
```
2. Local Scope: Can only access the item in the same scope
* Function Scope : only accessible within a function
* Block Scope : only accessible within curly braces {}

```javascript
function random() {
    const num = 10;
    if (true){
        const another = 11;
    }
    console.log(another);
    // Block scope: This won't work as it can't access the above scope;
}
console.log(num);
// Function scope:
```

## var, let, and const:
1. var
* Can be either global or local
* Update global variable within local scope can cause trouble
```javascript
var value = 10;
function change(){
    value = 20;
    console.log(value);
}
change();
// -> 20
console.log(value);
// -> 20 (this is problematic!)
```

## This
1. Method: this refers to the object
```javascript
```
```javascript
const human = {
    age: 10,
    who(){
        console.log(this);
    }
}
human.who();
// this will print out the following:
{ age: 10, who: [Function: who] }
```

2. Function: Refers to window (global object)
```javascript
function general(){
    console.log(this);
}
general();
// this would print out the global:
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  ...
```

