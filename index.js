// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

console.log(findMatching(drivers, 'Bobby'));



// function fuzzyMatch(names,letters){
//     return  drivers.filter(driver => driver === 'Sa') 
// }
// console.log(fuzzyMatch(drivers,['Sammy','Sally','Sarah']))




    function fuzzyMatch(drivers, partialName) {
        return drivers.filter(driver => driver.startsWith(partialName));
      }
      
      console.log(fuzzyMatch(['Sammy', 'Sally', 'Sarah'], 'Sa'));
      
    
const driver2 = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
  function matchName(drivers, nameToMatch) {
    return drivers.filter(driver => driver.name === nameToMatch);
  }
  
  console.log(matchName(driver2, 'Bobby'));
  
  

