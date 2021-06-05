
function readonly(target, name, descriptor) {
    value = descriptor.value;
    Object.defineProperty(target, name, {
        value,
        enumerable: true,
        configurable: true,
        writable: false,
    });
    return descriptor;
}

class Hero {
    @readonly
    name = 'hhh';
    skill() {
        console.log('super');
    }
}

const hero = new Hero();
console.log('name----', hero.name)
hero.name = '123';

