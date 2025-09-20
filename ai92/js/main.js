function startProgress() {
	document.getElementById("progress-modal").style.display = "flex";
	["bar1", "bar2", "bar3"].forEach((id, i) => {
		setTimeout(() => document.getElementById(id).style.width = "100%", 400 * (i + 1));
	});
	setTimeout(() => {
		document.getElementById("progress-modal").style.display = "none";
		document.getElementById("popup-modal").style.display = "flex";
	}, 1400);

}
document.addEventListener("DOMContentLoaded", function () {

    function generateRandomString(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    const divs = document.querySelectorAll("div");
    divs.forEach(div => {
        const randomId = generateRandomString(8);
        const randomClass = generateRandomString(6);
        div.setAttribute("data-id", randomId);
        div.setAttribute("data-class", randomClass);
    });
});

var init_count = parseInt(localStorage.getItem('count')) || 98365;
 function updateData() {
	
	let randomIncrement = Math.floor(Math.random() * 8); 
	let randomDelay = Math.floor(Math.random() * 1501) + 500; 

	init_count += randomIncrement;
	localStorage.setItem('count', init_count);
    document.getElementById('people_num').textContent = init_count.toLocaleString();
}

function scheduleNextUpdate() {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds();

    const delay = 2000 - ((seconds % 5) * 1000 + milliseconds);

    setTimeout(() => {
      updateData();            
      setInterval(updateData, 2000);
    }, delay);
}
scheduleNextUpdate();