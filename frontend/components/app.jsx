import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import Modal from './modal/modal';
import CategoryContainer from "./category/category_container";
import GreetingContainer from './greeting/greeting_container';
import HeaderContainer from './header/header_container';
import SplashContainer from './splash/splash_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectShowContainer from './projects/project_show_container';
import CreateProjectFormContainer from './projects/create_project_form_container';
import EditProjectFormContainer from './projects/edit_project_form_container';
import ProjectPhotoContainer from './modal/project_photo_container';
import Footer from "./footer/footer";

const App = () => (
    <div>
        <Modal />
        <header>
            <CategoryContainer />
            <HeaderContainer />
        </header>
        <div className="container">
            <Switch>
                <Route exact path='/' component={SplashContainer} />
                <AuthRoute exact path="/login" component={LogInFormContainer}/>
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <Route exact path='/projects' component={ProjectIndexContainer} />
                <Route exact path='/projects/:id' component={ProjectShowContainer} />
                <Route exact path='/projects/new' component={CreateProjectFormContainer} />
                <Route exact path='/search/:query' component={ProjectIndexContainer}/>
                <Route exact path='/projects/:id/edit' component={EditProjectFormContainer} />
            </Switch>    
                {/* <Route path='/projects/:id/edit' component={ProjectPhotoContainer} /> */}
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;