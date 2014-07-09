/* global describe, it */

var myString1 = "kittens";
var myString2 = "puppies";
var myAnimals = [{type:'dog', name:'Herman'}, {type:'dog', name:'Moksha'}, {type:'cat', name:'Zellouisa'}, {type:'cat', name:'Aremid'}];
var myAnimalNames = ['Herman','Moksha','Zellouisa','Aremid'];

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
        describe('when passed a single argument consisting of an array', function () {
          it('returns the last item in the array', function () {
            expect(_.last(myAnimalNames)).to.equal('Aremid');
          });
        });
        describe('when passed an array with more than one item, followed by an integer', function () {
          describe('value: 2', function () {
            it('returns the last two items in the array', function () {
              expect(_.last(myAnimalNames,2)).to.eql(['Zellouisa','Aremid']);
            });
          });
          describe('value equal to the length of the array', function () {
            it('returns all of the items in the array', function () {
              expect(_.last(myAnimalNames,myAnimalNames.length)).to.eql(['Herman','Moksha','Zellouisa','Aremid']);
            });
          });
          describe('value greater than the length of the array', function () {
            it('returns all of the items in the array', function () {
              expect(_.last(myAnimalNames,myAnimalNames.length+5)).to.eql(['Herman','Moksha','Zellouisa','Aremid']);
            });
          });
          describe('value: 0', function () {
            it('returns an empty array', function () {
              expect(_.last(myAnimalNames,0)).to.be.an.empty.array;
            });
          });
          describe('value is a negative number', function () {
            it('returns an empty array', function () {
              expect(_.last(myAnimalNames,-1)).to.be.an.empty.array;
            });
          });
        });
        describe('when passed only a single argument consisting of a string', function () {
          it('returns the last letter of the string', function () {
            expect(_.last(myString1)).to.deep.equal("s");
          });
        });
        describe('when passed a string followed by an integer(N)', function () {
          it('returns each of the last N letters of the string as distinct array items', function () {
            expect(_.last(myString1,4)).to.deep.equal(["t","e","n","s"]);
          });
        });
        describe('when called without an argument', function () {
          it('returns an empty array', function () {
             expect(_.last()).to.be.an.empty.array;
            });
        });
      });
      describe('_.first', function () {
        describe('when passed a single argument consisting of an array', function () {
          it('returns the first item in the array', function () {
            expect(_.first(myAnimalNames)).to.equal('Herman');
          });
        });
        describe('when passed an array with more than one item, followed by an integer', function () {
          describe('value: 2', function () {
            it('returns the first two items in the array', function () {
              expect(_.first(myAnimalNames,2)).to.eql(['Herman','Moksha']);
            });
          });
          describe('value equal to the length of the array', function () {
            it('returns all of the items in the array', function () {
              expect(_.first(myAnimalNames,myAnimalNames.length)).to.eql(['Herman','Moksha','Zellouisa','Aremid']);
            });
          });
          describe('value greater than the length of the array', function () {
            it('returns all of the items in the array', function () {
              expect(_.first(myAnimalNames,myAnimalNames.length+5)).to.eql(['Herman','Moksha','Zellouisa','Aremid']);
            });
          });
          describe('value: 0', function () {
            it('returns an empty array', function () {
              expect(_.first(myAnimalNames,0)).to.be.an.empty.array;
            });
          });
          describe('value is a negative number', function () {
            it('returns an empty array', function () {
              expect(_.first(myAnimalNames,-1)).to.be.an.empty.array;
            });
          });
        });
        describe('when passed only a single argument consisting of a string', function () {
          it('returns the first letter of the string', function () {
            expect(_.first(myString1)).to.deep.equal("k");
          });
        });
        describe('when passed a string followed by an integer(N)', function () {
          it('returns each of the first N letters of the string as distinct array items', function () {
            expect(_.first(myString1,4)).to.deep.equal(["k","i","t","t"]);
          });
        });
        describe('when called without an argument', function () {
          it('returns an empty array', function () {
             expect(_.first()).to.be.an.empty.array;
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
