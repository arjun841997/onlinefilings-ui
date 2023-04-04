import './App.css';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import React, { useEffect, useState } from 'react';
import { getTasks, getProjects } from './controllers/api';
import { Input } from 'antd';
import { Layout } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';


const { Header } = Layout;

function App() {
  const [projects, setProjects] = useState([]); //projects state
  const [tasks, setTasks] = useState([]) //tasks state
  const [filteredTasksState, setFilteredTaskState] = useState([]) //filtered Tasks State
  const [selectedProject, setSelectedProject] = useState("") // selected Projects State
  const [searchWord, setSearchWord] = useState("") // search word text
  const [projectTitle, setProjectTitle] = useState("") // project title state

  useEffect(()=>{
    async function fetchTasks() {
      const tasks = await getTasks()
      setTasks(tasks)      
    }     
    fetchTasks() //API Call to fetch the Tasks
  }, [])

  useEffect(()=>{    
    async function fetchProjects() {      
      const projects = await getProjects()      
      setProjects(projects)
      setSelectedProject(projects[0]._id)
      setProjectTitle(projects[0].name)
    } 
    fetchProjects()   //API Call to fetch the Projects
  }, [])

  //input handler filter for change event
  const handleFilterTasks = (e) => {
    setSearchWord(e.target.value) // setting the search word
    const filteredTasks = []  //filtered Task Blank Array
    for(let i=0; i < tasks.length; i++){
      if(tasks[i].task && tasks[i].task.toLowerCase().includes(e.target.value.toLowerCase())){
        filteredTasks.push(tasks[i])
      }
    }
    setFilteredTaskState(filteredTasks) //setting up the filtered Tasks
  }

  return (    
    <Layout>
    <Header className="header">
      <div className="logo" />
      <a className='plusIcon' href='#'>
        <PlusOutlined />
      </a>            
      <Input className='inputSearch' onChange={handleFilterTasks} placeholder='Search Tasks' prefix={<SearchOutlined />} />
    </Header>
    <Layout>
      <div className='container'>
        {/* <div className='titleText'><h1>To-Do Tasklist App</h1></div>               */}
        <div className='projectsContainer'>
          <Projects projects={projects} setSelectedProject={setSelectedProject} />
        </div>      
        <div className='tasksContainer'>
          <Tasks projectTitle={projectTitle} selectedProject={selectedProject} tasks={searchWord && searchWord.length > 0 ? filteredTasksState : tasks} />
        </div>
      </div>
    </Layout>
    </Layout>
  );
}


export default App;
