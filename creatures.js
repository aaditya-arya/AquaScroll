export const CREATURE_SVGS = {
  dolphin: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="dolphBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#bae6fd" />
              <stop offset="45%" stop-color="#0284c7" />
              <stop offset="100%" stop-color="#082f49" />
            </linearGradient>
            <linearGradient id="dolphBelly" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f0f9ff" />
              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2" />
            </linearGradient>
          </defs>
          <circle class="bio-burst-ring opacity-40" cx="305" cy="100" r="28" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4"/>
          <circle class="bio-burst-ring opacity-25" cx="322" cy="100" r="54" fill="none" stroke="#7dd3fc" stroke-width="1.5" stroke-dasharray="4 6"/>
          <path d="M 45 125 Q 20 100 12 85 Q 28 112 48 118 Q 25 138 16 155 Q 35 140 55 128 Z" fill="url(#dolphBody)"/>
          <path d="M 155 72 Q 140 28 116 24 Q 132 55 135 76 Z" fill="#0369a1"/>
          <path d="M 42 122 C 85 75, 195 55, 268 86 C 285 92, 306 96, 312 102 C 306 108, 282 109, 265 112 C 205 132, 110 136, 42 122 Z" fill="url(#dolphBody)"/>
          <path d="M 65 123 C 125 132, 210 128, 268 109 C 282 107, 295 106, 304 103 C 270 104, 185 118, 65 123 Z" fill="url(#dolphBelly)"/>
          <path d="M 212 114 Q 195 154 170 165 Q 186 135 196 112 Z" fill="#0284c7"/>
          <circle cx="268" cy="94" r="3.8" fill="#0f172a"/>
          <circle cx="269" cy="93" r="1.4" fill="#e0f2fe"/>
          <ellipse cx="278" cy="86" rx="15" ry="6" fill="#7dd3fc" opacity="0.45"/>
        </svg>`,

  turtle: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="shellGrad" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stop-color="#6ee7b7"/>
              <stop offset="50%" stop-color="#059669"/>
              <stop offset="100%" stop-color="#022c22"/>
            </radialGradient>
          </defs>
          <path d="M 92 132 Q 55 150 46 164 Q 75 158 104 140 Z" fill="#10b981"/>
          <path d="M 98 92 Q 62 75 52 64 Q 82 72 106 88 Z" fill="#047857"/>
          <ellipse cx="168" cy="112" rx="78" ry="55" fill="url(#shellGrad)" stroke="#6ee7b7" stroke-width="1.8"/>
          <path d="M 115 112 L 222 112 M 145 64 L 135 158 M 190 64 L 198 158" stroke="#a7f3d0" stroke-width="1.5" opacity="0.5"/>
          <ellipse cx="262" cy="110" rx="22" ry="15" fill="#10b981"/>
          <circle cx="270" cy="105" r="3.5" fill="#022c22"/>
          <circle cx="271" cy="104" r="1.2" fill="#ecfdf5"/>
          <path class="dumbo-ear-left" d="M 222 92 Q 255 30 294 20 Q 278 68 238 98 Z" fill="#34d399" stroke="#a7f3d0" stroke-width="1.2"/>
          <path class="dumbo-ear-right" d="M 220 128 Q 258 190 300 198 Q 280 152 238 122 Z" fill="#059669" stroke="#6ee7b7" stroke-width="1.2"/>
        </svg>`,

  siphonophore: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="siphGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="50%" stop-color="#818cf8"/>
              <stop offset="100%" stop-color="#00f5d4"/>
            </linearGradient>
          </defs>
          <ellipse class="jelly-bell" cx="278" cy="76" rx="36" ry="24" fill="#38bdf8" fill-opacity="0.28" stroke="#7dd3fc" stroke-width="2"/>
          <ellipse class="jelly-bell" cx="256" cy="92" rx="30" ry="19" fill="#818cf8" fill-opacity="0.28" stroke="#a5b4fc" stroke-width="1.6"/>
          <circle cx="280" cy="76" r="9" fill="#00f5d4" opacity="0.9"/>
          <path d="M 255 88 C 190 128, 135 52, 75 110 C 38 142, 26 178, 85 186 C 155 194, 220 145, 318 170" fill="none" stroke="url(#siphGlow)" stroke-width="5.5" stroke-linecap="round"/>
          <g class="tentacle-sway" stroke="#22d3ee" stroke-opacity="0.65" stroke-width="1.3">
            <line x1="230" y1="98" x2="225" y2="152"/><circle cx="230" cy="98" r="3.5" fill="#67e8f9"/>
            <line x1="200" y1="104" x2="195" y2="160"/><circle cx="200" cy="104" r="3.5" fill="#67e8f9"/>
            <line x1="170" y1="94" x2="165" y2="150"/><circle cx="170" cy="94" r="3.5" fill="#a5b4fc"/>
            <line x1="140" y1="86" x2="135" y2="142"/><circle cx="140" cy="86" r="3.5" fill="#67e8f9"/>
            <line x1="110" y1="92" x2="105" y2="148"/><circle cx="110" cy="92" r="3.5" fill="#a5b4fc"/>
            <line x1="80" y1="108" x2="75" y2="164"/><circle cx="80" cy="108" r="3.5" fill="#67e8f9"/>
            <line x1="125" y1="186" x2="122" y2="218"/><circle cx="125" cy="186" r="3" fill="#38bdf8"/>
            <line x1="175" y1="180" x2="172" y2="214"/><circle cx="175" cy="180" r="3" fill="#38bdf8"/>
            <line x1="225" y1="168" x2="222" y2="206"/><circle cx="225" cy="168" r="3" fill="#38bdf8"/>
          </g>
        </svg>`,

  combjelly: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="bloodBelly" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff1e56"/>
              <stop offset="60%" stop-color="#990024"/>
              <stop offset="100%" stop-color="#2a000d" stop-opacity="0.18"/>
            </radialGradient>
            <linearGradient id="ciliaRainbow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ff0055"><animate attributeName="stop-color" values="#ff0055;#00ffcc;#0088ff;#ffdd00;#ff0055" dur="2.5s" repeatCount="indefinite"/></stop>
              <stop offset="50%" stop-color="#00ffcc"><animate attributeName="stop-color" values="#00ffcc;#0088ff;#ffdd00;#ff0055;#00ffcc" dur="2.5s" repeatCount="indefinite"/></stop>
              <stop offset="100%" stop-color="#38bdf8"><animate attributeName="stop-color" values="#38bdf8;#ff0055;#00ffcc;#ffdd00;#38bdf8" dur="2.5s" repeatCount="indefinite"/></stop>
            </linearGradient>
          </defs>
          <path class="jelly-bell" d="M 190 20 C 258 20, 282 78, 265 148 C 252 190, 220 204, 190 180 C 160 204, 128 190, 115 148 C 98 78, 122 20, 190 20 Z" fill="url(#bloodBelly)" stroke="#fb7185" stroke-width="2" stroke-opacity="0.75"/>
          <ellipse cx="190" cy="105" rx="36" ry="48" fill="#e11d48" opacity="0.92"/>
          <path d="M 152 34 Q 124 100 138 172" fill="none" stroke="url(#ciliaRainbow)" stroke-width="4.5" stroke-dasharray="4 5"/>
          <path d="M 170 28 Q 152 100 162 172" fill="none" stroke="url(#ciliaRainbow)" stroke-width="4.5" stroke-dasharray="4 5"/>
          <path d="M 210 28 Q 228 100 218 172" fill="none" stroke="url(#ciliaRainbow)" stroke-width="4.5" stroke-dasharray="4 5"/>
          <path d="M 228 34 Q 256 100 242 172" fill="none" stroke="url(#ciliaRainbow)" stroke-width="4.5" stroke-dasharray="4 5"/>
        </svg>`,

  barreleye: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="domeGlass" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stop-color="#e0f2fe" stop-opacity="0.5"/>
              <stop offset="70%" stop-color="#38bdf8" stop-opacity="0.24"/>
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.7"/>
            </radialGradient>
            <radialGradient id="emeraldEye" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stop-color="#d9f99d"/>
              <stop offset="55%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#14532d"/>
            </radialGradient>
          </defs>
          <path d="M 75 122 L 26 90 L 38 122 L 26 154 Z" fill="#64748b" fill-opacity="0.6" stroke="#94a3b8"/>
          <path d="M 135 142 Q 115 188 90 195 Q 112 160 124 138 Z" fill="#38bdf8" fill-opacity="0.35" stroke="#7dd3fc"/>
          <path d="M 122 86 Q 98 50 80 52 Q 98 78 112 94 Z" fill="#38bdf8" fill-opacity="0.35" stroke="#7dd3fc"/>
          <path d="M 72 122 C 102 80, 185 76, 260 98 C 285 108, 296 126, 276 138 C 215 156, 118 152, 72 122 Z" fill="#0f172a" stroke="#475569" stroke-width="1.8"/>
          <g class="lure-bob">
            <rect x="216" y="74" width="17" height="28" rx="6" fill="#090d16" stroke="#4ade80" stroke-width="1.4"/>
            <circle cx="224" cy="74" r="12" fill="url(#emeraldEye)"/>
            <rect x="242" y="72" width="17" height="28" rx="6" fill="#090d16" stroke="#4ade80" stroke-width="1.4"/>
            <circle cx="250" cy="72" r="13" fill="url(#emeraldEye)"/>
          </g>
          <path d="M 190 96 C 192 38, 272 38, 286 108 C 290 118, 280 126, 266 125 C 235 122, 205 112, 190 96 Z" fill="url(#domeGlass)" stroke="#7dd3fc" stroke-width="2.2"/>
          <circle cx="274" cy="114" r="2.5" fill="#94a3b8"/>
          <path d="M 274 126 L 288 124" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
        </svg>`,

  vampiresquid: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="vampVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#be123c"/>
              <stop offset="60%" stop-color="#4c0519"/>
              <stop offset="100%" stop-color="#14020a"/>
            </linearGradient>
          </defs>
          <ellipse class="dumbo-ear-left" cx="122" cy="58" rx="24" ry="12" fill="#881337" stroke="#fb7185" stroke-width="1.2"/>
          <ellipse class="dumbo-ear-right" cx="198" cy="52" rx="24" ry="12" fill="#881337" stroke="#fb7185" stroke-width="1.2"/>
          <path d="M 118 98 C 105 40, 198 26, 210 92 Z" fill="url(#vampVelvet)" stroke="#f43f5e" stroke-width="1.8"/>
          <circle cx="178" cy="84" r="12" fill="#0284c7" stroke="#38bdf8" stroke-width="2.2"/>
          <circle cx="178" cy="84" r="5.5" fill="#082f49"/>
          <circle cx="181" cy="81" r="2.8" fill="#e0f2fe"/>
          <path class="tentacle-sway" d="M 118 96 C 82 136, 62 180, 95 194 C 122 170, 145 198, 176 197 C 206 196, 226 170, 258 188 C 278 166, 245 125, 210 92 Z" fill="url(#vampVelvet)" stroke="#fb7185" stroke-width="1.8"/>
          <circle cx="95" cy="192" r="5" fill="#00f0ff"/><circle cx="136" cy="186" r="5" fill="#00f0ff"/>
          <circle cx="176" cy="195" r="5" fill="#00f0ff"/><circle cx="216" cy="184" r="5" fill="#00f0ff"/>
          <circle cx="256" cy="186" r="5" fill="#00f0ff"/>
          <path d="M 234 135 Q 310 118 352 170" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="3 3"/>
          <circle cx="352" cy="170" r="4" fill="#00f0ff"/>
        </svg>`,

  giantsquid: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="squidMantle" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fb7185"/>
              <stop offset="50%" stop-color="#e11d48"/>
              <stop offset="100%" stop-color="#881337"/>
            </linearGradient>
          </defs>
          <path d="M 18 108 L 58 74 L 80 96 L 58 142 Z" fill="#be123c"/>
          <path d="M 32 108 L 198 80 L 198 136 Z" fill="url(#squidMantle)" stroke="#fda4af" stroke-width="1.5"/>
          <circle cx="208" cy="106" r="14" fill="#fef08a" stroke="#f43f5e" stroke-width="2.5"/>
          <circle cx="208" cy="106" r="7.5" fill="#020617"/>
          <circle cx="211" cy="103" r="2.8" fill="#ffffff"/>
          <g class="tentacle-sway" fill="none" stroke="#fb7185" stroke-linecap="round">
            <path d="M 218 95 Q 272 62 318 78" stroke-width="5.5"/>
            <path d="M 220 102 Q 278 88 328 96" stroke-width="6"/>
            <path d="M 220 112 Q 278 126 326 118" stroke-width="6"/>
            <path d="M 218 120 Q 272 150 314 138" stroke-width="5.5"/>
            <path d="M 220 98 C 280 42, 320 158, 360 66" stroke="#fda4af" stroke-width="3.2"/>
            <path d="M 220 116 C 280 172, 320 62, 360 150" stroke="#fda4af" stroke-width="3.2"/>
          </g>
          <ellipse cx="358" cy="68" rx="10" ry="4.5" transform="rotate(-35 358 68)" fill="#fda4af"/>
          <ellipse cx="358" cy="148" rx="10" ry="4.5" transform="rotate(35 358 148)" fill="#fda4af"/>
        </svg>`,

  spermwhale: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="whaleSlate" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#64748b"/>
              <stop offset="55%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#090d16"/>
            </linearGradient>
          </defs>
          <path class="bio-burst-ring opacity-55" d="M 322 66 Q 348 96 322 126" fill="none" stroke="#38bdf8" stroke-width="2.8"/>
          <path class="bio-burst-ring opacity-35" d="M 338 50 Q 370 96 338 142" fill="none" stroke="#7dd3fc" stroke-width="2"/>
          <path d="M 18 112 L 44 82 L 50 108 L 44 138 Z" fill="#1e293b"/>
          <path d="M 44 108 C 98 96, 148 70, 208 62 C 250 56, 300 52, 312 68 C 320 82, 318 110, 306 116 C 268 120, 228 118, 208 116 C 148 126, 98 122, 44 108 Z" fill="url(#whaleSlate)" stroke="#94a3b8" stroke-width="1.6"/>
          <path d="M 215 122 L 298 126 L 294 134 L 210 130 Z" fill="#334155"/>
          <path d="M 228 122 L 230 117 M 241 123 L 243 118 M 254 124 L 256 119 M 267 124 L 269 119 M 280 125 L 282 120" stroke="#f8fafc" stroke-width="2.2"/>
          <circle cx="268" cy="88" r="6.5" fill="none" stroke="#cbd5e1" stroke-width="1.2" opacity="0.55"/>
          <circle cx="280" cy="96" r="5.5" fill="none" stroke="#cbd5e1" stroke-width="1.2" opacity="0.55"/>
          <circle cx="235" cy="98" r="3.8" fill="#e2e8f0"/>
        </svg>`,

  anglerfish: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="escaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="28%" stop-color="#00f5d4"/>
              <stop offset="68%" stop-color="#00bbf9" stop-opacity="0.48"/>
              <stop offset="100%" stop-color="#00bbf9" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <path d="M 65 125 L 28 92 L 40 125 L 28 158 Z" fill="#1e1b4b" stroke="#6366f1"/>
          <path d="M 62 125 C 78 62, 168 44, 230 76 C 258 92, 250 112, 212 122 C 246 135, 260 156, 226 174 C 168 198, 85 180, 62 125 Z" fill="#05070c" stroke="#38bdf8" stroke-opacity="0.45" stroke-width="2"/>
          <path d="M 226 80 L 236 104 M 212 86 L 220 108 M 198 92 L 204 110 M 228 168 L 240 140 M 214 164 L 224 138 M 198 158 L 206 136" stroke="#e0f2fe" stroke-width="2.4" stroke-linecap="round" opacity="0.9"/>
          <g class="lure-bob">
            <path d="M 180 64 C 218 18, 284 22, 294 78" fill="none" stroke="#38bdf8" stroke-width="2.8"/>
            <circle cx="294" cy="84" r="44" fill="url(#escaGlow)"/>
            <circle cx="294" cy="84" r="8" fill="#ffffff"/>
          </g>
          <circle cx="195" cy="82" r="4.5" fill="#38bdf8"/>
        </svg>`,

  tubeworm: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible">
          <polygon points="48,215 74,92 116,92 140,215" fill="#0f172a" stroke="#475569" stroke-width="1.8"/>
          <circle cx="95" cy="72" r="24" fill="#334155" opacity="0.6" style="animation: smokerPlume 3s infinite;"/>
          <circle cx="98" cy="42" r="36" fill="#475569" opacity="0.4" style="animation: smokerPlume 3s infinite 1.2s;"/>
          <g class="tentacle-sway">
            <path d="M 178 215 Q 172 135 185 76" fill="none" stroke="#e2e8f0" stroke-width="17" stroke-linecap="round"/>
            <ellipse cx="187" cy="54" rx="15" ry="28" fill="#e11d48" stroke="#fda4af" stroke-width="1.8"/>
            <path d="M 222 215 Q 226 140 240 86" fill="none" stroke="#cbd5e1" stroke-width="15" stroke-linecap="round"/>
            <ellipse cx="243" cy="64" rx="14" ry="25" fill="#f43f5e" stroke="#fda4af" stroke-width="1.8"/>
            <path d="M 268 215 Q 278 152 288 106" fill="none" stroke="#94a3b8" stroke-width="13" stroke-linecap="round"/>
            <ellipse cx="291" cy="88" rx="12" ry="22" fill="#be123c" stroke="#fda4af" stroke-width="1.8"/>
          </g>
        </svg>`,

  volcanosnail: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="ironShell" cx="45%" cy="45%" r="55%">
              <stop offset="0%" stop-color="#cbd5e1"/>
              <stop offset="55%" stop-color="#334155"/>
              <stop offset="85%" stop-color="#0f172a"/>
              <stop offset="100%" stop-color="#f97316"/>
            </radialGradient>
          </defs>
          <path d="M 55 180 L 315 180" stroke="#f97316" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M 85 184 L 285 184" stroke="#fde047" stroke-width="1.8"/>
          <g fill="#475569" stroke="#e2e8f0" stroke-width="1.4">
            <polygon points="95,174 115,148 128,174"/>
            <polygon points="122,174 142,146 155,174"/>
            <polygon points="150,174 170,146 184,174"/>
            <polygon points="178,174 198,146 212,174"/>
            <polygon points="205,174 225,148 240,174"/>
            <polygon points="232,174 252,150 266,174"/>
          </g>
          <path d="M 108 148 C 95 70, 190 36, 235 94 C 255 122, 238 156, 196 156 C 155 156, 145 118, 175 104 C 196 95, 210 112, 196 124" fill="url(#ironShell)" stroke="#f8fafc" stroke-width="2.5"/>
          <path d="M 258 158 Q 288 142 302 128 M 260 164 Q 292 158 306 152" fill="none" stroke="#cbd5e1" stroke-width="3.2" stroke-linecap="round"/>
        </svg>`,

  beakedwhale: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="cuvierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e2e8f0"/>
              <stop offset="45%" stop-color="#475569"/>
              <stop offset="100%" stop-color="#090d16"/>
            </linearGradient>
          </defs>
          <circle class="bio-burst-ring opacity-45" cx="312" cy="108" r="32" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="5 5"/>
          <path d="M 22 115 L 48 84 L 54 112 L 48 142 Z" fill="#334155"/>
          <path d="M 122 82 Q 112 56 96 54 Q 106 72 108 86 Z" fill="#334155"/>
          <path d="M 45 112 C 102 72, 218 66, 286 96 C 300 102, 316 104, 320 110 C 314 116, 296 118, 282 122 C 212 146, 108 138, 45 112 Z" fill="url(#cuvierGrad)" stroke="#94a3b8" stroke-width="1.5"/>
          <path d="M 282 110 Q 300 114 318 110" fill="none" stroke="#0f172a" stroke-width="2.2"/>
          <circle cx="270" cy="102" r="3.5" fill="#0f172a"/>
          <path d="M 165 96 L 198 104 M 172 106 L 205 100" stroke="#f8fafc" stroke-width="1.2" opacity="0.65"/>
        </svg>`,

  atolla: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="atollaBell" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fb7185"/>
              <stop offset="65%" stop-color="#881337"/>
              <stop offset="100%" stop-color="#4c0519"/>
            </radialGradient>
          </defs>
          <circle class="bio-burst-ring opacity-85" cx="168" cy="95" r="60" fill="none" stroke="#00f0ff" stroke-width="4.5" stroke-dasharray="10 12" style="animation: pinwheelAlarm 3.8s linear infinite;"/>
          <g class="jelly-bell">
            <ellipse cx="168" cy="95" rx="54" ry="40" fill="url(#atollaBell)" stroke="#fda4af" stroke-width="2.2"/>
            <ellipse cx="168" cy="95" rx="34" ry="24" fill="none" stroke="#00f0ff" stroke-width="2.8" stroke-dasharray="6 6"/>
          </g>
          <g class="tentacle-sway" fill="none" stroke="#fb7185" stroke-width="2.2" stroke-linecap="round">
            <path d="M 122 115 Q 98 158 80 186"/>
            <path d="M 142 126 Q 130 170 116 198"/>
            <path d="M 188 126 Q 200 170 214 198"/>
            <path d="M 208 115 Q 230 158 248 186"/>
            <path d="M 168 134 C 168 188, 260 188, 348 202" stroke="#00f0ff" stroke-width="3"/>
          </g>
        </svg>`,

  dumbo: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="dumboGrad" cx="45%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#fb923c"/>
              <stop offset="100%" stop-color="#7c2d12"/>
            </radialGradient>
          </defs>
          <ellipse class="dumbo-ear-left" cx="122" cy="68" rx="30" ry="16" fill="#fdba74" stroke="#fed7aa" stroke-width="1.8"/>
          <ellipse class="dumbo-ear-right" cx="242" cy="68" rx="30" ry="16" fill="#fdba74" stroke="#fed7aa" stroke-width="1.8"/>
          <path d="M 126 118 C 118 38, 246 38, 238 118 C 252 158, 235 180, 212 170 C 196 184, 166 184, 150 170 C 128 180, 112 158, 126 118 Z" fill="url(#dumboGrad)" stroke="#fed7aa" stroke-width="2.2"/>
          <circle cx="148" cy="112" r="7.5" fill="#0f172a" stroke="#fef3c7" stroke-width="1.6"/>
          <circle cx="146" cy="110" r="2.2" fill="#ffffff"/>
          <circle cx="215" cy="112" r="7.5" fill="#0f172a" stroke="#fef3c7" stroke-width="1.6"/>
          <circle cx="213" cy="110" r="2.2" fill="#ffffff"/>
        </svg>`,

  seapig: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <radialGradient id="seaPigGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#fce7f3" stop-opacity="0.9"/>
              <stop offset="65%" stop-color="#f472b6" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#831843" stop-opacity="0.75"/>
            </radialGradient>
          </defs>
          <g stroke="#f9a8d4" stroke-width="8.5" stroke-linecap="round">
            <line x1="125" y1="142" x2="112" y2="186"/>
            <line x1="158" y1="148" x2="152" y2="192"/>
            <line x1="192" y1="148" x2="196" y2="192"/>
            <line x1="222" y1="142" x2="232" y2="186"/>
          </g>
          <ellipse cx="178" cy="114" rx="76" ry="46" fill="url(#seaPigGrad)" stroke="#fbcfe8" stroke-width="2.2"/>
          <path d="M 145 76 Q 132 40 116 32 M 168 72 Q 162 34 150 26 M 205 76 Q 218 38 234 32" fill="none" stroke="#fbcfe8" stroke-width="3.8" stroke-linecap="round"/>
          <circle cx="248" cy="126" r="15" fill="#f472b6" fill-opacity="0.55" stroke="#fbcfe8" stroke-dasharray="3 3"/>
        </svg>`,

  tripodfish: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible">
          <line x1="92" y1="98" x2="36" y2="210" stroke="#38bdf8" stroke-width="2.8"/>
          <line x1="215" y1="104" x2="178" y2="210" stroke="#38bdf8" stroke-width="2.8"/>
          <line x1="222" y1="104" x2="270" y2="210" stroke="#7dd3fc" stroke-width="2.8"/>
          <ellipse cx="165" cy="210" rx="150" ry="7" fill="#38bdf8" opacity="0.22"/>
          <path d="M 88 94 L 66 72 L 92 98 L 70 120 Z" fill="#94a3b8"/>
          <path d="M 88 94 C 135 80, 218 82, 282 96 C 268 110, 145 110, 88 94 Z" fill="#e2e8f0" stroke="#38bdf8" stroke-width="1.5"/>
          <path class="tentacle-sway" d="M 230 92 Q 272 40 324 46 M 230 96 Q 276 54 328 64" fill="none" stroke="#67e8f9" stroke-width="2.4"/>
        </svg>`,

  snailfish: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="snailfishGel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fda4af" stop-opacity="0.92"/>
              <stop offset="55%" stop-color="#f9a8d4" stop-opacity="0.58"/>
              <stop offset="100%" stop-color="#e0f2fe" stop-opacity="0.22"/>
            </linearGradient>
          </defs>
          <path d="M 38 112 C 110 84, 208 62, 268 78 C 298 85, 308 112, 288 136 C 238 156, 115 140, 38 112 Z" fill="url(#snailfishGel)" stroke="#fbcfe8" stroke-width="2"/>
          <path d="M 55 112 Q 165 104 248 106" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-dasharray="4 3" opacity="0.75"/>
          <ellipse cx="238" cy="112" rx="24" ry="15" fill="#fb7185" opacity="0.55"/>
          <path class="tentacle-sway" d="M 240 118 Q 212 160 175 165 Q 202 135 218 116 Z" fill="#fbcfe8" fill-opacity="0.55" stroke="#f9a8d4"/>
          <circle cx="276" cy="98" r="4" fill="#0f172a"/>
        </svg>`,

  amphipod: () => `
        <svg viewBox="0 0 380 230" class="w-full h-72 sm:h-80 overflow-visible creature-swim">
          <defs>
            <linearGradient id="aluminumArmor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f0f9ff"/>
              <stop offset="55%" stop-color="#7dd3fc"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
          </defs>
          <ellipse class="bio-burst-ring opacity-50" cx="185" cy="108" rx="112" ry="65" fill="none" stroke="#38bdf8" stroke-width="2.2" stroke-dasharray="6 4"/>
          <path d="M 88 145 C 82 70, 168 42, 252 76 C 280 88, 288 115, 268 128 C 218 102, 138 106, 88 145 Z" fill="url(#aluminumArmor)" stroke="#bae6fd" stroke-width="2.2"/>
          <path d="M 128 68 L 138 114 M 162 58 L 166 108 M 196 58 L 195 108 M 228 66 L 222 112" stroke="#0284c7" stroke-width="2.2"/>
          <path d="M 275 98 Q 322 78 350 56 M 278 106 Q 326 102 352 96" fill="none" stroke="#38bdf8" stroke-width="2.8" stroke-linecap="round"/>
          <g stroke="#7dd3fc" stroke-width="2.5" stroke-linecap="round">
            <line x1="145" y1="112" x2="132" y2="158"/>
            <line x1="168" y1="110" x2="160" y2="160"/>
            <line x1="192" y1="110" x2="188" y2="160"/>
            <line x1="215" y1="112" x2="218" y2="158"/>
          </g>
          <circle cx="262" cy="94" r="5" fill="#f43f5e"/>
        </svg>`,
};
export const SPECIES_DATA = [
  {
    depth: 45,
    zone: "Epipelagic Zone",
    name: "Bottlenose Dolphin",
    scientific: "Tursiops truncatus",
    svgKey: "dolphin",
    glowColor: "#38bdf8",
    size: "2.5 – 3.8 m (8 – 12.5 ft)",
    diet: "Epipelagic fish, squid & crustaceans",
    adaptationTitle: "Emit Biological Sonar Click Train",
    adaptationEffect:
      "Fires high-frequency clicks focused through its lipid-rich forehead melon to map prey in 3D.",
    fact: "Bottlenose dolphins routinely dive to 45–150 meters while foraging. Because they are conscious breathers, they shut down only one hemisphere of their brain at a time to rest while still swimming and surfacing for air.",
    source: "NOAA Fisheries / Smithsonian Ocean",
  },
  {
    depth: 120,
    zone: "Epipelagic Zone",
    name: "Green Sea Turtle",
    scientific: "Chelonia mydas",
    svgKey: "turtle",
    glowColor: "#34d399",
    size: "1.0 – 1.2 m (3.3 – 4 ft) • Up to 160 kg",
    diet: "Herbivorous (seagrasses & marine algae)",
    adaptationTitle: "Activate Bradycardia Dive Reflex",
    adaptationEffect:
      "Slows heart rate to 1 beat every several minutes to conserve blood oxygen.",
    fact: "Unlike other sea turtles, adult Green Sea Turtles are strictly herbivorous. During deep resting or foraging dives, they regulate buoyancy using collapsible lungs and high blood myoglobin.",
    source: "NOAA Fisheries",
  },
  {
    depth: 520,
    zone: "Mesopelagic Zone",
    name: "Giant Siphonophore",
    scientific: "Praya dubia",
    svgKey: "siphonophore",
    glowColor: "#22d3ee",
    size: "Up to 40 m (130+ ft) — longer than a Blue Whale",
    diet: "Gelatinous zooplankton, krill & small midwater fish",
    adaptationTitle: "Ignite Colonial Zooid Bioluminescence",
    adaptationEffect:
      "Propagates a brilliant cyan bioluminescent wave down thousands of cloned zooids.",
    fact: "Though it resembles a single jellyfish, Praya dubia is a hydrozoan colony made of thousands of genetically identical specialized clones (zooids) that cannot survive alone. Its stinging tentilla curtain paralyses deep-water prey.",
    source: "Monterey Bay Aquarium Research Institute (MBARI)",
  },
  {
    depth: 650,
    zone: "Mesopelagic Zone",
    name: "Bloodybelly Comb Jelly",
    scientific: "Lampocteis cruentiventer",
    svgKey: "combjelly",
    glowColor: "#f43f5e",
    size: "10 – 16 cm (4 – 6.3 in)",
    diet: "Bioluminescent copepods, krill & larval fish",
    adaptationTitle: "Overdrive Rainbow Cilia Diffraction",
    adaptationEffect:
      "Beats 8 rows of fused cilia plates that diffract light into shifting neon rainbows.",
    fact: "Filmed and formally described by MBARI researchers in 2001, its deep crimson stomach appears pitch-black at 650m because red light is completely absorbed near the surface—cloaking the glowing prey inside its gut.",
    source: "MBARI",
  },
  {
    depth: 720,
    zone: "Mesopelagic Zone",
    name: "Pacific Barreleye Fish",
    scientific: "Macropinna microstoma",
    svgKey: "barreleye",
    glowColor: "#4ade80",
    size: "15 cm (6 in)",
    diet: "Zooplankton & prey stolen from siphonophore tentacles",
    adaptationTitle: "Rotate Tubular Dome Eyes",
    adaptationEffect:
      "Pivots its emerald-green tubular eyes from vertical silhouette-scanning to forward target lock.",
    fact: "MBARI ROVs proved that the Barreleye possesses a fragile, transparent fluid-filled dome over its skull. Its glowing green lenses filter out ambient sunlight so it can spot only the bioluminescence of overhead organisms.",
    source: "MBARI",
  },
  {
    depth: 850,
    zone: "Mesopelagic Zone (Oxygen Minimum Zone)",
    name: "Vampire Squid",
    scientific: "Vampyroteuthis infernalis",
    svgKey: "vampiresquid",
    glowColor: "#00f0ff",
    size: "28 cm (11 in)",
    diet: 'Detritivore — consumes sinking "marine snow"',
    adaptationTitle: "Deploy Pineapple Cloak & Glowing Mucus",
    adaptationEffect:
      "Inverts its webbed cloak and ejects clouds of glowing blue bioluminescent orbs from its arm tips.",
    fact: 'Despite its Latin name ("Vampire squid from hell"), this ancient phylogenetic relic is a gentle detritivore living in the Oxygen Minimum Zone. Instead of black ink, it blinds predators with glowing blue mucus.',
    source: "MBARI / Smithsonian Ocean",
  },
  {
    depth: 1150,
    zone: "Bathypelagic Zone",
    name: "Giant Squid",
    scientific: "Architeuthis dux",
    svgKey: "giantsquid",
    glowColor: "#fb7185",
    size: "10 – 13 m (33 – 43 ft)",
    diet: "Deep-sea fish, orange roughy & other squid",
    adaptationTitle: "Snap Serrated Tentacle Clubs",
    adaptationEffect:
      "Lashes out two feeding tentacles lined with chitin-ringed toothed suckers.",
    fact: "Giant squid possess the largest eyes in the animal kingdom—up to 27 cm (10.6 in) across—specifically evolved to detect the faint bioluminescent wakes of plankton disturbed by hunting sperm whales in total darkness.",
    source: "Smithsonian National Museum of Natural History / NOAA",
  },
  {
    depth: 1650,
    zone: "Bathypelagic Zone",
    name: "Sperm Whale",
    scientific: "Physeter macrocephalus",
    svgKey: "spermwhale",
    glowColor: "#38bdf8",
    size: "15 – 20 m (49 – 66 ft) • Up to 57 metric tons",
    diet: "Giant & colossal squid, octopuses & demersal rays",
    adaptationTitle: "Emit 230-Decibel Sonar Buzz",
    adaptationEffect:
      "Blasts the loudest biologically produced sound on Earth through its spermaceti organ.",
    fact: "Equipped with a collapsible ribcage and oxygen-storing myoglobin so concentrated its muscles appear nearly black, the Sperm Whale hunts giant squid in pitch-black canyons for up to 90 minutes on a single breath.",
    source: "Woods Hole Oceanographic Institution (WHOI)",
  },
  {
    depth: 2100,
    zone: "Bathypelagic Zone",
    name: "Black Seadevil Anglerfish",
    scientific: "Melanocetus johnsonii",
    svgKey: "anglerfish",
    glowColor: "#00f5d4",
    size: "Females: 18 cm (7 in) • Males: 2.8 cm (1.1 in)",
    diet: "Bathypelagic crustaceans & fish up to twice its own size",
    adaptationTitle: "Pulse Symbiotic Esca Lure",
    adaptationEffect:
      "Dilates blood vessels around its dorsal lure to feed glowing Vibrio bacteria with oxygen.",
    fact: 'The Black Seadevil has "ultra-black" skin made of tightly packed melanosomes that absorb >99.5% of light—ensuring that the glow of its own fishing lure does not reflect off its body.',
    source: "MBARI / Smithsonian Institution",
  },
  {
    depth: 2500,
    zone: "Bathypelagic • Hydrothermal Vents",
    name: "Giant Tube Worm",
    scientific: "Riftia pachyptila",
    svgKey: "tubeworm",
    glowColor: "#f43f5e",
    size: "Up to 2.4 m (8 ft)",
    diet: "Chemosynthetic symbiosis (no mouth or digestive gut)",
    adaptationTitle: "Chemosynthetic Sulfide Surge",
    adaptationEffect:
      "Binds both oxygen and toxic hydrogen sulfide in its crimson hemoglobin plume.",
    fact: "Discovered along Galapagos hydrothermal vents by WHOI in 1977, adult Riftia have no mouth, stomach, or gut. Billions of internal bacteria inside their trophosome convert toxic vent chemicals into organic carbon.",
    source: "Woods Hole Oceanographic Institution (WHOI) / NOAA",
  },
  {
    depth: 2780,
    zone: "Bathypelagic • Indian Ocean Vents",
    name: "Scaly-Foot Gastropod (Volcano Snail)",
    scientific: "Chrysomallon squamiferum",
    svgKey: "volcanosnail",
    glowColor: "#f97316",
    size: "4.5 cm (1.8 in)",
    diet: "Endosymbiotic chemosynthetic bacteria in esophageal gland",
    adaptationTitle: "Magnetize Iron-Sulfide Armor Scales",
    adaptationEffect:
      "Deflects predatory crab claws with a 3-layered shell infused with greigite and pyrite.",
    fact: "Living beside 350°C black smokers in the Indian Ocean, the Volcano Snail is the only known animal on Earth that builds metallic iron sulfides directly into its skeletal shell and overlapping foot scales.",
    source: "Smithsonian / IUCN Red List",
  },
  {
    depth: 2992,
    zone: "Bathypelagic • Mammalian Depth Record",
    name: "Cuvier's Beaked Whale",
    scientific: "Ziphius cavirostris",
    svgKey: "beakedwhale",
    glowColor: "#7dd3fc",
    size: "5.5 – 7.0 m (18 – 23 ft)",
    diet: "Deep-sea cephalopods & bathypelagic fish via suction feeding",
    adaptationTitle: "Engage 2,992m Pressure Collapse",
    adaptationEffect:
      "Folds lungs completely at depth to block nitrogen absorption and prevent the bends.",
    fact: "Tracked via satellite-linked tags, Cuvier’s Beaked Whale holds the verified world record for the deepest dive (2,992 meters / 9,816 feet) and longest breath-hold (222 minutes / 3.7 hours) of any mammal.",
    source: "WHOI / Cascadia Research Collective",
  },
  {
    depth: 3400,
    zone: "Bathypelagic Zone",
    name: "Atolla Crown Jellyfish",
    scientific: "Atolla wyvillei",
    svgKey: "atolla",
    glowColor: "#00f0ff",
    size: "15 – 20 cm (6 – 8 in) bell diameter",
    diet: "Deep-sea copepods & pelagic crustaceans",
    adaptationTitle: "Trigger Pinwheel Burglar Alarm",
    adaptationEffect:
      "Spins a strobing cyan ring of bioluminescence around its bell to summon apex predators.",
    fact: 'Known to oceanographers as the "Alarm Jellyfish," when bitten by a predator it flashes a rotating pinwheel of blue light visible over 90 meters away—attracting larger predators to eat its attacker.',
    source: "MBARI / NOAA Ocean Exploration",
  },
  {
    depth: 3850,
    zone: "Lower Bathypelagic / Abyssal Boundary",
    name: "Dumbo Octopus",
    scientific: "Grimpoteuthis bathynectes",
    svgKey: "dumbo",
    glowColor: "#fb923c",
    size: "20 – 30 cm (8 – 12 in)",
    diet: "Benthic polychaete worms, copepods & amphipods",
    adaptationTitle: "Hover with Mantle Ear Fins",
    adaptationEffect:
      "Flaps muscular ear-like fins gracefully above the seafloor without expending jet energy.",
    fact: "The deepest-living of all known octopuses (observed down to 7,000m in the Indian Ocean), Dumbo octopuses have evolved away their ink sac entirely since ink clouds are invisible in eternal darkness.",
    source: "NOAA Ocean Exploration / WHOI",
  },
  {
    depth: 4600,
    zone: "Abyssopelagic Zone",
    name: "Abyssal Sea Pig",
    scientific: "Scotoplanes globosa",
    svgKey: "seapig",
    glowColor: "#f472b6",
    size: "10 – 15 cm (4 – 6 in)",
    diet: "Microbial detritus from freshly fallen marine snow & whale falls",
    adaptationTitle: "Inflate Hydraulic Walking Legs",
    adaptationEffect:
      "Pumps seawater into its vascular cavity to march across abyssal ooze in herds of hundreds.",
    fact: "Unlike coastal sea cucumbers that crawl, the translucent Sea Pig walks on stilt-like hydraulic tube feet and uses dorsal papillae as chemical antennas to smell sunken whale carcasses miles away.",
    source: "MBARI",
  },
  {
    depth: 5200,
    zone: "Abyssopelagic Zone",
    name: "Abyssal Tripod Fish",
    scientific: "Bathypterois grallator",
    svgKey: "tripodfish",
    glowColor: "#38bdf8",
    size: "30 – 43 cm (12 – 17 in) body • 1 m (3.3 ft) fin stilts",
    diet: "Planktonic crustaceans drifting in benthic boundary currents",
    adaptationTitle: "Stiffen Hydrostatic Fin Stilts",
    adaptationEffect:
      "Pumps fluid into three 1-meter fin rays to stand motionless above the soft abyssal mud.",
    fact: "Nearly blind, the Tripod Fish faces into the abyssal current on three rigid fin rays and spreads its pectoral fins overhead like radar dishes to feel the vibrations of passing shrimp.",
    source: "NOAA / Woods Hole Oceanographic Institution",
  },
  {
    depth: 8178,
    zone: "Hadalpelagic Zone (Mariana Trench)",
    name: "Mariana Hadal Snailfish",
    scientific: "Pseudoliparis swirei",
    svgKey: "snailfish",
    glowColor: "#fda4af",
    size: "18 – 28 cm (7 – 11 in)",
    diet: "Hadal amphipods & decapod shrimp",
    adaptationTitle: "Stabilize Cellular TMAO Osmolytes",
    adaptationEffect:
      "Floods cells with trimethylamine N-oxide (TMAO) so water molecules cannot crush its proteins.",
    fact: "One of the deepest vertebrate fishes on Earth (~8,178m–8,336m), it survives 800+ atmospheres of pressure (8 tons per sq inch) by replacing dense bone with flexible cartilage and having an unsealed skull.",
    source: "University of Washington / NOAA / MBARI",
  },
  {
    depth: 10928,
    zone: "Hadalpelagic • Challenger Deep Floor",
    name: "Challenger Deep Amphipod",
    scientific: "Hirondellea gigas",
    svgKey: "amphipod",
    glowColor: "#38bdf8",
    size: "3 – 5 cm (Hadal) • Related Alicella gigantea reaches 34 cm (13.4 in)",
    diet: "Sunken wood, plant debris & carrion at the bottom of the Mariana Trench",
    adaptationTitle: "Secrete Aluminum-Hydroxide Gel Shield",
    adaptationEffect:
      "Extracts aluminum ions from trench mud to coat its shell against 1,086 atm dissolution.",
    fact: "Below 4,500 meters, extreme pressure causes calcium carbonate shells to dissolve. Hirondellea gigas survives at 10,928m in Challenger Deep by manufacturing a crystalline aluminum-hydroxide armor gel.",
    source: "WHOI / JAMSTEC",
  },
];
