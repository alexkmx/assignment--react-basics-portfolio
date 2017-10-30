import React, {Component} from 'react';

class ProjectData extends Component {
  render() {
    let herDataList = this.props.items.projectName
    console.log(this.props.items.projectName);

    return (
      <div className="project project-list">
        <span className="project__title">{herDataList}</span>
      </div>
    )
  }
}

export default ProjectData;
