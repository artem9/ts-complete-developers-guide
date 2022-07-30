@classDecorator
class Boat {
  @testDecotaror
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(): void {
    throw new Error();
    console.log('swich');
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecotaror(target: any, key: string) {
  console.log('target: ', target);
  console.log('key: ', key);
}

function classDecorator(testDecotaror: Function) {
  console.log('testDecotaror: ', testDecotaror);
}

function propDecorator(target: any, key: string, index: number) {
  console.log('key: ', key);
  console.log('index: ', index);
}
