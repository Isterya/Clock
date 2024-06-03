document.addEventListener('DOMContentLoaded', () => {
   const hourElem = document.querySelector('.hour'),
      minuteElem = document.querySelector('.minute'),
      secondElem = document.querySelector('.second'),
      timeElem = document.querySelector('.time'),
      dateElem = document.querySelector('.date'),
      toggle = document.querySelector('.toggle');

   const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

   const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
   ];

   toggle.addEventListener('click', (e) => {
      const html = document.querySelector('html');

      if (html.classList.contains('dark')) {
         html.classList.remove('dark');
         e.target.innerHTML = 'Ночной режим';
      } else {
         html.classList.add('dark');
         e.target.innerHTML = 'Светлый режим';
      }
   });

   const scale = (num, in_min, in_max, out_min, out_max) => {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
   };

   const setTime = () => {
      const time = new Date(),
         month = time.getMonth(),
         day = time.getDay(),
         date = time.getDate(),
         hours = time.getHours(),
         hoursForClock = hours >= 13 ? hours % 12 : hours,
         minutes = time.getMinutes(),
         seconds = time.getSeconds();

      hourElem.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;

      minuteElem.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;

      secondElem.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

      timeElem.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
      dateElem.innerHTML = `${days[day]}, ${months[month]}, ${date}`;
   };

   setTime();
   setInterval(setTime, 1000);
});
