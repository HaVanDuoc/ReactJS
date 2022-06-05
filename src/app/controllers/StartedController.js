// Started Controller

class StartedController {
    index(req, res) {
        res.render('Getting Started Page');
    }

    installing(req, res) {
        res.send('Installing page');
    }
}

module.exports = new StartedController();
