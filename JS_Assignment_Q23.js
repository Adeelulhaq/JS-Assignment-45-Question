let car = 'swift';


console.log("== Is car 'swift'? I predict True.")
console.log(car == 'swift')

console.log("== Is car'swift'? I predict False.")
console.log(car == 'Swift')

console.log("===  Is car 'swift'? I predict True.")
console.log(car === 'swift')

console.log("=== Is car  'swift'? I predict False.")
console.log(car === 'Swift')

console.log("!=  Its a 'toyota' product ?  I predict True.")
console.log(car != 'toyota')

console.log("!==  Is car  'Swift'? I predict False.")
console.log(car !== 'swift')


console.log(">= Is car.length  5  ? I predict True.")
console.log(car.length >= 5)

console.log(">= Is car.length  7  ? I predict False.")
console.log(car.length >= 7 )


console.log(" == && >= ,   Is car  'swift' && car.length >= 5 ? I predict True.")
console.log(car == 'swift' && car.length >= 5)

console.log("== || == , Is car == 'swift' || car == 'Suzuki' ? I predict True.")
console.log(car == 'swift' || car == 'Suzuki')