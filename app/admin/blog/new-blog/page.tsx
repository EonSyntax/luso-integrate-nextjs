import React from "react";

export default function NewBlog() {
  return (
    <main className="flex-1">
      {/* <!-- Header Bar --> */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-xs text-slate-500 uppercase tracking-widest font-semibold gap-2">
            <a className="hover:text-primary" href="/app/admin/#blog">
              Blog
            </a>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-slate-100">
              Create New Post
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 italic mr-4">
            Draft saved at 10:24 AM
          </span>
          <button className="px-5 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
            Save as Draft
          </button>
          <button className="px-5 py-2 text-sm font-bold text-brand-forest bg-brand-lime hover:brightness-105 rounded-lg transition-all shadow-sm">
            Publish Post
          </button>
          <div className="ml-4 h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
            <img
              alt="User avatar"
              data-alt="Corporate headshot of a male admin user"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCEXUjPqgkyMist-8t2435PwkUHmvCw64tMntGrkPsfbXNOJG5ljVep02-lkF09jXZcgtcqwhgAKan-EgB4qxT06mDHlJWGZZTk2yUZOtrCKkup7bj__esU0QvzXMN7GUlqJv7arIJlZe1GPt9iB05QPAqPoyRENBZ_nsIcgh3nj5C4MiDDEAzcUZi-TmegOhoURQRb61tK9DrCfE3UUqGJVenVnItlcBk6ZFGCtrPe5r_Llf-viBGGa1fCkC1rYjV9qhBNQ1qS7rb"
            />
          </div>
        </div>
      </header>
      <div className="p-8 max-w-350 mx-auto grid grid-cols-12 gap-8">
        {/* <!-- Left Column: Content Editor --> */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            {/* <!-- Post Title --> */}
            <div className="mb-6">
              <input
                className="w-full text-4xl font-extrabold border-none focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-slate-700 p-0 mb-2"
                placeholder="Enter post title..."
                type="text"
              />
              <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-[16px]">
                  link
                </span>
                <span>Permalink:</span>
                <span className="text-primary font-medium">
                  https://lusointegrate.com/blog/
                </span>
                <span className="text-slate-400">your-post-title-slug</span>
                <button className="ml-auto material-symbols-outlined text-[18px] hover:text-primary">
                  edit
                </button>
              </div>
            </div>
            {/* <!-- Rich Text Editor Simulation --> */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              {/* <!-- Toolbar --> */}
              <div className="editor-toolbar flex flex-wrap items-center gap-1 p-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    format_bold
                  </span>
                </button>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    format_italic
                  </span>
                </button>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    format_underlined
                  </span>
                </button>
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1"></div>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    format_list_bulleted
                  </span>
                </button>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    format_list_numbered
                  </span>
                </button>
                <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-1"></div>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    link
                  </span>
                </button>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    image
                  </span>
                </button>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    format_quote
                  </span>
                </button>
                <button className="p-1.5 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    code
                  </span>
                </button>
                <div className="ml-auto flex items-center gap-1">
                  <button className="p-1.5 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      undo
                    </span>
                  </button>
                  <button className="p-1.5 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      redo
                    </span>
                  </button>
                </div>
              </div>
              {/* <!-- Editor Canvas --> */}
              <div
                className="min-h-125 p-8 focus:outline-none bg-white dark:bg-slate-900 prose dark:prose-invert max-w-none"
                contentEditable
              >
                <p className="text-slate-400">
                  Start writing your amazing story here...
                </p>
              </div>
            </div>
          </div>
          {/* <!-- SEO Settings Section --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">
                analytics
              </span>
              <h3 className="text-xl font-bold">SEO &amp; Meta Settings</h3>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Meta Title
                  </label>
                  <input
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-950 focus:border-primary focus:ring-primary"
                    placeholder="Post Title | LUSO INTEGRATE"
                    type="text"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold">
                    <span>Recommended length: 60 chars</span>
                    <span>0 / 60</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Keywords
                  </label>
                  <input
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-950 focus:border-primary focus:ring-primary"
                    placeholder="enterprise, technology, blog..."
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Meta Description
                </label>
                <textarea
                  className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-950 focus:border-primary focus:ring-primary"
                  placeholder="Brief summary for search engines..."
                  rows={3}
                ></textarea>
                <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold">
                  <span>Recommended length: 160 chars</span>
                  <span>0 / 160</span>
                </div>
              </div>
              {/* <!-- SEO Preview --> */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  Search Result Preview
                </span>
                <div className="space-y-1">
                  <div className="text-blue-700 dark:text-blue-400 text-lg font-medium hover:underline cursor-pointer">
                    LUSO INTEGRATE | Your Post Title Appears Here
                  </div>
                  <div className="text-green-700 text-sm">
                    https://lusointegrate.com › blog › new-post
                  </div>
                  <div className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                    This is exactly how your meta description will look when
                    people search for your blog on Google. Make sure it's catchy
                    and clear!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Right Column: Sidebar Settings --> */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* <!-- Publishing Settings Card --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-slate-400">
                settings
              </span>
              Post Configuration
            </h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Status
                </label>
                <div className="relative">
                  <select className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-950 appearance-none py-2 pl-3 pr-10 focus:border-primary focus:ring-primary text-sm">
                    <option>Draft</option>
                    <option>Pending Review</option>
                    <option>Published</option>
                    <option>Scheduled</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 text-[18px] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Visibility
                </label>
                <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    public
                  </span>
                  <span className="text-sm font-medium">Public</span>
                  <button className="ml-auto text-xs text-primary font-bold hover:underline">
                    Edit
                  </button>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Publish Date
                </label>
                <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">
                    calendar_today
                  </span>
                  <span className="text-sm font-medium">Immediately</span>
                  <button className="ml-auto text-xs text-primary font-bold hover:underline">
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Featured Image Card --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-slate-400">
                image
              </span>
              Featured Image
            </h3>
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer bg-slate-50/50 dark:bg-slate-800/20">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">upload_file</span>
              </div>
              <p className="text-sm font-semibold mb-1">Click to upload</p>
              <p className="text-xs text-slate-400">
                or drag and drop featured image
              </p>
              <p className="text-[10px] text-slate-400 mt-4 uppercase font-bold">
                Recommended: 1200x630px
              </p>
            </div>
          </div>
          {/* <!-- Metadata Card --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-slate-400">
                label
              </span>
              Classification
            </h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Category
                </label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-950 text-sm">
                  <option>Select Category</option>
                  <option>Technology</option>
                  <option>Corporate News</option>
                  <option>Product Updates</option>
                  <option>Case Studies</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Author
                </label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-950 text-sm">
                  <option>LUSO Admin</option>
                  <option>Jane Doe (Senior Editor)</option>
                  <option>Mark Smith (Tech Lead)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Tags
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 dark:bg-slate-950 text-sm pr-10"
                    placeholder="Add tag..."
                    type="text"
                  />
                  <button className="absolute right-3 top-2 text-primary material-symbols-outlined text-[20px]">
                    add_circle
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    Enterprise{" "}
                    <button className="material-symbols-outlined text-[14px]">
                      close
                    </button>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    Innovation{" "}
                    <button className="material-symbols-outlined text-[14px]">
                      close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
