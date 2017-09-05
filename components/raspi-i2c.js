const { Interfaces } = require('ftl-robot-host'); 
const I2C = require('i2c-bus');

/**
 * FTL compatible I2C interface (wraps i2c-bus)
 */
class RaspiI2c extends Interfaces.I2C {
    constructor (busNum) {
        this.d_bus = I2C.openSync(busNum);
    }

    close(cb) {
        this.d_bus.close(cb);
    }

    closeSync() {
        this.d_bus.closeSync();
    }

    readByte(addr, cmd, cb) {
        this.d_bus.readByte(addr, cmd, cb);
    }

    readByteSync(addr, cmd) {
        return this.d_bus.readByteSync(adr, cmd);
    }

    readWord(addr, cmd, cb) {
        this.d_bus.readWord(addr, cmd, cb);
    }

    readWordSync(addr, cmd) {
        return this.d_bus.readWordSync(addr, cmd);
    }

    readI2cBlock(addr, cmd, length, buffer, cb) {
        this.d_bus.readI2cBlock(addr, cmd, length, buffer, cb);
    }

    readI2cBlockSync(addr, cmd, length, buffer) {
        return this.d_bus.readI2cBlockSync(addr, cmd, length, buffer);
    }

    writeByte(addr, cmd, byte, cb) {
        this.d_bus.writeByte(addr, cmd, byte, cb);
    }

    writeByteSync(addr, cmd, byte) {
        this.d_bus.writeByteSync(addr, cmd, byte);
    }

    writeWord(addr, cmd, word, cb) {
        this.d_bus.writeWord(addr, cmd, word, cb);
    }

    writeWordSync(addr, cmd, word) {
        this.d_bus.writeWordSync(addr, cmd, word);
    }

    writeI2cBlock(addr, cmd, length, buffer, cb) {
        this.d_bus.writeI2cBlock(addr, cmd, length, buffer, cb);
    }

    writeI2cBlockSync(addr, cmd, length, buffer) {
        return this.d_bus.writeI2cBlockSync(addr, cmd, length, buffer);
    }
}

module.exports = RaspiI2c;