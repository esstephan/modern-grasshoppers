import React from 'react';

var Project = (props) => {
  return (
    <div className="project">
    <p>{props.projectName}</p>
    </div>
    )
}


// `var` declarations will only exist globally where explicitly defined.
window.Project = Project;