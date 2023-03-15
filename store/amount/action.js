const deposit = () =>{
    return {
        //siempre retorna un objeto
        type:"DEPOSIT_MONEY",
        payload: 10
    }
}

const withdraw = () =>{
    return {
        //siempre retorna un objeto
        type:"WITHDRAW_MONEY",
        payload: 10
    }
}

export {deposit, withdraw};