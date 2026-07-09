##Find the largest element in an array.
##arr = [1,2,3,4,5] find that 5 is the greatest element of the arr array
#getting input from the user

arr = list(map(int,input().split()))

max = arr[0]  ## gettting the 1st integer is greatest for checking the other elements of the array
for ele in arr: ##for loop to check the other elements of the array
    if ele > max: ## if condition to check the greatest integer that i or max
        max = ele ## if ith element is greater than max then assign the ith element to max

print("The largest element in the array is:", max) ## printing the largest element in the array
