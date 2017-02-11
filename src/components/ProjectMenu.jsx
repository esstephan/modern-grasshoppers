import React from 'react';

var ProjectMenu = (props) => { //dropdown menu of current projects with option to add more
  return (
      <div id='projectDropdown' className='dropdown'>
        <h3>Test Project Menu</h3>
        {props.globalProjectArray.map((project) =>
          <Project
          projectName={project.name}
          />
        )}
        <Project
        projectName = "Test Project"
        />
      </div>
  );
}

ProjectMenu.propTypes = {
  project: React.PropTypes.string
};

window.ProjectMenu = ProjectMenu;