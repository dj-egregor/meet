const refs = {
  years: document.querySelector('[name="year"]'),
}

// 
const currentDate = new Date();

const curentYear = currentDate.getFullYear();

// console.log(curentYear - 18, curentYear - 100);

function printYears() {
  // console.log(curentYear);
  let years = '';
  for (let i = curentYear - 18; i >= curentYear - 100; i--) {
    console.log(i);
    years += `<option value="${i}">${i}</option>`;
  }
 return years;

}


refs.years.insertAdjacentHTML('beforeend', printYears());
// console.log(printYears());

