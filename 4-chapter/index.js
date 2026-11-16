const user = {
    id:1,
    profile:{
        fullname:'GGG',
        address:{
            city:'WWWW'
        }
    }
};
//bad
// console.log(user.profile.fullname);
//old way (good)
// if(user && user.profile.fullname !== undefined){
//     console.log(user.profile.fullname)
// }

//new way (good)
const fullname = user?.profile?.fullname;
console.log(fullname)