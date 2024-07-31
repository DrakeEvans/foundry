(function() {var type_impls = {
"anvil":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for JoinHandle&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","anvil::IpcTask"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-Drop-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for JoinHandle&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","anvil::IpcTask"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Future-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-Future-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for JoinHandle&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, JoinError&gt;</h4></section></summary><div class='docblock'>The type of value produced on completion.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll\" class=\"method trait-impl\"><a href=\"#method.poll\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#tymethod.poll\" class=\"fn\">poll</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut JoinHandle&lt;T&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;&lt;JoinHandle&lt;T&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#associatedtype.Output\" title=\"type core::future::future::Future::Output\">Output</a>&gt;</h4></section></summary><div class='docblock'>Attempts to resolve the future to a final value, registering\nthe current task for wakeup if the value is not yet available. <a href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html#tymethod.poll\">Read more</a></div></details></div></details>","Future","anvil::IpcTask"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; JoinHandle&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.abort\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">abort</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Abort the task associated with the handle.</p>\n<p>Awaiting a cancelled task might complete as usual if the task was\nalready completed at the time it was cancelled, but most likely it\nwill fail with a <a href=\"method@super::error::JoinError::is_cancelled\">cancelled</a> <code>JoinError</code>.</p>\n<p>Be aware that tasks spawned using <a href=\"crate::task::spawn_blocking\"><code>spawn_blocking</code></a> cannot be aborted\nbecause they are not async. If you call <code>abort</code> on a <code>spawn_blocking</code>\ntask, then this <em>will not have any effect</em>, and the task will continue\nrunning normally. The exception is if the task has not started running\nyet; in that case, calling <code>abort</code> may prevent the task from starting.</p>\n<p>See also <a href=\"crate::task#cancellation\">the module level docs</a> for more information on cancellation.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::time;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>handles = Vec::new();\n\nhandles.push(tokio::spawn(<span class=\"kw\">async </span>{\n   time::sleep(time::Duration::from_secs(<span class=\"number\">10</span>)).<span class=\"kw\">await</span>;\n   <span class=\"bool-val\">true\n</span>}));\n\nhandles.push(tokio::spawn(<span class=\"kw\">async </span>{\n   time::sleep(time::Duration::from_secs(<span class=\"number\">10</span>)).<span class=\"kw\">await</span>;\n   <span class=\"bool-val\">false\n</span>}));\n\n<span class=\"kw\">for </span>handle <span class=\"kw\">in </span><span class=\"kw-2\">&amp;</span>handles {\n    handle.abort();\n}\n\n<span class=\"kw\">for </span>handle <span class=\"kw\">in </span>handles {\n    <span class=\"macro\">assert!</span>(handle.<span class=\"kw\">await</span>.unwrap_err().is_cancelled());\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_finished\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">is_finished</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks if the task associated with this <code>JoinHandle</code> has finished.</p>\n<p>Please note that this method can return <code>false</code> even if <a href=\"method@JoinHandle::abort\"><code>abort</code></a> has been\ncalled on the task. This is because the cancellation process may take\nsome time, and this method does not return <code>true</code> until it has\ncompleted.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::time;\n\n<span class=\"kw\">let </span>handle1 = tokio::spawn(<span class=\"kw\">async </span>{\n    <span class=\"comment\">// do some stuff here\n</span>});\n<span class=\"kw\">let </span>handle2 = tokio::spawn(<span class=\"kw\">async </span>{\n    <span class=\"comment\">// do some other stuff here\n    </span>time::sleep(time::Duration::from_secs(<span class=\"number\">10</span>)).<span class=\"kw\">await</span>;\n});\n<span class=\"comment\">// Wait for the task to finish\n</span>handle2.abort();\ntime::sleep(time::Duration::from_secs(<span class=\"number\">1</span>)).<span class=\"kw\">await</span>;\n<span class=\"macro\">assert!</span>(handle1.is_finished());\n<span class=\"macro\">assert!</span>(handle2.is_finished());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.abort_handle\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">abort_handle</a>(&amp;self) -&gt; AbortHandle</h4></section></summary><div class=\"docblock\"><p>Returns a new <code>AbortHandle</code> that can be used to remotely abort this task.</p>\n<p>Awaiting a task cancelled by the <code>AbortHandle</code> might complete as usual if the task was\nalready completed at the time it was cancelled, but most likely it\nwill fail with a <a href=\"method@super::error::JoinError::is_cancelled\">cancelled</a> <code>JoinError</code>.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>tokio::{time, task};\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>handles = Vec::new();\n\nhandles.push(tokio::spawn(<span class=\"kw\">async </span>{\n   time::sleep(time::Duration::from_secs(<span class=\"number\">10</span>)).<span class=\"kw\">await</span>;\n   <span class=\"bool-val\">true\n</span>}));\n\nhandles.push(tokio::spawn(<span class=\"kw\">async </span>{\n   time::sleep(time::Duration::from_secs(<span class=\"number\">10</span>)).<span class=\"kw\">await</span>;\n   <span class=\"bool-val\">false\n</span>}));\n\n<span class=\"kw\">let </span>abort_handles: Vec&lt;task::AbortHandle&gt; = handles.iter().map(|h| h.abort_handle()).collect();\n\n<span class=\"kw\">for </span>handle <span class=\"kw\">in </span>abort_handles {\n    handle.abort();\n}\n\n<span class=\"kw\">for </span>handle <span class=\"kw\">in </span>handles {\n    <span class=\"macro\">assert!</span>(handle.<span class=\"kw\">await</span>.unwrap_err().is_cancelled());\n}</code></pre></div>\n</div></details></div></details>",0,"anvil::IpcTask"],["<section id=\"impl-RefUnwindSafe-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-RefUnwindSafe-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a> for JoinHandle&lt;T&gt;</h3></section>","RefUnwindSafe","anvil::IpcTask"],["<section id=\"impl-Send-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-Send-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for JoinHandle&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section>","Send","anvil::IpcTask"],["<section id=\"impl-Sync-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-Sync-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for JoinHandle&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section>","Sync","anvil::IpcTask"],["<section id=\"impl-Unpin-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-Unpin-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for JoinHandle&lt;T&gt;</h3></section>","Unpin","anvil::IpcTask"],["<section id=\"impl-UnwindSafe-for-JoinHandle%3CT%3E\" class=\"impl\"><a href=\"#impl-UnwindSafe-for-JoinHandle%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for JoinHandle&lt;T&gt;</h3></section>","UnwindSafe","anvil::IpcTask"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()