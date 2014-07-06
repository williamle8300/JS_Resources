/*

DON’T BE CLEVER, DON’T MAKE ME THINK.

CODE should explain WHAT is happening [...] use descriptive identifiers and break up long functions (or methods) into smaller sub-functions.

COMMENTS should explain WHY things are happening [generally to convey the concept used: ex, "//lambda calculus to render png file"]

DOCUMENTATION should fill in the blanks left by the code and the comments [to get people started with the codebase]

*/

/*
STRIVE FOR CLARITY ABOVE ALL

PUT VARS AT THE TOP OF SCOPE 
	if necces., declare w/o initializing

BLANK LINE AFTER any var predications
	one var pred = one line
	2/more var preds = special spacing using commas

NEVER USE WHITESPACE (EXCEPT AFTER VAR STATEMENTS)

COMMENTS GET THEIR OWN LINE
	put block comments in "block-style" comments
	put line comments in "line-style" comments. straight-forward, eh?
*/


/*
vars
	• put at the very top of the scope (i.e., functions, modules). you can just declare w/o initializing
	• single line if single predication; special spacing for 2/more predications
	
make functions out of everything
	• must be shorter than 20 lines

whitespace & comments
	• never create whitespace: empty lines.
	• put comments above the relevant code; never on the right of the js statement
	• use block-style comments for functions

shorthand syntax
	• the if-else ternary
	• single statement ifs w/o curly braces
	• var assignment with a default value (example)*/
			var truth = value || true;
			var string = chosenWords || '';

