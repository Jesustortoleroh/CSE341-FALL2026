const carlaRoute = (req, res) => {
    res.send('Carla Birch');
}

const emilyRoute = (req, res) => {
    res.send('Emily Birch');
};

const hannahRoute = (req, res) => {
    res.send('Hannah Birch');
}

module.exports = { carlaRoute, emilyRoute, hannahRoute };