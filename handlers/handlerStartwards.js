const {dataApiItem,dataApi} = require('../api/apiSwapi');
const swapiTraduction = require('../utils/swapiTraduction');
const response = require('../utils/response');

export const getPeoples = async () => {
   const {status, data:{results}} = await dataApi();
   if(status != 200){
      return response(500,{
         status:'error: ',
         error: "hay problemas para presentar la data"
      })   
   }
   let dataTraduction = swapiTraduction(results);
   return response(200,{
      status:'ok',
      message:'Se listo correctamente las personas',
      data: dataTraduction
   })
}


export const getPeople = async (event) => {
   let peopleId = event.pathParameters.people_id;
   const {status, data} = await dataApiItem(peopleId);
   if(status != 200){
      return response(500,{
         status:'error: ',
         error: "hay problemas para presentar la data"
      })   
   }
   let dataTraduction = swapiTraduction(data);
   return response(200,{
      status:'ok',
      message:'Se listo correctamente la persona',
      data: dataTraduction
   })
}



