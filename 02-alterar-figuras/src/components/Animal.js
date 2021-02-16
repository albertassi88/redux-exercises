import React from 'react';
import animais from '../data';
import { connect } from 'react-redux';
import {animalAction} from '../redux/actions';
import '../components/animal.css';

class Animal extends React.Component {        
    render() {    
        const { mapState: { animais: { foto: { linkFoto } }} } = this.props; 
        const { mapState: { animais: { foto: { name } }} } = this.props;
        const { mapDispatch } = this.props;

        return(
            <div className="foto">
                {animais.map(animal => 
                    <button onClick={() => mapDispatch(animal)} key={animal.id}>{animal.name}</button>                                        
                )}
                <div>
                    <img src={linkFoto}></img>              
                    <p>{name}</p>
                </div>                             
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    mapState: state,
});

const mapDispatchToProps = (dispatch) => ({
    mapDispatch: (value => dispatch(animalAction(value))),        
});

export default connect (mapStateToProps, mapDispatchToProps)(Animal);