import React from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreaters from '../../store/actions/actionTypes'

const counter = (props) => {
    const left = {
        textAlign: `left`,
        color: `maroon`
    }
    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.onIncrementCounter} />
            <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
            <CounterControl label="Bit More" clicked={props.onAddCounter} />
            <CounterControl label="Bit Less" clicked={props.onSubtractCounter} />
            
            <hr/>

            <button
                onClick={props.onAddBtnClick} 
                className="CounterControl"
                children="Add Results" />

            <h3 style={left}>Results here:</h3>
            <ul style={left}>
                {props.resultProps.map(
                    (val,index) => <li onClick={() => props.onDelBtnClick(index)} key={index}>{val}</li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        resultProps: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddBtnClick: () => dispatch(actionCreaters.addResult()),
        onDelBtnClick: (id) => dispatch(actionCreaters.deleteResult(id)),
        onIncrementCounter: () => dispatch(actionCreaters.increment()),
        onDecrementCounter: () => dispatch(actionCreaters.decrement()),
        onAddCounter: () => dispatch(actionCreaters.add(12)),
        onSubtractCounter: () => dispatch(actionCreaters.subtract(7))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(counter);