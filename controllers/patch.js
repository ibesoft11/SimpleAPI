var jsonpatch = require('jsonpatch');

class JsonPatch{
    patchDoc(req, res, next){
        var document = typeof(req.body.document)=="string" ? JSON.parse(req.body.document) : req.body.document;
        var patch = typeof(req.body.patch)=="string" ? JSON.parse(req.body.patch) : req.body.patch;
        document = jsonpatch.apply_patch(document, patch);
        res.json(document);
    }
}

module.exports = new JsonPatch();