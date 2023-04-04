
/* Tasks Component to Hold the Tasks
  Props - tasks - list of all tasks
          selectedProject - item as selectedProject
*/ 

function Tasks({tasks,selectedProject, projectTitle}) {
  return (      
    <div>
      {/* <h1 className="projectTitle">{projectTitle}</h1> */}
      <ol>
      {
          tasks.map((el) => {
            if(el.projectId === selectedProject){
              return(<li key={el._id}>{el.task}</li>)
            }          
          })
        }
      </ol>
    </div>            
  );
}

export default Tasks;
