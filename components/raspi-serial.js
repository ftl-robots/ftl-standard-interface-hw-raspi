const { Interfaces } = require('@ftl-robots/ftl-robot-host');
const SerialPort = require('serialport');

class RaspiSerial extends Interfaces.SERIAL {
    constructor(portPath, options) {
        super();
        this.d_portPath = portPath;
        this.d_ready = false;
        this.d_port = new SerialPort(this.d_portPath, options, (err) => {
            if (!err) {
                this.d_ready = true;
            }
        });

        // Pass through all events
        this.d_port.on('open', this.emit.bind(this, 'open'));
        this.d_port.on('error', this.emit.bind(this, 'error'));
        this.d_port.on('data', this.emit.bind(this, 'data'));
    }

    write(data, encoding, callback) {
        return this.d_port.write(data, encoding, callback);
    }

    read(size) {
        return this.d_port.read(size);
    }

    close(callback) {
        this.d_port.close(callback);
    }

    flush(callback) {
        this.d_port.flush(callback);
    }

    drain(callback) {
        this.d_port.drain(callback);
    }

    pause() {
        this.d_port.pause();
    }

    resume() {
        this.d_port.resume();
    }
}

module.exports = RaspiSerial;