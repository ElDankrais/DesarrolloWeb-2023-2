"use strict";
class Prototype {
    clone() {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.circularReference = Object.assign(Object.assign({}, this.circularReference), { prototype: Object.assign({}, this) });
        return clone;
    }
}
class ComponentWithBackReference {
    constructor(prototype) {
        this.prototype = prototype;
    }
}
/**
 * The client code.
 */
function clientCodePrototype() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);
    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    }
    else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (p1.component === p2.component) {
        console.log('Simple component has not been cloned. Booo!');
    }
    else {
        console.log('Simple component has been cloned. Yay!');
    }
    if (p1.circularReference === p2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    }
    else {
        console.log('Component with back reference has been cloned. Yay!');
    }
    if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('Component with back reference is linked to original object. Booo!');
    }
    else {
        console.log('Component with back reference is linked to the clone. Yay!');
    }
}
clientCodePrototype();
