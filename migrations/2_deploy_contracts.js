var LimitOrder = artifacts.require("UtopiaLimitOrderRouter");

module.exports = async function(deployer) {
    await deployer.deploy(LimitOrder);
    let limitOrder = await LimitOrder.deployed()

    console.log(limitOrder.address);
};