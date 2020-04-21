const Verifier = artifacts.require("./Verifier.sol");
const SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const NanoRealEstateToken = artifacts.require('NanoRealEstateToken');

module.exports = async function (deployer) {
    await deployer.deploy(Verifier);
    await deployer.deploy(NanoRealEstateToken);
    await deployer.deploy(SolnSquareVerifier, Verifier.address);
};
