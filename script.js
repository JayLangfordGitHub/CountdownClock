document.getElementById('logo').addEventListener('click', function() {
    document.getElementById('menu').style.display = 'block';
});

function closeMenu() {
    document.getElementById('menu').style.display = 'none';
}

function startCountdown() {
    const countdownInput = document.getElementById('countdownInput').value;
    const mainTextInput = document.getElementById('mainTextInput').value;
    const datetime = document.getElementById('datetime').value;

    // Update the text in the countdown text if filled in
    if (countdownInput) {
        document.getElementById('countdownText').innerText = countdownInput;
    }
    if (mainTextInput) {
        document.getElementById('mainText').innerText = mainTextInput;
    }

    // Start the countdown if a date is picked
    if (datetime) {
        const countdownDate = new Date(datetime).getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            // Time calculations for days, hours, mins and secs
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result
            document.getElementById('days').innerHTML = String(days).padStart(2, '0');
            document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
            document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
            document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');

            // When countdown is finished, stay at 0
            if (distance < 0) {
                clearInterval(x);
                document.getElementById('days').innerHTML = "00";
                document.getElementById('hours').innerHTML = "00";
                document.getElementById('minutes').innerHTML = "00";
                document.getElementById('seconds').innerHTML = "00";
            }
        }, 1000);
    }

    closeMenu();
}

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const imageContainer = document.getElementById('uploadedImageContainer');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
