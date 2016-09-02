/*startup reading
operators: http://www.w3schools.com/js/js_operators.asp
Assignments: http://www.w3schools.com/js/js_assignment.asp
data types: (only read up to javascript numbers) http://www.w3schools.com/js/js_datatypes.asp

/*given the following variables:
*/

var empty_var;
var string_literal_var = 'the string';
var string2_literal_var = 'another string';
var number_int_var = 5;
var number_float_var = 3.5;
var number_as_string_literal = '55';
var result1 = null;

/* create the following arithmetic operations, and assign them to a new result variable.   For example:

#0 add a number to another number, and assign it to a variable
var result0 = 5 + 6;

You don't have to use the variables above until the question calls for it.
*/

//#1 Multiply two integer numbers together, and assign to a variable
var result1 = 2* 3;

//#2 Multiply a float number and an integer number together, and assign to a variable
var result2 = 2.75 * 4;

//#3 Multiply an integer number by the number_int_var above, and assign to a variable
var result3 = 5 * number_int_var;

//#4 Create a string literal, and assign it to a variable
var result4 = "How are you?";

//#5 Assign string_literal_var to another variable
var result5 = string_literal_var;

//#6 Concatenate (add) a string and string_literal_var, and assign it to a variable
var result6 = "How are you " + string_literal_var;

//#7 Concatenate string_literal_var and string2_literal_var, and assign to a variable
var result7 = string_literal_var + " " + string2_literal_var;

//#8 Concatenate string_literal_var, string2_literal_var, and a string literal, and assign it to a variable
var result8 = string_literal_var + " " + string2_literal_var + " okay?";

//#9 add a variable that contains a number integer, with a variable that has a number float, and assign it to a variable
var numInt = 8;
var numFloat = 2.75;
var result9 = numInt + numFloat;

//#10 concatenate string_literal_var and a number integer, and assign to a variable
var result10 = string_literal_var + " " + 20;
    
//#11 concatenate string_literal_var and number_int_var, and assign to a variable
var result11 = string_literal_var + " " + number_int_var;

//#12 add number_int_var to number_int_var, and assign to a variable
var result12 = number_int_var + number_int_var;

//#13 add number_int_var to number_int_var, and concatenate string_literal_var to that, and assign the whole thing to a variable
var result13 = number_int_var + number_int_var + " " + string_literal_var;

//#14 concatenate string_literal_var to number_int_var, and then add number_float_var
var result14 = string_literal_var + " " + number_int_var + number_float_var;

//#15 add number_float_var to number_int_var, but put parenthesis around them.  Assign that value to a variable
var result15 = (number_float_var + number_int_var);

//#16 add number_int_var to number_float_var together in a set of parenthesis like in #15, then concatenate string_literal_var to that, and assign the whole thing to a variable
var results16 = (number_float_var + number_int_var) + " " + string_literal_var;