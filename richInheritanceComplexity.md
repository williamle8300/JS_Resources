
# Underdefine for Rich Complexity

"Underdefining" the most basic, bare objects that are needed facilitates highly complex inheritance.

Example: Writing a program for recording student records at a popular, local college.

	//Person: firstName, lastName, sex, age, contactEmail
		//Student: majorStudies, grades.year2010, grades.year2011, grades.year2012, grades.year2013, grades.year2014

	//Person (supertype)
	function Person(firstName, lastName, sex, age, contactEmail) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.sex = sex;
		this.age = age;
		this.contactEmail = contactEmail;
	}
	
	Person.prototype.lastNameFirstName = function(){
		return this.lastName+ ', ' +this.firstName;
	}

	//Student(subtype)
	function Student(firstName, lastName, sex, age, contactEmail, majorStudies, grades) {
		Person.call(this, firstName, lastName, sex, age, contactEmail);
		
		this.majorStudies = majorStudies;
		this.grades = grades;
	}
	
	Student.prototype.computeGPA = function(){
		/*sorting, and averaging bizniss using this.grades [Object object]*/
		return gpa
	}

	//House-cleaning
	Student.prototype = Object.create(Person.prototype);
	Student.prototype.constructor = Student;


See how the `parent` object is very generic, and has a very concise property list.

The `student` object inherits all of the `parent` properties while defining some of it's own properties.

Done this way, the two classes above are very flexible, and results in code that is easy-to-read and maintain. Perennial qualities
 of "good code."