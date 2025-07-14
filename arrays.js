var names=new Array("sure","janu","uma");
console.log(names)
names[1]="jaanu"
console.log(names[1])
names[10]="surendra"


var a=new Array(20);
a[0]=5;
a[1]=2
a[2]=3
a[3]=4
a[4]=4;
console.log("using loop")
for(i=0;i<10;i++)
{
    console.log(a[i])
}//length
console.log(names.length)
console.log()
//concatenate
var c1=["janu","sure"];
var c2=["surendra","Ruchitha"]
var add=c1.concat(c2)
console.log(add)
//push()and pop()
console.log()
var a=["surendra","janu","jaanu"]
console.log(a)
a.pop()
console.log(a)
a.push("loves")
console.log(a)
console.log()
//delete

var name=[1,2,3,4,5]
console.log(name)
delete name[3]
console.log(name)




