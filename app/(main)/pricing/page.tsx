

export default function Pricing() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 font-inter overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Tailored Solutions for Your{" "}
            <span className="text-primary italic">Business Growth</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose the perfect tier for your current needs. Whether you're a
            fresh start-up or a scaling enterprise, our packages are designed to
            integrate seamlessly with your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="px-8 py-3 rounded-xl bg-primary font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-slate-900"
              href="#branding"
            >
              Branding Packages
            </a>
            <a
              className="px-8 py-3 rounded-xl border-2 border-primary/20 text-primary font-semibold hover:bg-primary/5 transition-colors"
              href="#strategy"
            >
              Strategy Development
            </a>
          </div>
        </div>
      </section>
      {/* Branding Packages Section */}
      <section
        className="py-24 bg-white dark:bg-[#0f332f]/50"
        id="branding"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Visual Identity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Branding Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Start-up Branding */}
            <div className="flex flex-col p-8 bg-background-light dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Start-up</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Essential identity tools for new ventures.
              </p>
              <ul className="space-y-4 mb-8 grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Core Logo Design (2 concepts)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="material-icons text-lg">cancel</span>
                  <span>Comprehensive Brand Guide</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="material-icons text-lg">cancel</span>
                  <span>Social Media Assets</span>
                </li>
              </ul>
              <a
                className="w-full py-3 text-center rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                href="#quote"
              >
                Select Plan
              </a>
            </div>
            {/* Gold Branding */}
            <div className="flex flex-col p-8 bg-background-light dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Gold</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Accelerated growth with refined visuals.
              </p>
              <ul className="space-y-4 mb-8 grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Logo Design (4 concepts)</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Primary Typography Selection</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Business Card Design</span>
                </li>
              </ul>
              <a
                className="w-full py-3 text-center rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                href="#quote"
              >
                Select Plan
              </a>
            </div>
            {/* Diamond Branding (Most Popular) */}
            <div className="flex flex-col p-8 bg-background-light dark:bg-background-dark rounded-xl border-2 border-primary ring-4 ring-primary/10 shadow-2xl relative scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Diamond</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Complete brand ecosystem for market leaders.
              </p>
              <ul className="space-y-4 mb-8 grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Full Visual Identity Kit</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Brand Style Guide (50+ pages)</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Web Graphics &amp; Iconography</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Social Media Power Pack</span>
                </li>
              </ul>
              <a
                className="w-full py-3 text-center rounded-lg bg-primary font-semibold hover:bg-primary/90 transition-all text-[#0f332f]"
                href="#quote"
              >
                Select Plan
              </a>
            </div>
            {/* Platinum Branding */}
            <div className="flex flex-col p-8 bg-background-light dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2">Platinum</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                The elite standard for global presence.
              </p>
              <ul className="space-y-4 mb-8 grow">
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Unlimited Revisions</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Environmental Branding</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="material-icons text-primary text-lg">
                    check_circle
                  </span>
                  <span>Motion Identity (Logo Animation)</span>
                </li>
              </ul>
              <a
                className="w-full py-3 text-center rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                href="#quote"
              >
                Select Plan
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Strategy Packages Section */}
      <section
        className="py-24 bg-background-light dark:bg-background-dark"
        id="strategy"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Business Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Strategy Development
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Strategy Cards Row 1 */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">Start-up</h4>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                  Foundation
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Market entry and basic competitor analysis.
              </p>
              <a
                className="mt-auto flex items-center gap-2 text-primary font-semibold hover:underline group"
                href="#quote"
              >
                Select Strategy{" "}
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">Gold</h4>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                  Growth
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Multi-channel growth roadmap and KPI setting.
              </p>
              <a
                className="mt-auto flex items-center gap-2 text-primary font-semibold hover:underline group"
                href="#quote"
              >
                Select Strategy{" "}
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl ring-2 ring-primary border-slate-100 dark:border-slate-800 flex flex-col shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">Diamond</h4>
                <span className="bg-primary text-white px-2 py-1 rounded text-xs font-bold uppercase">
                  Popular
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Comprehensive market penetration and ecosystem optimization.
              </p>
              <a
                className="mt-auto flex items-center gap-2 text-primary font-semibold hover:underline group"
                href="#quote"
              >
                Select Strategy{" "}
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            {/* Strategy Cards Row 2 */}
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">Platinum</h4>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                  Scale
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Omni-channel dominance and brand equity scaling.
              </p>
              <a
                className="mt-auto flex items-center gap-2 text-primary font-semibold hover:underline group"
                href="#quote"
              >
                Select Strategy{" "}
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">Enterprise</h4>
                <span className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-2 py-1 rounded text-xs font-bold uppercase">
                  Pro
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Global strategy, risk assessment, and M&amp;A consulting.
              </p>
              <a
                className="mt-auto flex items-center gap-2 text-primary font-semibold hover:underline group"
                href="#quote"
              >
                Select Strategy{" "}
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-lg">Essential</h4>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                  Agile
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Quick-turnaround tactical strategy for specific goals.
              </p>
              <a
                className="mt-auto flex items-center gap-2 text-primary font-semibold hover:underline group"
                href="#quote"
              >
                Select Strategy{" "}
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Form Section */}
      <section
        className="py-24 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800"
        id="quote"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-primary">Integrate?</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Fill out the form and our consultants will get back to you
                within 24 hours with a customized proposal and detailed
                breakdown.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons">support_agent</span>
                  </div>
                  <div>
                    <p className="font-bold">Expert Consultation</p>
                    <p className="text-sm text-slate-500">
                      Discuss your goals with our lead strategists.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons">speed</span>
                  </div>
                  <div>
                    <p className="font-bold">Rapid Response</p>
                    <p className="text-sm text-slate-500">
                      24-hour turnaround on most quote requests.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons">verified</span>
                  </div>
                  <div>
                    <p className="font-bold">Tailored Scope</p>
                    <p className="text-sm text-slate-500">
                      Customized pricing based on your unique scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900/40 rounded-2xl">
                <img
                  className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm"
                  data-alt="Team collaborating in a modern office space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcI4KXIhjo5f7J89gWXZYKF-xItLIJhzxXqlYnYArr_Sd5Hi9wjOyHCm3buDJ9ebu9fL-VSGEHKYhrVWcyXhEgm-8TJslwB0viK7VPW_bn5u1t-BEoQe6MMukvvR0mozi0SZZaaw5r0D-bRLxzkvDKLvaxgMZvGFeCle8r3jYhKr38Ph8ixtUyJ826AbTfzmFPPfOZUfLHeL7y8-nLoxarh0cBEuvIsuYyXSIIjtUP4zJgJ9sad55x3go45ir9nJ-HSL1o_bJEs7yj"
                />
                <p className="text-sm italic text-slate-500 text-center">
                  "Our team ensures every brand we touch finds its voice and
                  stays loud."
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
              <form action="#" className="space-y-6" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      htmlFor="email"
                    >
                      Work Email
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="package"
                  >
                    Selected Package
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all"
                    id="package"
                    name="package"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Choose a package...
                    </option>
                    <optgroup label="Branding Packages">
                      <option value="branding-startup">
                        Branding: Start-up
                      </option>
                      <option value="branding-gold">Branding: Gold</option>
                      <option value="branding-diamond">
                        Branding: Diamond (Most Popular)
                      </option>
                      <option value="branding-platinum">
                        Branding: Platinum
                      </option>
                    </optgroup>
                    <optgroup label="Strategy Packages">
                      <option value="strategy-startup">
                        Strategy: Start-up
                      </option>
                      <option value="strategy-gold">Strategy: Gold</option>
                      <option value="strategy-diamond">
                        Strategy: Diamond (Most Popular)
                      </option>
                      <option value="strategy-platinum">
                        Strategy: Platinum
                      </option>
                      <option value="strategy-enterprise">
                        Strategy: Enterprise
                      </option>
                      <option value="strategy-essential">
                        Strategy: Essential
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="message"
                  >
                    Project Details
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary transition-all"
                    id="message"
                    name="message"
                    placeholder="Tell us about your brand vision..."
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-[#0f332f]"
                  type="submit"
                >
                  <span className="material-icons">send</span>
                  Submit Quote Request
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting, you agree to our Terms of Service and Privacy
                  Policy. We value your data security.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Social Proof */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img
              className="h-8 object-contain"
              data-alt="Tech company logo placeholder"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdKpTV7AYd2lvKzQuLJFeByOeNd9zUcnmpT1v2fZJRL7QMOWMPdd4-rJDCneaTkZszIfAT37IzxDYAbII2QOB7wiRmPKkLCviiTeRppD18Cd0bbmCTJ_PERDgXGEH4G4Wm-Ci-fe4Djtk8WyIweKMK9y_XuVs5o1qDgsa6SKQP8apeuyIG6LMol53wD0tBWiyDQ7sFOEGUAPbkEiBLL7SDJ4UxILiQh3XIQQ0PQoM4Ims-HDvrk9RZvqTEX3smRJ-ESeJoqqGKQfeH"
            />
            <img
              className="h-8 object-contain"
              data-alt="Creative agency logo placeholder"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgm5_OvUwYuvjm2aW1em0n8JQXmD7jezfB-M-99GILlK8dF6Oe7bRdeXtQUY5JhtYAwz_UvYuPTj-cc_CCT_wMM6OJRbljZ9TH6G6KS6nYV14t7Qj1PsSh-0LTNQI3bx55MuZ0rupRGY3GlatptZkI4jZApEE5pHkYalYmLKifAS11cEftvtvW3SBdkGlyR8eYzw11iNCNZLdLTlGeAxy5tEgGikFXt-RPOFRMidSAMhiMqOyLi9Oh2s4Zmb2TCb-jT69znca8_56Z"
            />
            <img
              className="h-8 object-contain"
              data-alt="Enterprise solution logo placeholder"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVzt4junpXa0StxaOKKFeQKvEYKiKSV9d6rRUZwsxYiFre7-xgeJBE6kDpUn_ookIyK1HowQrRL-SGcnmLcl9-B7o--gtIa4zeovI58Xeyvcy4rhXVmg1MLu8w7rSq9MiwbhRsW2v1gXu4YNt4e3zd8LQ02yutyatClx55aIgOwvK5nM8IQiamTcaeicA5JqiRJ4NcEEzMHJjR5tHCcm8OazZgpigcWjokx86yd_ElQsyDhcKftQHgh_4RBe1UeUhWI538Cn8w5wxD"
            />
            <img
              className="h-8 object-contain"
              data-alt="Fintech startup logo placeholder"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDprFSjgRAz1QTW1ltSuTxXfk3ErD2T8vYPvqkEAfiytwQDHwLuBGot4RuDe9zAs4aXFHl3gqCyVHW0oaveZD9llVyVS75-RsfjorRlPCbZrGNF-vadG7P7AKrvrR7QHkEiqdpJ3Wzuj4Ky5IQFfX3ZVhrk3Yjy4xte8K7b3op2QFNbiXgD_hC4GQeRZUk9NanjvSXWv4CuATbsicfAyApufw55VbvgEC6jZVMjd01hb7Ysy1aBQc60SQlApr2N_PtVaD7mQSsBLRtc"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
