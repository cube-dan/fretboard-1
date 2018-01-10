describe('Music scales', () => {
    let sut;

    describe('asOffset', () => {
        it('c is 0', () => {
            expect(asOffset('c')).toEqual(0);
        });

        it('ignores case', () => {
            expect(asOffset('C')).toEqual(0);
        });

        it('Eb is 3', () => {
            expect(asOffset('Eb')).toEqual(3);
        });
    });

    describe('absNote', () => {
        it('c2 is 24', () => {
            expect(absNote('c2')).toEqual(24);
        });

        it('e3 is 40', () => {
            expect(absNote('e3')).toEqual(40);
        });
    });

    describe('asNotes generates a scale', () => {
        it('reference C scale are predefined', () => {
            expect(asNotes('c major')).toEqual('c d e f g a b');
            expect(asNotes('c lydian')).toEqual('c d e f# g a b');
        });

        it('on other roots, it transposes', () => {
            expect(asNotes('g major')).toEqual('g a b c d e f#');
            expect(asNotes('a major')).toEqual('a b c# d e f# g#');
        });

        it('also works for altered roots', () => {
            // we do not expect enharmonization to be correct ATM,
            // all alterations are computed as sharps
            expect(asNotes('ab major')).toEqual('g# a# c c# d# f g');
            expect(asNotes('g# major')).toEqual('g# a# c c# d# f g');
        });
    });
});

