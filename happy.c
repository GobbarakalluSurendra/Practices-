#include<stdio.h>
#include<stdbool.h>
#include<math.h>
int main(){
    int num,sum;
    printf("enter the number ");
    scanf("%d",&num);
    while(num!=4){
        sum=0;
        while(num){
        sum=sum+ pow(num%10,2);
        num=num/10;

    }
    num=sum;
    if(num==1)
    break;
    }
    if(num==4)printf("happy");
    else printf("unhappy");
    return 0;


}