import java.util.*;
abstract class figure
{
int dim1,dim2;
abstract double area();
}
 class Rectangle extends figure
{
Rectangle(int l,int b)
{
dim1=l;
dim2=b;
}
public double area()
{
return dim1*dim2;
}
}

class Triangle extends figure
{
Triangle(int l,int b)
{
dim1=l;
dim2=b;
}
public double area()
{
return 0.5*(dim1*dim2);
}
}

class Abstract_area
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
int l,b;
System.out.println("enter the length of the reactangle");
l=sc.nextInt();
System.out.println("enter the breadth of the reactangle");
b=sc.nextInt();

Rectangle r=new Rectangle(l,b);
System.out.println("The area of rectangle "+(double)l+" and 
"+(double)b+" is: "+r.area());
System.out.println("Enter the base of Traingle:"); 
l=sc.nextInt();
System.out.println("Enter the height of rectangle:"); 
b=sc.nextInt();
Traingle t=new Traingle(l,b);
System.out.println("The area of Traingle "+(double)l+" and "+(double)b+" 
is: "+t.area());
}
}