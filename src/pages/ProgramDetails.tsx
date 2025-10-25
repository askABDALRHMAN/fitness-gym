import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Flame, Zap, Crown, Users2, Heart, Droplet, Sparkles, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: any } = {
  fatLoss: Flame,
  muscleBuilding: Zap,
  bodyRecomposition: Crown,
  athleticPerformance: Users2,
  cupping: Droplet,
  massage: Heart,
  recovery: Sparkles,
};

const ProgramDetails = () => {
  const { programId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const whatsappNumber = "201234567890";
  
  const Icon = iconMap[programId || 'fatLoss'];
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back to Home Button */}
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              {t('nav.home')}
            </Button>
          </div>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mb-6">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t(`programs.items.${programId}.title`)}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(`programs.items.${programId}.description`)}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('programDetails.overview')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`programs.items.${programId}.description`)}
                  </p>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('programDetails.whatIncluded')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[0, 1, 2, 3].map((i) => {
                      const feature = t(`programs.items.${programId}.features.${i}`);
                      return (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              {/* Who Is This For */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('programDetails.whoFor')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>المبتدئين الذين يبدأون رحلة اللياقة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>المتدربين ذوي الخبرة الذين يسعون للتقدم</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>أي شخص ملتزم بتحقيق أهدافه</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Expected Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('programDetails.results')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>نتائج ملحوظة خلال 4-6 أسابيع</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>تحسن في القوة والأداء</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>زيادة في الثقة والطاقة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>تحول كامل في نمط الحياة</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="sticky top-24 border-primary/50 shadow-lg shadow-primary/10">
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">ابدأ الآن</div>
                    <p className="text-sm text-muted-foreground">
                      انضم لمئات العملاء الذين حققوا أهدافهم
                    </p>
                  </div>

                  <Button 
                    variant="hero"
                    size="lg"
                    className="w-full shadow-lg shadow-primary/25"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`مرحباً، أنا مهتم ببرنامج ${t(`programs.items.${programId}.title`)}`)}`, '_blank')}
                  >
                    {t('programDetails.whatsappButton')}
                  </Button>

                  <div className="pt-6 border-t border-border space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">الاستجابة</span>
                      <span className="font-medium">خلال 24 ساعة</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">الدعم</span>
                      <span className="font-medium">24/7 واتساب</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">المتابعة</span>
                      <span className="font-medium">مستمرة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantee Badge */}
              <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">ضمان النتائج</h3>
                  <p className="text-sm text-muted-foreground">
                    نحن واثقون من برامجنا ونضمن رضاك الكامل
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetails;
