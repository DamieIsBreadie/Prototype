function updateDateTime () {
    const now = new Date();

    const currentDateTime = now.toLocaleString();

    document.querySelector('#datetime').textContent = currentDateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000)