var CatService = require('./services');

exports.getCat = async function(req, res) {
    try {
        
        let gif = req.query.gif;
        let tag = req.query.tag;
        let text = req.query.text;
        
        let cat = await CatService.getCat(gif, tag, text);
        
        res.status(200).type(cat.type)
        cat.arrayBuffer().then((buf) => {
            res.send(Buffer.from(buf))
        });

    } catch (e) {
        console.log(e);
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
};