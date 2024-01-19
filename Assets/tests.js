const { describe } = require('node:test');
const shapes = require('./classes');

describe('Circle', () => {
    it('should return a circular logo with the desired color and text attributes', () => {
        const circle = new Circle('Black', 'LBS', 'White');
        expect(circle.render()).toEqual(
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="black" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">LBS</text>
        </svg>`);
    });
});

describe('Triangle', () => {
    it('should return a triangular logo with the desired color and text attributes', () => {
        const triangle = new Triangle('Black', 'LBS', 'White');
        expect(circle.render()).toEqual(
            `<svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="black"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">LBS</text>
        </svg>`
        );
    });
});

describe('Square', () => {
    it('should return a square logo with the desired color and text attributes', () => {
        const square = new Square('Black', 'LBS', 'White');
        expect(square.render()).toEqual(
            `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="black"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">LBS</text>
        </svg>`
        );
    });
})