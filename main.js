// === BÀI 1 ===
document.getElementById("btnSalary").addEventListener("click", () => {
    const salary = Number(document.getElementById("salaryPerDay").value);
    const days = Number(document.getElementById("workingDays").value);
    if (!isNaN(salary) && !isNaN(days)) {
        const total = salary * days;
        document.getElementById("salaryResult").innerText = total.toLocaleString("vi-VN") + " VND";
    } else {
        document.getElementById("salaryFalseresult").innerText = "Vui lòng nhập đúng!";
    }
});

// === BÀI 2 ===
document.getElementById("btnAverage").addEventListener("click", () => {
    const so1 = Number(document.getElementById("so1").value);
    const so2 = Number(document.getElementById("so2").value);
    const so3 = Number(document.getElementById("so3").value);
    const so4 = Number(document.getElementById("so4").value);
    const so5 = Number(document.getElementById("so5").value);
    if (![so1, so2, so3, so4, so5].some(isNaN)) {
        const avg = (so1 + so2 + so3 + so4 + so5) / 5;
        document.getElementById("avgResult").innerText = "Giá trị trung bình: " + avg;
    } else {
        document.getElementById("avgResult").innerText = "Vui lòng nhập đúng đủ 5 số!";
    }
});

// === BÀI 3 ===
document.getElementById("btnExchange").addEventListener("click", () => {
    const usd = Number(document.getElementById("usdAmount").value);
    const rate = Number(document.getElementById("rate").value);
    if (!isNaN(usd) && !isNaN(rate)) {
        const vnd = usd * rate;
        document.getElementById("exchangeResult").innerText = vnd.toLocaleString("vi-VN") + " VND";
    } else {
        document.getElementById("exchangeResult").innerText = "Vui lòng nhập đúng!";
    }
});

// === BÀI 4 ===
document.getElementById("btnRectangle").addEventListener("click", () => {
    const length = Number(document.getElementById("rectLength").value);
    const width = Number(document.getElementById("rectWidth").value);
    if (!isNaN(length) && !isNaN(width)) {
        const area = length * width;
        const perimeter = 2 * (length + width);
        document.getElementById("rectResult").innerText = `Diện tích: ${area} – Chu vi: ${perimeter}`;
    } else {
        document.getElementById("rectResult").innerText = "Vui lòng nhập đúng!";
    }
});
// === BÀI 5 ===
document.getElementById("btnDigits").addEventListener("click", () => {
    const num = Number(document.getElementById("twoDigit").value);

    if (!isNaN(num) && num >= 10 && num <= 99) {
        const chuc = Math.floor(num / 10);
        const donVi = num % 10;
        const sum = chuc + donVi;
        document.getElementById("digitsResult").innerText = "Tổng hai ký số: " + sum;
    } else {
        document.getElementById("digitsResult").innerText = "Hãy nhập số có 2 chữ số!";
    }
});