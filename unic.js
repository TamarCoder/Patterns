const array = [1,1,2,3,3,3,3,4,4,5,5,5,6,6,6,6,7,7,7,7,7];
// თქვენი დავალებაა ფუნქციამ დათვალოს რამდენი უნიკალური რიცხვია მასივში და პასუხი დააბრუნოს რიცხვის სახით.

// spread-ის მეშვეობით ვიღებ უნიკალურ რიცხვ  არაიდან,  
            //  new Set  -  არის ჩაშენებული , რომელიც აკეთებს შედმეგ რაღაცაც , new -  ქმნის  ახალ უხილავ ობიექტს
            //      ხოლო Set -  ის მეშვეობით იხებს დუბლიკატებს და ინახავს new ობიექტში.
            // ხოლო სპრედის დახმარებით ვაბრუნებთ ახალ მასივ. 
 
function countUnique(array) {
    const uniqueArray = [...new Set(array)]; 
    return uniqueArray.length
}
console.log(countUnique(array));
 
 
 



 