import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Trophy, Target, Heart, Zap } from "lucide-react";
import coachImage from "@/assets/coach-logo.jpg";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    { 
      icon: Trophy,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: Target,
      title: t('about.values.goalOriented.title'),
      description: t('about.values.goalOriented.description'),
    },
    {
      icon: Heart,
      title: t('about.values.passionate.title'),
      description: t('about.values.passionate.description'),
    },
    {
      icon: Zap,
      title: t('about.values.energetic.title'),
      description: t('about.values.energetic.description'),
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(0 72% 51%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('about.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Coach Photo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative">
              <motion.img
                src={coachImage}
                alt={t('about.coachName')}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary shadow-[0_0_40px_hsl(0_72%_51%_/_0.3)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-primary/50 rounded-xl px-6 py-3 shadow-lg whitespace-nowrap">
                <p className="font-bold text-primary">{t('about.coach')}</p>
                <p className="text-xs text-muted-foreground">{t('about.coachTitle')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
                <h3 className="text-3xl font-bold">{t('about.method.title')}</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('about.method.step1.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('about.method.step1.description')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('about.method.step2.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('about.method.step2.description')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('about.method.step3.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('about.method.step3.description')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('about.method.step4.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('about.method.step4.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <value.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "500+", label: t('about.achievements.transformations') },
            { value: "10+", label: t('about.achievements.experience') },
            { value: "98%", label: t('about.achievements.satisfaction') },
            { value: "24/7", label: t('about.achievements.support') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
