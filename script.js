function scrollToJoin() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


function choosePlan(plan) {

    alert(
        "🔥 Great choice!\n\n" +
        "You selected the " +
        plan +
        " membership.\n\n" +
        "This is a demo website. Contact us to complete your membership."
    );

}


function joinGym() {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

}


function sendMessage(event) {

    event.preventDefault();

    alert(
        "💪 Thank you for contacting Dhruv Fitness!\n\n" +
        "This is a demo website, so your message was not actually sent."
    );

}