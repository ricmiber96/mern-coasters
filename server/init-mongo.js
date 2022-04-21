// db.createCollection('park');
// use("park");


// db.coasters.insertMany([
//     {
//         length: 2000,
//         height: 51,
//         speed: 240,
//         inversions: 0,
//         gForce: 4.8,
//         country: "United Arab Emirates",
//         year: 2010,
//         type: [
//           "Roller Coaster",
//           "Steel",
//           "Sit Down",
//           "Extreme"
//         ],
//         name: "Formula Rossa-",
//         park: "Ferrari World Abu Dhabi",
//         model: "Accelerator Coaster",
//         createdAt: "2020-04-09T10:14:02.716Z",
//         updatedAt: "2020-04-09T10:14:02.716Z"
//       },
//       {
//         length: 950,
//         height: 138,
//         speed: 206,
//         inversions: 0,
//         gForce: null,
//         country: "United States",
//         year: 2005,
//         type: [
//           "Roller Coaster",
//           "Steel",
//           "Sit Down",
//           "Extreme"
//         ],
//         name: "Kingda Ka",
//         park: "Six Flags Great Adventure",
//         model: "Accelerator Coaster",
//         createdAt: "2020-04-09T10:14:02.717Z",
//         updatedAt: "2020-04-09T10:14:02.717Z",
//       },
//       {
//         length: 853,
//         height: 128,
//         speed: 193,
//         inversions: 0,
//         gForce: null,
//         country: "United States",
//         year: 2003,
//         type: [
//           "Roller Coaster",
//           "Steel",
//           "Sit Down",
//           "Extreme"
//         ],
//         name: "Top Thrill Dragster",
//         park: "Cedar Point",
//         model: "Accelerator Coaster",
//         createdAt: "2020-04-09T10:14:02.717Z",
//         updatedAt: "2020-04-09T10:14:02.717Z",

//       }
//     ])
db = db.getSiblingDB('sample_db');

db.createCollection('sample_collection');

db.sample_collection.insertMany([
 {
    org: 'helpdev',
    filter: 'EVENT_A',
    addrs: 'http://rest_client_1:8080/wh'
  },
  {
    org: 'helpdev',
    filter: 'EVENT_B',
    addrs: 'http://rest_client_2:8081/wh'
  },
  {
    org: 'github',
    filter: 'EVENT_C',
    addrs: 'http://rest_client_3:8082/wh'
  }  
]);