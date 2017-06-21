webpackJsonp([6],{"./node_modules/json-loader/index.js!./.cache/json/docs-motivation.json":function(a,e){a.exports={data:{markdownRemark:{html:'<h2 id="hoc-based-api"><a href="#hoc-based-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HoC Based API</h2>\n<pre><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> dripForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-drip-form\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> MyForm <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">dripForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>MyForm<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p><code>react-drip-form</code> is a HoC-based API that passes the necessary props.<br>\nBy using Hoc and separating <strong>Behavior</strong> and <strong>View</strong>, you can freely decide the structure of HTML and styling with.</p>\n<p>Also, “Render according to Props” This flow adapts to React’s philosophy.<br>\nLearning cost is lowered by approaching React standard API</p>\n<h2 id="the-form-state-is-managed-by-form"><a href="#the-form-state-is-managed-by-form" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The form state is managed by form</h2>\n<p>A Form created using <code>react-drip-form</code> has a role of returning a valid values.<br>\nIt is not involved in the application state.</p>\n<p>Whatever way you manage application states, you can integrate with <code>react-drip-form</code>.<br>\n<code>Flux</code>, <code>redux</code>, <code>MobX</code> and <code>rx</code>.</p>\n<h2 id="validator-is-a-separate-package"><a href="#validator-is-a-separate-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Validator is a separate package</h2>\n<p>Validator used by <code>react-drip-form</code> is a separate package called <a href="https://github.com/tsuyoshiwada/drip-form-validator">drip-form-validator</a>.</p>\n<p>This has the following advantages.</p>\n<ul>\n<li>Since it operates in standalone, it can be used with View libraries other than React.</li>\n<li>You can use the same Validator with Server-Side.</li>\n</ul>\n<h2 id="covers-from-prototype-to-production"><a href="#covers-from-prototype-to-production" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Covers from prototype to production</h2>\n<ul>\n<li>Many validations. (you can customize as well!)</li>\n<li>There are few design restrictions.</li>\n<li>Free component design.</li>\n<li>Many UI framework components.</li>\n<li>Support for l18n with custom error messages.</li>\n</ul>\n<p>Because there are advantages like the above, it is a prototype so you want to make it quickly, you can realize the desire to make firmly because it is a production.</p>',frontmatter:{title:"Motivation"}}},pathContext:{slug:"docs/motivation/"}}}});
//# sourceMappingURL=path---docs-motivation-80d65c3adec0ef8fdb67.js.map