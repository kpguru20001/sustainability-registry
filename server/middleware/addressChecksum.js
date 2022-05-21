const ethers = require('ethers');

function addressChecksum(req, res, next) {
    const address = req.params.address.toLowerCase();
    if (!address) {
        return res.status(400).send({ message: "No address provided!" });
    } else {
        try {
            req.params.address = ethers.utils.getAddress(address);
        } catch (error) {
            return res.status(400).send({ message: "Invalid address!" });
        }
    }
    next();
}

module.exports = { addressChecksum };