import { Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    ru: {
      company: {
        title: "Компания",
        links: [
          { name: "О нас", href: "#about" },
          { name: "Карьера", href: "#careers" },
          { name: "Пресс-центр", href: "#press" },
          { name: "Партнеры", href: "#partners" }
        ]
      },
      solutions: {
        title: "Решения",
        links: [
          { name: "Текст и NLP", href: "#text-nlp" },
          { name: "Компьютерное зрение", href: "#computer-vision" },
          { name: "Аудио и речь", href: "#audio-speech" },
          { name: "Временные ряды", href: "#time-series" }
        ]
      },
      resources: {
        title: "Ресурсы",
        links: [
          { name: "Документация", href: "#docs" },
          { name: "API Reference", href: "#api" },
          { name: "Блог", href: "#blog" },
          { name: "Поддержка", href: "#support" }
        ]
      },
      legal: {
        title: "Правовая информация",
        links: [
          { name: "Условия использования", href: "#terms" },
          { name: "Политика конфиденциальности", href: "#privacy" },
          { name: "Обработка данных", href: "#data-processing" },
          { name: "Лицензии", href: "#licenses" }
        ]
      }
    },
    en: {
      company: {
        title: "Company",
        links: [
          { name: "About Us", href: "#about" },
          { name: "Careers", href: "#careers" },
          { name: "Press", href: "#press" },
          { name: "Partners", href: "#partners" }
        ]
      },
      solutions: {
        title: "Solutions",
        links: [
          { name: "Text & NLP", href: "#text-nlp" },
          { name: "Computer Vision", href: "#computer-vision" },
          { name: "Audio & Speech", href: "#audio-speech" },
          { name: "Time Series", href: "#time-series" }
        ]
      },
      resources: {
        title: "Resources",
        links: [
          { name: "Documentation", href: "#docs" },
          { name: "API Reference", href: "#api" },
          { name: "Blog", href: "#blog" },
          { name: "Support", href: "#support" }
        ]
      },
      legal: {
        title: "Legal",
        links: [
          { name: "Terms of Service", href: "#terms" },
          { name: "Privacy Policy", href: "#privacy" },
          { name: "Data Processing", href: "#data-processing" },
          { name: "Licenses", href: "#licenses" }
        ]
      }
    }
  };

  const contactInfo = {
    ru: {
      email: "hello@datalabel.pro",
      phone: "+7 (495) 123-45-67",
      address: "Москва, Россия"
    },
    en: {
      email: "hello@datalabel.pro", 
      phone: "+7 (495) 123-45-67",
      address: "Moscow, Russia"
    }
  };

  const language = 'ru'; // This would come from context in a real app

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DL</span>
              </div>
              <span className="text-xl font-bold">DataLabel Pro</span>
            </div>
            
            <p className="text-background/80 text-sm leading-relaxed">
              {language === 'ru' 
                ? "Профессиональная разметка данных с экспертизой в лингвистике и интеграциями ведущих платформ для ИИ."
                : "Professional data labeling with linguistic expertise and leading AI platform integrations."
              }
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-sm text-background/80">{contactInfo[language as keyof typeof contactInfo].email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-sm text-background/80">{contactInfo[language as keyof typeof contactInfo].phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-sm text-background/80">{contactInfo[language as keyof typeof contactInfo].address}</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections[language as keyof typeof footerSections]).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h4 className="font-semibold text-background">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/80 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © {currentYear} DataLabel Pro. {language === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-background/60" />
                <span className="text-sm text-background/80">
                  {language === 'ru' ? '15+ языков поддержки' : '15+ languages supported'}
                </span>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <span className="sr-only">Telegram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.787l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;