##Find the second-largest element.
## finding the second largest element in array
## getting the input form user

arr = list(map(int,input().split())) ## getting the input from user and converting it into list of integers

max = arr[0] ## getting the 1st integer is greatest for checking the other elements of the array
sec_max = arr[0] ## getting the 1st integer is second greatest for checking the other elements of the array
for ele in arr: ## for loop to check the other elements of the array
    if ele > max: ## if condition to check the greatest integer that i or max
        sec_max = max ## if ith element is greater than max then assign the max to sec_max
        max = ele ## assign the ith element to max
    elif ele > sec_max and ele != max: ## if condition to check the second greatest integer that i or sec_max
        sec_max = ele ## if ith element is greater than sec_max then assign the ith element to sec_max

print("The second largest element in the array is:", sec_max) ## printing the second largest element in the array
