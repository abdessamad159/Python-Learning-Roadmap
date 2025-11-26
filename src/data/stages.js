export const stages = [
  {
    id: 0,
    title: "التحضير والإعداد",
    description: "ابدأ رحلتك بتجهيز بيئة العمل وفهم أساسيات البرمجة.",
    status: "unlocked", // unlocked, completed, locked
    topics: [
      "مقدمة عن البرمجة",
      "لماذا Python؟",
      "تثبيت Python",
      "اختيار المحرر (VS Code)",
      "كتابة أول برنامج"
    ]
  },
  {
    id: 1,
    title: "أساسيات Python",
    description: "تعلم القواعد الأساسية للغة وكيفية كتابة أكواد بسيطة.",
    status: "locked",
    topics: [
      "المتغيرات وأنواع البيانات",
      "العمليات الحسابية",
      "الشروط (if/else)",
      "الحلقات (Loops)",
      "الدوال الأساسية"
    ]
  },
  {
    id: 2,
    title: "هياكل البيانات",
    description: "كيفية تنظيم وتخزين البيانات بفعالية في Python.",
    status: "locked",
    topics: [
      "القوائم (Lists)",
      "القواميس (Dictionaries)",
      "المجموعات (Sets)",
      "Tuples",
      "List Comprehensions"
    ]
  },
  {
    id: 3,
    title: "الدوال والوحدات",
    description: "كتابة كود نظيف وقابل لإعادة الاستخدام.",
    status: "locked",
    topics: [
      "تعريف الدوال",
      "المعاملات",
      "Scope",
      "Lambda Functions",
      "استيراد الوحدات"
    ]
  },
  {
    id: 4,
    title: "البرمجة الكائنية (OOP)",
    description: "مفهوم الكلاسات والكائنات وكيفية نمذجة العالم الحقيقي.",
    status: "locked",
    topics: [
      "Classes & Objects",
      "Inheritance",
      "Encapsulation",
      "Polymorphism"
    ]
  }
];
