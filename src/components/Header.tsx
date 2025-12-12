import React, { useState } from 'react';
import { Menu, X, Heart, GitCompare, Moon, Sun, Home, Search, Info } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode, favorites, comparison } = useApp();

  const navigation = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'Search', href: '#search', icon: Search },
    { name: 'How It Works', href: '#how-it-works', icon: Info },
  ];

  return (
    <header className="bg-white dark:bg-dark-surface border-b border-neutral-200 dark:border-dark-border sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">isp</span>
              </div>
              <span className="text-xl font-bold text-neutral-900 dark:text-dark-text hidden sm:block">
                KaskoIsP
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Favorites */}
            <a
              href="#favorites"
              className="relative p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors"
              title="Favorites"
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-error-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {favorites.length}
                </span>
              )}
            </a>

            {/* Comparison */}
            <a
              href="#comparison"
              className="relative p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors"
              title="Compare ISPs"
            >
              <GitCompare className="w-5 h-5" />
              {comparison.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  {comparison.length}
                </span>
              )}
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors"
              title={darkMode ? 'Light mode' : 'Dark mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 dark:border-dark-border animate-fadeIn">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
