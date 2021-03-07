import React from 'react';
import './Item.css';

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,
            sector: '',
            pais: '',
            stars:[]
        };
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            // stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }

    render(){
    return(
        
        <div className="item">
            <div className="image"><img src={'img/' + this.props.image} width="100%" /></div>
            <div className="title">{this.state.title}</div>
            <div className="rating">
                <p>
                    {this.state.stars.map(x =>
                        <img src="img/star.png" width="32" />
                    )}

                </p>
            </div>
            <div className="actions">
                <button>Ver Ofertas</button>
            </div>
        </div>

    );
    }
}

export default Item;