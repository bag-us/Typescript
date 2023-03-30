interface intCovid {
    getData(): Promise<{
        confirmed: number,
        recovered: number,
        deaths: number
    }>
}

let tempData: any = null

class Covid implements intCovid{
    country: string
    constructor(country: string){
        this.country = country
    }
    async getData(){
        const response: any = await fetch(`https://covid19.mathdro.id/api/countries/${this.country}`)
        const data: any = await response.json()
        tempData = data
        return {
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value
        }
    }
}
class ProxyCovid implements intCovid{
    covid: Covid
    constructor(covid: Covid){
        this.covid = covid
    }
    async getData(){
        if(tempData){
            console.log("didapat dari cache")
            return {
                confirmed: tempData.confirmed.value,
                recovered: tempData.recovered.value,
                deaths: tempData.deaths.value
            }
        }
        console.log("didapat dari api")
        return this.covid.getData()
    }
}
const getCovid = async () => {
    const covid1 = new ProxyCovid(new Covid("id"))
    console.log(covid1.getData())
    
    const covid2 = new ProxyCovid(new Covid("id")) //cache
    console.log(covid2.getData())
}
getCovid()