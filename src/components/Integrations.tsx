import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ExternalLink, 
  Database, 
  Cpu, 
  Layers, 
  GitBranch, 
  Settings,
  CheckCircle,
  ArrowRight,
  Zap
} from "lucide-react";

const Integrations = () => {
  const platforms = [
    {
      id: "label-studio",
      name: "Label Studio",
      description: "Универсальная платформа для разметки всех типов данных",
      descriptionEn: "Universal data labeling platform for all data types",
      features: [
        "Поддержка 15+ типов аннотаций",
        "Машинное обучение интеграции",
        "Collaborative workflows",
        "REST API и webhooks"
      ],
      benefits: [
        "Готовые шаблоны для 50+ задач",
        "Активное обучение и предикты",
        "Экспорт в 20+ форматов",
        "Масштабирование команды"
      ],
      setup: [
        "Развертывание через Docker/Cloud",
        "Подключение к DataArchitech API",
        "Настройка проектов и пользователей",
        "Интеграция ML-бэкендов"
      ]
    },
    {
      id: "cvat",
      name: "CVAT",
      description: "Специализированный инструмент для компьютерного зрения",
      descriptionEn: "Specialized computer vision annotation tool",
      features: [
        "Покадровая аннотация видео",
        "Автоматическая интерполяция",
        "3D point cloud support",
        "Advanced tracking"
      ],
      benefits: [
        "Ускорение CV-задач до 10x",
        "Поддержка больших датасетов",
        "Предобученные детекторы",
        "Quality assurance tools"
      ],
      setup: [
        "Установка CVAT instance",
        "Конфигурация с DataArchitech",
        "Настройка auto-annotation",
        "Экспорт в COCO/YOLO форматы"
      ]
    }
  ];

  const mlBackends = [
    {
      name: "PyTorch",
      icon: Zap,
      description: "Интеграция с PyTorch моделями для предсказаний"
    },
    {
      name: "TensorFlow",
      icon: Cpu,
      description: "TensorFlow Serving для real-time инференса"
    },
    {
      name: "Hugging Face",
      icon: Database,
      description: "Готовые transformer модели для NLP задач"
    },
    {
      name: "Custom APIs",
      icon: Settings,
      description: "Подключение собственных ML сервисов"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="integrations">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Открытые стандарты
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Интеграции с{" "}
            <span className="gradient-text">ведущими платформами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DataArchitech работает с Label Studio, CVAT и популярными ML-фреймворками. 
            Никакого vendor lock-in — ваши данные остаются под вашим контролем.
          </p>
        </div>

        {/* Integration Platforms */}
        <Tabs defaultValue="label-studio" className="w-full mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="label-studio">Label Studio</TabsTrigger>
            <TabsTrigger value="cvat">CVAT</TabsTrigger>
          </TabsList>

          {platforms.map((platform) => (
            <TabsContent key={platform.id} value={platform.id}>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Platform Info */}
                <div className="space-y-6">
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl flex items-center gap-3">
                            {platform.name}
                            <Badge variant="secondary">Open Source</Badge>
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {platform.description}
                          </CardDescription>
                        </div>
                        <ExternalLink className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Layers className="h-4 w-4 mr-2 text-primary" />
                            Основные возможности
                          </h4>
                          <div className="space-y-2">
                            {platform.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button variant="hero" className="w-full group">
                    Настроить интеграцию
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Setup Guide & Benefits */}
                <div className="space-y-6">
                  <Card className="bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <GitBranch className="h-5 w-5 mr-2 text-primary" />
                        Преимущества интеграции
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {platform.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-primary" />
                        Быстрая настройка
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {platform.setup.map((step, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <span className="text-sm text-muted-foreground">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* ML Backends */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ML-бэкенды и автоматизация
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Подключайте готовые модели для ускорения разметки и активного обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mlBackends.map((backend, index) => (
              <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex items-center justify-center transition-colors">
                    <backend.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{backend.name}</h4>
                  <p className="text-sm text-muted-foreground">{backend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration CTA */}
        <div className="mt-16 text-center bg-gradient-subtle rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Нужна кастомная интеграция?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Наша команда поможет настроить интеграцию с вашими существующими инструментами и ML-пайплайнами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" className="group">
              Обсудить интеграцию
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              Техническая документация
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;