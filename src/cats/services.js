require('dotenv').config();
var fetch = require('node-fetch');
const { path } = require('..');

exports.getCat = async function(gif, tag, text) {
    try {
        let cat;
        await fetch(getPath(gif, tag, text))
            .then(response => response.blob())
            .then(images => {
                cat = images
            });

        return cat;
    } catch (e) {
        console.log(e);
        throw Error('Error to get cat.');
    }
}

function getPath(gif, tag, text){
    let suffix = '/cat';

    if(gif == 'true'){
        suffix += '/gif';
    }else{
        if(tag != null && tag != ''){
            suffix += '/' + tag;
        }
        if(text != null && text != ''){
            suffix += '/says/' + text;
        }
    }
    return process.env['CAT_HOST'] + suffix;
}