console.log('memo');

const largeArray = Array.from({ length: 100000 }, () => Math.floor( Math.random() * 400) );


const memoize = ( func ) => {
    const result = {};
    return ( ...args ) => {
        const key = JSON.stringify( args );
        if( result[key] ){
            return result[key];
        }
        return result[key] = func( ...args );
    }
}

const SquareArray = memoize( ( arr ) => arr.map( item => item * item ));

console.log( largeArray );

console.time('iteration1');
console.log( SquareArray(largeArray) );
console.timeEnd('iteration1');

console.time('iteration2');
console.log( SquareArray(largeArray) );
console.timeEnd('iteration2');

console.time('iteration3');
console.log( SquareArray(largeArray) );
console.timeEnd('iteration3');