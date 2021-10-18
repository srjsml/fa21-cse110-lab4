### CSE 110 Lab 4, Part 1
#### Seeraj Somla, PID: A15104630
1. Line 9 prints ```values added: 20``` because it is essentially printing the result, which was changed right before the console.log command. 
2. Line 13 prints, ```final result: 20``` because the function finished running through the conditional and now is running the console.log command. ```result``` now has function scope because we declared it using the ```var``` keyword.
3. Line 9 prints ```values added: 20``` because the variable ```result``` is defined within the same block (within the if statement).
4. Line 13 doesn't print anything and throws an error instead. Because we defined the variable ```result``` with the keyword ```let```, the function cannot access it because 'result' isn't in the same block.
5. Line 9 returned an error. This is because we changed the variable ```result``` to the ```const``` keyword, which doesn't allow it to change values. So when the function tries running ```result = num1 + num2```, it throws an error. 
6. Similar to Line 9, the function returns an error. Same reasoning as above.