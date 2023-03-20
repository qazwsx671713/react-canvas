import React from 'react';
import './Canvas.css'
import { useRef ,useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { changeDrawState } from '../../redux/actionCreator';
const Canvas = () => {
    const draw = useSelector(state=>state.draw)
    // const [count, setcount] = useState(0);
    // const dispatch = useDispatch()
    let pen;
    const canvas_ref = useRef();
    // 需要用useEffect包裹，不然读取到的是上一个快照的canvas
    useEffect(()=>{
        pen = canvas_ref.current.getContext('2d');
        pen.fillStyle="#FF0000";
    })
    const draw_pic = (e)=>{
        const draw_x = e.pageX - canvas_ref.current.offsetLeft
        const draw_y = e.pageY - canvas_ref.current.offsetTop
        pen.beginPath();
        pen.arc(draw_x,draw_y,3,0,2*Math.PI,true)
        pen.fill();
        return
    }
    return (
        <div id='canvas-container'>
            <div className="header"></div>
            <canvas id='my_canvas' ref={canvas_ref} onClick={()=>changeDrawState(!draw)} onMouseMove={draw?draw_pic:()=>{}} width='500' height='500'>
            </canvas>
        </div>
    );
}

export default Canvas;
