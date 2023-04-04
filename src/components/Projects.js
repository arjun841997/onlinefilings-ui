
import { Collapse } from 'antd';
import { Button } from 'antd';

const { Panel } = Collapse;

/* Projects Component to Hold the Projects
  Props - projects - list of all projects
          setSelectedProject - to set the selected Project          
*/ 

function Projects({projects, setSelectedProject}) {
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Projects">      
      {projects.map((el) =>{
        return(<><Button onClick={() => {setSelectedProject(el._id)}} type="link" key={el._id}>
          {el.name}
        </Button><br /></>)
      })}
      </Panel>
    </Collapse>
    </>
  );
}

export default Projects;
