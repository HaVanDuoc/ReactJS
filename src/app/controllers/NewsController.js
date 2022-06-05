// Controllers

class NewsController {
    // [GET]/news
    index(req, res) {
        res.render('news');
    }

    // [GET]/news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }

    // [GET]/news/thoisu
    thoisu(req, res) {
        res.send('THOI SU');
    }

    // [GET]/news/thoitiet
    thoitiet(req, res) {
        res.send('THOI TIET');
    }
}

module.exports = new NewsController();
