### CSE 110 Lab 4, Part 2
#### Seeraj Somla, PID: A15104630
1. Line 12 just prints the counter we implemented in the for loop, which is exactly what happened in the console. It just printed the number ```3```, which is the same amount of elements in the function call below.
2. Line  13 just prints the number ```150```, which is the discounted price for the final element in the array (```discountedPrice = 300 * 0.5```). 
3. Similar to the question above, Line 14 just prints the last finalPrice that was calculated in the for loop (last iteration). In this case it was ```finalPrice = Math.round(150 * 100)/100```, which results in ```150```.
4. The function returned nothing, no error nor any output (which is correct).
5. Line 12 breaks the function and throws an error that states ```ReferenceError: i is not defined``` . This is because ```i``` was defined in the for loop (a different block), which doesn't work with the keyword ```let```.
6. Similar to the previous question, the function throws ```ReferenceError: discountedPrice is not defined```, because the variable ```discountedPrice``` is defined in the for loop (a different block). 
7. Line 14 returns ```150```, which makes sense because the variable ```finalPrice``` has no keyword associated with it.
8. The function should return the array of values in ```discounted```, but since we declared the variable with the ```let``` keyword and as an empty array, it doesn't change when the function runs through the for loop.
9. At line 11, the function throws ```TypeError: Assignment to constant variable``` which means the function tried changing a variable declared with the ```const``` keyword. 
10. The function just prints ```3```, which is the length of the input array.
11. The function prints nothing.
12. Notation for objects:
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student.courseLoad[0]
13. Arithmetic
    1. Output: ```'32'```, explanation: because JS will concatenate strings with the + operator (integers map to their exact string representation).
    2. Output: ```1```, explanation: because - operator will interpret numbers in quotes as actual numbers (doesn't count them as strings).
    3. Output: ```3```, explanation: null maps to a 0, so 3+0 = 3.
    4. Output: ```'3null'```, explanation: 3 is in quotation marks so JS will interpret it as a string and concatenate null entirely.
    5. Output: ```4```, explanation: true maps to a 1, so 3+1 = 4.
    6. Output: ```0```, explanation: false and null map to 0, so 0+0 = 0.
    7. Output: ```'3undefined'```, explanation: JS converts '3' to a string and concatenates 'undefined' to it. 
    8. Output: ```NaN```, explanation: numeric conversion 3 - NaN = NaN.
14. Comparison:
    1. Output: ```true```, explanation: boolean result, string '2' becomes #2 which is greater than 1 which returns true.
    2. Output: ```false```, explanation: returns false because it is comparing the string value of 2 and 1, which returns false (2 > 1 in terms of strings)
    3. Output: ```true```, explanation: since == converts operands into the same type, it compares the integer type of 2 with 2, which returns true.
    4. Output: ```false```, explanation: since === strictly compares the raw operands (doesn't convert types, keeps them the same), that means the integer 2 is being compared to the string 2, which returns false.
    5. Output: ```false```, explanation: similar to 3, == converts the operands into similar types, and in this case, true =/= 2.
    6. Output: ```true```, explanation: because it is comparing a boolean type with another boolean type, it will return true.
15. The == operator converts operands into the same type before comparing them (assuming they are not the same type beforehand). On the otherhand, the === operator is a strict equality comparison, which will not convert operands, and will return false for operands that are not of a similar type.
16. Check part2-question16.js
17. The result is an array with the values: [2, 4, 6], because essentially the program is just multiplying each value in the array by 2. When the program called modifyArray, we used doSomething (a function) as a callback, and doSomething just multiplies each value by 2.
18. Check part2-question18.js
19. Output: 1 4 3 2 (all on new lines)
20. 