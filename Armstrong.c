#include<stdio.h>
int main(){
    int n;
    int res=0;
    printf("enter the number");
    scanf("%d",&n);
    int m=n;
    while(m!=0){
       int rem=m%10;
     res +=rem * rem * rem*rem;
        m=m/10;
    }
    if(res==n)
    printf("given number is Armstrong %d",n);
    else
    printf("not Armstrong %d",n);

}
