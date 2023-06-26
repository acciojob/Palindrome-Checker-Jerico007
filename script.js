// complete the given function

function palindrome(str){
 let text = str.toUpperCase();
 let j = text.length - 1;
 let i = 0;

	while(i < j)
		{
			if(text[i] != text[j])
			{
				return false;
			}
			i++;
			j--;
		}

	return true;
	
}
module.exports = palindrome
