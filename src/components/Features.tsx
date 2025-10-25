import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Apple, Users, TrendingUp, Video, Calendar, MessageSquare, Award } from "lucide-react";
import { useTranslation } from 'react-i18next';

const features = [
  { id: "customPlans", icon: Dumbbell },
  { id: "nutrition", icon: Apple },
  { id: "support", icon: Users },
  { id: "tracking", icon: TrendingUp },
  { id: "proven", icon: Video },
  { id: "flexible", icon: Calendar },
  { id: "community", icon: MessageSquare },
  { id: "expertise", icon: Award },
];

const Features = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();

  return (
    <section ref={ref} className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(0 72% 51% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 72% 51% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('features.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            {t('features.title')} <span className="text-primary">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  boxShadow: "0 0 30px hsl(0 72% 51% / 0.2)",
                }}
              />

              <div className="relative">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">{t(`features.items.${feature.id}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`features.items.${feature.id}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
