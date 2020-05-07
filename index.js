import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function worldCup2014(data) {
    for (let i = 0; i < data.length; i++) {
        if ( data[i].Year === 2014 && data[i].Stage === 'Final') {
            console.log(data[i]["Home Team Name"], data[i]["Away Team Name"], data[i]["Home Team Goals"], data[i]["Away Team Goals"], data[i]["Win conditions"]);
        // }  if (data[i]["Home Team Goals"] > data[i]["Away Team Goals"], data[i].Year === 2014 && data[i].Stage === 'Final') {
        //     console.log("Winner : " + data[i]["Home Team Name"]);
        // }  else {
        //     console.log("Winner : " + data[i]["Away Team Name"]);
        }
    }
};

worldCup2014(fifaData);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const arrayOfFinals = [];
    for ( let i = 0; i < data.length; i++ ) {
        if ( data[i].Stage === 'Final') {
            arrayOfFinals.push(data[i]);
        }
    };
    return arrayOfFinals;
};

console.log(getFinals(fifaData));

// function getFinals(data1) {
//     return data1.filter((data) => {
//         return data.Stage === 'Final'
//     });
// };

// console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(cb) {
//     const years = [];
//     years.push(cb.map(function(item){
//     return item['Year'];
//     }));
//     return years;
//  };

//  console.log(getYears(getFinals(fifaData)));

function getYears(cb) {
    const years = [];
    const finals = cb(fifaData);
    // console.log(finals);
    finals.map(function(game){
        years.push(game.Year)
    });
    return years;
};

console.log(getYears(getFinals, fifaData));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
    const finalWinner = cb(fifaData);
    return finalWinner.map(function(game) { 
        // console.log(game);
        if ( game["Home Team Goals"] > game["Away Team Goals"]) {
            return game["Home Team Name"];
        }   else {
            return game["Away Team Name"];
        }
    });
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    const winByYear = [];
    const getWin = cb1(getFinals);
    const getYear = cb2(getFinals);
    // console.log(getYear);
    for (let i = 0; i<getYear.length; i++) {
        winByYear.push('In ' + getYear[i] + ', '+ getWin[i] +' won the world cup!!')
        };
    return winByYear;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const winnersInitials = [];
    getFinals(data).forEach((match) => {
      if (match["Home Team Goals"] > match["Away Team Goals"])
        winnersInitials.push(match["Home Team Initials"]);
      else if (match["Home Team Goals"] < match["Away Team Goals"])
        winnersInitials.push(match["Away Team Initials"]);
      else {
        const winner = match["Win conditions"].split(" ")[0];
        const initials =
          match["Home Team Name"] === winner
            ? match["Home Team Initials"]
            : match["Away Team Initials"];
        winnersInitials.push(initials);
      }
    });
    console.log(winnersInitials);
    return winnersInitials.reduce((total, winnerInitial) => {
      return winnerInitial === teamInitials ? total + 1 : total;
    }, 0);
  }
 
  console.log(getCountryWins(fifaData, "GER"));




/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const totalGoals = data.reduce((total, currentMatch) => {
      return (
        total + currentMatch["Away Team Goals"] + currentMatch["Home Team Goals"]
      );
    }, 0);
    return totalGoals / data.length;
  }
 
  console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
