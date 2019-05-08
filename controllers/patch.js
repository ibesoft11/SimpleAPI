var jsonpatch = require('jsonpatch');
//var jsonpatch = require('fast-json-patch')

class JsonPatch{
    patchDoc(req, res, next){
        var document = JSON.parse(req.body.document);
        var patch = JSON.parse(req.body.patch);
        document = jsonpatch.apply_patch(document, patch);
        res.json(document);
    }
}

module.exports = new JsonPatch();