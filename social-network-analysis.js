var data =
  {"f01": {name: "Alice",
           age: 15,
           follows: ["f02", "f03", "f04"]
           //followers: [ 'f03', 'f04' ]
         },
   "f02": {name: "Bob",
           age: 20,
           follows: ["f05", "f06"]
           //followers: [ 'f01', 'f04' ]
         },
   "f03": {name: "Charlie",
           age: 35,
           follows: ["f01", "f04", "f06"]
           //followers: [ 'f01', 'f04' ]
         },
   "f04": {name: "Debbie",
           age: 40,
           follows: ["f01", "f02", "f03", "f05", "f06"]
           //followers: [ 'f01', 'f03', 'f05' ]
         },
   "f05": {name: "Elizabeth",
           age: 45,
           follows: ["f04"]
           //followers: [ 'f02', 'f04', 'f06' ]
         },
   "f06": {name: "Finn",
           age: 25,
           follows: ["f05"]
           //followers: [ 'f02', 'f03', 'f04' ]
         }}




// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)

/* Update the data with more specific information */
var init = function(){
  console.log("Initializing the data....");
  for(f in data){
    data[f].followers = [];
  }
  console.log("Adding list of followers...");
  for(f in data){
    for(p of data[f].follows){
      data[p].followers.push(f);
    }
  }
  console.log(data);
  console.log("Update completed.");
}

// List everyone and for each of them, list the names of who they follow and who follows them
var listEveryone = function(){
  for(f in data){
    console.log(`${data[f].name} follows [${data[f].follows}], and [${data[f].followers}] are follwing him/her`);
  }
}

// Identify who follows the most people
var whoFollowsMost = function(){
  var numFollows = 0;
  var personWhoFallowsMost = [];
  for(f in data){
    if(numFollows < data[f].follows.length){
      numFollows = data[f].follows.length;
    }
  }
  for(f in data){
    if(numFollows === data[f].follows.length){
      personWhoFallowsMost.push(data[f].name);
    }
  }
  console.log(`[${personWhoFallowsMost}] has the most people that he/she is following`);
  return personWhoFallowsMost;
}

// Identify who has the most followers
var whoHasMostFollowers = function(){
  var numFollowers = 0;
  var personWithMostFollowers = [];
  for(f in data){
    if(numFollowers < data[f].followers.length){
      numFollowers = data[f].followers.length;
    }
  }
  for(f in data){
    if(numFollowers === data[f].followers.length){
      personWithMostFollowers.push(data[f].name);
    }
  }
  console.log(`[${personWithMostFollowers}] has the most followers`);
  return personWithMostFollowers;
}

// Identify who has the most followers over 30
var followersOver30 = function(){
  var most = 0;
  var who = [];
  for(f in data){
    var acc = 0;
    for(p in data[f].followers){
      if(data[p].age > 30) acc++;
    }
    
    if(acc > most) {
      most = acc;
    }
  }
  for(f in data){

  }
}

init();
listEveryone();
whoFollowsMost();
whoHasMostFollowers();
