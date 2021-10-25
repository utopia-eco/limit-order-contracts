# Running tests

Use the testnet pancake swap router (currently commented out in `Presale.sol`)

To deploy run `truffle deploy --network bscTestnet` from `./utopiaToken`

Run `truffle test --network bscTestnet` from `./utopiaToken`

Note: Account secrets should be stored in project root. There should be 4 account secrets with sufficient BNB for testing or else tests will fail.