interface NumbericConverter{
    convertNumber(number: number): void
}
class NumberConvertion {
    private strategy: NumbericConverter
    constructor(strategy: NumbericConverter){
        this.strategy = strategy
    }
    execute(num : number):void{
        this.strategy.convertNumber(num)
    }
}
class NumberToCurrency implements NumbericConverter{
    convertNumber(num: number):void{
        console.log(num.toLocaleString('id-ID',{
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'IDR'
        }))
    }
}
class NumberToDecimal implements NumbericConverter{
    convertNumber(num: number):void{
        console.log(num.toLocaleString('id',{
            minimumFractionDigits: 2
        }))
    }
}
class NumberToDate implements NumbericConverter{
    convertNumber(num: number):void{
        console.log(new Date(num).toUTCString())
    }
}
const mataUang = new NumberConvertion(new NumberToCurrency())
mataUang.execute(9000000000)

const desimal = new NumberConvertion(new NumberToDecimal())
desimal.execute(88880000000)

const date = new NumberConvertion(new NumberToDate())
date.execute(1599999990999)