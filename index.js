//Task1

function distanceFromHqInBlocks(initialLocation) {
    const headquarters = 42;
    let numberOfBlocks;
  
    if (initialLocation > headquarters) {
        numberOfBlocks = initialLocation - headquarters;
    } else {
        numberOfBlocks = headquarters - initialLocation;
    }
  
    return numberOfBlocks;
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

//Task2
function distanceFromHqInFeet(initialLocation){
    const feet = 264;
    if (initialLocation > 42){
        return (initialLocation - 42)*feet;
    }
    else return (42 - initialLocation)*feet;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

//Task3
function distanceTravelledInFeet(initialLocation, destination){
    const feet = 264;
    if (initialLocation > destination){
        return (initialLocation - destination)*feet;
    }
    else if (destination > initialLocation){
        return (destination - initialLocation)*feet;
    }
    else return ("Distance cannot be a negative value!!");
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

//Task4
function calculatesFarePrice(initialLocation, destination){
    const distance = distanceTravelledInFeet(initialLocation, destination);
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <=2000){
        return (distance - 400)*0.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    else return("cannot travel that far");
}
console.log(calculatesFarePrice(0, 2300));
