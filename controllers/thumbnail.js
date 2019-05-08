var thumb = require('node-thumbnail').thumb;
var path = require('path');
var dir = path.join(__dirname, '/../thumbnails');

class Thumbnail{
    generateThumbnail(req, res, next){
        var filename = path.basename(req.query.img)
        filename = filename.substr(0, filename.lastIndexOf("."));
        var ext = path.extname(req.query.img);
        var options = {
            source: req.query.img,
            destination: 'thumbnails',
            suffix:Date.now(),
            width: 50,
            height: 50,
            concurrency: 4
          }
        thumb(options, function(files, err, stdout, stderr) {
            res.sendFile(dir + `/${filename+options.suffix+ext}`);
          });
    }
}

module.exports = new Thumbnail();