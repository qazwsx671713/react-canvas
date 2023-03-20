const initData={draw:false}

export default (pre=initData,action)=>{
    const {type,data} = action
    switch(type){
        case 'modify_draw':
            return {...pre,draw:data}
        default:
            return initData
    }
}