import moment from 'moment'
 
const ProjectSummary = ({project}) => {  //That project is coming from the from dashboirsd we don't have to worry about the fetching 
    return (  
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{project.title}</span>
          <p>Posted by The {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{project.createdAt
            ? moment(project.createdAt.toDate()).calendar()
            : "3rd May, 2020"} </p>
        </div>
      </div>
    );
}
 
export default ProjectSummary;