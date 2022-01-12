import React,{useState} from 'react';
import { connect } from "react-redux";
import './Bat.css'
import {buyBall} from '../redux/ballActions'

function Ball(props) {
    const [qty,setQty]=useState(1)
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Balls:{props.balls}</h1>
            <div className='btn-bat'>
                <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}/>
            <button onClick={props.sellball} >Sell Ball</button>
            <button onClick={()=>props.buyball(qty)} >Buy Ball</button>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        balls:state.ball.balls
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        buyball:(qty)=>dispatch(buyBall(qty)),
        sellball:()=>dispatch({type:'SELL_BALL'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)