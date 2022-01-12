import React, { useState } from 'react'
import { connect } from 'react-redux';
import './Bat.css'


function Bat(props) {
    // console.log(props);
    // const [bat, setBat] = useState(50);
    return (

        <>
             <div>
                <h1 style={{ textAlign: 'center' }}>Bats:{props.bats}</h1>
            </div>
            <div className='btn-bat'>
                <button onClick={props.buybat} >Reduce bats</button>
            </div>


        </>
    )
}

const mapStateToProps = (state) => {
    return {
        bats: state.bat.bats
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        buybat:()=>dispatch({type:"BUY_BAT"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat)
