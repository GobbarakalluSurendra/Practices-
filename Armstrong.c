#include<stdio.h>
int main(){
    int n;
    int res=0;
    printf("enter the number");
    scanf("%d",&n);
    int s=n;
    while(s!=0){
       int rem=s%10;
     res +=rem * rem * rem*rem;
        s=s/10;
    }
    if(res==n)
    printf("given number is Armstrong %d",n);
    else
    printf("not Armstrong %d",n);

}
