import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, TrendingUp, Globe } from 'lucide-react';

const milestones = [
  {
    year: '1989',
    title: 'البداية',
    description: 'بدأ Guido van Rossum العمل على Python كمشروع جانبي في عطلة عيد الميلاد.',
    icon: <Star size={24} />,
    color: 'bg-yellow-500'
  },
  {
    year: '1991',
    title: 'الإطلاق الأول',
    description: 'تم نشر الكود المصدري لأول مرة (الإصدار 0.9.0).',
    icon: <Globe size={24} />,
    color: 'bg-blue-500'
  },
  {
    year: '2000',
    title: 'Python 2.0',
    description: 'إصدار رئيسي أضاف ميزات مهمة مثل Garbage Collection ودعم Unicode.',
    icon: <TrendingUp size={24} />,
    color: 'bg-green-500'
  },
  {
    year: '2008',
    title: 'Python 3.0',
    description: 'نقلة نوعية! تم إعادة تصميم اللغة لتكون أكثر منطقية ونظافة (غير متوافقة مع الإصدارات السابقة).',
    icon: <Calendar size={24} />,
    color: 'bg-purple-500'
  }
];

const HistoryTopic = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">رحلة عبر الزمن</h2>
        <p className="text-xl text-gray-600">كيف تحولت فكرة بسيطة في عطلة عيد الميلاد إلى لغة العالم؟</p>
      </section>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute right-1/2 transform translate-x-1/2 h-full w-1 bg-gray-200 rounded-full" />

        <div className="space-y-12">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content Side */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold mb-3 ${item.color}`}>
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-white rounded-full border-4 border-gray-100 shadow-sm flex items-center justify-center">
                <div className={`text-gray-600`}>{item.icon}</div>
              </div>

              {/* Empty Side for Balance */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTopic;
