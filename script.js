// مثال على التفاعل مع النقر على زر لزيادة النقاط
document.addEventListener("DOMContentLoaded", function() {
  console.log("تم تحميل الصفحة بنجاح");

  // مثال على إضافة تفاعل - عندما يضغط المستخدم على زر يتم تغيير النص
  const button = document.getElementById("clickMeButton");
  if (button) {
      button.addEventListener("click", function() {
          alert("تم النقر على الزر!");
      });
  }

  // إضافة وظائف تفاعلية أخرى (مثل التفاعل مع لعبة أو غيرها)
});