##Getting the input as a integer number and give the output that it is a prime number or not

##writtinfg the Function for checking the prime number
def Prime_Num(n):
    if n > 1:
        for i in range(2, int(n/2)+1):
            if (n % i) == 0:
                return False
    return True

n = int(input("Enter a number: "))
if Prime_Num(n):
    print(f"{n} is a prime number.")
else:
    print(f"{n} is not a prime number.")