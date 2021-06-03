console.log(2 + '2'); // 2

console.log(2 - '2'); // 0

let nums = [1,2,2,4] // remove duplicate with for Loop / map

console.log(new Set(nums)); // {1 , 2 , 3}

console.log([...new Set(nums)]); // [1,2,3]

let func = function() {
    {
        let v = 'var'; // logs 'var'
        let l = 'let'; // undefined error how to fix? IIFY!
    }
    
    //    (function(){
    //        let l = 'let';
    //        var v = 'var'; // IFFY to make var undefined
    //    })(); 
      
    
    console.log(v);
    console.log(l);

}
// func();

console.log(5 < 6 < 7) // false
console.log(7 > 6 > 5); // true

let a1 = () => arguments; // fat arrow doesn't work well with arguments 

// console.log(a1('hi'));

let a = function() {
    return arguments; // function invocation works well
}

// console.log(a('hi')); // { '0' : 'hi'};

// better way

let a2 = (...n) => { return n};
console.log(a2('hi'));

let x = function() {
    return                // line break ? Jesus
        {
            message: 'hi'
        }
}

console.log(x());

let profile = {
    name : 'raghavendra'
}

// Object.freeze(profile);
profile.age = 3;

console.log(profile)  // age property gets added how to prevent?


let y = function(a,b,c) {
    return arguments.length;
}


// console.log(y(1,2,3))


let pro = {
    name: 'raghu'
}

Object.seal(pro);

pro.name = 'interview'; // you can change but doesn't let u add or remove properties -SEAL
pro.age = 23;
console.log(pro);


// you shouldn't Able to edit a property

let ObjectName = {
    myProp : 'propertyName',
    age:40
}

Object.defineProperty(ObjectName,'age',{
    value:3,
    writable:false
})

ObjectName.name = 'changedName';
ObjectName.age = 4;

console.log(ObjectName);


console.log(Math.max(1,2,3)); // -Infinity ...its lowest it compares


function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log (foo2()); // foo2 --> return --> undefined

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); // undefnied
console.log("b defined? " + (typeof b !== 'undefined')); // true

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four'); // 1 4 3 2

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

console.log('value of foo ',foo.x) // undefined

var foo = [];
foo.push(1);
foo.push(2);

console.log('ength',foo.length) // 2

var foo = "Hello";
(function() {
  var bar = " World";
  return `${foo} + ${bar}`;
})();
console.log(foo + bar)


// window.foo || (window.foo ="bar")
// "bar"
"i'm a lasagna hog".split("").reverse().join("");
// "goh angasal a m'i"

console.log('answer',0.1 + 0.2 == 0.3); // false 0.30000000000000004






































































