class A
{
void fact()
{
int n=5,fact=1;
for(int i=1;i<=5;i++)
{
fact=fact*i;
}
System.out.println(fact);
}
}

class B extends A
{
void Even_odd()
{
int n=10;
if(n%2==0)
System.out.println("Even");
else
System.out.println("Odd");
}
}

class Single_inheritance
{
public static void main(String args[])
{
B ob=new B();
ob.fact();
ob.Even_odd();
}
}
