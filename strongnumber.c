#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int main() {
    int n, fact = 1, temp, sum = 0, digit;
    printf("Enter the number: ");
    scanf("%d", &n);
    temp = n;

    while(temp) {
        digit = temp % 10;  // Corrected from n to temp
        fact = 1;
        while(digit) {
            fact *= digit;
            digit--;
        }
        sum += fact;
        temp /= 10;
    }
    if(sum == n)
        printf("Yes, the number is strong.\n");
    else
        printf("No, the number is not strong.\n");

    return 0;
}

