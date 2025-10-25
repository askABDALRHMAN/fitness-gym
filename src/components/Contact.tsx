import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { t } = useTranslation();
  const whatsappNumber = "201234567890";

  const contactMethods = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      link: `https://wa.me/${whatsappNumber}`,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      id: "instagram",
      icon: Instagram,
      link: "https://instagram.com/",
      color: "from-pink-500/20 to-purple-500/20",
      iconColor: "text-pink-500",
    },
    {
      id: "email",
      icon: Mail,
      link: "mailto:ask@coaching.com",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-card/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('contact.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${method.color})` }}
                  />
                  
                  <div className="relative">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2">{t(`contact.${method.id}.title`)}</h3>
                    <p className="text-muted-foreground mb-6">{t(`contact.${method.id}.description`)}</p>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      {t(`contact.${method.id}.title`)}
                    </Button>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-1">{t('contact.info.phone')}</h4>
                <p className="text-sm text-muted-foreground">{t('contact.info.hoursValue')}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-1">{t('contact.info.email')}</h4>
                <p className="text-sm text-muted-foreground">{t('contact.email.description')}</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-1">{t('contact.info.location')}</h4>
                <p className="text-sm text-muted-foreground">{t('contact.info.locationValue')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            {t('contact.cta.description')}
          </p>
          <Button variant="hero" size="xl" onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}>
            {t('contact.cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
