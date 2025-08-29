import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Mic, 
  Image, 
  Video, 
  TrendingUp, 
  Languages, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const dataTypes = [
    {
      icon: FileText,
      title: "Текст и NLP",
      titleEn: "Text & NLP",
      description: "NER, классификация, анализ тональности, Q&A разметка",
      descriptionEn: "NER, classification, sentiment analysis, Q&A labeling",
      features: ["Многоязычные корпуса", "Терминологическая проверка", "Тематическая классификация"]
    },
    {
      icon: Mic,
      title: "Аудио и ASR",
      titleEn: "Audio & ASR",
      description: "Транскрибация, распознавание речи, диаризация спикеров",
      descriptionEn: "Transcription, speech recognition, speaker diarization",
      features: ["Стенография событий", "Синхронный перевод", "Качество звука"]
    },
    {
      icon: Image,
      title: "Компьютерное зрение",
      titleEn: "Computer Vision",
      description: "Детекция объектов, сегментация, классификация изображений",
      descriptionEn: "Object detection, segmentation, image classification",
      features: ["Интеграция CVAT", "Предобученные модели", "Активное обучение"]
    },
    {
      icon: Video,
      title: "Видео аннотации",
      titleEn: "Video Annotations",
      description: "Трекинг объектов, временные метки, анализ действий",
      descriptionEn: "Object tracking, temporal labels, action recognition",
      features: ["Frame-by-frame", "Трекинг движения", "Событийная разметка"]
    },
    {
      icon: TrendingUp,
      title: "Временные ряды",
      titleEn: "Time Series",
      description: "Аномалии, тренды, прогнозирование, IoT данные",
      descriptionEn: "Anomalies, trends, forecasting, IoT data",
      features: ["Паттерн анализ", "Сезонность", "Outlier detection"]
    }
  ];

  const capabilities = [
    {
      icon: Languages,
      title: "Лингвистическая экспертиза",
      titleEn: "Linguistic Expertise",
      description: "15+ языков, технические переводы, глоссарии",
      descriptionEn: "15+ languages, technical translations, glossaries",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Zap,
      title: "ML-ускорение",
      titleEn: "ML Acceleration",
      description: "Автоподсказки, активное обучение, предикты",
      descriptionEn: "Auto-suggestions, active learning, predictions",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      icon: Shield,
      title: "Контроль качества",
      titleEn: "Quality Control",
      description: "Двойная проверка, метрики согласованности, отчёты",
      descriptionEn: "Double review, consistency metrics, reports",
      color: "bg-green-50 text-green-600 border-green-200"
    }
  ];

  return (
    <section className="py-20 bg-background" id="solutions">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Поддерживаемые типы данных
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Профессиональная разметка для{" "}
            <span className="gradient-text">любых задач ИИ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            От текстовых корпусов до видеопотоков — наша платформа покрывает все основные типы данных 
            с экспертизой лингвистов и интеграциями ведущих инструментов.
          </p>
        </div>

        {/* Data Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {dataTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {type.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className={`group hover:shadow-large transition-all duration-300 border-2 ${capability.color.split(' ')[2]}`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-2xl ${capability.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <capability.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">
                  {capability.title}
                </CardTitle>
                <CardDescription>
                  {capability.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-subtle rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Готовы начать работу с вашими данными?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Получите консультацию эксперта по лингвистике и выберите оптимальную стратегию разметки для ваших ML-проектов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-primary text-white hover:shadow-glow transform hover:scale-[1.02] font-bold h-11 px-6 py-3 group">
              Запросить консультацию
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary/20 bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-medium h-11 px-6 py-3">
              Изучить интеграции
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;