const users = [];


const add = ({id,name,room})=>{


 name = name;
 room = room;

 const existingUser = users.find((user)=> user.room === room && user.name === name);

 if(existingUser)
 {
     return {error :"Username is taken,Please try with another Username"};
 }

 const user = {id,name,room};
 users.push(user);

 return {user}
}

const remove = (id)=>{
  const index = users?.findIndex((user)=>user.id === id);

  if(index !== -1)
  {
      return users.splice(index, 1)[0];
  }
  return null
}

const get = (id)=>{
  return users.find((user)=> user.id === id)
}

const getInRoom = (room) =>{
   return users.filter((user)=>user.room === room);
}

module.exports = {add,remove,get,getInRoom};
