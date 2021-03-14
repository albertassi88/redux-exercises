import React from 'react';
import { connect } from 'react-redux';
import { userAction, editAction, salveAction } from "../redux/actions";

class Form extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: '',
    }

    this.handleButton = this.handleButton.bind(this);  
  } 

  handleButton() {
    const { user, salveUser, idToEdit, editor } = this.props;
    editor ? salveUser(this.state) : user(this.state);    
  }; 

  render() {
      const { userState, editUser, editor } = this.props;  

      return (
        <div>
          Nome
          <input value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })}></input>
          Idade
          <input value={this.state.idade} onChange={(e) => this.setState({ idade: e.target.value })}></input>
          <button onClick={ this.handleButton }>{ editor ? 'Salvar' : 'Adicionar' }</button>
          <table>   
            <tbody>         
              {userState.map(item => { 
                return (                
                  <tr key={item.id}>                
                    <th>{item.nome}</th>
                    <th>{item.idade}</th>              
                    <th><button onClick={ () => editUser(item.id) } >Editar</button></th>
                  </tr>
              )})}            
              </tbody>
          </table>         
        </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userState: user.user,
  idToEdit: user.idToEdit,
  editor: user.editor,
})

const mapDispatchToProps = (dispatch) => ({
  user: (value => dispatch(userAction(value))),
  editUser: (value => dispatch(editAction(value))),
  salveUser: (value => dispatch(salveAction(value))),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);