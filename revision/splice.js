//splice method changes the content of an array by removing existing elements or adding new elements

var names = ['mercy', 'thandi', 'noel', 'zama', 'gugu',];
names.splice(2, 1);
//This means that 1 team from index two will be removed or deleted.
//names will now contain an array which has the following names['mercy', 'thandi', 'zama', 'gugu'] noel is deleted;

//When you want to add an item at the same time delete another item.
names.splice(1,1,'grace');
//This will go to index 1 in this case it is thandi and delete it   and then add grace after that.

//The parameters of splice are:
//Start 
//this is where you indicate were you want your starting index to be.

//deleteCount
//this is were you specify the number of items you want to delete.
//If you do not specify the number of items you want to delete then all of the elements beginning with start index on through the end of the array will be deleted.

//item1, item2, ...
//the elements to add to the array, beginning at the start index.
//If you don't specify any elements, splice() will only remove elements from the array.

console.log(names);
