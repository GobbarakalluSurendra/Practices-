/*var person={name:"sure",age:19,
       changename:function cn(a){this.name=a;}
};
console.log(person.name)
person.changename("janu");
console.log(person.name)*/




function person(name,age)
{
    this.name=name;
    this.age=age;
    this.changeName=function cn(){
        this.name=name;
    }
}
var p1=new person("ram",19)
console.log(p1.name)
p1.changeName("Janu")
console.log(p1.name)
 