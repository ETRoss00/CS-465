/* GET travel view */
const travel = (req, res) => {
    console.log('Inside app_server, controllers, travel.js travel function.');
    res.render('travel', {title: 'Travlr Getwaways' });
};

module.exports = {
    travel
};