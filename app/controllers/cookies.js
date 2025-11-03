
const cookiesController = {

    get(req, res){
        console.log(req.query)

        return res.json({ payload : req.query?? req.params })
    },


    post(req, res){
        const { cookies } = req.body 
        return res.json({ cookies })
    }


}

module.exports = cookiesController