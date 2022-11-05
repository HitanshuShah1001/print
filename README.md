# Color your console.logs!
Now no more head scratching in trying to debug your console.logs,
differentiate each one with a custom color so that time and resources are saved.


## Compatible colors.
Currently ,the colors supported are Magenta, Yellow, Green, Blue, Red, Cyan, Black and White.
Hexcodes:-(#FF00FF,#FFFF00,#00FF00,#0000FF,#FF0000,#00FFFF,#000000,#FFFFFF)


## Usage

```
For node js:-
var Coloredconsole = require('coloredprints');
For ES6 :- 
import Coloredconsole from "coloredprints";
Note that you can replace "Coloredconsole" with any name of your liking.
Coloredconsole("your message here","color here");
For example:- Coloredconsole("Hi","Cyan");
No colors provided will default to White.

```