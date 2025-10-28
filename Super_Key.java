class A
{
int a=10;
A()
{
int a=10,b=20;
System.out.println("Addition of two numbers is :"+(a+b));
}
void show()
{
System.out.println("This is parent class:");
}
}
class B extends A
{
int a=20;
B()
{
super();
int a=5,b=5;

System.out.println("Addition of two numbers is :" +(a+b));
}
void show()
{
super.show();
System.out.println("The value of parent is:"+super.a);
System.out.println("this is child class:");
}
}

class Super_Key
{
public static void main(String args[])
{
B ob=new B();
ob.show();
System.out.println("the value of child is"+ob.a);
}
}