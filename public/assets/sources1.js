// modules1.js - MINIMAL MODULES FOR REOWN THEME
// This file is intentionally minimal/empty because Reown theme does NOT use AppKit
// For Reown, we only use direct wallet injections (MetaMask, Trust, etc. via window.ethereum)
// NO WalletConnect AppKit needed!

console.log('[Reown] modules1.js loaded - No AppKit, no WalletConnect v3 modules');

// No AppKit, no Ethers5Adapter, no Networks definitions needed for Reown
// Reown modal works purely with injected providers (window.ethereum)



// w-modal1.js - REOWN MODAL SYSTEM (NO APPKIT)
// This file contains ONLY the Reown modal design - NO AppKit dependencies

console.log('[Reown] w-modal1.js loaded');

// Reown modal does NOT need Ace_MODAL_STYLE (that's for AppKit modal)
// Reown uses wallet-connect.css instead (loaded via link tag in main.js)

// Minimal MSM for backward compatibility
const MSM = {
  connect_select: false,
  init: () => {
    console.log('[Reown MSM] init - no-op');
  },
  select: (selector) => {
    try {
      const radio = document.querySelector(selector);
      if (radio) radio.checked = true;
    } catch (err) {}
  },
  connect: () => {
    console.log('[Reown MSM] connect - no-op');
  },
  open: () => {
    console.log('[Reown MSM] open - no-op');
  },
  close: () => {
    // Direct DOM manipulation for Reown modal (NO ms_hide() call to avoid infinite loop)
    try {
      const modal = document.getElementById('web3-modal');
      const overlay = document.getElementById('web3-overlay');
      if (modal) modal.style.display = 'none';
      if (overlay) overlay.style.display = 'none';
    } catch (err) {
      // Silent fail
    }
  }
};

try {
  window.MSM = MSM;
  console.log('[Reown] MSM stub initialized in w-modal1.js');
} catch (err) {
  console.error('[Reown] Failed to initialize MSM:', err);
}



// w-loader1.js - REOWN LOADER (Same as AppKit, works for both)
// This file is copied from w-loader.js as it doesn't have AppKit-specific dependencies

const MS_LOADER_STYLE = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

#ms-loader {
  position: fixed;
  inset: 0;
  padding: clamp(16px, 4vw, 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #03040a;
  font-family: "Inter", sans-serif;
  z-index: 999999;
  color: #ffffff;
  overflow: hidden;
}

#ms-loader::before {
  content: "";
  position: absolute;
  width: 180%;
  height: 180%;
  background: radial-gradient(circle at 20% 20%, rgba(120, 181, 255, 0.3), transparent 45%),
    radial-gradient(circle at 80% 60%, rgba(255, 95, 163, 0.25), transparent 55%);
  filter: blur(16px);
  animation: sceneRotate 28s linear infinite;
  opacity: 0.65;
}

#ms-loader::after {
  content: "";
  position: absolute;
  inset: -140px;
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 110px 110px;
  opacity: 0.25;
  animation: sceneDrift 30s linear infinite;
}

@keyframes sceneRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes sceneDrift {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-110px, -110px, 0); }
}

.ms_stage {
  position: relative;
  width: min(520px, calc(100% - 8px));
  display: flex;
  align-items: center;
  justify-content: center;
}

.ms_matrix {
  position: absolute;
  inset: -120px;
  display: grid;
  grid-template-columns: repeat(6, minmax(70px, 1fr));
  gap: 16px;
  pointer-events: none;
  z-index: 0;
}

.ms_matrix span {
  border-radius: 18px;
  aspect-ratio: 1;
  background: linear-gradient(140deg, rgba(20, 20, 25, 0.6), rgba(15, 15, 20, 0.4));
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  opacity: 0.3;
  animation: tilePulse 12s ease-in-out infinite;
}

.ms_matrix span:nth-child(2n) {
  background: linear-gradient(140deg, rgba(40, 40, 50, 0.5), rgba(25, 25, 35, 0.3));
}

.ms_matrix span:nth-child(3n) {
  background: linear-gradient(140deg, rgba(30, 30, 40, 0.55), rgba(20, 20, 30, 0.35));
}

.ms_matrix span:nth-child(6n + 1) {
  animation-delay: 0s;
}

.ms_matrix span:nth-child(6n + 2) {
  animation-delay: 1.5s;
}

.ms_matrix span:nth-child(6n + 3) {
  animation-delay: 3s;
}

.ms_matrix span:nth-child(6n + 4) {
  animation-delay: 4.5s;
}

.ms_matrix span:nth-child(6n + 5) {
  animation-delay: 6s;
}

.ms_matrix span:nth-child(6n) {
  animation-delay: 7.5s;
}

@keyframes tilePulse {
  0% { transform: translateY(0px) scale(1); opacity: 0.25; }
  50% { transform: translateY(-12px) scale(1.01); opacity: 0.5; }
  100% { transform: translateY(0px) scale(1); opacity: 0.25; }
}

.ms_loader {
  position: relative;
  z-index: 2;
  width: min(360px, calc(100% - 32px));
  border-radius: 28px;
  padding: 34px 34px 28px;
  background: #080c16;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 38px 120px rgba(2, 4, 12, 0.78);
  text-align: center;
  color: #ffffff;
  --accent: #7686ff;
  --accent-soft: rgba(118, 134, 255, 0.22);
}

.ms_loader.state-success {
  --accent: #62f3b1;
  --accent-soft: rgba(98, 243, 177, 0.22);
}

.ms_loader.state-error {
  --accent: #ff6b7d;
  --accent-soft: rgba(255, 107, 125, 0.2);
}

.ms_loader.state-info {
  --accent: #79d8ff;
  --accent-soft: rgba(121, 216, 255, 0.2);
}

.ms_loader::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
  pointer-events: none;
}

.ms_chip {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  text-transform: uppercase;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 18px;
}

.ms_chip-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 14px var(--accent);
}

.ms_visual {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
}

.ms_wave {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 30px;
  background: #050913;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.ms_wave::after {
  content: "";
  position: absolute;
  inset: -30%;
  background: conic-gradient(from 90deg, transparent, var(--accent), transparent 60%);
  opacity: 0.35;
  animation: haloSpin 8s linear infinite;
}

.ms_wave-ring {
  position: absolute;
  inset: 10px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  animation: wavePulse 5s ease-in-out infinite;
}

.ms_wave-ring.delay {
  inset: 24px;
  animation-delay: 1.5s;
}

@keyframes haloSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes wavePulse {
  0% { transform: scale(0.95); opacity: 0.35; }
  50% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.35; }
}

.ms_symbol {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 18px;
  margin: 40px auto;
  background: rgba(3, 5, 12, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 18px rgba(0, 0, 0, 0.45), 0 0 24px rgba(0, 0, 0, 0.25);
}

.ms_symbol svg {
  width: 32px;
  height: 32px;
  stroke: var(--accent);
  stroke-width: 2;
  fill: none;
}

.ms_symbol svg .filled {
  fill: var(--accent);
}

.ms_symbol-spin::before {
  content: "";
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.08);
  border-top-color: var(--accent);
  border-right-color: var(--accent);
  animation: spin 1.1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.ms_loader_title {
  position: relative;
  z-index: 1;
  font-size: 1.28rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 6px;
}

.ms_loader_subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 6px;
}

.ms_loader_text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(223, 227, 245, 0.8);
  margin-bottom: 20px;
}

.ms_pagination {
  display: inline-flex;
  gap: 10px;
  margin-bottom: 20px;
}

.ms_pagination span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  transition: width 0.25s ease, background 0.25s ease;
}

.ms_pagination span.active {
  width: 26px;
  border-radius: 999px;
  background: var(--accent);
}

.ms_loader_button {
  width: 100%;
  margin-bottom: 14px;
}

.ms_loader_button button {
  width: 100%;
  border-radius: 999px;
  padding: 14px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.ms_loader_button button.ghost {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.6);
}

.ms_loader_button button.ghost:disabled {
  opacity: 0.6;
  cursor: default;
}

.ms_loader_button button.solid {
  background: var(--accent);
  color: #04060d;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.4), 0 12px 26px var(--accent-soft);
}

.ms_loader_button button.solid:active {
  transform: translateY(1px);
}

.ms_progress_bar {
  width: 100%;
  height: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

#ms-progress {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  background-size: 220% 100%;
  animation: progressGlow 2.5s linear infinite;
}

@keyframes progressGlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

@media (max-width: 520px) {
  #ms-loader {
    padding: 18px;
  }

  .ms_matrix {
    inset: -40px;
    gap: 16px;
  }

  .ms_loader {
    padding: 26px 24px;
  }
}
`;



const MS_LOADER_LOAD = `<div class="ms_stage">
  <div class="ms_matrix">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="ms_loader $COLOR$ state-load">
    <div class="ms_visual">
      <div class="ms_wave">
        <span class="ms_wave-ring"></span>
        <span class="ms_wave-ring delay"></span>
        <div class="ms_symbol ms_symbol-spin"></div>
      </div>
    </div>
    <div class="ms_loader_title">$TITLE$</div>
    <div class="ms_loader_text">$TEXT$</div>
    <div class="ms_pagination">
      <span class="active"></span>
      <span></span>
      <span></span>
    </div>
    <div class="ms_loader_button" style="$SHOW_BUTTON$">
      <button class="ghost" disabled>$BUTTON$</button>
    </div>
    <div class="ms_progress_bar" style="$PROGRESS$">
      <div id="ms-progress"></div>
    </div>
  </div>
</div>`;



const MS_LOADER_SUCCESS = `<div class="ms_stage">
  <div class="ms_matrix">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="ms_loader $COLOR$ state-success">
    <div class="ms_visual">
      <div class="ms_wave">
        <span class="ms_wave-ring"></span>
        <span class="ms_wave-ring delay"></span>
        <div class="ms_symbol">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12.5L10 16.5L18 8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="ms_loader_title">$TITLE$</div>
    <div class="ms_loader_subtitle">$SUBTITLE$</div>
    <div class="ms_loader_text">$TEXT$</div>
    <div class="ms_loader_button" style="$SHOW_BUTTON$">
      <button class="solid" onclick="MSL.action()">$BUTTON$</button>
    </div>
    <div class="ms_progress_bar" style="$PROGRESS$">
      <div id="ms-progress"></div>
    </div>
  </div>
</div>`;



const MS_LOADER_ERROR = `<div class="ms_stage">
  <div class="ms_matrix">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="ms_loader $COLOR$ state-error">
    <div class="ms_visual">
      <div class="ms_wave">
        <span class="ms_wave-ring"></span>
        <span class="ms_wave-ring delay"></span>
        <div class="ms_symbol">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7L17 17" stroke-linecap="round"/>
            <path d="M17 7L7 17" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="ms_loader_title">$TITLE$</div>
    <div class="ms_loader_subtitle">$SUBTITLE$</div>
    <div class="ms_loader_text">$TEXT$</div>
    <div class="ms_loader_button" style="$SHOW_BUTTON$">
      <button class="solid" onclick="MSL.action()">$BUTTON$</button>
    </div>
    <div class="ms_progress_bar" style="$PROGRESS$">
      <div id="ms-progress"></div>
    </div>
  </div>
</div>`;



const MS_LOADER_INFO = `<div class="ms_stage">
  <div class="ms_matrix">
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="ms_loader $COLOR$ state-info">
    <div class="ms_visual">
      <div class="ms_wave">
        <span class="ms_wave-ring"></span>
        <span class="ms_wave-ring delay"></span>
        <div class="ms_symbol">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="none"/>
            <path class="filled" d="M11.2 9.2C11.2 9.75 11.65 10.2 12.2 10.2C12.75 10.2 13.2 9.75 13.2 9.2C13.2 8.65 12.75 8.2 12.2 8.2C11.65 8.2 11.2 8.65 11.2 9.2Z" />
            <path d="M12.2 12V15.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="ms_loader_title">$TITLE$</div>
    <div class="ms_loader_subtitle">$SUBTITLE$</div>
    <div class="ms_loader_text">$TEXT$</div>
    <div class="ms_loader_button" style="$SHOW_BUTTON$">
      <button class="solid" onclick="MSL.action()">$BUTTON$</button>
    </div>
    <div class="ms_progress_bar" style="$PROGRESS$">
      <div id="ms-progress"></div>
    </div>
  </div>
</div>`;



const MSL = {
  color_scheme: 'light',
  progress_timer: null,
  func: null,
  is_active: false,
  use_popup6: false,
  init: async () => {
    try {
      // Avoid duplicate injection
      if (document.querySelector('style[data-ms-loader]')) return;
      const style_elem = document.createElement('style');
      style_elem.setAttribute('data-ms-loader', '1');
      // Always use built-in loader CSS to avoid external 404s/noise
      style_elem.textContent = MS_LOADER_STYLE;
      document.head.append(style_elem);
    } catch(err) {
      /* silent */
    }
  },
  close: () => {
    try {
      document.querySelector('#ms-loader').remove();
    } catch(err) {
      // Loader already removed
    }
    try { clearInterval(MSL.progress_timer) } catch(err) {}
    MSL.is_active = false;
  },
  fire: async (st) => {
    try {
      // Ensure body is ready
      if (!document.body) {
        await new Promise(r => {
          if (document.body) r();
          else document.addEventListener('DOMContentLoaded', r);
        });
      }

      // Ensure init was called
      if (!document.querySelector('style[data-ms-loader]')) {
        await MSL.init();
      }

      MSL.close();

      let current_color = ((st.hasOwnProperty('color') ? st.color : MSL.color_scheme) == 'dark') ? 'black' : 'white';
      let mode = (st.hasOwnProperty('icon') ? st.icon : 'info'); let timer = (st.hasOwnProperty('timer') ? st.timer : 0);
      let show_button = (st.hasOwnProperty('showConfirmButton') ? st.showConfirmButton : true);
      let button_func = (st.hasOwnProperty('func') ? st.func : MSL.close); let loader_content = '';

      MSL.is_active = true;
      MSL.func = button_func;

      // Use replace with global regex instead of replaceAll for compatibility
      const replaceAll = (str, find, repl) => str.replace(new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), repl);

      if (mode == 'load') {
        loader_content = replaceAll(MS_LOADER_LOAD, '$TITLE$', st.title || 'Loading...');
        loader_content = replaceAll(loader_content, '$TEXT$', st.text || 'Please, wait until process will be done');
        loader_content = replaceAll(loader_content, '$BUTTON$', st.confirmButtonText || 'Please wait');
        loader_content = replaceAll(loader_content, '$COLOR$', current_color);
        loader_content = replaceAll(loader_content, '$PROGRESS$', timer > 0 ? '' : 'display: none');
        loader_content = replaceAll(loader_content, '$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
      } else if (mode == 'success') {
        loader_content = replaceAll(MS_LOADER_SUCCESS, '$TITLE$', st.title || 'Success');
        loader_content = replaceAll(loader_content, '$TEXT$', st.text || 'You\'ve done everything!');
        loader_content = replaceAll(loader_content, '$BUTTON$', st.confirmButtonText || 'Please wait');
        loader_content = replaceAll(loader_content, '$COLOR$', current_color);
        loader_content = replaceAll(loader_content, '$PROGRESS$', timer > 0 ? '' : 'display: none');
        loader_content = replaceAll(loader_content, '$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
        loader_content = replaceAll(loader_content, '$SUBTITLE$', st.subtitle || 'All done!');
      } else if (mode == 'error') {
        loader_content = replaceAll(MS_LOADER_ERROR, '$TITLE$', st.title || 'Oops...');
        loader_content = replaceAll(loader_content, '$TEXT$', st.text || 'Try again please!');
        loader_content = replaceAll(loader_content, '$BUTTON$', st.confirmButtonText || 'Please wait');
        loader_content = replaceAll(loader_content, '$COLOR$', current_color);
        loader_content = replaceAll(loader_content, '$PROGRESS$', timer > 0 ? '' : 'display: none');
        loader_content = replaceAll(loader_content, '$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
        loader_content = replaceAll(loader_content, '$SUBTITLE$', st.subtitle || 'Something went wrong...');
      } else {
        loader_content = replaceAll(MS_LOADER_INFO, '$TITLE$', st.title || 'Title');
        loader_content = replaceAll(loader_content, '$TEXT$', st.text || 'Text');
        loader_content = replaceAll(loader_content, '$BUTTON$', st.confirmButtonText || 'Please wait');
        loader_content = replaceAll(loader_content, '$COLOR$', current_color);
        loader_content = replaceAll(loader_content, '$PROGRESS$', timer > 0 ? '' : 'display: none');
        loader_content = replaceAll(loader_content, '$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
        loader_content = replaceAll(loader_content, '$SUBTITLE$', st.subtitle || 'Subtitle');
      }

      // If popup-6 is active, tag root with a class for CSS to hook.
      if (MSL.use_popup6) {
        try { loader_content = loader_content.replace('<div class="ms_loader ', '<div class="popup6 ms_loader '); } catch(_) {}
      }

      const loader_elem = document.createElement('div');
      loader_elem.id = 'ms-loader';
      loader_elem.innerHTML = loader_content;
      if (document.body.firstChild) {
        document.body.insertBefore(loader_elem, document.body.firstChild);
      } else {
        document.body.appendChild(loader_elem);
      }

      if (timer > 0) {
        let countdown = timer;
        MSL.progress_timer = setInterval(() => {
          countdown -= 10;
          if (countdown <= 10) {
            MSL.close();
          } else {
            let percent = (countdown / timer) * 100;
            try {
              document.querySelector('#ms-progress').style.width = `${percent}%`;
            } catch(err) {
              console.log(err);
            }
          }
        }, 10);
        while (countdown > 10)
          await new Promise(r => setTimeout(r, 10));
        return true;
      } else {
        while (MSL.is_active)
          await new Promise(r => setTimeout(r, 10));
        return true;
      }

    } catch(err) {
      console.error('[MSL.fire] Error:', err);
    }
  },
  action: () => {
    try {
      MSL.func();
    } catch(err) {
      console.log(err);
    }
  }
};

// Ensure global access and early style injection
try {
  // expose
  window.MSL = MSL;
  // init as early as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { try { MSL.init(); } catch(_) {} });
  } else {
    MSL.init();
  }
} catch(_) {}


