import React from 'react';
import { connect } from 'react-redux';
import { excluirActions } from '../redux/actions';
import '../css/tableWallet.css';

class TableWallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    return (
      <tbody>
        <tr className="table">
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>          
        </tr>
      </tbody>);
  }

  render() {  
    const { walletState, excluirState } = this.props;      

    return (
      <div>
        <table>
          {this.renderTable()} 
          {walletState.map(item => { 
             return (
                <tbody className="table_tr" key={item.id}>           
                  <tr >
                    <td>{item.description}</td>
                    <td>{item.tag}</td>
                    <td>{item.method}</td>
                    <td>{item.value}</td>
                    <td><button onClick={ () => excluirState(item.id) }>Excluir</button></td>
                  </tr>
              </tbody>);
            })}            
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  walletState: state.wallet.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  excluirState: (value) => dispatch(excluirActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);