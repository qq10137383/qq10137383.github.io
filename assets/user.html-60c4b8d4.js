import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const t={},o=e(`<h1 id="user模块" tabindex="-1"><a class="header-anchor" href="#user模块" aria-hidden="true">#</a> user模块</h1><p>提供用户信息获取、退出登录、重置用户信息等功能。</p><h2 id="getuserinfo" tabindex="-1"><a class="header-anchor" href="#getuserinfo" aria-hidden="true">#</a> getUserInfo</h2><ul><li><p>类型：<code>() =&gt; UseInfo</code></p></li><li><p>详情：获取当前用户信息。</p></li><li><p>示例：</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">MF</span>
<span class="token keyword">const</span> userInfo <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="logout" tabindex="-1"><a class="header-anchor" href="#logout" aria-hidden="true">#</a> logout</h2><ul><li><p>类型：<code>() =&gt; void</code></p></li><li><p>详情：退出用户登录。</p></li><li><p>示例：</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">MF</span>
user<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>退出登录后不是切换路由到 <code>/login</code> ，而是会刷新页面 <code>(window.reload)</code>，因为 <code>qiankun</code> 没有提供销毁微应用的方法，为了防止微应用状态出现问题而使用了刷新策略。</p></div><h2 id="resetuserinfo" tabindex="-1"><a class="header-anchor" href="#resetuserinfo" aria-hidden="true">#</a> resetUserInfo</h2><ul><li><p>类型：<code>(toLogin:boolean) =&gt; void</code></p></li><li><p>详情：重置用户信息。<br><code>toLogin</code>: 是否重置后退到登录页面。</p></li><li><p>示例：</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">MF</span>
user<span class="token punctuation">.</span><span class="token function">resetUserInfo</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[o];function p(i,l){return n(),a("div",null,c)}const u=s(t,[["render",p],["__file","user.html.vue"]]);export{u as default};
