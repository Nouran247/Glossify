document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // تحقق من نمط البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // تحقق من أن كلمة المرور تنتهي بـ 6 أرقام
    const passwordPattern = /\d{6}$/;

    if (emailPattern.test(email) && passwordPattern.test(password)) {
        // حفظ البريد الإلكتروني وكلمة المرور في التخزين المحلي
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // إعادة التوجيه إلى صفحة أخرى إذا كانت الشروط صحيحة
        window.location.href = "index.html"; // استبدل "nti.html" بالصفحة المطلوبة
    } else {
        alert("يرجى التحقق من البريد الإلكتروني اوكلمة المرور.");
    }
});