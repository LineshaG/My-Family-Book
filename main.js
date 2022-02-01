var images = ["family.jpg","Papa.jpg", "Mummy.jpg" , "Didi.jpg", "Dadi.jpg", "Me.jpg", "myfamily.jpg"];
var names = ["Family Book","Mr. Manoj Kumar Gupta (Dad)", "Mrs. Sudha Gupta (Mom)", "Aryahi Gupta (Didi)", "Mrs. Vimla Devi (Dadi)", "Linesha Gupta (Myself)", "My Family"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
