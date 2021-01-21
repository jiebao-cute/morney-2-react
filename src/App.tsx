import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './components/Layout';

 function App() {
   return (
     <Router>
           <Switch>
             <Route path="/tags">
               <Tags/>
             </Route>
             <Route path="/money">
               <Money/>
             </Route>
             <Route path="/statistics">
               <Statistics/>
             </Route>
             <Redirect exact from="/" to="/money"/>
             <Route path="*">
               <NoMatch />
             </Route>
           </Switch>
     </Router>
   );
}
function Statistics() {
  return(
    <Layout>
      <h2>统计</h2>
    </Layout>
    )
}

function Tags() {
  return(
     <Layout>
        <h2>标签</h2>
     </Layout>
)
}

function Money() {
  return(
    <Layout>
       <h2>记账</h2>
    </Layout>
  )
}

function NoMatch(){
  return(
    <div>页面不存在，地址错啦</div>
  )
}

export default App;