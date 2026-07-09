### Check if a string is a palindrome.
## checking the string that the return the same word if the string is reversed or not
##def in function to check the palindrome and passing the parameter as string

def palindrome(string): ##function to check the palindrome and passing the string to the function palindrome
    str1 = string[::-1] ##using slicing method to reverse the string


## checking the condition if the reversed string is equal to the original string then it is a palindrome otherwise not
    if str1 == string:
        return True ## if the str1 is equal to the string then it is a palindrome    
    else:
        return False ## esle it is not a palindrome
    
s = input("Enter a string: ")
# if palindrome(s):
#     print(f"'{s}' is a palindrome.")
# else:
#     print(f"'{s}' is not a palindrome.")

print(palindrome(s))