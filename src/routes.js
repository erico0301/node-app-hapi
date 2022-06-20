const { getStart } = require('./handler');

const routes = [
    {
        method: 'GET',
        path:'/',
        handler: getStart,
    },
];

module.exports = routes;
