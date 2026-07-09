##Remove duplicates from an array.
### getting the input from user and converting it into list of integers
arr = list(map(int,input().split()))

arr1 =[] ##creating the empty arr to store the unique element in arr

for i in arr: ### for loop to check the other elements of the array
    if i not in arr1: ## if i not in arr1 then it store in the arr1
        arr1.append(i) ## using append method to store the unique element in arr1


print("The array after removing duplicates is:", arr1) ## printing the array after removing duplicates


## sample input and output
## 1 1 2 5 8 8 9 9
## The array after removing duplicates is: [1, 2, 5, 8, 9]