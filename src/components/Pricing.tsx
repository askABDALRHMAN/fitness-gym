import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const plans = [
  { id: "basic", popular: false },
  { id: "premium", popular: true },
  { id: "elite", popular: false },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="pricing" ref={ref} className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(0 72% 51% / 0.1) 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('pricing.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            {t('pricing.title')} <span className="text-primary">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('pricing.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <Card
                className={`relative overflow-hidden transition-all duration-500 h-full ${
                  plan.popular
                    ? "border-primary shadow-[0_0_40px_hsl(var(--primary)_/_0.3)] scale-105"
                    : "border-border bg-card hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.15)]"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 text-sm font-bold rounded-bl-2xl flex items-center gap-2"
                    initial={{ x: 100 }}
                    animate={isInView ? { x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    {t('pricing.mostPopular')}
                  </motion.div>
                )}

                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                )}

                <CardHeader className="text-center pb-8 pt-8 relative">
                  <CardTitle className="text-3xl mb-2">{t(`pricing.plans.${plan.id}.name`)}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-6">
                    {t(`pricing.plans.${plan.id}.description`)}
                  </CardDescription>
                  <motion.div
                    className="flex items-baseline justify-center gap-1"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  >
                    <span className="text-6xl font-black bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                      {t(`pricing.plans.${plan.id}.price`)}
                    </span>
                    <span className="text-muted-foreground text-lg">/{t(`pricing.plans.${plan.id}.duration`)}</span>
                  </motion.div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {Array.from({ length: 8 }).map((_, i) => {
                      const featureKey = `pricing.plans.${plan.id}.features.${i}`;
                      const feature = t(featureKey);
                      if (feature === featureKey) return null;
                      return (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground text-sm">{feature}</span>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full group"
                    size="lg"
                    onClick={() => navigate(`/pricing/${plan.id}`)}
                  >
                    {t('pricing.startToday')}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{t('pricing.guarantee')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
