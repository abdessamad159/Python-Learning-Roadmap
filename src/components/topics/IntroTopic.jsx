import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, ArrowRight, MessageCircle } from 'lucide-react';

const IntroTopic = () => {
  const [viewMode, setViewMode] = useState('human'); // 'human' or 'machine'

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">لغة البشر vs لغة الآلة</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            البرمجة هي ببساطة عملية "ترجمة" أفكارنا البشرية إلى لغة تفهمها الآلة.
            دعنا نرى الفرق بأنفسنا!
          </p>
        </motion.div>
      </section>

      {/* Interactive Comparison */}
      <section className="bg-gray-50 rounded-2xl p-8 shadow-inner">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('human')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
              viewMode === 'human'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MessageCircle size={20} />
            <span>لغة البشر (Python)</span>
          </button>
          <button
            onClick={() => setViewMode('machine')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
              viewMode === 'machine'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Cpu size={20} />
            <span>لغة الآلة (Binary)</span>
          </button>
        </div>

        <div className="relative h-64 bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <AnimatePresence mode="wait">
            {viewMode === 'human' ? (
              <motion.div
                key="human"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="text-center">
                  <Code2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <code className="text-2xl font-mono text-green-400 block mb-2">
                    print("Hello, World!")
                  </code>
                  <p className="text-gray-400 mt-4">
                    واضح، مقروء، ومفهوم لأي شخص يعرف الإنجليزية!
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="machine"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="text-center">
                  <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <code className="text-xl font-mono text-blue-400 block mb-2 break-all max-w-md mx-auto">
                    01001000 01100101 01101100 01101100 01101111
                  </code>
                  <p className="text-gray-400 mt-4">
                    سلسلة طويلة من الأصفار والآحاد.. مستحيل أن نحفظها!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Explanation Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🧠</span>
          </div>
          <h3 className="text-xl font-bold mb-2">كيف نفكر نحن؟</h3>
          <p className="text-gray-600">
            نحن نفكر بالكلمات، الجمل، والمعاني. نحتاج لغة قريبة من طريقة كلامنا لنبدع ونحل المشاكل.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">💻</span>
          </div>
          <h3 className="text-xl font-bold mb-2">كيف يفكر الحاسوب؟</h3>
          <p className="text-gray-600">
            الحاسوب لا "يفهم" المعنى. هو فقط يستجيب لإشارات كهربائية (تشغيل/إيقاف) نمثلها بـ 1 و 0.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroTopic;
