/* global describe, it */

var myString1 = "kittens";
var myString2 = "puppies";
var myAnimals = [{type:'dog', name:'Herman'}, {type:'dog', name:'Moksha'}, {type:'cat', name:'Zellouisa'}, {type:'cat', name:'Aremid'}];

$('#variables').append('Variables created for testing');

(function () {
    'use strict';

    describe('Testing underscore.js methods', function () {
      describe('_.pluck', function () {
        describe('when called with arguments of an array of objects and a given property of the objects in the array', function () {
          it('returns an array of property values', function () {
            expect(_.pluck(myAnimals,'type')).to.deep.equal(['dog', 'dog', 'cat', 'cat']);
            expect(_.pluck(myAnimals,'name')).to.deep.equal(['Herman', 'Moksha', 'Zellouisa', 'Aremid']);
          });
        });
        describe('when passed only a single argument consisting of an array', function () {
          it('returns an array of undefined objects with length equal to the length of the calling array', function () {
              expect(_.pluck(myAnimals)).to.deep.equal([undefined,undefined,undefined,undefined])
          });
        });
        describe('when passed only a single argument consisting of a string', function () {
          it('returns an array of undefined objects with length equal to the length of the string', function () {
            expect(_.pluck(myString1)).to.deep.equal([undefined,undefined,undefined,undefined,undefined,undefined,undefined])
          });
        });
        describe('when called without an argument', function () {
          it('returns an empty array', function () {
             expect(_.pluck()).to.be.an.empty.array;
            });
        });
      });
      describe('_.last', function () {
        describe('when passed a single argument of an array', function () {
          it('returns the last item in the array', function () {
            expect(_.last(myAnimals)).to.eql({type:'cat', name:'Aremid'});
          });
        });
      });
    });
})()

    // describe('_.last', function () {
    //     describe('when passed a single argument of an array', function () {
    //         it('returns the last item in the array', function () {
    //             expect(_.last(myAnimals)).to.eql({type:'cat', name:'Aremid'});
    //         });
    //     });
    // })

        // describe('when passed only a single argument that is undefined', function () {
        //     it('throws a reference error', function () {
        //         // var err = new ReferenceError('myAnimalz is not defined');
        //         // expect(_.pluck(myAnimalz,'type')).to.throw(ReferenceError);
        //         // expect(_.pluck(myAnimalz,'type')).to.throw(err);
        //            expect(_.pluck(myAnimalz,'type')).to.throw(ReferenceError('myAnimalz is not defined'));
        //     });
        //     // ***What is the correct expect syntax here***
        // });
        // describe('when passed a second argument that is undefined', function () {
        //     it('throws a reference error', function () {
        //         // var err = new ReferenceError('type is not defined');
        //         expect(_.pluck(myAnimals,type)).to.throw(ReferenceError);
        //     });
        // });   // how would I get this to work?


//
// (function () {
//     'use strict';
//
//     describe('Testing underscore.js\'s _.last method', function () {
//         describe('when passed a single argument of an array', function () {
//             it('returns the last item in the array', function () {
//                 expect(_.last(myAnimals)).to.eql({type:'cat', name:'Aremid'});
//             });
//         });
//     })
// })()
