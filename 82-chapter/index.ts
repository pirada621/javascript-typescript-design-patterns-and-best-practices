type User ={
    name: 'lll'
    show: ()=> void
}
type Customer = {
    name:'ggg'
    buy: () =>  void
}

type Sale =User |   Customer
function handleSale(sale: Sale){
    if(sale.name === 'ggg'){
        sale.buy()
    }else{
        sale.show()
    }
}