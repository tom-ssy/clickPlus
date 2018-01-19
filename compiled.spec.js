var  Thumb=require('./compiled.js');
describe("A suite of basic functions", function() {
    it("reverse word",function(){
    	var point=new Thumb();
    	expect(point.value).toEqual(0);
    	point.plusOne();
    	expect(point.value).toEqual(1);


        // expect("DCBA").toEqual(reverse("ABC"));
        // expect("Conan").toEqual(reverse("nano"));
    });
});