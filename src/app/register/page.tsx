'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const plans = [
  { id: 'free', name: 'Free', price: '$0', features: ['1 Store', '10 Products', 'Basic Template'] },
  { id: 'basic', name: 'Basic', price: '$29', features: ['1 Store', '100 Products', 'All Templates'] },
  { id: 'pro', name: 'Pro', price: '$79', features: ['3 Stores', 'Unlimited Products', 'AI Search'] },
  { id: 'lifetime', name: 'Elite Lifetime', price: '$999', features: ['Unlimited Everything', 'All Addons'] }
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    selectedPlan: 'free'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are identical.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate registration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userData = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        role: 'store_owner',
        plan: formData.selectedPlan,
        token: 'mock-jwt-token',
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', userData.token);

      toast({
        title: "Account created successfully!",
        description: "Welcome to ThinkShop. Let's set up your first store.",
      });

      // If paid plan, simulate redirect to Stripe
      if (formData.selectedPlan !== 'free') {
        toast({
          title: "Redirecting to payment...",
          description: "You'll be redirected to complete your subscription.",
        });
        // In real app, redirect to Stripe checkout
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      } else {
        router.push('/dashboard');
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ThinkShop
            </span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Registration Form */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
              <CardDescription>
                Start building your online store today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Confirm your password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded" required />
                  <span>
                    I agree to the{' '}
                    <Link href="/terms" className="text-purple-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-purple-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-purple-600 hover:underline font-medium">
                    Sign in
                  </Link>
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Plan Selection */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Choose Your Plan</h3>
              <div className="space-y-3">
                {plans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`cursor-pointer transition-all ${
                      formData.selectedPlan === plan.id
                        ? 'ring-2 ring-purple-500 bg-purple-50'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setFormData({ ...formData, selectedPlan: plan.id })}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            checked={formData.selectedPlan === plan.id}
                            onChange={() => setFormData({ ...formData, selectedPlan: plan.id })}
                            className="text-purple-600"
                          />
                          <div>
                            <div className="font-semibold">{plan.name}</div>
                            <div className="text-sm text-gray-600">{plan.price}/month</div>
                          </div>
                        </div>
                        {plan.id === 'pro' && (
                          <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                            Popular
                          </div>
                        )}
                      </div>
                      <ul className="space-y-1">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">✨ Special Offer</h4>
              <p className="text-sm text-blue-800">
                Start with any paid plan and get your first month free! 
                Cancel anytime during the trial period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}