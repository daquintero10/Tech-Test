import React from 'react';
import Search from './Search';
import './Menu.css';
import PanelFilter from './PanelFilter';

class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state = {newItemPanel: false};
        this.filter = this.filter.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    filter(){
        this.setState({newItemPanel: true});
        console.log('mensaje');
    }

    onCancel(e){
        e.preventDefault();
        this.setState({newItemPanel: false});   
    }

    render(){
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {this.props.title}
                </div>

                <div className="search">
                    <Search onsearch={this.props.onsearch} />
                </div>

                <div className="actions">
                    <button onClick={this.filter} className="button btn-blue">Filtrar Busqueda</button>
                </div>

            </div>
            {
                (this.state.newItemPanel)?
                    <PanelFilter onCancel={this.onCancel} />
                :
                ''
            }

        </div>
    );
    }
}

export default Menu;