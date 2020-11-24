// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-1neo21n.svelte-1neo21n{text-align:center}.App.svelte-1neo21n code.svelte-1neo21n{background:#0002;padding:4px 8px;border-radius:4px}.App.svelte-1neo21n p.svelte-1neo21n{margin:0.4rem}.App-header.svelte-1neo21n.svelte-1neo21n{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-link.svelte-1neo21n.svelte-1neo21n{color:#ff3e00}.App-logo.svelte-1neo21n.svelte-1neo21n{height:36vmin;pointer-events:none;margin-bottom:3rem;animation:svelte-1neo21n-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-1neo21n-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}