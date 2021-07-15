import React, { Component,useEffect } from 'react';
import {Route,Switch} from "react-router-dom"

import NavBar from './component/NavBar'
import Home from './component/Home';
import CrecheList from './component/creches/CrecheList';
import JardinList from './component/jardins/JardinList';
import EcoleList from './component/ecoles/EcoleList';
import ClubList from './component/clubs/ClubList';

import CrecheDetail from './component/creches/CrecheDetail';
import EcoleDetail from './component/ecoles/EcoleDetail';
import JardinDetail from './component/jardins/JardinDetail';
import ClubDetail from './component/clubs/ClubDetail';
import Footer from './component/Footer';


import Login from './component/Login'
import RegisterParent from './component/RegisterParent'
import RegisterPartenaire from './component/RegisterPartenaire'


import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from './JS/actions/partenaireAction';
import {getAuthParent} from './JS/actions/authAction'
import LoginPartenaire from './component/LoginPartenaire';
import PartenaireDashboard from './component/PartenaireDashboard';
import PrivateRoute from './component/routes/PrivateRoute';
import ParentDashboard from './component/ParentDashboard';
import AdminDashboard from './component/AdminDashboard';
import {getusers} from './JS/actions/userAction'


function App() {

 

    const getParent = () => dispatch(getAuthParent());
  useEffect(() => {
    getParent();
  }, []);
    
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPartenaire());
  }, []);
  const partenaires = useSelector((state) => state.PartenaireReducer.partenaires);
  // const crecheFiltred = useSelector((state) => state.partenaires.filter(el=>el.categorie=='creche'));
  // console.log(partenaires)
  // console.log(crecheFiltred)
  //  console.log(partenaires.filter(el=>el.categorie=='creche'))
  useEffect(() => {
    dispatch(getusers());
  }, []);
const users = useSelector(state=>state.userReducer.users)

// console.log(partenaires)
// console.log(users)
// console.log(localStorage.getItem(state.payload.token))

  return (
    <div className="App">
      
      <NavBar/>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/se-connecter-parent" component={Login} />
      <Route exact path="/se-connecter-partenaire" component={LoginPartenaire} />
      <Route path="/inscrire-parent" component={RegisterParent}/>
      <Route path="/inscrire-partenaire" component={RegisterPartenaire}/>
      


      <Route path="/liste-crèches" component={CrecheList}/>
      <Route path="/liste-jardins" component={JardinList}/>
      <Route path="/liste-écoles" component={EcoleList}/>
      <Route path="/liste-clubs" component={ClubList}/>
      <PrivateRoute path="/partenaire-dashboard" component={PartenaireDashboard} />
      <PrivateRoute path="/parent-dashboard" component={ParentDashboard} />
      <PrivateRoute  path="/admin-dashboard" component={AdminDashboard} />



      <Route path="/description/creche/:id"
        render={(props) => <CrecheDetail  {...props} partenaires = {partenaires} />}  />
      <Route path="/description/ecole/:id"
        render={(props) => <EcoleDetail  {...props} partenaires = {partenaires} />}    />
      <Route path="/description/jardin/:id"
        render={(props) => <JardinDetail  {...props} partenaires = {partenaires} />}   />
      <Route
       path="/description/club/:id"
        render={(props) => <ClubDetail  {...props} partenaires = {partenaires}  />}     />
    
     {/* <Footer/> */}


      
    </div>
  );
}

export default App;
