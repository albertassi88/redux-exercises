import React from 'react';
import TableWallet from '../components/TableWallet';
import { walletActions } from '../redux/actions';
import { connect } from 'react-redux';
import '../css/form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',   
      method: 'Dinheiro',
      tag: 'Alimentação',      
    };

    this.hundleOnClick = this.hundleOnClick.bind(this);
    this.renderInputValor = this.renderInputValor.bind(this);
    this.renderInputDescricao = this.renderInputDescricao.bind(this);
    this.renderSelectPagamento = this.renderSelectPagamento.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderDispatch = this.renderDispatch.bind(this);
  } 

  hundleOnClick({ target: { name, value } }) {
    this.setState(() => ({
      [name]: value,
    }));
  }

  renderDispatch() {
    const { id } = this.state;
    const { walletDispatch } = this.props;
    this.setState({
      id: id + 1,
      value: 0,
      description: '',   
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    walletDispatch(this.state)
  }

  renderInputValor() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input id="value" name="value" value={ value } onChange={ this.hundleOnClick } type="text"/>
      </label>
    );
  }

  renderInputDescricao() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input id="description" value={ description } name="description" onChange={ this.hundleOnClick }/>
      </label>
    );
  }  

  renderSelectPagamento() {
    const { method } = this.state;
    return (
      <label htmlFor="pagamento">
        Método de Pagamento:
        <select onChange={ this.hundleOnClick } value={ method } name="method" id="pagamento">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" value={ tag } onChange={ this.hundleOnClick }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const{ id, value, description, method, tag } = this.state
   
    return (
      <div className="container">
        <form className="container_form">
          { this.renderInputValor() }
          { this.renderInputDescricao() }    
          { this.renderSelectPagamento() }
          { this.renderTag() }
          <button onClick={ this.renderDispatch } type="button">Adicionar</button>
        </form>
        <div className="container_table">
          <TableWallet />
        </div>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  walletDispatch: (value) => dispatch(walletActions(value)),
});

export default connect(null,MapDispatchToProps)(Form);