import React from 'react';
import Item from './Item';
import './List.css';

function List(props){
    return(
        <div className="list">
            {
                props.items.map(item => 
                    <Item 
                        title={item.title}
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        image={item.image} 
                        rating={item.rating}  />  

                )
            }

        </div>
    );

}

export default List;