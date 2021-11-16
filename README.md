# Upgradeables

![alt text](https://github.com/nhsb00/Upgradeable/blob/main/app/assets/images/splash_page.gif)

Upgradeables, a Instructables clone, is an learnable website that users can upload learnable projects, which users can share any tips and ideas and comment on the projects.

[Live Link](https://upgradeable.herokuapp.com/#/)

## Technologies

### Backend
* PostgreSQL
* Ruby on Rails

### Frontend
* React
* Redux
* AWS
* CSS

## Features
### User authentication
  Users can log in, sign up, or try demo to use full features. If users put wrong infromation and/or missing information, it will return error messages. Users can log out if they are logged in.
  
![alt text](https://github.com/nhsb00/Upgradeable/blob/main/app/assets/images/user_auth.gif)
  
### Project Creation And Adding Photo
  Users can start to create project inside of dropdown box. Modal function will be appeared where users can type title and body, and create project. After user click the button to start upgradeables, user will directly link to the edit page to fix the body of project, to add steps, and to delete project. Once user publish the project, user will link to created project page. Users also can upload any pictures using by AWS.
  
![alt text](https://github.com/nhsb00/Upgradeable/blob/main/app/assets/images/project_creation.gif)
 
 When I published the project, the steps were saving one more time so I had two same steps. To avoid this, I set submitted is true. Once the step was submitted which has id on it, I will update the step. If it is not existed, then step will be created as a new step. 
 
 ```ruby
    handleSubmit(e) {
        e.preventDefault();
        this.submitted = true;

        if (this.state.id) {
            this.props.updateStep(this.state);
        } else {
            this.props.createStep(this.state, this.props.projectId);
        }
    }
    
    componentWillUnmount() {
        if (this.submitted === false ) {
            if (this.state.id) {
                this.props.updateStep(this.state);
            } else {
                this.props.createStep(this.state, this.props.projectId);
            }
        }
    };
```
 
### Comment
 Users can leave, edit, and delete their comments on each projects.
![alt text](https://github.com/nhsb00/Upgradeable/blob/main/app/assets/images/comment.gif)
 
### Search Engine
 Users can search related projects by keyword.
![alt text](https://github.com/nhsb00/Upgradeable/blob/main/app/assets/images/search.gif)
