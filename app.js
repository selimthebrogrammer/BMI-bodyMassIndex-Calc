let height = document.getElementById('height')
let weight = document.getElementById('weight')
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const result = document.getElementById('result');

btn.addEventListener('click', ()=> {
         let heightVal = height.value;
         let weightVal = weight.value;
         let bmi = (weightVal / (heightVal*heightVal))*10000;
         if(bmi >= 25.0){
                  output.value = bmi.toFixed(2)
                  result.innerHTML = `Weight Condition : Overweight`
         }else if(bmi>18.5 && bmi<25){
                  output.value = bmi.toFixed(2)
                  result.innerHTML = `Weight Condition : Healthy`;
         }else {
                  alert('Unhuman Values! Please answer correctly.');
         }
         
})
