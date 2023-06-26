// complete the given function

function palindrome(str){
 let j = str.length - 1;
 let i = 0;

	while(i < j)
		{
			if(str[i] != str[j])
			{
				return false;
			}
			i++;
			j--;
		}

	return true;
	
}
module.exports = palindrome
