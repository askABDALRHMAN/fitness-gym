import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import { useTranslation } from 'react-i18next';

const testimonials = [
  { id: "client1", image: transformation1, rating: 5 },
  { id: "client2", image: transformation2, rating: 5 },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();

  return (
    <section id="transformations" ref={ref} className="py-24 px-6 bg-card/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{t('testimonials.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            {t('testimonials.title')} <span className="text-primary">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 group">
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={testimonial.image}
                      alt={`${t(`testimonials.items.${testimonial.id}.name`)} transformation`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                    
                    {/* Result Badge */}
                    <motion.div
                      className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {t(`testimonials.items.${testimonial.id}.result`)}
                    </motion.div>

                    {/* Before/After Stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <div className="text-xs text-muted-foreground">{t('testimonials.before')}</div>
                        <div className="font-bold text-primary">{t(`testimonials.items.${testimonial.id}.before`)}</div>
                      </div>
                      <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <div className="text-xs text-muted-foreground">{t('testimonials.after')}</div>
                        <div className="font-bold text-primary">{t(`testimonials.items.${testimonial.id}.after`)}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 relative">
                    <Quote className="absolute top-4 right-6 w-12 h-12 text-primary/10" />
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <p className="text-foreground italic mb-4 text-lg">
                      "{t(`testimonials.items.${testimonial.id}.quote`)}"
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-bold text-lg text-primary">{t(`testimonials.items.${testimonial.id}.name`)}</p>
                        <p className="text-sm text-muted-foreground">{t(`testimonials.items.${testimonial.id}.age`)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {['stat1', 'stat2', 'stat3', 'stat4'].map((statId, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {t(`testimonials.stats.${statId}.value`)}
              </motion.div>
              <div className="text-sm text-muted-foreground">{t(`testimonials.stats.${statId}.label`)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
