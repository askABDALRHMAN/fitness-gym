import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

const faqIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('faq.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            {t('faq.title')} <span className="text-primary">{t('faq.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('faq.description')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqIds.map((faqId, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-card border rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "border-primary/50 shadow-[0_0_20px_hsl(var(--primary)_/_0.15)]" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-accent/50 transition-colors"
                >
                  <span className="font-bold text-lg">{t(`faq.items.${faqId}.question`)}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden "
                >
                  <div className="px-6 pb-6 text-muted-foreground mt-5">
                    {t(`faq.items.${faqId}.answer`)}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
