const male_images = new Map();
male_images.set("under weight",'images/male/underweight.jpg');
male_images.set("normal",'images/male/normal.jpg');
male_images.set("over weight",'images/male/overweight.jpg');
male_images.set("obesity",'images/male/obesse.jpg');
male_images.set("extreme obesity",'images/male/extreme_obesity');

const female_images= new Map();
female_images.set("under weight",'images/female/underweight.jpg');
female_images.set("normal",'images/female/normal.jpg');
female_images.set("over weight",'images/female/overweight.jpg');
female_images.set("obesity",'images/female/obesity.jpg');
female_images.set("extreme obesity",'images/female/extreme_obesity');

const age=document.getElementById('in-age');
const height=document.getElementById('in-height');
const weight=document.getElementById('in-weight');
let genders=document.querySelectorAll('.sex');
let selectedGender="";


    genders.forEach(function(gender)
    {
                
        gender.addEventListener('click',function(event)
        {
            event.preventDefault();

            genders.forEach(function(mf)
            {
                mf.classList.remove('selected');
            });
       
        this.classList.add('selected');
        selectedGender=this;
        genderStyle();
        });

    });

function genderStyle()
{
    genders.forEach(function(gender)
    {
        if(gender.classList.contains('selected'))
        {
            gender.style.backgroundColor='white';
            gender.style.color='deepskyblue';
        }
        else
        {
            gender.style.backgroundColor='deepskyblue';
            gender.style.color='white';
        }
    })
}


function putValues(bmi)
{
document.getElementById('res-age').textContent=age.value;
document.getElementById('res-height').textContent=height.value+"ft";
document.getElementById('res-weight').textContent=weight.value+"kg";
document.getElementById('res-gender').textContent=selectedGender.textContent;
document.getElementById('res-bmi').textContent=bmi;
if(selectedGender.textContent==='Male')
document.getElementById('bmi-image').src=male_images.get(bmi);

else
document.getElementById('bmi-image').src=female_images.get(bmi);

}
function removeValues()
{
age.value='';
height.value='';
weight.value='';
selectedGender.style.backgroundColor='deepskyblue';
selectedGender.style.color='white';
}
function calculateBmi()
{
const height_in_meter=height.value/3.281;
const bmi=(weight.value/(height_in_meter*height_in_meter)).toFixed(1);
if(bmi<18.5)
{
    putValues("under weight");
    removeValues();  
}
else if(bmi>=18.5 && bmi<=24.9)
{
    putValues("normal");
    removeValues();  
}
else if(bmi>=25 && bmi<=29.9)
{
    putValues("over weight");
    removeValues(); 
}
else if(bmi>=30 && bmi<=34.9)
{
    putValues("obesity");
    removeValues();  
}
else
{
    putValues("extreme obesity");
    removeValues(); 
}
   
}

