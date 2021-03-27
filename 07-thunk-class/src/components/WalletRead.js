import React from 'react';
import { connect } from 'react-redux';

class WalletRead extends React.Component {
    render() {
        const { walletState: { walletReducers: { expenses } } } = this.props; 
        console.log(expenses)
        return (
            <div>
                {Object.entries(expenses).map(item => (
                    <p>{item[1].name}</p>
                ))}
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    walletState: state,
})

export default connect(mapStatetoProps)(WalletRead);
