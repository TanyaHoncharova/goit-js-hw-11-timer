class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = null;
    }

    start() {
        const days = document.querySelector(`${this.selector} [data-value="days"]`);
        const hours = document.querySelector(`${this.selector} [data-value="hours"]`);
        const mins = document.querySelector(`${this.selector} [data-value="mins"]`);
        const secs = document.querySelector(`${this.selector} [data-value="secs"]`);
        
        this.intervalID = setInterval(() => {
            const dateNow = Date.now();
            const time = this.targetDate - dateNow;
            // console.log(time);
            if (time < 1000) {
                clearInterval(this.intervalID)
            }

            days.textContent = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
            hours.textContent = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            mins.textContent = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            secs.textContent = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
        }, 1000);
    }
} 

const moduleTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(' Jun 23, 2021'),
});


moduleTimer.start();


/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);