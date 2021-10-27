var LimitOrder = artifacts.require("UtopiaLimitOrderRouter");
var StopLoss = artifacts.require("UtopiaStopLossRouter")

module.exports = async function(deployer) {
    // await deployer.deploy(LimitOrder);
    // let limitOrder = await LimitOrder.deployed()

    // console.log(limitOrder.address);

    await deployer.deploy(StopLoss);
    let stopLoss = await StopLoss.deployed()

    console.log(stopLoss.address);
};