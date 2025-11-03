
const cookiesController = {

    get(req, res){
        console.log("-*-------------------")
        console.log(req.query)
        console.log("-*-------------------")
        return res.json({ payload : req.query?? req.params })
    },


    post(req, res){
        const { cookies } = req.body 

        console.log("--------------------")
        console.log(req.cookies)
        console.log("--------------------")
        return res.json({ cookies })
    }


}

module.exports = cookiesController