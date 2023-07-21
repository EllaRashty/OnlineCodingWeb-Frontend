# Ella Rashty
## Moveo Home assignment - Online coding web application


*Overview*
Tom is Josh’s mentor for JS, but while Covid is still out there he prefers to do remote sessions.   Tom wants to share with Josh a piece of code, observe him while he is writing and changing the code in real time.

## Testing
*This is the Backend:*
https://onlinecodingweb-backend-production.up.railway.app/
(you don't need to open it, it's running behind the scenes)

*This is the Fronted:*
https://onlinecodingweb-frontend-production.up.railway.app/
**Recommended to open it in 2 different chrome tabs.
### Lobby Page:
Click on any code block you wish.
### Code Block Page:
1. If you are the first user that enters the room you'll be assign as a *Mentor* (read-only).
2. If you are the second user that enters the room you'll be assign as a *Student* (Edit). 
3. Student - Start typing and you'll see the code is being typed in both tabs.
4. Mentor - Typing is blocked because of read-only mode.
5. If a third user tries to login to a certain room and there is already a student and a mentor, the user will see this room is occupied massage.
6. To test the correct solution function - the student's code needs to match the right solution, so you need to copy-paste these solutions.
	 *Solution for all 6 code-blocks:*
	
	*Factorial*
	

	ruby
	function factorial(number) {
		if (number === 0) { return  1; 
		} else {
		 return number * factorial(number - 1);
		} 
	}
	
	*Reverse String*
		

	ruby
	function reverseString(string) {
	  const reversedString = "";
	  for (let i = string.length - 1; i >= 0; i--) {
	    reversedString += string[i];
	  }
	  return reversedString;
	}
	
	*Sum Array*

	ruby
	function sumArray(array) {
	  const sum = 0;
	  for (const number of array) {
	    sum += number;
	  }
	  return sum;
	}
	
	*Longest String*
		

	ruby
	function longestString(array) {
	  let longestString = "";
	  for (const string of array) {
	    if (string.length > longestString.length) {
	      longestString = string;
	    }
	  }
	  return longestString;
	}
	
	*Average Array*
		

	ruby
	function averageArray(array) {
	  const sum = sumArray(array);
	  const length = array.length;
	  return sum / length;
	}
	
	*Count Vowels*
		

	ruby
	function countVowels(string) {
	  const vowels = "aeiou";
	  let count = 0;
	  for (const character of string) {
	    if (vowels.includes(character)) {
	      count++;
	    }
	  }
	  return count;
	}
	

That's it! happy testing :)
