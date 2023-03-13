const product = (a, b) => {
    return a * b;
}
console.log(product(2, 3));

class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minage) {
        return (minMarks) => {
            if (this.age >= 18 && this.marks >= 45) {
                console.log(this.name + " is eligible for placements")
            }
            else {
                console.log(this.name + " is not eligible for placements")
            }
        }
    }
}

const datta = new Student('datta', 23, 70);
const naveen = new Student('naveen', 10, 30);

datta.setPlacementAge(18)(45);
naveen.setPlacementAge(18)(45);

const hobbies = ['cricket','football'];
// for(hobby of hobbies){
//     console.log(hobby)
// }
console.log(hobbies.map((hobby)=>{
    return 'hobby:' + hobby
}))

const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(array.map((fruit)=>{
    if(fruit === ' '){
        return 'empty string'
    }
    else{
        return fruit;
    }
}))
