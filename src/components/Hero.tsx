import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-data-labeling.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary">
              <CheckCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Экспертиза в лингвистике + ИИ + RAG
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Данные и RAG для{" "}
                <span className="gradient-text">обучения ИИ</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Профессиональная разметка данных и RAG системы с интеграцией Label Studio и CVAT. 
                Быстрый запуск, контроль качества и экспорт готовых датасетов для ML.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                'Поддержка 15+ языков с экспертизой переводчиков',
                'Интеграция с Label Studio, CVAT, ML-бэкендами, RAG',
                'Готовые шаблоны для текста, аудио, CV, временных рядов'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 text-left">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Запустить пилот
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Посмотреть демо
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Языков</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">99.5%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Точность</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="DataArchitech Platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 bg-card rounded-lg sm:rounded-xl shadow-large p-2 sm:p-4 animate-pulse">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-success rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">RAG Ready</span>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-card rounded-lg sm:rounded-xl shadow-large p-2 sm:p-4 animate-pulse">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">99.5% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* English Version */}
      <div className="hidden" id="hero-en">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <CheckCircle className="mr-2 h-4 w-4" />
            Linguistics + AI Expertise
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Data Labeling for{" "}
              <span className="gradient-text">AI Training</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Expert data annotation with Label Studio and CVAT integration. 
              Quick deployment, quality control, and ready-to-use ML datasets.
            </p>
          </div>

          <div className="space-y-3">
            {[
              '15+ languages with professional translator expertise',
              'Integration with Label Studio, CVAT, ML backends',
              'Ready templates for text, audio, CV, time series'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Start Pilot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;