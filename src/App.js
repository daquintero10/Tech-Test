import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      empresas:[
          {id:0, rating: 5, title: 'Torre', image: 'torre.png', sector: 'Tecnología', pais: 'Estados Unidos'},
          {id:1, rating: 5, title: 'Google', image: 'google.jpg', sector: 'Tecnología', pais: 'Colombia'},
          {id:2, rating: 4, title: 'Facebook', image: 'facebook.png', sector: 'Tecnología', pais: 'Estados Unidos'},
          {id:3, rating: 4, title: 'Tesla', image: 'tesla.png', sector: 'Automotriz', pais: 'Canada'},
          {id:4, rating: 5, title: 'Apple', image: 'apple.png', sector: 'Consumo Masivo', pais: 'Estados Unidos'}
      ],
      copyempresas:[]
    };
  }

  componentDidMount(){
    this.initEmps();
  }

  initEmps(){
    this.setState((state,props) => ({
      copyempresas: [...state.empresas]
    }));
  }

  onSearch(query){
    if(query ===''){
      this.setState({copyempresas: [...this.state.empresas]});
    }else{
      const temp = [...this.state.empresas];
      var res = [];

      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyempresas: [...res]});
    }

  }

  render(){
    return(
      <div className="app">
        <Menu title="Torre" onsearch={this.onSearch}/>
        <List className="List" items={this.state.copyempresas}/>
      </div>
    );
  } 
}

export default App;
