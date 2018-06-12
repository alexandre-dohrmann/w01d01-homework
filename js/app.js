/* 
Section 1:
Terms

1.  The difference between interpolation and concatenation is:
		- Concatenation only allows you to combine two strings together 
		- Interpolation allows you to refer to a constant or variable as a placeholder in the string 
		using strings or non-strings
			- Concatenation example:
				let myName = "Alex"
				let nameString = "Hi, my name is"
				let greeting = nameString + " " + myName
			- Interpolation example:
				let degrees = 75
				let tempGreeting = "Today's temerapture is"
				let todayTemp = tempGreeting + " " + degrees


2.  The term "DRY" stands for "Don't Repeat Yourself". We should pay attention to it so that we're 
not constantly repeating our code. It makes for cleaner, and clearer code-writing. 
In order to create "DRY" code, we use "functions", so that we can easily re-access them.
*/

/*Section 2:*/

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a <= b);
  console.log(c >= d);
  console.log('Name' == 'Name');
  console.log(a <= b <= c);
  console.log(a * a === d);
  console.log(e == 'Kevin');
  console.log(48 == '48');

/* Section 3:

1. While Loops:

	while (true) {
		console.log('Do not run this loop');
	}
	Answer: This is an infinite loop because it's stating that while is always true. 
	So 'Do not run this loop' will always be printed continuously.

2. Infinite loop II

	const runProgram = true;

	while (runProgram) {
		console.log('Do not run this loop');
		runProgram = false;
	}	
	Answer: This is not an infinite loop because "runProgram" is being called/changed within 
	the function, so it will only run once.

3. Reading Code:
	
	let letters = "A";
	let i = 0;

	while (i < 20) {
	letters += "A";
	i++;
	}

	console.log(letters);	

	Answer:
	- I think the code will run "A" 20 times.
	- The correct answer is that it logged "A" 21x since the while 
	loop is calling "letter" to add "A" each time while starting at 0.

Section 4:

1.  For loops usually don't run an infinite amount of times. 
	The also require different variables within the loops itself to function. 
  	While loops run infinitely while the condition remains true.

2.  For Loop: Write a for loop that will console.log the numbers 0 to 999.
		
		for (let i=-1; i < 999; i++) {
		console.log(i + 1)
		}

3.  What are the three components of the control statement? Each component is separated by a semicolon ;.
	Write your answers as comments in the file.

		The first part of the control statement is: An initialization
		The second part of the control statement is: A condition
		The third part of the control statement is: A final expression

4.  For Loop in reverse: Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. 
Console.log a countdown from 999 to 0:

		for (let i=1000; i > 0; i--) {
		console.log(i - 1)
		}

5. Write a for loop that uses interpolation to send a message to the console as well as the current value of i.
The loop should run from 1 to 10.

				for (let i=1; i <= 10; i++) {
				console.log("The value of i is " + i + " of " + 10)
				}

Section 5:

Part I: Set the Scene:
	Last login: Mon Jun 11 15:50:12 on ttys000
	Alexandres-MacBook-Pro:~ alexandredohrmann$ cd ga_wdi_funky_ducks/
	Alexandres-MacBook-Pro:ga_wdi_funky_ducks alexandredohrmann$ cd 6_11_2018_CommandLine_FolderStructure/
	Alexandres-MacBook-Pro:6_11_2018_CommandLine_FolderStructure alexandredohrmann$ mkdir homework_part_2
	Alexandres-MacBook-Pro:6_11_2018_CommandLine_FolderStructure alexandredohrmann$ cd homework_part_2/
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mkdir death_star
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ touch darth_vader.txt pricess_leia.txt storm_trooper.txt
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	darth_vader.txt		pricess_leia.txt
	death_star		storm_trooper.txt
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mkdir galaxy_far_far_away
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	darth_vader.txt		galaxy_far_far_away	storm_trooper.txt
	death_star		pricess_leia.txt
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv darth_vader.txt death_star
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	death_star		pricess_leia.txt
	galaxy_far_far_away	storm_trooper.txt
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv princess_leia.txt death_star
	mv: rename princess_leia.txt to death_star/princess_leia.txt: No such file or directory
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv pricess_leia princess_leia
	mv: rename pricess_leia to princess_leia: No such file or directory
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv pricess_leia.txt princess_leia.txt
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	death_star		princess_leia.txt
	galaxy_far_far_away	storm_trooper.txt
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv princess_leia.txt death_star
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	death_star		galaxy_far_far_away	storm_trooper.txt
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv storm_trooper.txt death_star
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	death_star		galaxy_far_far_away
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd galaxy_far_far_away/
	Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ mkdir tatooine
	Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd tatooine/
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ touch luke.txt ben_kenobi.txt
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ ls
	ben_kenobi.txt	luke.txt
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ mkdir millenium_falcon
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ touch han_solo.txt chewbaca.txt /millenium_falcon
	touch: /millenium_falcon: Permission denied
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ ls
	ben_kenobi.txt		han_solo.txt		millenium_falcon
	chewbaca.txt		luke.txt
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ mv han_solo.txt millenium_falcon
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ mv chewbaca.txt millenium_falcon
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ ls
	ben_kenobi.txt		luke.txt		millenium_falcon
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ cd mi
	-bash: cd: mi: No such file or directory
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ cd millenium_falcon/
	Alexandres-MacBook-Pro:millenium_falcon alexandredohrmann$ ls
	chewbaca.txt	han_solo.txt

Part II: mv - rename:
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ ls
	ben_kenobi.txt		luke.txt		millenium_falcon
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ mv ben_kenobi.txt obi_wan.txt
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ ls
	luke.txt		millenium_falcon	obi_wan.txt
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ 

Part III: cp - copy:
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ cd ..
	Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd ..
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
	.
	├── death_star
	│   ├── darth_vader.txt
	│   ├── princess_leia.txt
	│   └── storm_trooper.txt
	└── galaxy_far_far_away
	    └── tatooine
	        ├── luke.txt
	        ├── millenium_falcon
	        │   ├── chewbaca.txt
	        │   └── han_solo.txt
	        └── obi_wan.txt

	4 directories, 7 files
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd death_star/
	Alexandres-MacBook-Pro:death_star alexandredohrmann$ cp storm_trooper.txt ../galaxy_far_far_away/tatooine
	Alexandres-MacBook-Pro:death_star alexandredohrmann$ cd ..
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
	.
	├── death_star
	│   ├── darth_vader.txt
	│   ├── princess_leia.txt
	│   └── storm_trooper.txt
	└── galaxy_far_far_away
	    └── tatooine
	        ├── luke.txt
	        ├── millenium_falcon
	        │   ├── chewbaca.txt
	        │   └── han_solo.txt
	        ├── obi_wan.txt
	        └── storm_trooper.txt

	4 directories, 8 files
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ 

Part IV:
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
	.
	├── death_star
	│   ├── darth_vader.txt
	│   ├── princess_leia.txt
	│   └── storm_trooper.txt
	└── galaxy_far_far_away
	    └── tatooine
	        ├── luke.txt
	        ├── millenium_falcon
	        │   ├── chewbaca.txt
	        │   └── han_solo.txt
	        ├── obi_wan.txt
	        └── storm_trooper.txt

	4 directories, 8 files
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv luke.txt obi_wan.txt millenium_falcon
	usage: mv [-f | -i | -n] [-v] source target
	       mv [-f | -i | -n] [-v] source ... directory
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	death_star		galaxy_far_far_away
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
	.
	├── death_star
	│   ├── darth_vader.txt
	│   ├── princess_leia.txt
	│   └── storm_trooper.txt
	└── galaxy_far_far_away
	    └── tatooine
	        ├── luke.txt
	        ├── millenium_falcon
	        │   ├── chewbaca.txt
	        │   └── han_solo.txt
	        ├── obi_wan.txt
	        └── storm_trooper.txt

	4 directories, 8 files
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd galaxy_far_far_away/
	Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd tatooine/
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ mv luke.txt obi_wan.txt millenium_falcon
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ ls
	millenium_falcon	storm_trooper.txt
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ tree
	.
	├── millenium_falcon
	│   ├── chewbaca.txt
	│   ├── han_solo.txt
	│   ├── luke.txt
	│   └── obi_wan.txt
	└── storm_trooper.txt

	1 directory, 5 files
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ mv millenium_falcon ../../death_star
	Alexandres-MacBook-Pro:tatooine alexandredohrmann$ cd
	Alexandres-MacBook-Pro:~ alexandredohrmann$ 
	Alexandres-MacBook-Pro:~ alexandredohrmann$ 
	Alexandres-MacBook-Pro:~ alexandredohrmann$ cd ga_wdi_funky_ducks/
	Alexandres-MacBook-Pro:ga_wdi_funky_ducks alexandredohrmann$ cd 6_11_2018_CommandLine_FolderStructure/
	Alexandres-MacBook-Pro:6_11_2018_CommandLine_FolderStructure alexandredohrmann$ cd homework_part_2/
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
	death_star		galaxy_far_far_away
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
	.
	├── death_star
	│   ├── darth_vader.txt
	│   ├── millenium_falcon
	│   │   ├── chewbaca.txt
	│   │   ├── han_solo.txt
	│   │   ├── luke.txt
	│   │   └── obi_wan.txt
	│   ├── princess_leia.txt
	│   └── storm_trooper.txt
	└── galaxy_far_far_away
	    └── tatooine
	        └── storm_trooper.txt

	4 directories, 8 files
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ mv princess_leia.txt millenium_falcon
	mv: rename princess_leia.txt to millenium_falcon: No such file or directory
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd death_star/
	Alexandres-MacBook-Pro:death_star alexandredohrmann$ mv princess_leia.txt millenium_falcon
	Alexandres-MacBook-Pro:death_star alexandredohrmann$ ls
	darth_vader.txt		millenium_falcon	storm_trooper.txt
	Alexandres-MacBook-Pro:death_star alexandredohrmann$ tree
	.
	├── darth_vader.txt
	├── millenium_falcon
	│   ├── chewbaca.txt
	│   ├── han_solo.txt
	│   ├── luke.txt
	│   ├── obi_wan.txt
	│   └── princess_leia.txt
	└── storm_trooper.txt

	1 directory, 7 files
	Alexandres-MacBook-Pro:death_star alexandredohrmann$ 

Part V: rm - remove
	death_star		galaxy_far_far_away
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
	.
	├── death_star
	│   ├── darth_vader.txt
	│   ├── millenium_falcon
	│   │   ├── chewbaca.txt
	│   │   ├── han_solo.txt
	│   │   ├── luke.txt
	│   │   ├── obi_wan.txt
	│   │   └── princess_leia.txt
	│   └── storm_trooper.txt
	└── galaxy_far_far_away
	    └── tatooine
	        └── storm_trooper.txt

	4 directories, 8 files
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd death_star/
	Alexandres-MacBook-Pro:death_star alexandredohrmann$ cd millenium_falcon/
	Alexandres-MacBook-Pro:millenium_falcon alexandredohrmann$ rm obi_wan.txt
	Alexandres-MacBook-Pro:millenium_falcon alexandredohrmann$ ls
	chewbaca.txt		luke.txt
	han_solo.txt		princess_leia.txt
	Alexandres-MacBook-Pro:millenium_falcon alexandredohrmann$ 

Part VI: all together
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd yavin_4/
Alexandres-MacBook-Pro:yavin_4 alexandredohrmann$ mv millenium_falcon ..
Alexandres-MacBook-Pro:yavin_4 alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ ls
millenium_falcon	tatooine		yavin_4
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd yavin_4/
Alexandres-MacBook-Pro:yavin_4 alexandredohrmann$ mv x_wing ..
Alexandres-MacBook-Pro:yavin_4 alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ ls
millenium_falcon	x_wing
tatooine		yavin_4
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
death_star		galaxy_far_far_away
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd death_star/
Alexandres-MacBook-Pro:death_star alexandredohrmann$ mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
Alexandres-MacBook-Pro:death_star alexandredohrmann$ ls
darth_vader.txt		tie_fighter_1		tie_fighter_3
storm_trooper.txt	tie_fighter_2
Alexandres-MacBook-Pro:death_star alexandredohrmann$ mv darth_vader.txt tie_fighter_1
Alexandres-MacBook-Pro:death_star alexandredohrmann$ ls
storm_trooper.txt	tie_fighter_2
tie_fighter_1		tie_fighter_3
Alexandres-MacBook-Pro:death_star alexandredohrmann$ tree
.
├── storm_trooper.txt
├── tie_fighter_1
│   └── darth_vader.txt
├── tie_fighter_2
└── tie_fighter_3

3 directories, 2 files
Alexandres-MacBook-Pro:death_star alexandredohrmann$ cp storm_trooper.txt tie_fighter_2
Alexandres-MacBook-Pro:death_star alexandredohrmann$ ls
storm_trooper.txt	tie_fighter_2
tie_fighter_1		tie_fighter_3
Alexandres-MacBook-Pro:death_star alexandredohrmann$ cd tie_fighter_2/
Alexandres-MacBook-Pro:tie_fighter_2 alexandredohrmann$ ls
storm_trooper.txt
Alexandres-MacBook-Pro:tie_fighter_2 alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:death_star alexandredohrmann$ tree
.
├── storm_trooper.txt
├── tie_fighter_1
│   └── darth_vader.txt
├── tie_fighter_2
│   └── storm_trooper.txt
└── tie_fighter_3

3 directories, 3 files
Alexandres-MacBook-Pro:death_star alexandredohrmann$ cp storm_trooper.txt tie_fighter_3
Alexandres-MacBook-Pro:death_star alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
.
├── death_star
│   ├── storm_trooper.txt
│   ├── tie_fighter_1
│   │   └── darth_vader.txt
│   ├── tie_fighter_2
│   │   └── storm_trooper.txt
│   └── tie_fighter_3
│       └── storm_trooper.txt
└── galaxy_far_far_away
    ├── millenium_falcon
    │   ├── chewbaca.txt
    │   └── han_solo.txt
    ├── tatooine
    │   └── storm_trooper.txt
    ├── x_wing
    │   └── luke.txt
    └── yavin_4
        └── princess_leia.txt

9 directories, 9 files
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd death_star/
Alexandres-MacBook-Pro:death_star alexandredohrmann$ mv tie_fighter_1 tie_fighter_2 tie_fighter_3 ../galaxy_far_far_away
Alexandres-MacBook-Pro:death_star alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
.
├── death_star
│   └── storm_trooper.txt
└── galaxy_far_far_away
    ├── millenium_falcon
    │   ├── chewbaca.txt
    │   └── han_solo.txt
    ├── tatooine
    │   └── storm_trooper.txt
    ├── tie_fighter_1
    │   └── darth_vader.txt
    ├── tie_fighter_2
    │   └── storm_trooper.txt
    ├── tie_fighter_3
    │   └── storm_trooper.txt
    ├── x_wing
    │   └── luke.txt
    └── yavin_4
        └── princess_leia.txt

9 directories, 9 files
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ 

Part VII: rm -r -remove directories:
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd galaxy_far_far_away/
	Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ rm -r tie_fighter_2 tie_fighter_3
	Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ ls
	millenium_falcon	tie_fighter_1		yavin_4
	tatooine		x_wing
	Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ 

Part VII:
	Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
.
├── death_star
│   └── storm_trooper.txt
└── galaxy_far_far_away
    ├── millenium_falcon
    │   ├── chewbaca.txt
    │   └── han_solo.txt
    ├── tatooine
    │   └── storm_trooper.txt
    ├── tie_fighter_1
    │   └── darth_vader.txt
    ├── x_wing
    │   └── luke.txt
    └── yavin_4
        └── princess_leia.txt

7 directories, 7 files
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd galaxy_far_far_away/x_wing/
Alexandres-MacBook-Pro:x_wing alexandredohrmann$ touch the_force.txt
Alexandres-MacBook-Pro:x_wing alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ rm -r death_star
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ ls
galaxy_far_far_away
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ cd galaxy_far_far_away/
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ mv x_wing millenium_falcon /yavin_4
usage: mv [-f | -i | -n] [-v] source target
       mv [-f | -i | -n] [-v] source ... directory
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ mv x_wing yavin_4
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ ls
millenium_falcon	tie_fighter_1
tatooine		yavin_4
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ mv millenium_falcon yavin_4
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ ls
tatooine	tie_fighter_1	yavin_4
Alexandres-MacBook-Pro:galaxy_far_far_away alexandredohrmann$ cd ..
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ tree
.
└── galaxy_far_far_away
    ├── tatooine
    │   └── storm_trooper.txt
    ├── tie_fighter_1
    │   └── darth_vader.txt
    └── yavin_4
        ├── millenium_falcon
        │   ├── chewbaca.txt
        │   └── han_solo.txt
        ├── princess_leia.txt
        └── x_wing
            ├── luke.txt
            └── the_force.txt

6 directories, 7 files
Alexandres-MacBook-Pro:homework_part_2 alexandredohrmann$ 









