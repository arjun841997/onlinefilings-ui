
/*
    API Controller File to list the API Calls
*/

/*
    GET TASKS API CALL - to get the list of tasks
*/
export function getTasks() {    
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks`)
    .then((response) => response.json())
    .then((data) => {return data.data});
}

/*
    GET PROJECTS API CALL - to get the list of projects
*/
export function getProjects() {    
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/projects`)
    .then((response) => response.json())
    .then((data) => {return data.data});
  }


  