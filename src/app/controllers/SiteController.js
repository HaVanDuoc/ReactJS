// Controllers

const Course = require('../models/Course');

class SiteController {
    // [GET]/
    home(req, res, next) {
        Course.find({}, function (err, course) {
            if (!err) {
                res.json(course);
            } else {
                res.status(400).json({ error: 'message' });
            }
        });

        // res.render('home');
    }

    // [GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
