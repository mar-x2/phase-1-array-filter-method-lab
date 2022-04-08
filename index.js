
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, string){
    function allDriver(drivers){
        return drivers.toUpperCase() === string.toUpperCase();
    }
        const bobs = drivers.filter(allDriver);
            if (bobs){
                return bobs;
            }   
        }

        function fuzzyMatch(drivers, string){
            const newArray = drivers.filter(function(drivers){
                if(string === drivers.slice(0,2)){
                    return drivers;
                }
                else {return drivers === string;}
          })    
          return newArray;
}

function matchName(drivers, string){
    const newObject = drivers.filter(function(string){
        for(let obj in drivers){
            if(string === drivers[0]){
                return drivers;
            } 
            else {return string === drivers[4];}
        }
    })
    return newObject;
}
