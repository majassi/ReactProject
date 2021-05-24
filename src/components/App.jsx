import React from "react";
import useFetch from "../composables/useFetch";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CenteredTabs from "../components/Navbar";
import Create from "./Create";
import ViewBooks from "../components/ViewBooks";
import { TextField } from '@material-ui/core';
import { Grid, Typography, Button } from '@material-ui/core';
import './app.css'; 




const App = () => {
  const { error, isPending, data } = useFetch("collection");

  return (
    
    <Router>
    <div className="home">
    <Typography variant="h4" component="h2" color="secondary">
      Welcome to the Library
      </Typography>
    <CenteredTabs />
      <Switch>
        <Route exact path="/">
          <div className="main">
            <h1>
            Welcome to the book library. We have collected some of the hottest books that is on Amazon. 
            View some of the best selling books by clicking the button below. 
            </h1>
            </div>
            <Button variant="contained" color="primary" href="#www.google.com">
            View books
            </Button>
            
            <Grid item xs={12} className="Input">
  <TextField className="filled-basic" label="Username" variant="outlined" />
  <TextField ClassName="filled-basic" label="Email" variant="outlined" />
  <TextField ClassName="filled-basic" label="Password" variant="outlined" />
  <TextField ClassName="filled-basic" label="Repeat Password" variant="outlined" />
  </Grid>
            

            
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/viewBooks">
        {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && data.map((data, index) => <ViewBooks key={index} data={data} />)}
        </Route>
      </Switch>
    </div>
    </Router>
  );
};




export default App;
