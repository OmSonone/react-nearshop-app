import React,{Component} from 'react';
import Search from '../search/search.js'
import Itemlist from './itemlist'

// import { connect } from 'react-redux';
 

class Shopview extends Component{

  constructor()
  {
      super();            //fr accesing parents and other class memmbers
      this.state=
       {
        robots:[],        //state is used to store all modifying members(dynamic props)
            searchfield:''
       }

   }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots:users}));
      }


      onsearchchange=(event)=>              //fun to to change input value
      { this.setState({searchfield:event.target.value})
      }

      
      render(){
      const frobots= this.state.robots.filter(robots=>     //take the changed value and change in states robots name
      {
              return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });

      if(frobots.length===0)
      {
        return (<div className='tc'>
          <Search searchchange={this.onsearchchange}/>
          <h1 className='tc'>nt found</h1>

          </div>);
      }
      else{
          return(
        <div className='tc'>
        

         
        <Search searchchange={this.onsearchchange}/>
        <Itemlist robots={frobots}/>

         
        

        </div>);
        }
        
        

  }
  
      
}
export default Shopview;