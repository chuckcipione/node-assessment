const userData = require('./userData.json');


module.exports = {
    getUsers(query){
        if(query.favorites){
          var users = []
          for(var i = 0; i < userData.length; i++){
            for(var j = 0; j < userData[i].favorites.length; j++){
              if(userData[i].favorites[j] === query.favorites){
                users.push(userData[i])
              }
            }
          }
          return users
        }
        else if(query.age){
           
          var users = []
          for(var i = 0; i < userData.length; i++){
            if(query.age > userData[i].age){
              users.push(userData[i])
            }
            console.log(users)
          }
          return users
        }
        else if(query.lastname){
          var users = []
          for(var i = 0; i < userData.length; i++){
            if(query.lastname === userData[i].last_name){
              users.push(userData[i])
            }
          }
          return users
        }
        else if(query.email){
          var user =[];
          for(var i = 0; i < userData.length; i++){
            if(query.email === userData[i].email){
              user[0] = userData[i]
            }
          }
          return user
        }
        else{
          return userData
        } 
        
      },
      getUserId(id){
        if(!id){
          return {status: 404, err: 'null'}
        }
        var user;
        for(var i = 0; i < userData.length; i++){
        //   console.log(userData[i].id + '----' +  id.userId)
          if(userData[i].id === Number(id.userId)){
            user = userData[i]
          }
        }
        if(user){
          return user
        }else{
          return {status: 404, err: 'null'}
        }
      },
      getAdmins(){
        var admins = []
        for(var i = 0; i < userData.length; i++){
          if(userData[i].type === 'admin'){
            admins.push(userData[i])
          }
        }
        return admins
      },
      getNonAdmins(){
        var nonAdmins = []
        for(var i = 0; i < userData.length; i++){
          if(userData[i].type !== 'admin'){
            nonAdmins.push(userData[i])
          }
        }
        return nonAdmins
      },
      getUserType(query){
        // console.log(query)
        var users = []
        for(var i = 0; i < userData.length; i++){
          if(userData[i].type === query.type){
            users.push(userData[i])
          }
        }
        return users
      },
      updateUser(id, data){
        // console.log(id.userId)
        // console.log(data)
        for(var i = 0; i < userData.length; i++){
          if(userData[i].id === Number(id.userId)){
            userData[i] = data
          }
        }
        return userData
      },
      createUser(data){
        var dataLength = userData.length - 1
        var lastId = userData[dataLength].id
        data.id = lastId + 1
        userData.push(data)
        return userData
      },
      removeUser(id){
        for(var i = 0; i < userData.length; i++){
          if(userData[i].id === Number(id)){
            userData.splice(i, 1)
          }
        }
        return userData
      }
}
