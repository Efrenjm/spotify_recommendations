import axios from "axios";


const getUsers = async () => {
  let users = await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response;
    })
    .catch(function(error){
        console.log(error);
    })
  return users;
};

export { getUsers }