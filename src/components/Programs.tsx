import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Zap, Crown, Users2, Heart, Droplet, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const programs = [
    {
      id: "fatLoss",
      icon: Flame,
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
    },
    {
      id: "muscle",
      icon: Zap,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      id: "recomp",
      icon: Crown,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
    },
    {
      id: "athletic",
      icon: Users2,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      id: "cupping",
      icon: Droplet,
      color: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-500",
    },
    {
      id: "massage",
      icon: Heart,
      color: "from-rose-500/20 to-pink-500/20",
      iconColor: "text-rose-500",
    },
    {
      id: "recovery",
      icon: Sparkles,
      color: "from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <section id="programs" ref={ref} className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('programs.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            {t('programs.title')} <span className="text-primary">{t('programs.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('programs.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{ background: `linear-gradient(135deg, ${program.color})` }}
              />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold mb-3">{t(`programs.items.${program.id}.title`)}</h3>
                <p className="text-muted-foreground mb-6">{t(`programs.items.${program.id}.description`)}</p>

                <ul className="space-y-3 mb-6">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{t(`programs.items.${program.id}.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={() => navigate(`/program/${program.id}`)}
                >
                  {t('programs.learnMore')}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
