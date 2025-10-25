import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/OIP.png";
import { motion } from "framer-motion";
import { Play, TrendingUp, Users, Award } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();
  const whatsappNumber = "201234567890";

  const stats = [
    { icon: Users, value: "500+", label: t('hero.stats.clients') },
    { icon: Award, value: "10+", label: t('hero.stats.experience') },
    { icon: TrendingUp, value: "98%", label: t('hero.stats.success') },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 ">
      {/* Dark Background with Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-background">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div className="space-y-8 ">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-bold mb-6 md:flex md:justify-center sm:flex sm:justify-center "
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t('hero.badge')}
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight "
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="md:flex md:justify-center sm:flex sm:justify-center ">{t('hero.title')}</span>
              <motion.span
                className="block text-primary mt-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent md:text-center lg:text-start sm:test-center"
                animate={{
                  textShadow: [
                    "0 0 20px hsl(0 72% 51% / 0.3)",
                    "0 0 40px hsl(0 72% 51% / 0.6)",
                    "0 0 20px hsl(0 72% 51% / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t('hero.titleHighlight')}
              </motion.span>
            </motion.h1>

            <motion.p
              className="xl:ml-[0px] text-lg md:text-xl text-muted-foreground max-w-xl lg:text-start md:text-center sm:mx-auto sm:text-center sm:mx-auto"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>


            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:flex md:justify-center sm:flex sm:justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="min-w-[200px] group shadow-lg shadow-primary/25 hover:shadow-primary/40"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
              >
                {t('contact.cta.button')}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button variant="outline" size="xl" className="min-w-[200px] group border-2">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {t('hero.watchStory')}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 "
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group "
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-sm group-hover:blur-md transition-all" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 md:flex md:justify-center sm:flex sm:justify-center flex-wrap">
                    <stat.icon className="w-full h-6 text-primary mb-2 " />
                    <div className="text-2xl w-full font-bold text-primary mb-1 md:flex md:justify-center sm:flex sm:justify-center">{stat.value}</div>
                    <div className="text-xs w-full text-muted-foreground md:flex md:justify-center sm:flex sm:justify-center">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative flex justify-center lg:justify-start mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative ">
              {/* Glow Effect */}
              <motion.div
                className="z-[-1]  bg-yellow-400 xl:w-[350px] xl:h-[450px] w-[300px] h-[400px] rounded-full absolute top-10 xl:left-[270px] left-[110px] shadow-lg"
                animate={{
                  y: [0, -24, 0], 
                  x: [0, 13, 0],  
                }}
                transition={{
                  duration: 3.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="z-[-1] bg-yellow-400 w-[430px] h-[300px] rounded-full absolute xl:left-[390px] top-[500px] xl:top-[500px] lg:top-[500px] left-[200px] shadow-lg z-9"
                animate={{
                  y: [0, -18, 0], // حركة صعود وهبوط
                  x: [0, 7, 0],  // حركة خفيفة يمين وشمال
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="z-[-1]  bg-yellow-400 w-[460px] h-[300px] rounded-full xl:left-[20px] absolute top-[350px] left-[-100px] shadow-lg"
                animate={{
                  y: [0, -10, 0], 
                  x: [0, 20, 0],  
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Image Container */}
              <div className="z-[-1]  relative md:ml-[25px] lg:ml-[50px] xl:ml-[170px] rounded-3xl  ">
                <motion.img
                  src={heroImage}
                  alt="Classic Gym - Professional Bodybuilding Coach"
                  className="w-full h-[800px] object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
              </div>
                <div className="z-[-1]  absolute bottom-[-200px] top-[-850px] left-[-900px] right-[-950px] inset-0 bg-gradient-to-t from-background via-transparent to-transparent " />


              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 xl:left-[120px] lg:left-[100px] backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.success')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
