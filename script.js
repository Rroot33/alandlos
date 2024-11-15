// تأكيد إرسال النموذج
document.addEventListener("DOMContentLoaded", function () {
    // الحصول على النموذج
    const contactForm = document.querySelector(".contact form");

    // إضافة حدث للنموذج عند الإرسال
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج

        // عرض رسالة تأكيد
        alert("تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.");

        // إعادة تعيين الحقول بعد الإرسال
        contactForm.reset();
    });
});
