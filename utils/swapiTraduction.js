const {modelPeople} = require('../models/people');
const dataTranslated = [];

const swapiTraduction = (peoples) => {
   
    if(peoples.length != undefined){
        peoples.map(people => {
            let item = compareKeysData(people)
            dataTranslated.push(item)                         
         })
         return dataTranslated;
    }
    
    let itemOnly = compareKeysData(peoples);
    return itemOnly;
}

const compareKeysData = (itemPeople) => {
    let objTranslated = {}
    Object.keys(itemPeople).map(keyPeople =>{
        Object.keys(modelPeople).map(keyPeopleModel => {
              let keyNew = modelPeople[keyPeopleModel];    
              if(keyPeople === keyPeopleModel){
                  objTranslated[keyNew] = itemPeople[keyPeople];
              }
        })
    })
    return objTranslated;
}


module.exports = swapiTraduction;