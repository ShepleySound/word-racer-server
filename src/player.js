'use strict';

class Player {
  constructor(nickname, socketID) {
    this.nickname = nickname;
    this.socketID = socketID;
    this.score = 0;
    Player.instances[socketID] = this;
  }

  incrementScore() {
    this.score += 1;
  }

  static GenerateID() {
    const randomNum = (Math.floor(Math.random() * 2000)).toString(10);
    randomNum.padStart(4, '0');
  }

  static instances = {};
} 

module.exports = Player;