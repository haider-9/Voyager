import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Input } from "~/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "~/components/ui/button";
import { User, Lock, Mail, UserPlus, LogIn } from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleForm = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-opacity-90 pt-30 p-4">
      <div className="w-full max-w-md">
        <motion.div
          className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Header Tabs */}
          <div className="flex">
            <button
              onClick={() => !isLogin && toggleForm()}
              className={`w-1/2 py-4 text-center font-medium text-lg transition-colors duration-300 ${
                isLogin
                  ? "bg-[var(--color-slime)] text-black shadow-[0_0_20px_var(--color-slime)]"
                  : "bg-black/40 text-gray-300"
              }`}
              disabled={isAnimating}
            >
              <div className="flex items-center justify-center gap-2">
                <LogIn size={20} />
                <span>Login</span>
              </div>
            </button>
            <button
              onClick={() => isLogin && toggleForm()}
              className={`w-1/2 py-4 text-center font-medium text-lg transition-colors duration-300 ${
                !isLogin
                  ? "bg-[var(--color-slime)] text-black shadow-[0_0_20px_var(--color-slime)]"
                  : "bg-black/40 text-gray-300"
              }`}
              disabled={isAnimating}
            >
              <div className="flex items-center justify-center gap-2">
                <UserPlus size={20} />
                <span>Sign Up</span>
              </div>
            </button>
          </div>

          {/* Form Container */}
          <div className="p-8 relative">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Welcome Back
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-lg font-medium text-gray-200"
                      >
                        Email
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="password"
                        className="text-lg font-medium text-gray-200"
                      >
                        Password
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg pl-10"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-[var(--color-slime)] focus:ring-[var(--color-slime)] border-gray-600 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-[var(--color-slime)] hover:text-[var(--color-slime)]/80"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--color-slime)] text-black text-lg font-bold py-6 rounded-xl hover:shadow-[0_0_30px_var(--color-slime)] hover:bg-[var(--color-slime)] transition-all duration-300"
                  >
                    Login
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    Create Account
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <Label
                          htmlFor="firstName"
                          className="text-lg font-medium text-gray-200"
                        >
                          First Name
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="lastName"
                          className="text-lg font-medium text-gray-200"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="signupEmail"
                        className="text-lg font-medium text-gray-200"
                      >
                        Email
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="signupEmail"
                          type="email"
                          placeholder="Enter your email"
                          className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="signupPassword"
                        className="text-lg font-medium text-gray-200"
                      >
                        Password
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="signupPassword"
                          type="password"
                          placeholder="Create a password"
                          className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-lg font-medium text-gray-200"
                      >
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--color-slime)] text-black text-lg font-bold py-6 rounded-xl hover:shadow-[0_0_30px_var(--color-slime)] hover:bg-[var(--color-slime)] transition-all duration-300"
                  >
                    Sign Up
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black/20 backdrop-blur-sm text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="w-full flex justify-center py-2 px-4 border border-white/10 rounded-md shadow-sm bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors duration-300">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button className="w-full flex justify-center py-2 px-4 border border-white/10 rounded-md shadow-sm bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors duration-300">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                </button>

                <button className="w-full flex justify-center py-2 px-4 border border-white/10 rounded-md shadow-sm bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors duration-300">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/"
                  className="text-[var(--color-slime)] hover:text-[var(--color-slime)]/80 font-medium flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -z-10 w-72 h-72 bg-[var(--color-slime)]/20 rounded-full filter blur-3xl opacity-30 animate-blob top-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute -z-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000 bottom-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="absolute -z-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000 top-1/2 left-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </div>
  );
}
