import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { 
  WelcomePage,
  SwapiPage,
  SwapiFilmListPage,
  RegisterForm,
  SwapiPeoplePage,
  SelectPerson,
  PersonForm, 
} from '../pages';
import { Header } from '../components/Header';
import { 
  ArchivedPage,
} from '../pages/ArchivedPage';
import { 
  FormPage,
  HookNewsPage,
  ToggleStatePage,
  UserProfilePage, 
} from '../archived';

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/swapi" component={SwapiPage}/>
          <Route path="/film" component={SwapiFilmListPage}/>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/people" component={SwapiPeoplePage}/>
          <Route path="/select/:id" component={SelectPerson}/>
          <Route path="/person-form" component={PersonForm}/>
          <Route exact path="/archived" component={ArchivedPage}/>
          <Route exact path="/archived/form" component={FormPage}/>
          <Route exact path="/archived/hook" component={HookNewsPage}/>
          <Route exact path="/archived/toggle" component={ToggleStatePage}/>
          <Route exact path="/archived/user" component={UserProfilePage}/>
        </Switch>
      </Router>
    </div>
  );
}

