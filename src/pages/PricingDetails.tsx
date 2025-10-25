import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Sparkles, Crown, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingDetails = () => {
  const { planId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const whatsappNumber = "201234567890";
  
  const isPopular = planId === 'premium';
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 px-6">
        {/* Back to Home Button */}
        <div className="container mx-auto max-w-6xl mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            {t('nav.home')}
          </Button>
        </div>
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {isPopular && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                {t('pricing.popular')}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t(`pricing.plans.${planId}.name`)}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t(`pricing.plans.${planId}.description`)}
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-black bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                {t(`pricing.plans.${planId}.price`)}
              </span>
              <span className="text-2xl text-muted-foreground">{t(`pricing.plans.${planId}.period`)}</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Check className="w-6 h-6 text-primary" />
                    {t('pricingDetails.included')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {Array.from({ length: 8 }).map((_, i) => {
                      const featureKey = `pricing.plans.${planId}.features.${i}`;
                      const feature = t(featureKey);
                      if (feature === featureKey) return null;
                      return (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              {/* Not Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <X className="w-6 h-6 text-muted-foreground" />
                    {t('pricingDetails.notIncluded')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4" />
                      <span>المكملات الغذائية (يمكن التوصية بها)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4" />
                      <span>عضوية الصالة الرياضية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <X className="w-4 h-4" />
                      <span>المعدات الشخصية</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Program Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">تفاصيل البرنامج</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <div className="text-sm text-muted-foreground mb-1">مدة البرنامج</div>
                      <div className="text-xl font-bold">شهر واحد</div>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <div className="text-sm text-muted-foreground mb-1">وقت الاستجابة</div>
                      <div className="text-xl font-bold">خلال 24 ساعة</div>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <div className="text-sm text-muted-foreground mb-1">التحديثات</div>
                      <div className="text-xl font-bold">
                        {planId === 'basic' ? 'شهرية' : planId === 'premium' ? 'أسبوعية' : 'مستمرة'}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <div className="text-sm text-muted-foreground mb-1">التواصل</div>
                      <div className="text-xl font-bold">واتساب</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">كيف يعمل البرنامج</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { step: '1', title: 'التسجيل', desc: 'تواصل معنا عبر واتساب وقدم معلوماتك' },
                      { step: '2', title: 'التقييم', desc: 'نقوم بتقييم حالتك وأهدافك' },
                      { step: '3', title: 'خطة مخصصة', desc: 'نصمم برنامج تدريب وتغذية خاص بك' },
                      { step: '4', title: 'البدء', desc: 'ابدأ رحلتك مع متابعة مستمرة' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className={`sticky top-24 border-primary/50 shadow-lg ${isPopular ? 'shadow-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : 'shadow-primary/10'}`}>
                <CardContent className="p-6 space-y-6">
                  {planId === 'elite' && (
                    <div className="flex items-center justify-center gap-2 text-primary mb-2">
                      <Crown className="w-6 h-6" />
                      <span className="font-bold">باقة النخبة</span>
                    </div>
                  )}

                  <div className="text-center">
                    <div className="text-4xl font-black text-primary mb-1">
                      {t(`pricing.plans.${planId}.price`)} جنيه
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t(`pricing.plans.${planId}.period`)}
                    </p>
                  </div>

                  <Button 
                    variant="hero"
                    size="lg"
                    className="w-full shadow-lg shadow-primary/25"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`مرحباً، أنا مهتم بباقة ${t(`pricing.plans.${planId}.name`)} (${t(`pricing.plans.${planId}.price`)} جنيه/شهر)`)}`, '_blank')}
                  >
                    {t('pricingDetails.whatsappButton')}
                  </Button>

                  <div className="pt-6 border-t border-border space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">بدء فوري</span>
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">إلغاء مرن</span>
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">دعم مستمر</span>
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">ضمان استرداد الأموال</h3>
                  <p className="text-sm text-muted-foreground">
                    غير راضٍ خلال 7 أيام؟ نسترد لك أموالك بالكامل
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <h3 className="font-bold">هل لديك أسئلة؟</h3>
                  <p className="text-sm text-muted-foreground">
                    تواصل معنا وسنساعدك في اختيار الباقة المناسبة
                  </p>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                  >
                    تحدث معنا
                  </Button>
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

export default PricingDetails;
