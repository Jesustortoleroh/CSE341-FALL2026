const carlaRoute = (req, res) => {
    res.send('Carla Hernandez');
}

const peterRoute = (req, res) => {
    res.send('Peter Snow');
};

const roseRoute = (req, res) => {
    res.send('Rose Martinez');
}

module.exports = { carlaRoute, peterRoute, roseRoute };