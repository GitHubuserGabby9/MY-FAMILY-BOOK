var images = ["us as a family.jpg", "dad.jpg" , "mom.jpg", "Gabby.jpg"];

var names = ["My Family","Ziming Ke - Father", "Shuang Peng - Mother", "Gabrielle Ke - Only Child"];

var age = [40, 36, 9]

age.sort();

age.reverse();

var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];

    var updatedAge = age[i];
    
    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    var max_number = Math.max.apply(Math, age);
    console.log("The hightest age is: ", max_number);

    var min_number = Math.min.apply(Math, age);
    console.log("The lowest age is: ", min_number);
}