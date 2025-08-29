import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ru');

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const navigation = {
    ru: [
      { name: 'Решения', href: '#solutions' },
      { name: 'Как работает', href: '#how-it-works' },
      { name: 'Интеграции', href: '#integrations' },
      { name: 'Цены', href: '#pricing' },
      { name: 'Ресурсы', href: '#resources' }
    ],
    en: [
      { name: 'Solutions', href: '#solutions' },
      { name: 'How it works', href: '#how-it-works' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Resources', href: '#resources' }
    ]
  };

  const cta = {
    ru: { demo: 'Попробовать демо', contact: 'Связаться' },
    en: { demo: 'Try Demo', contact: 'Contact' }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DL</span>
          </div>
          <span className="text-xl font-bold">DataLabel Pro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation[language as keyof typeof navigation].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden sm:flex"
          >
            <Globe className="h-4 w-4" />
            <span className="ml-1 text-xs font-medium uppercase">{language}</span>
          </Button>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="outline" size="sm">
              {cta[language as keyof typeof cta].contact}
            </Button>
            <Button variant="hero" size="sm">
              {cta[language as keyof typeof cta].demo}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 px-4 space-y-3">
            {navigation[language as keyof typeof navigation].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Button variant="outline" className="w-full">
                {cta[language as keyof typeof cta].contact}
              </Button>
              <Button variant="hero" className="w-full">
                {cta[language as keyof typeof cta].demo}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="w-full justify-center"
              >
                <Globe className="h-4 w-4 mr-2" />
                Switch to {language === 'ru' ? 'English' : 'Русский'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;