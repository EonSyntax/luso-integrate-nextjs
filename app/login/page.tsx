import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="bg-background-light font-manrope dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="flex min-h-screen">
        {/* <!-- Left Side: Visual / Brand Messaging --> */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900 items-center justify-center">
          {/* <!-- Abstract background pattern --> */}
          <div
            className="absolute inset-0 opacity-40"
            data-alt="Abstract digital network connections with soft green glowing lines"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0A0IclkqxrYArHd5v4vjBclyLlZqdYoONBIGAMXRJ8B01Lfq_pFKCg_aLzEqzLeLT44onCxnA1BeO-I_S1pvSb_S9sUJF90kkwmLbxbneFo-2S8eLTqzj2oOAHhRTHyPf9eUZZ7D2qjMm9XZFjp7BnGrMaS4n-sQC5ZDb0Q278Gh3DqNA4ob4SfdKIkiL9C5248BbGYsIJQSl16DUqLo_F3Ht1Exnxv-urB3XFteeFwOiitd31xq72Unx_GVUWOmm_zYvo13l')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-primary/20"></div>
          <div className="relative z-10 px-20 text-white">
            <div className="flex items-center gap-3 mb-12">
              <div className="size-10 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                    fill="currentColor"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                LUSO INTEGRATE
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Seamless Integration for{" "}
              <span className="text-primary">Modern Enterprises</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-lg">
              Access your dashboard and manage your corporate ecosystem with the
              world's most intuitive integration platform.
            </p>
            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest">
                  Connectors
                </span>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">99.9%</span>
                <span className="text-sm text-slate-400 uppercase tracking-widest">
                  Uptime
                </span>
              </div>
            </div>
            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                <img
                  className="size-10 rounded-full border-2 border-brand-deep bg-slate-200"
                  data-alt="User avatar portrait for social proof"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwR-dnCNtA22VKQmRIM-3tqtkT5R9SBgpc2ZaJA9Ymr5BABt-Un6nov3KEenUoPN_77C9dSVZ7gKP38LWGqxSk6z1Xi125hyicWMzoYC0c6rWswpXf-zdqf2qV-ybAnJRwpqXDoCGJIVP0x-phExBaJL1eBcB_CkG4Rm49kaSaDznIASQ9A8v7hJcLZUBuJINoHfLJrY1-QnnxIvJNr_YpN5GtAh8sQm4QF0gpWR1SRimang7IZyL7FqZh43wwuB1JaFWUfIXcve2Y"
                />
                <img
                  className="size-10 rounded-full border-2 border-brand-deep bg-slate-200"
                  data-alt="Customer user avatar showing professional woman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_yefTDqZF35Dvl1liEBMnIGR9A-HaUIkoOsquxBNSWjpM20nI6O37MAZ0km_VzVdQ88y_ymr-YFFkVzGwUpIchZHUGnro7ddirSO4PD-H4nVPe_9qhiNIerJCkor3ta2ewmUbSZDRPC5i7o-ISn2JIokUwktb6WsFlhj5KMJbsugxqWAw0TibTz5S5BSvfAeiFbkiYSAi3_lZOBw23zK6jvR60W1fTWX9medu8__jnmxPeGRjQ4cAzh3J-aMXyt-S1XUm3RpUMcW-"
                />
                <img
                  className="size-10 rounded-full border-2 border-brand-deep bg-slate-200"
                  data-alt="Team member profile picture portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBanjdGIaClyp_D5Q0RPL7Zm4yNW31KloXcmhO_kgQ0AtW2QICOofj0qPS8FEWyjKjzCdtfJ_w2CwtO6bli1n5D0cm9ca73_5HFwNd2lanLyBfG6cci3ekEkm1vwKTHY58Q43PJxxD7o5NUBFTMIffFH5QhP9LeP56ZqnblqKUmRn5vwNmgKKd74AVijQ6ipuD-0L5HMAhaPJ4Bef__d1EPU0SGZsB1gBhL1af5ziCz33UEr-arjK4zmm8vglhIJ9xID_RpAfvJKDyg"
                />
              </div>
              <p className="text-sm font-medium text-slate-400">
                Trusted by 5,000+ tech teams globally.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Right Side: Login Form --> */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 mesh-gradient dark:bg-background-dark">
          <div className="max-w-md w-full mx-auto">
            {/* <!-- Mobile Logo --> */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="size-8 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                    fill="currentColor"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                LUSO INTEGRATE
              </span>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Please enter your details to sign in.
              </p>
            </div>

            {/* <!-- Social Logins --> */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
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

            {/* <!-- Divider --> */}
            <div className="my-8 relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-400 font-medium">
                  OR CONTINUE WITH EMAIL
                </span>
              </div>
            </div>

            {/* <!-- Auth Form --> */}
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  htmlFor="email"
                >
                  Corporate Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-lg">
                      mail
                    </span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-lg">
                      lock
                    </span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-12 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-lg">
                      visibility
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded transition-colors cursor-pointer"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                  <label
                    className="ml-2 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    className="font-semibold text-primary hover:text-primary/80 transition-colors"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <button
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-slate-900 bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-[0.98]"
                type="submit"
              >
                Sign In
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
              Don't have an account?
              <Link
                className="font-bold text-primary hover:text-primary/80 transition-colors ml-1"
                href="/signup"
              >
                SignUp
              </Link>
            </p>
          </div>
          {/* <!-- Simple Footer --> */}
          <div className="mt-auto pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© 2024 LUSO INTEGRATE. All rights reserved.</p>
            <div className="flex gap-4">
              <a className="hover:text-primary" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
