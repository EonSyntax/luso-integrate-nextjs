import Link from "next/link";
import React from "react";

export default function SignUpPage() {
  return (
    <>
      <div className="bg-background-light font-manrope dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
        <div className="flex min-h-screen w-full flex-col lg:flex-row">
          {/* <!-- Left Side: Brand Visual & Testimonial --> */}
          <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-background-dark text-white overflow-hidden">
            {/* <!-- Decorative Pattern Overlay --> */}
            <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none"></div>
            <div
              className="absolute inset-0 opacity-40"
              data-alt="Abstract digital network connections with soft green glowing lines"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0A0IclkqxrYArHd5v4vjBclyLlZqdYoONBIGAMXRJ8B01Lfq_pFKCg_aLzEqzLeLT44onCxnA1BeO-I_S1pvSb_S9sUJF90kkwmLbxbneFo-2S8eLTqzj2oOAHhRTHyPf9eUZZ7D2qjMm9XZFjp7BnGrMaS4n-sQC5ZDb0Q278Gh3DqNA4ob4SfdKIkiL9C5248BbGYsIJQSl16DUqLo_F3Ht1Exnxv-urB3XFteeFwOiitd31xq72Unx_GVUWOmm_zYvo13l')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* <!-- Logo Header --> */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <svg
                  className="size-6 text-background-dark"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                LUSO INTEGRATE
              </span>
            </div>
            {/* <!-- Content Middle --> */}
            <div className="relative z-10 max-w-xl">
              <h1 className="text-5xl font-extrabold leading-tight mb-6">
                Integrate faster.
                <br />
                <span className="text-primary">Grow smarter.</span>
              </h1>
              <p className="text-slate-400 text-lg mb-12">
                Join the ranks of high-growth brands leveraging LUSO to unify
                their operations and scale infrastructure effortlessly.
              </p>
              {/* <!-- Testimonial Card --> */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                <div className="flex gap-1 text-primary mb-4">
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                  <span className="material-symbols-outlined fill-1">star</span>
                </div>
                <p className="text-xl italic font-medium mb-6">
                  "LUSO slashed our integration deployment time by 70%. It's the
                  engine behind our global expansion strategy."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    className="size-12 rounded-full object-cover grayscale"
                    data-alt="Professional headshot of a smiling CTO"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVjkI-WAS4bLSa5EHfSz4DM6m9rNLlp4oDa73DRkvN0OUi7F-zzljNyD02k-dKbFnEW97Tr7bAYGBmjJO39LcPmUO0nRQPHiX5ABdFeGvfRVq0UFeE6fJ0VgH0OHdg8fONRJ24UPhzLRt71Us2-RWOj9p5i35Qhu5oTI4Uzj3KNn5_d4VbyM--iQB74tUWqxooSgs9x7DQRrUqxe0tCHYXlZy77Siq7eFKSL7UWNa3NFpN9lOEuUcdJkB5PMLvHciHh19XDO3v"
                  />
                  <div>
                    <p className="font-bold">Marcus Chen</p>
                    <p className="text-sm text-slate-400">
                      CTO at GlobalScale Logistics
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Bottom Footer --> */}
            <div className="relative z-10 text-slate-500 text-sm">
              © 2024 LUSO Integrate Inc. All rights reserved.
            </div>
          </div>
          {/* <!-- Right Side: Signup Form --> */}
          <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-white dark:bg-background-dark">
            <div className="w-full max-w-110">
              {/* <!-- Mobile Logo --> */}
              <div className="lg:hidden flex items-center gap-3 mb-10">
                <div className="bg-primary p-2 rounded-lg">
                  <svg
                    className="size-6 text-background-dark"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight dark:text-white">
                  LUSO INTEGRATE
                </span>
              </div>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                  Create your account
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Get started for free. No credit card required.
                </p>
              </div>
              {/* <!-- Social Signup Buttons --> */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group">
                  <svg
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Google
                  </span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group">
                  <svg
                    className="size-5 text-[#0077b5]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"></path>
                  </svg>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    LinkedIn
                  </span>
                </button>
              </div>

              {/* <!-- Separator --> */}
              <div className="relative flex items-center mb-8">
                <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
                <span className="shrink mx-4 text-slate-400 text-xs uppercase tracking-widest font-bold">
                  or sign up with email
                </span>
                <div className="grow border-t border-slate-200 dark:border-slate-800"></div>
              </div>
              {/* <!-- Signup Form --> */}
              <form className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-primary focus:border-primary px-4 py-3 text-sm transition-all"
                    id="full-name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="work-email"
                  >
                    Work Email
                  </label>
                  <input
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-primary focus:border-primary px-4 py-3 text-sm transition-all"
                    id="work-email"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="company-name"
                  >
                    Company Name
                  </label>
                  <input
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-primary focus:border-primary px-4 py-3 text-sm transition-all"
                    id="company-name"
                    placeholder="Acme Inc."
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-900 focus:ring-primary focus:border-primary px-4 py-3 text-sm transition-all"
                      id="password"
                      placeholder="Min. 8 characters"
                      type="password"
                    />
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
                {/* <!-- Terms & Conditions --> */}
                <div className="flex items-start gap-3 py-2">
                  <div className="flex items-center h-5">
                    <input
                      className="h-4 w-4 rounded border-slate-300 dark:border-slate-800 text-primary focus:ring-primary cursor-pointer"
                      id="terms"
                      name="terms"
                      type="checkbox"
                    />
                  </div>
                  <div className="text-sm">
                    <label
                      className="text-slate-500 dark:text-slate-400"
                      htmlFor="terms"
                    >
                      I agree to the{" "}
                      <a
                        className="text-slate-900 dark:text-white font-bold underline underline-offset-4 decoration-primary/50"
                        href="#"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        className="text-slate-900 dark:text-white font-bold underline underline-offset-4 decoration-primary/50"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
                {/* <!-- Submit Button --> */}
                <button
                  className="w-full bg-primary text-slate-900 font-extrabold rounded-lg px-6 py-4 text-base hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  Create Account
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </button>
              </form>
              {/* <!-- Footer Link --> */}
              <div className="mt-10 text-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Already have an account?
                  <Link
                    className="text-primary font-extrabold hover:underline underline-offset-4 ml-1"
                    href="/login"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
