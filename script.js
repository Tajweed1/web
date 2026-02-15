// ====================================
// البيانات التفصيلية للحروف
// ====================================
const letterDetails = {
  أ: {
    title: "حرف الألف / الهمزة - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> أقصى الحلق<br><br>
           <strong>كيفية النطق:</strong><br>
           - يخرج الحرف من أقصى الحلق<br>
           - ينحبس الصوت ثم ينطلق فجأة<br><br>
           <strong>الصفات:</strong><br>
           - الشدة: ينحبس الصوت عند النطق<br>
           - الاستفال: ينخفض اللسان عند النطق<br>
           - الانفتاح: ينفتح الفم عند النطق<br>
           - الهمس: يجري معه النفس`,
  },
  ه: {
    title: "حرف الهاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> أقصى الحلق<br><br>
           <strong>كيفية النطق:</strong><br>
           - يخرج من أقصى الحلق مع جريان النفس<br>
           - صوت رخو مهموس<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم<br><br>
           <strong>ملاحظات مهمة:</strong><br>
           - التمييز بينه وبين الهمزة والحاء`,
  },
  ع: {
    title: "حرف العين - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> وسط الحلق<br><br>
           <strong>كيفية النطق:</strong><br>
           - يخرج من وسط الحلق مع انضغاط خفيف<br>
           - صوت رخو مجهور<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم<br><br>
           <strong>ملاحظات مهمة:</strong><br>
           - التمييز بينه وبين الغين والهمزة`,
  },
  ح: {
    title: "حرف الحاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> وسط الحلق<br><br>
           <strong>كيفية النطق:</strong><br>
           - يخرج من وسط الحلق مع احتكاك<br>
           - صوت رخو مهموس، يشعر بحرارة في الحلق<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم<br><br>
           <strong>ملاحظات مهمة:</strong><br>
           - التمييز بينه وبين الهاء والخاء<br>
           - إخراجه من مخرجه الصحيح في وسط الحلق`,
  },
  غ: {
    title: "حرف الغين - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> أدنى الحلق (أقرب إلى الفم)<br><br>
           <strong>كيفية النطق:</strong><br>
           - يخرج من أدنى الحلق مع اهتزاز الجدار الخلفي<br>
           - صوت رخو مجهور<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستعلاء: يرتفع اللسان نحو الحنك<br>
           - الانفتاح: ينفتح الفم<br><br>
           <strong>ملاحظات مهمة:</strong><br>
           - التمييز بينه وبين العين والخاء`,
  },
  خ: {
    title: "حرف الخاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> أدنى الحلق (أقرب إلى الفم)<br><br>
           <strong>كيفية النطق:</strong><br>
           - يخرج من أدنى الحلق مع احتكاك هواء<br>
           - صوت رخو مهموس<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستعلاء: يرتفع اللسان نحو الحنك<br>
           - الانفتاح: ينفتح الفم<br><br>
           <strong>ملاحظات مهمة:</strong><br>
           - التمييز بينه وبين الغين والحاء`,
  },
  ب: {
    title: "حرف الباء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> الشفتان (من انطباقهما)<br><br>
           <strong>كيفية النطق:</strong><br>
           - ينطبق الشفتان انطباقاً محكماً<br>
           - ثم ينفرجان فجأة مع خروج الصوت<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الشدة: ينحبس الصوت ثم ينفجر<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم<br>
           - الإذلاق: سهولة النطق به`,
  },
  ت: {
    title: "حرف التاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع أصول الثنايا العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يصعد طرف اللسان إلى أصول الثنايا العليا<br>
           - يحدث انحباس للصوت ثم انفجار خفيف<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الشدة: ينحبس الصوت ثم ينفجر<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  ث: {
    title: "حرف الثاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع أطراف الثنايا العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يوضع طرف اللسان بين الأسنان العليا والسفلى<br>
           - يخرج الهواء مع احتكاك خفيف<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  ج: {
    title: "حرف الجيم - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> وسط اللسان مع الحنك الأعلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع وسط اللسان نحو الحنك الأعلى<br>
           - ينحبس الصوت ثم ينفجر مع جهر<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الشدة: ينحبس الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  د: {
    title: "حرف الدال - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع أصول الثنايا العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يصعد طرف اللسان إلى أصول الثنايا العليا<br>
           - صوت مجهور شديد<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الشدة: ينحبس الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  ذ: {
    title: "حرف الذال - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع أطراف الثنايا العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يوضع طرف اللسان بين الأسنان<br>
           - يخرج الصوت مجهوراً مع احتكاك<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  ر: {
    title: "حرف الراء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع اللثة<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع طرف اللسان نحو اللثة<br>
           - يتكرر اللمس بسرعة مع جريان الصوت<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - البينية: بين الشدة والرخاوة<br>
           - التكرار: يتكرر اللسان في مخرجه<br>
           - الانحراف: ينحرف الصوت إلى طرف اللسان`,
  },
  ز: {
    title: "حرف الزاي - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع الثنايا السفلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يقترب طرف اللسان من الثنايا السفلى<br>
           - يخرج مع صفير مجهور<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الصفير: يصاحبه صوت كالصفير`,
  },
  س: {
    title: "حرف السين - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع الثنايا السفلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يقترب طرف اللسان من الثنايا السفلى<br>
           - يخرج مع صفير مهموس<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الصفير: يصاحبه صفير واضح`,
  },
  ش: {
    title: "حرف الشين - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> وسط اللسان مع الحنك الأعلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع وسط اللسان نحو الحنك<br>
           - يتفشى الصوت في الفم<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - التفشي: انتشار الصوت في الفم`,
  },
  ص: {
    title: "حرف الصاد - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع الثنايا السفلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع اللسان مع الإطباق ويخرج الصوت مع صفير<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستعلاء: يرتفع اللسان<br>
           - الإطباق: ينطبق اللسان على الحنك<br>
           - الصفير: يصاحبه صفير`,
  },
  ط: {
    title: "حرف الطاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع أصول الثنايا العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع طرف اللسان مع الإطباق<br>
           - يخرج الصوت مجهوراً شديداً مطبقاً<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الشدة: ينحبس الصوت<br>
           - الاستعلاء: يرتفع اللسان<br>
           - الإطباق: ينطبق اللسان على الحنك`,
  },
  ظ: {
    title: "حرف الظاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع أطراف الثنايا العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يوضع طرف اللسان بين الأسنان مع الإطباق<br>
           - يخرج الصوت مجهوراً مطبقاً<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستعلاء: يرتفع اللسان<br>
           - الإطباق: ينطبق اللسان على الحنك`,
  },
  ع: {
    title: "حرف العين - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> وسط الحلق<br><br>
           <strong>كيفية النطق:</strong><br>
           - يخرج من وسط الحلق مع انضغاط خفيف<br>
           - صوت رخو مجهور<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  ف: {
    title: "حرف الفاء - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> باطن الشفة السفلى مع أطراف الثنايا العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يلمس باطن الشفة السفلى أطراف الثنايا العليا<br>
           - يخرج الهواء مع احتكاك مهموس<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  ق: {
    title: "حرف القاف - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> أقصى اللسان مع الحنك الأعلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع أقصى اللسان إلى الحنك الأعلى<br>
           - ينحبس الصوت ثم ينفجر من أقصى الحلق<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الشدة: ينحبس الصوت<br>
           - الاستعلاء: يرتفع اللسان<br>
           - الانفتاح: ينفتح الفم`,
  },
  ك: {
    title: "حرف الكاف - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> أقصى اللسان مع الحنك الأعلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع أقصى اللسان إلى الحنك الأعلى<br>
           - يخرج الصوت مهموساً شديداً<br><br>
           <strong>الصفات:</strong><br>
           - الهمس: يجري معه النفس<br>
           - الشدة: ينحبس الصوت<br>
           - الاستفال: ينخفض اللسان نسبياً<br>
           - الانفتاح: ينفتح الفم`,
  },
  ل: {
    title: "حرف اللام - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع اللثة العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يلتصق طرف اللسان باللثة<br>
           - يخرج الصوت من جانبي اللسان<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الانحراف: ينحرف إلى جانبي اللسان<br>
           - الإذلاق: سهل النطق`,
  },
  م: {
    title: "حرف الميم - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> الشفتان من انطباقهما<br><br>
           <strong>كيفية النطق:</strong><br>
           - تنطبق الشفتان انطباقاً محكماً<br>
           - يجري الصوت من الأنف<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الشدة: ينحبس الصوت في الفم<br>
           - الاستفال: ينخفض اللسان<br>
           - الغنّة: يخرج جزء من الصوت من الخيشوم`,
  },
  ن: {
    title: "حرف النون - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> طرف اللسان مع اللثة العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - يلتصق طرف اللسان باللثة<br>
           - يجري الصوت من الأنف مع الغنّة<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - الغنّة: يصاحبه صوت الأنف`,
  },
  و: {
    title: "حرف الواو الغير مدية - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> الشفتان مع تضييقهما<br><br>
           <strong>كيفية النطق:</strong><br>
           - تستدير الشفتان وتضيقان<br>
           - يخرج الصوت مجهوراً رخواً<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - اللين: لين في مخرجه`,
  },
  ي: {
    title: "حرف الياء الغير مدية - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> وسط اللسان مع الحنك الأعلى<br><br>
           <strong>كيفية النطق:</strong><br>
           - يرتفع وسط اللسان نحو الحنك<br>
           - يخرج الصوت مجهوراً رخواً<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستفال: ينخفض اللسان<br>
           - اللين: لين في مخرجه`,
  },
  ض: {
    title: "حرف الضاد - التفاصيل الكاملة",
    text: `<strong>المخرج:</strong> حافة اللسان مع الأضراس العليا<br><br>
           <strong>كيفية النطق:</strong><br>
           - تلتصق حافة اللسان بالأضراس العليا<br>
           - يخرج الصوت مجهوراً مطبقاً<br><br>
           <strong>الصفات:</strong><br>
           - الجهر: لا يجري معه النفس<br>
           - الرخاوة: يجري معه الصوت<br>
           - الاستعلاء: يرتفع اللسان<br>
           - الإطباق: ينطبق اللسان`,
  },
};

// ====================================
// أمثلة الحروف من القرآن
// ====================================
const letterExamples = {
  أ: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
  ب: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  ت: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
  ث: "ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ تُبْعَثُونَ",
  ج: "جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
  ح: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
};

// ====================================
// مصادر الأصوات (بدون تغيير الأسماء)
// ====================================
const audioSources = {
  أ: "audios/hamzah.mp3",
  ه: "audios/هاء.mp3",
  ع: "audios/عين.mp3",
  ح: "audios/حاء.mp3",
  غ: "audios/غين.mp3",
  خ: "audios/خاء.mp3",
  ق: "audios/قاف.mp3",
  ك: "audios/كاف.mp3",
  ج: "audios/جيم.mp3",
  ش: "audios/شين.mp3",
  ي: "audios/ياء غير .mp3",
  ض: "audios/ضاد.mp3",
  ل: "audios/لام.mp3",
  ن: "audios/نون.mp3",
  ر: "audios/راء.mp3",
  ط: "audios/طاء.mp3",
  د: "audios/دال.mp3",
  ت: "audios/تاء.mp3",
  ظ: "audios/ظاء.mp3",
  ذ: "audios/ذال.mp3",
  ث: "audios/ثاء مثال (2).mp3",
  ص: "audios/صاد.mp3",
  س: "audios/سين.mp3",
  ز: "audios/زاي.mp3",
  ف: "audios/فاء.mp3",
  م: "audios/ميم.mp3",
  ب: "audios/باء .mp3",
  و: "audios/واو غير.mp3",
};

const exampleSources = {
  أ: "audios/hamzah.mp3",
  ه: "audios/هاء مثال.mp3",
  ع: "audios/عين مثال.mp3",
  ح: "audios/حاء مثال.mp3",
  غ: "audios/غين مثال.mp3",
  خ: "audios/خاء مثال.mp3",
  ق: "audios/قاف مثال.mp3",
  ك: "audios/كاف مثال.mp3",
  ج: "audios/جيم مثال.mp3",
  ش: "audios/شين مثال.mp3",
  ي: "audios/شين مثال.mp3",
  ض: "audios/ضاد مثال.mp3",
  ل: "audios/لام مثال.mp3",
  ن: "audios/نون مثا.mp3",
  ر: "audios/راء مثال.mp3",
  ط: "audios/طاء مثال.mp3",
  د: "audios/دال مثال.mp3",
  ت: "audios/تاء مثال.mp3",
  ظ: "audios/ظاء مثال.mp3",
  ذ: "audios/ذال مثال.mp3",
  ث: "audios/ثاء مثال.mp3",
  ص: "audios/صاد مثال.mp3",
  س: "audios/السين مثال.mp3",
  ز: "audios/زاي مثال.mp3",
  ف: "audios/فاء مثال.mp3",
  م: "audios/ميم مثال.mp3",
  ب: "audios/باء مثال.mp3",
  و: "audios/واو غير مثال.mp3",
};

// ====================================
// شاشة التحميل - Splash Screen
// ====================================
window.addEventListener("DOMContentLoaded", () => {
  const splash   = document.getElementById("splash-screen");
  const mainPage = document.getElementById("main-page");

  // بعد 2.8 ثانية تختفي الشاشة وتظهر الصفحة الرئيسية
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none";
      mainPage.classList.remove("page-hidden");
      mainPage.classList.add("page-visible");
    }, 700);
  }, 4000);

  // إعداد أحداث انتهاء الفيديو
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("ended", function () {

      this.currentTime = 0;
    });
  });
});

// ====================================
// التبويبات - Tab Switching
// ====================================
function switchTab(tabId, clickedBtn) {
  // أوقف جميع الفيديوهات عند تبديل التبويب
  document.querySelectorAll("video").forEach((v) => {
    v.pause();
    v.currentTime = 0;
    v.classList.remove("playing-video");
    const th = v.parentElement.querySelector(".video-thumbnail");
    if (th) th.classList.remove("hidden");
  });

  // أزل active من جميع الأزرار والألواح
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach((p) => p.classList.remove("active"));

  // فعّل الزر واللوح المطلوبين
  clickedBtn.classList.add("active");
  const pane = document.getElementById("tab-" + tabId);
  if (pane) pane.classList.add("active");
}

// ====================================
// تشغيل الفيديو - Lazy Loading
// ====================================
function playCardVideo(card) {
  const video     = card.querySelector("video");
  if (!video) return;

  // التحميل الكسول: أضف src و poster عند أول ضغطة فقط
  if (!video.src && video.dataset.src) {
    video.src = video.dataset.src;
  }

  if (video.paused) {
    // أوقف جميع الفيديوهات الأخرى وأظهر thumbnail-ها
    document.querySelectorAll("video").forEach((v) => {
      if (v !== video) {
        v.pause();
        v.currentTime = 0;
    
      }
    });
    video.play().catch(console.warn);
  } else {
    video.pause();
  }
}

// ====================================
// إدارة الصوت - تحميل عند الطلب فقط
// ====================================
let audioContext;
const audioBuffers   = {};
const exampleBuffers = {};
let currentSource        = null;
let currentExampleSource = null;

function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

async function loadAudioBuffer(url, cache, letter) {
  if (cache[letter]) return cache[letter];
  const response    = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer      = await audioContext.decodeAudioData(arrayBuffer);
  cache[letter]     = buffer;
  return buffer;
}

function playBuffer(buffer, onEnded) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.onended = onEnded || null;
  source.start(0);
  return source;
}

// ====================================
// نطق الحرف
// ====================================
async function playLetter(letter) {
  const btn = event.target;
  btn.classList.add("playing");

  initAudioContext();
  if (audioContext.state === "suspended") await audioContext.resume();

  if (currentSource) {
    try { currentSource.stop(); } catch (e) {}
    currentSource = null;
  }

  const url = audioSources[letter];
  if (!url) {
    alert(`لا يوجد ملف صوتي للحرف "${letter}"`);
    btn.classList.remove("playing");
    return;
  }

  try {
    const buffer = await loadAudioBuffer(url, audioBuffers, letter);
    currentSource = playBuffer(buffer, () => {
      btn.classList.remove("playing");
      currentSource = null;
    });
  } catch (e) {
    alert(`تعذّر تحميل الصوت للحرف "${letter}"`);
    btn.classList.remove("playing");
  }

  const card = btn.closest(".card");
  if (card) playCardVideo(card);
}

// ====================================
// مثال من القرآن
// ====================================
async function playExample(letter) {
  const btn = event.target;
  btn.classList.add("playing");

  initAudioContext();
  if (audioContext.state === "suspended") await audioContext.resume();

  if (currentExampleSource) {
    try { currentExampleSource.stop(); } catch (e) {}
    currentExampleSource = null;
  }

  const url = exampleSources[letter];
  if (!url) {
    alert(`لا يوجد ملف صوتي لمثال الحرف "${letter}"`);
    btn.classList.remove("playing");
    return;
  }

  try {
    const buffer = await loadAudioBuffer(url, exampleBuffers, letter);
    currentExampleSource = playBuffer(buffer, () => {
      btn.classList.remove("playing");
      currentExampleSource = null;
    });
  } catch (e) {
    const example = letterExamples[letter] || letter;
    alert(`تعذّر تحميل الصوت لمثال "${example}"`);
    btn.classList.remove("playing");
  }

  const card = btn.closest(".card");
  if (card) playCardVideo(card);
}

// ====================================
// الشرح التفصيلي - Modal
// ====================================
function showDetail(letter) {
  const modal      = document.getElementById("detailModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText  = document.getElementById("modalText");

  if (!letterDetails[letter]) {
    alert(`لا يوجد شرح تفصيلي للحرف "${letter}" بعد.`);
    return;
  }

  modalTitle.textContent  = letterDetails[letter].title;
  modalText.innerHTML     = letterDetails[letter].text;
  modal.style.display     = "flex";
}

function closeModal() {
  document.getElementById("detailModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("detailModal");
  if (event.target === modal) closeModal();
};
