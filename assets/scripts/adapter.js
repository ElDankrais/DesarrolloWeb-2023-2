"use strict";
/**
 * The Target defines the domain-specific interface used by the client code.
 */
class Target {
    request() {
        return 'Target: The default target\'s behavior.';
    }
}
/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class Adaptee {
    specificRequest() {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}
/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    request() {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCodeAdapter(target) {
    console.log(target.request());
}
console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCodeAdapter(target);
console.log('');
const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);
console.log('');
console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCodeAdapter(adapter);
