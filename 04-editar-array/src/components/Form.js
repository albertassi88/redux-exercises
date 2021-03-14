import React from 'react';
import { connect } from 'react-redux';
import { userAction, editAction, salveAction } from "../redux/actions";

class Form extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: '',
      id: 0,
    }    
    this.handleButton = this.handleButton.bind(this);
    this.handleButtonEdit = this.handleButtonEdit.bind(this);
  } 

  handleButton() {
    const { user, idUser} = this.props;
    const { id } = this.state; 
    user(this.state)
    this.setState(
      {
        ...this.state, 
        id: id + 1 
      }, () => idUser(id));
  };

  handleButtonEdit() {
    const { salveUser} = this.props;  
    salveUser(this.state)    
  }

  render() {
      const { userState, idUser, salveUser } = this.props;       

      return (
        <div>
          Nome
          <input value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })}></input>
          Idade
          <input value={this.state.idade} onChange={(e) => this.setState({ idade: e.target.value })}></input>
          <button onClick={ this.handleButton }>Confirmar</button>
          <table>   
            <tbody>         
              {userState.map(item => { 
                return (                
                  <tr key={item.id}>                
                    <th>{item.nome}</th>
                    <th>{item.idade}</th>
                    {/* <th><button onClick={ this.handleButtonEdit } >Editar</button></th> */}
                    <th><button onClick={ () => idUser(item.id) && salveUser(item.id) } >Editar</button></th>
                  </tr>
              )})}            
              </tbody>
          </table>         
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.user.user,
  userId: state,
})

const mapDispatchToProps = (dispatch) => ({
  user: (value => dispatch(userAction(value))),
  idUser: (value => dispatch(editAction(value))),
  salveUser: (value => dispatch(salveAction(value))),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);