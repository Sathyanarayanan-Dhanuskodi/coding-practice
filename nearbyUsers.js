const request = {
  filteredKm: 30,
  latitude: 11.7872292,
  longitude: 78.1674936,
};

const users = [
  {
    streamingName: 'Sathya',
    streamingStartDate: '2022-03-25',
    streamingEndDate: '2022-03-28',
    noOfViews: 1,
    noOfLikes: 2,
    latitude: 10.4232,
    longitude: 79.32,
  },
  {
    streamingName: 'Gopi',
    streamingStartDate: '2022-03-25',
    streamingEndDate: '2022-03-28',
    noOfViews: 1,
    noOfLikes: 2,
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    streamingName: 'Gopi1',
    streamingStartDate: '2022-03-25',
    streamingEndDate: '2022-03-28',
    noOfViews: 1,
    noOfLikes: 2,
    latitude: 10.3833,
    longitude: 78.8001,
  },
  {
    streamingName: 'Gopi2',
    streamingStartDate: '2022-03-25',
    streamingEndDate: '2022-03-28',
    noOfViews: 1,
    noOfLikes: 2,
    latitude: 10.3611,
    longitude: 78.9796,
  },
  {
    streamingName: 'Sathya1',
    streamingStartDate: '2022-03-25',
    streamingEndDate: '2022-03-28',
    noOfViews: 1,
    noOfLikes: 2,
    latitude: 11.4714,
    longitude: 78.1003,
  },
  {
    streamingName: 'Sathya2',
    streamingStartDate: '2022-03-25',
    streamingEndDate: '2022-03-28',
    noOfViews: 1,
    noOfLikes: 2,
    latitude: 11.7627097,
    longitude: 78.1074163,
  },
];

let nearbyUsers = [];

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  console.log('getDistanceFromLatLonInKm');
  var p = 0.017453292519943295; // Math.PI / 180
  var c = Math.cos;
  var a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function executeRequest() {
  for (let user of users) {
    const distanceBetweenUsersInKm = getDistanceFromLatLonInKm(
      user.latitude,
      user.longitude,
      request.latitude,
      request.longitude
    );
    console.log('distanceBetweenUsersInKm', distanceBetweenUsersInKm);
    if (distanceBetweenUsersInKm <= request.filteredKm) {
      nearbyUsers.push(user);
    }
  }
}

executeRequest();

nearbyUsers.length > 0 && console.log('nearbyUsers', nearbyUsers);
