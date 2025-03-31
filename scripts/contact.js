document.addEventListener("DOMContentLoaded", () => {
    // Khởi tạo EmailJS với Public Key
    emailjs.init("_WilkmHJajkP0M7lp"); // Thay YOUR_PUBLIC_KEY bằng public key của bạn từ EmailJS

    const contactForm = document.querySelector("#contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Gửi email qua EmailJS
        emailjs.sendForm('service_03rtgme', 'template_3ptx7ds', contactForm)
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch((error) => {
                console.error("Error sending message:", error);
                alert("Failed to send the message. Please try again later.");
            });
    });
});