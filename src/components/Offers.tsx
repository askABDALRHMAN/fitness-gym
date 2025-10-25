import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Dumbbell, Heart, Sparkles, Activity, Zap, Clock, Users, Tag } from "lucide-react";

const Offers = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  
  const whatsappNumber = "201234567890";

  const monthOffers = [
    { key: 'daily', icon: Clock },
    { key: 'weekly', icon: Calendar },
    { key: 'monthly', icon: Calendar },
    { key: 'treadmill', icon: Activity },
    { key: 'weightLossMonth', icon: Dumbbell },
    { key: 'weightLossWeek', icon: Dumbbell },
    { key: 'weightLossDay', icon: Activity },
    { key: 'private', icon: Users },
    { key: 'nutrition', icon: Heart },
    { key: 'friends', icon: Users }
  ];

  const therapyOffers = [
    { key: 'cupping', icon: Sparkles },
    { key: 'massage', icon: Heart },
    { key: 'recovery', icon: Zap }
  ];

  const comboOffers = [
    { key: 'cuppingMassage', icon: Sparkles },
    { key: 'recoverySessions', icon: Zap },
    { key: 'massageSessions', icon: Heart }
  ];

  return (
    <section id="offers" className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-bold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            {t('offers.badge')}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            {t('offers.title')} <span className="text-primary">{t('offers.titleHighlight')}</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t('offers.description')}
          </motion.p>
        </motion.div>

        {/* Modern Offer Categories */}
        <div className="space-y-12">
          {/* Subscription Offers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  {t('offers.month.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {monthOffers.map((offer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-card to-primary/5 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <offer.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {t(`offers.month.${offer.key}`)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-shrink-0 hover:bg-primary/20 hover:text-primary"
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t(`offers.month.${offer.key}`))}`, '_blank')}
                      >
                        <Tag className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Therapy Offers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  {t('offers.therapy.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {therapyOffers.map((offer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-card to-primary/5 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <offer.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {t(`offers.therapy.${offer.key}`)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-shrink-0 hover:bg-primary/20 hover:text-primary"
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t(`offers.therapy.${offer.key}`))}`, '_blank')}
                      >
                        <Tag className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Special Combo Offers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Card className="border-2 border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-b border-primary/30">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/30">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  {t('offers.combo.title')}
                  <Sparkles className="w-6 h-6 text-primary ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {comboOffers.map((offer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.9 + index * 0.05 }}
                      whileHover={{ scale: 1.03, y: -3 }}
                      className="group p-5 rounded-xl bg-gradient-to-br from-primary/10 to-card border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                          <offer.icon className="w-6 h-6 text-primary" />
                        </div>
                        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      </div>
                      <p className="text-base font-bold text-foreground mb-4 leading-snug">
                        {t(`offers.combo.${offer.key}`)}
                      </p>
                      <Button
                        variant="hero"
                        size="sm"
                        className="w-full shadow-lg shadow-primary/30"
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t(`offers.combo.${offer.key}`))}`, '_blank')}
                      >
                        {t('offers.bookNow')}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Management Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="text-center mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30"
        >
          <p className="text-lg font-semibold text-foreground mb-2">{t('offers.management')}</p>
          <p className="text-base text-muted-foreground">{t('offers.supervisor')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
