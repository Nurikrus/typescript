import { renderBlock } from './lib.js'

let dtToday = new Date();
let month = (dtToday.getMonth() + 1).toString();
let day = (dtToday.getDate() + 1).toString();
let year = dtToday.getFullYear();
let dayOut = (dtToday.getDate() + 3).toString();
dtToday.setMonth(dtToday.getMonth() + 2);
dtToday.setDate(0);
let lastDay = (dtToday.getDate()).toString();
let nextMonth = (dtToday.getMonth() + 2).toString();
let monthOut = month

if (Number(dayOut) > 31) {
  dayOut = (Number(dayOut) - 31).toString();
  monthOut = '0' + (Number(monthOut) + 1);
}
if (Number(nextMonth) > 11) {
  year++;
  nextMonth = '1';
}

if (Number(nextMonth) < 10)
  nextMonth = '0' + nextMonth;
if (Number(month) < 10)
  month = '0' + month;
if (Number(day) < 10)
  day = '0' + day;
if (Number(dayOut) < 10)
  dayOut = '0' + dayOut;

let minDateIn = year + '-' + month + '-' + day;
let maxDateIN = year + '-' + nextMonth + '-' + lastDay;
let minDateOut = year + '-' + monthOut + '-' + dayOut;
let maxDateOut = year + '-' + nextMonth + '-' + lastDay;
console.log(minDateIn, maxDateIN, minDateOut, maxDateOut)

export function renderSearchFormBlock() {
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${minDateIn}" min="${minDateIn}" max="${maxDateIN}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${minDateOut}" min="${minDateOut}" max="${maxDateOut}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
