'use strict';

class RoundRobin {
  constructor() {
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    RoundRobin.instance = this;
    this.servers = [];
    this.index = 0;
  }

  //add Server
  addServer(server) {
    this.servers.push(server);
  }

  //get next Server
  getNextServer() {
    if (!this.servers.length) {
      throw new Error('No Server Available!');
    }

    const server = this.servers[this.index];
    this.index = (this.index + 1) % this.servers.length;
    return server;
  }
}

const loadBalance = new RoundRobin();
const loadBalance1 = new RoundRobin();

loadBalance.addServer('Server 01');
loadBalance.addServer('Server 02');
loadBalance.addServer('Server 03');

console.log(loadBalance.getNextServer());
console.log(loadBalance.getNextServer());
console.log(loadBalance.getNextServer());
console.log(loadBalance.getNextServer());
console.log(loadBalance.getNextServer());
console.log(loadBalance.getNextServer());

console.log('compare::', loadBalance === loadBalance1);
