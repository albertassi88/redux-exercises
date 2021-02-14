import React from 'react';
import { hadleSpendMoney } from '../redux/actions/account';
import { connect } from 'react-redux';

class Son extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { reduxStore: { account: { money } } } = this.props;        
        return(
            <div>
                <p>{money}</p>
                <button onClick={() => this.props.spendMoney(100)}>Aperte</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxStore: state,
});

const mapDispatchToProps = (dispatch) => ({
    spendMoney: (e) => dispatch(hadleSpendMoney(e)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Son);