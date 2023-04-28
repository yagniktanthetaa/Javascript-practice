const calAge = (birthYear) =>
  new Date().getFullYear() - new Date(birthYear).getFullYear();

console.log("🚀 ~ calAge ~ calAge:", calAge("01-19-2001"));

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a dice ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end...");
//   }
// }

const startTimer = () => {
  // Set time
  let time = 10;

  // Call the timer every second
  const timer = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    console.log(`Timer is ${min}:${sec}`);

    // Decrese 1s
    time--;

    // When 0 seconds,stop timer
    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
};

const students = [
  { id: 4, graduated: true, grade: 96 },
  { id: 1, graduated: true, grade: 86 },
  { id: 2, graduated: false, grade: 96 },
  { id: 3, graduated: false, grade: 78 },
];

// Sorted data
const sortStudents = (students) => {
  students.sort((a, b) => {
    // First compare by graduated status (true first)
    if (a.graduated !== b.graduated) {
      return a.graduated ? -1 : 1;
    }
    // If both are graduated or not, compare by grade (highest first)
    return b.grade - a.grade;
  });
  return students;
};

// Sort sortByMonth
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const sortByMonth = (events) => {
  events.sort((a, b) => {
    const aMonthIndex = MONTHS.indexOf(a.month);
    const bMonthIndex = MONTHS.indexOf(b.month);
    if (aMonthIndex < bMonthIndex) {
      return -1;
    } else if (aMonthIndex > bMonthIndex) {
      return 1;
    } else {
      return 0;
    }
  });
  return events;
};

const res = sortByMonth(MONTHS);
console.log("🚀 ~ res:", res);

// startTimer();
