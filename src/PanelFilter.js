import React from 'react';

class PanelFilter extends React.Component{

    constructor(props){
        super(props);
        this.state ={
                title: '',
                sector: 1,
                pais: 1,
        };
    }

    onChangeCompName = (e) =>{
        this.setState({title: e.target.value});
    }

    onChangeSector = (e) =>{
        const sector = parseInt(e.target.value);
        this.setState({title: e.target.value});
    }

    onChangePais = (e) =>{
        const pais = parseInt(e.target.value);
        this.setState({title: e.target.value});
    }

    

    onSubmit(e){
        e.preventDefault();
    }

    render(){

    return(
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={this.onSubmit}>
                    <p>
                        <label>Nombre de la empresa</label>
                        <input onChange={this.onChangeCompName} type="text" name="title" className="input"/>
                    </p>

                    <p>
                        <label>Sector</label><br />
                        <select onChangeSector={this.onChangeSector}>
                            <option value="1">Técnología</option>
                            <option value="2">Consumo masivo</option>
                            <option value="3">Automotriz</option>
                        </select>
                    </p>

                    <p>
                        <label>País</label><br />
                        <select onChangePais={this.onChangePais}>
                            <option value="1">Colombia</option>
                            <option value="2">Estados Unidos</option>
                            <option value="3">Canada</option>
                        </select>
                    </p>

                    <input type="submit" className="button btn-blue" value="Buscar" />
                    <button onClick={this.props.onCancel} className="button btn-normal">Cancelar</button>

                </form>

            </div>

        </div>
    );
    }
}

export default PanelFilter;