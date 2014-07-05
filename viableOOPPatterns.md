# Combination Constructor/Prototype
http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/

	//User (supertype)
	function User (theName, theEmail, privileges) {
	    this.name = theName;
	    this.email = theEmail;
			this.privileges = privileges;
	    this.quizScores = [];
	    this.currentScore = 0;
	}
	
	User.prototype = {
	    constructor: User,
	    saveScore:function (theScoreToAdd)  {
	        this.quizScores.push(theScoreToAdd)
	    },
	    showNameAndScores:function ()  {
	        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
	        return this.name + " Scores: " + scores;
	    },
	    changeEmail:function (newEmail)  {
	        this.email = newEmail;
	        return "New Email Saved: " + this.email;
	    }
	}

	//guestUser (subtype)
	function guestUser(){
		this.privileges = null;
	}

	//Establishing the inheritance
	guestUser.prototype = Object.create(User.prototype); //Might need a polyfill for `Object.create`

	//Do overwriting for the subtype, guestUser, here
	guestUser.prototype.constructor = guestUser;

	//Test-drive it
	var userOne = new User('Mark McGyver', 'daMac@gmail.com', {fileSys: true});
	userOne.name; //'Mark McGyver'
	userOne.email; 'daMac@gmail.com'
	userOne.privileges.fileSys; //'true'
	
	var guestOne = new guestUser();
	guestOne.name; //undefined
	guestOne.email; //undefined
	guestOne.privileges; //null
	guestOne.changeEmail('wle@fig-books.com'); //'New Email Saved: wle@fig-books.com'
	guestOne.email; //'wle@fig-books.com'
	
	guestOne.constructor; //'function guestUser(){ this.privileges = null; }'
	guestOne instanceof guestUser; //'true'
	guestOne instanceof User; //'true'

NOTES
1) A JS way of emulating classical OOP when rich inheritance isn't important
2) pretty concise way of defining classes.
3) see how `return` is used at the end for logging? Awesome.
4) also see the section where the properties can be rewritten
5) IMO the best option. It balances classic OOP ideas and maintenance concerns


# Classic

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

NOTES
1) Represents classical OOP ideas pretty well
2) Not sure if it's flexible if the # of args change in the supertype
2) depends on `Object.create`


# Parasitic Combination
http://jsfiddle.net/dKKaS/

	//important function for handling the inheritance
	function inheritPrototype(_SubType, SuperType) {
			function object(o) {
			    function F() {}
			    F.prototype = o;
			    return new F();
			}
	    var prototype = object(SuperType.prototype); 
	    prototype.constructor = _SubType; 
	    _SubType.prototype = prototype; 
	}

	function SuperType(name) {
	    this.name = name;
	    this.colors = ["red", "blue", "green"];
	}

	SuperType.prototype.sayName = function() {
	    alert(this.name);
	};

	function _SubType(name, age) {
	    SuperType.call(this, name);

	    this.age = age;
	}

	//where the inheritence is done
	inheritPrototype(_SubType, SuperType);

	_SubType.prototype.sayAge = function() {
	    alert(this.age);
	};


# Spawn
http://howtonode.org/prototypical-inheritance

	Object.spawn = function (parent, props) {
	  var defs = {}, key;
	  for (key in props) {
	    if (props.hasOwnProperty(key)) {
	      defs[key] = {value: props[key], enumerable: true};
	    }
	  }
	  return Object.create(parent, defs);
	}

	var Animal = {
	  eyes: 2,
	  legs: 4,
	  name: "Animal",
	  toString: function () {
	    return this.name + " with " +
	      this.eyes + " eyes and " +
	      this.legs + " legs.";
	  },
	}

	var Dog = Object.spawn(Animal, {
	  name: "Dog"
	});

	var Insect = Object.spawn(Animal, {
	  name: "Insect",
	  legs: 6
	});

	var fred = Object.spawn(Dog);
	var pete = Object.spawn(Insect);


NOTES
1) More progressive pattern for inheritance since it departs from classical OOP ideas.
2) also `fred instanceof Dog` doesn't work
3) this pattern depends on `Object.create` (ECMA5)