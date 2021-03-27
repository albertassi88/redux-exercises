import React from 'react';
import { connect } from 'react-redux';
import { fetcheconomiaThunk }from '../redux/actions';
import WalletRead from '../components/WalletRead';

class WalletWrite extends React.Component {

    componentDidMount() {
        const { walletDispatch } = this.props;
        walletDispatch();
    }

    render() {
        return (
            <div>
                <WalletRead />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    walletDispatch: () => dispatch(fetcheconomiaThunk())
})

export default connect(null, mapDispatchToProps)(WalletWrite);
