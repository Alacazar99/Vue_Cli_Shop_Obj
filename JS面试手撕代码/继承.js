function Animal(){
	this.species = "动物";
	this.classes = ['脊椎动物','爬行动物'];
}

function Cat(name,color){
	this.name = name;
	this.color = color;
}
//将Cat的prototype对象指向一个Animal的实例
Cat.prototype = new Animal();

Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","白色");
cat1.classes.push('哺乳动物');
cat1.species = '哺乳动物';
console.log(cat1.species);//哺乳动物
console.log(cat2.species);//动物
console.log(cat1.classes);//["脊椎动物", "爬行动物", "哺乳动物"]
console.log(cat2.classes);//["脊椎动物", "爬行动物", "哺乳动物"]


function Person(name,age){
    this.name = name
    this.age = age
}

function Teacher(teach){
    this.teach = teach
}
Teacher.prototype = new Person()

Teacher.prototype.constructor = Teacher

var teacher1 = new Teacher('lalala')
console.log(teacher1.name)