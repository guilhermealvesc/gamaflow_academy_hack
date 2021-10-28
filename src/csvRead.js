const csvFilePath = './csv/completo.csv'
const csv = require('csvtojson')

// for (let i = 0; i < 28248; i++) {
//     tmp.push({ 
//         subrand: '',
//         orderQnt: '',
//         used:false,
//      })
// }


module.exports = ()=>{
    return csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        // for (let i = 0; i < jsonObj.length; i++) {
        //     tmp[i].subrand += 'jsonObj[i].subrand'
        //     tmp[i].orderQnt += 'jsonObj[i].orderQnt'
        // }
        
        let tmp = []
        jsonObj.forEach(element => {
            // console.log(element.subrand, element.qnt
            tmp.push({
                subrand: element.subrand,
                orderQnt: parseInt(element.qnt),
                used:false,
            })
        })
        return tmp
        // console.log(jsonObj)
    })
}
// const jsonObj = csv().fromFile(csvFilePath);
// console.log(jsonObj);