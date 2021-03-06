const MinerManager = require('./miner-manager');
const CreepMiner = require('./creep-miner');
const BurstProxy = require('./burst-proxy');
const Storj = require('./storj');

function getClassForMinerType(type) {
  switch(type) {
    case 'miner-agent':
      return MinerManager;
    case 'storj':
      return Storj;
    case 'creep-miner':
      return CreepMiner;
    case 'burst-proxy':
      return BurstProxy;
    default:
      throw new Error(`No class matched '${type}'`);
  }
}

module.exports = {
  getClassForMinerType,
};
