import largeFactorial from "../src/largeFactorial";

describe( "Large Factorials", () => {
    it( "Small Tests", () => {
        expect( largeFactorial( 5 ) ).toBe( "120" );
        expect( largeFactorial( 1 ) ).toBe( "1" );
        expect( largeFactorial( 9 ) ).toBe( "362880" );
        expect( largeFactorial( 15 ) ).toBe( "1307674368000" );
    });

    it( "Hard Tests", () => {
        expect( largeFactorial( 30 ) ).toBe( "265252859812191058636308480000000" );
        expect( largeFactorial( 45 ) ).toBe( "119622220865480194561963161495657715064383733760000000000" );
        expect( largeFactorial( 90 ) ).toBe( "1485715964481761497309522733620825737885569961284688766942216863704985393094065876545992131370884059645617234469978112000000000000000000000" );
    });

    it("Extra Difficcult Tests", () => {
        expect( largeFactorial( 128 ) ).toBe( "385620482362580421735677065923463640617493109590223590278828403276373402575165543560686168588507361534030051833058916347592172932262498857766114955245039357760034644709279247692495585280000000000000000000000000000000" );
        expect( largeFactorial( 300 ) ).toBe( "306057512216440636035370461297268629388588804173576999416776741259476533176716867465515291422477573349939147888701726368864263907759003154226842927906974559841225476930271954604008012215776252176854255965356903506788725264321896264299365204576448830388909753943489625436053225980776521270822437639449120128678675368305712293681943649956460498166450227716500185176546469340112226034729724066333258583506870150169794168850353752137554910289126407157154830282284937952636580145235233156936482233436799254594095276820608062232812387383880817049600000000000000000000000000000000000000000000000000000000000000000000000000" );
    });
});