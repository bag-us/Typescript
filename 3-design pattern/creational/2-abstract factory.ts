enum ComputerType {
    PC = "pc",
    laptop = "laptop"
}
abstract class Computer{
    constructor(
        protected type: ComputerType, 
        protected monitor: string){
            this.type = type
            this.monitor = monitor
    }
    abstract getModel(): string
}

class PC extends Computer{
    constructor(monitor: string){
        super(ComputerType.PC, monitor)
    }
    getModel(): string{
        return `${this.type} with ${this.monitor}`
    }
}
class Laptop extends Computer{
    constructor(monitor: string){
        super(ComputerType.laptop, monitor)
    }
    getModel(): string{
        return `${this.type} with ${this.monitor}`
    }
}

enum MonitorType {
    IPS = "ips",
    LED = "led"
}

class ledMonitorComputer {
    static buildComputer(type: ComputerType): Computer{
        switch(type){
            case ComputerType.PC:
                return new PC(MonitorType.LED);
            case ComputerType.laptop:
                return new Laptop(MonitorType.LED);
            default:
                throw new Error("type not found")
        }
    }
}
class ipsMonitorComputer {
    static buildComputer(type: ComputerType): Computer{
        switch(type){
            case ComputerType.PC:
                return new PC(MonitorType.IPS);
            case ComputerType.laptop:
                return new Laptop(MonitorType.IPS);
            default:
                throw new Error("type not found")
        }
    }
}

class ComputerFactory {
    static buildComputer(computerType: ComputerType, monitorType: MonitorType): Computer{
        switch(monitorType){
            case MonitorType.LED:
                return ledMonitorComputer.buildComputer(computerType);
            case MonitorType.IPS:
                return ipsMonitorComputer.buildComputer(computerType);
            default:
                throw new Error("type not found")
        }
    }
}

const pcled = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.LED)
console.log(pcled.getModel())

const pcips = ComputerFactory.buildComputer(ComputerType.PC, MonitorType.IPS)
console.log(pcips.getModel())