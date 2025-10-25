import { motion } from "framer-motion";
import { Dumbbell, Instagram, MessageCircle, Mail, MapPin, Phone, Heart, CreditCard, Banknote, Smartphone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const whatsappNumber = "201234567890";

  const footerLinks = {
    quickLinks: [
      { href: "#home" },
      { href: "#about" },
      { href: "#programs" },
      { href: "#transformations" },
    ],
    services: [
      { href: "#training" },
      { href: "#nutrition" },
      { href: "#cupping" },
      { href: "#massage" },
      { href: "#recovery" },
    ],
    support: [
      { href: "#contact" },
      { href: "#faq" },
      { href: "#transformations" },
      // { href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: MessageCircle, href: `https://wa.me/${whatsappNumber}`, label: "WhatsApp" },
    { icon: Mail, href: "mailto:ask@coaching.com", label: "Email" },
  ];

  const paymentMethods = [
    { icon: CreditCard, label: "Credit Card" },
    { icon: Banknote, label: "Cash" },
    { icon: Smartphone, label: "Mobile Payment" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(0 72% 51%) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(0_72%_51%_/_0.4)]">
                <Dumbbell className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-primary">{t('footer.name')}</h3>
                <p className="text-xs text-muted-foreground">{t('footer.subName')}</p>
              </div>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{t('footer.contact.email')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{t('footer.contact.location')}</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-bold text-lg mb-4 text-foreground">
                {t(`footer.${section}`)}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {t(`footer.links.${link.href.replace('#', '')}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-8">
          {/* Payment Methods */}
          <div className="text-center">
            <h4 className="font-bold text-sm mb-4 text-foreground">{t('footer.paymentMethods.title')}</h4>
            <div className="flex items-center justify-center gap-6">
              {paymentMethods.map((method) => (
                <motion.div
                  key={method.label}
                  className="flex flex-col items-center gap-2 text-muted-foreground"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs">{t(`footer.paymentMethods.${method.label.toLowerCase().replace(' ', '')}`)}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {t('footer.rights', { year: currentYear })}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            className="absolute right-6 bottom-[15px] w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_hsl(0_72%_51%_/_0.4)] transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ChevronDown className="w-6 h-6 rotate-180 " />
          </motion.button>
        
      </div>
    </footer>
  );
};

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default Footer;
