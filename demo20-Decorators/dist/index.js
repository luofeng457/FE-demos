var _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function readonly(target, name, descriptor) {
  value = descriptor.value;
  Object.defineProperty(target, name, {
    value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return descriptor;
}

let Hero = (_class = (_temp = class Hero {
  constructor() {
    _initializerDefineProperty(this, "name", _descriptor, this);
  }

  skill() {
    console.log('super');
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [readonly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'hhh';
  }
})), _class);
const hero = new Hero();
console.log('name----', hero.name);
hero.name = '123';
