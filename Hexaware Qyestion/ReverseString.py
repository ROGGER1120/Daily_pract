##Get a input as a string and return the string in reverse

##writting the function to reverse the string
def Reverse_String(string):#function to reverse the string and passing the parameter as string
    str1 = string[::-1]#using slicing method to reverse the string
    #returning the str1 as reversed string and user get the output as reversed string
    return str1


string = input("Enter a string: ")
#calling the function and printing the reversed string
print("Reversed_string :" , Reverse_String(string))
#printing the reversed string using written function Reverse_String()


## Input : Hello
## Output : olleH