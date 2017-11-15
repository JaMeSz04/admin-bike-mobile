

export default MapAdapter = ( bikeObj ) => (
    {
        latlng : {
            latitude : bikeObj.latitude,
            longitude : bikeObj.longitude
        },
        title : bikeObj.bike_name,
        description : bikeObj.bike_model
    }
)

// {
//     latlng: {
//         latitude: 13.729869,
//             longitude: 100.775333
//     },
//     title: "ShubU test",
//         description: "This is the test description"
// }