#Finding the Smallest Element In an Array



nums = list(map(int,input().split()))  # Read space-separated numbers from the user and store them in a list

smallest_ele = nums[0] # Assume the first element is the smallest element

for num in nums:  # Traverse through each number in the list   
    if num < smallest_ele:   # Check if the current number is smaller than the smallest found so far
        smallest_ele = num   # Update the smallest element


# Display the smallest element in the list   
print(smallest_ele)


