'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Star, Zap, Users, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const templates = [
  {
    id: 1,
    name: 'Clothing Store',
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Perfect for fashion retailers'
  },
  {
    id: 2,
    name: 'Electronics Hub',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Modern tech store layout'
  },
  {
    id: 3,
    name: 'Home Decor',
    category: 'Lifestyle',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Elegant home furnishing design'
  },
  {
    id: 4,
    name: 'Jewelry Gallery',
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Luxury jewelry showcase'
  }
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '1 Store',
      '10 Products',
      'Basic Template',
      '100MB Storage',
      'Community Support'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Basic',
    price: '$29',
    period: 'month',
    description: 'For growing businesses',
    features: [
      '1 Store',
      '100 Products',
      'All Templates',
      '1GB Storage',
      'Email Support',
      'Basic Analytics'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Pro',
    price: '$79',
    period: 'month',
    description: 'For established stores',
    features: [
      '3 Stores',
      'Unlimited Products',
      'All Templates',
      '10GB Storage',
      'Priority Support',
      'Advanced Analytics',
      'AI Search Addon'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Elite Lifetime',
    price: '$999',
    period: 'one-time',
    description: 'Lifetime access to everything',
    features: [
      'Unlimited Stores',
      'Unlimited Products',
      'All Templates',
      'Unlimited Storage',
      'Premium Support',
      'All Current & Future Addons',
      'White-label Option'
    ],
    popular: false,
    cta: 'Get Lifetime Access'
  }
];

const addons = [
  {
    name: 'AI Product Search',
    price: '$19',
    period: 'month',
    description: 'Smart search with AI recommendations',
    icon: <Zap className="h-6 w-6" />
  },
  {
    name: 'Email Automation',
    price: '$29',
    period: 'month',
    description: 'Automated marketing campaigns',
    icon: <Users className="h-6 w-6" />
  },
  {
    name: 'Advanced Analytics',
    price: '$39',
    period: 'month',
    description: 'Deep insights and reporting',
    icon: <Shield className="h-6 w-6" />
  }
];

export default function LandingPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ThinkShop
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#templates" className="text-gray-600 hover:text-gray-900 transition-colors">Templates</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#addons" className="text-gray-600 hover:text-gray-900 transition-colors">Addons</a>
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            🚀 Launch your store in minutes
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build Your Dream
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              eCommerce Store
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create stunning online stores with our professional templates, powerful addons, 
            and subscription-based platform. No coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
                Start Building <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Templates Gallery */}
      <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beautiful Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates, 
              crafted for different industries and niches.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template) => (
              <Card 
                key={template.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedTemplate.id === template.id ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedTemplate(template)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary">{template.category}</Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business. Scale up anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Addons Marketplace */}
      <section id="addons" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Addons</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extend your store with AI-powered features and automation tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {addons.map((addon) => (
              <Card key={addon.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                      {addon.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{addon.name}</CardTitle>
                      <div className="text-lg font-semibold text-purple-600">
                        {addon.price}/{addon.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{addon.description}</CardDescription>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Store Owners</h2>
            <p className="text-xl text-gray-600">See what our customers are saying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "ThinkShop made it incredibly easy to launch my online store. 
                    The templates are beautiful and the addon system is powerful."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold">Store Owner {i}</div>
                      <div className="text-gray-600 text-sm">Fashion Retailer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Ready to Launch Your Store?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of ambitious creators growing their businesses with{" "}
            <span className="font-semibold">ThinkShop</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <button className="text-lg font-semibold px-8 py-4 rounded-xl bg-white text-purple-700 border border-white shadow-lg hover:bg-purple-100 transition duration-300">
                Start Your Free Trial
              </button>
            </Link>
            <button className="text-lg font-semibold px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-purple-700 shadow-lg transition duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ThinkShop</span>
              </div>
              <p className="text-gray-400">
                Build and scale your eCommerce business with our powerful platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Addons</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ThinkShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}