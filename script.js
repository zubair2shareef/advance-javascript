// 'use strict'

//   var hello="world";
  
//   console.log(this.hello)
//   function b(){
//      const k="lfn"

//     console.log(this.hello)

//   }
//   b.call(this);

class Student{
    static staticVariable=0;
    
    constructor(name,age,phoneNumber,boardMarks) {  
       
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.boardMarks = boardMarks;
        Student.counts();
      }
       eligible(){
        if(this.boardMarks>40){
            console.log("eligible");
        }
        else{
            console.log("not eligible")
        }
       
    }
   static counts(){
     return  this.staticVariable++;
    }
    egligibleforplacements(minage){
        console.log("sfn")
       return (minmarks)=>{
           if(minmarks<this.boardMarks && this.age>minage){
               console.log("eligible")
           }
           else{
               console.log("not eligible")
           }
       }
    }

}
const student1=new Student("zubair",19,094203947,45)
const student2=new Student("shareef",19,094203947,15)
const student3=new Student("shareef",19,094203947,15)
const student4=new Student("shareef",19,094203947,15)
const student5=new Student("shareef",19,094203947,15)
const student6=new Student("shareef",19,094203947,15)
// const student2=Student("")
// const student3=Student("")
// const student4=Student("")
// const student5=Student("")
// student1.eligible()
// console.log(Student.counts())
student1.egligibleforplacements(18)(18);
