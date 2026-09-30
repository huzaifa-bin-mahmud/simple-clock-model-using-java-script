
const time = document.getElementById("time");
const dateElement = document.getElementById("date");
const day = document.getElementById("day");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const dayChild = day.children;

const updateClock = () => {
    const now = new Date();

    // Time
    let hours = now.getHours();
    hours = hours % 12 ? hours % 12 : 12;

    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    time.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Date
    const month = months[now.getMonth()];
    const date = now.getDate().toString().padStart(2, "0");
    const year = now.getFullYear();

    dateElement.textContent = `${month} ${date}, ${year}`;

    Array.from(dayChild).forEach((e, i) => {
        if (i === now.getDay()) {
            e.classList ="border-4 border-blue-600 text-blue-600 font-bold shadow-blue-500 shadow-md";
        } else {
            e.classList ="text-gray-500 border-gray-500";
        }
    });
};

updateClock();

setInterval(updateClock, 1000);
