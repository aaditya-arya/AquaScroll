import { CREATURE_SVGS } from "./creatures.js";

let instance = 0;
const svg = (content, viewBox = "0 0 420 280") =>
  `<svg viewBox="${viewBox}" aria-hidden="true" focusable="false" fill="none">${content}</svg>`;
const eye = (x, y, r = 5) =>
  `<circle cx="${x}" cy="${y}" r="${r + 3}" fill="#d9e9dc"/><circle cx="${x}" cy="${y}" r="${r}" fill="#092131"/><circle cx="${x + 1}" cy="${y - 1}" r="1.5" fill="white"/>`;
const dots = (points, color = "#bdf4e0", r = 2) =>
  points
    .map(
      ([x, y]) =>
        `<circle class="light-organ" cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`,
    )
    .join("");

function fish(bodyColor, teeth = false, long = false) {
  return `<path d="M322 141 396 103 379 145 401 175 324 155" fill="${bodyColor}"/>
  <path d="M55 133Q81 70 183 93L236 73 227 104Q281 109 336 144 277 184 188 187 83 182 55 151Z" fill="${bodyColor}" stroke="#c4dae440" stroke-width="1.3"/>
  <path d="m211 168 44 48-4-49M110 171q40 8 72-3" fill="${bodyColor}" stroke="#b3c7d440"/>
  <path d="M72 147q36 16 69 4" stroke="#071b2e" stroke-width="3" stroke-linecap="round"/>
  ${eye(93, 128, 6)}<path d="M147 116q-14 20-4 42M155 119q-12 19-3 37" stroke="#d7ecf35c" stroke-width="2"/>
  ${teeth ? `<g class="jaw" fill="#f3eadc"><path d="m79 150 8 30 8-28 11 23 6-25 12 17 5-15"/>${long ? '<path d="m86 150 5 55 10-52m9-2 5 46 10-46"/>' : ""}</g>` : ""}`;
}

const extra = {
  coral: () =>
    svg(
      `<g stroke="#dcae82" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M203 250V108m0 72-65-43-25-64m26 65-44-4m109 33 66-41 21-66m-26 74 48-4M203 125l-29-35-4-48m30 68 38-26 3-37m-121 52-37-25m213 6 26-28"/><path d="m201 231-75-32-31-41m109 58 86-38 32-25m-149 60-13-31"/></g><g fill="#fbecda">${[
        [170, 41],
        [240, 47],
        [113, 73],
        [81, 73],
        [95, 131],
        [291, 59],
        [321, 51],
        [315, 129],
        [95, 157],
        [321, 152],
      ]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5"/>`)
        .join("")}</g>`,
    ),
  seadragon: () =>
    svg(
      `<path d="M218 64q-48 2-39 40 6 26 35 42 49 35 12 72-24 21-36 0-8-15 11-20" stroke="#b8bc7d" stroke-width="20" stroke-linecap="round"/><path d="m218 65 49 12-2 12-47-4" fill="#cecf95"/>${eye(215, 67, 4)}<g fill="#b5c684" stroke="#c5d29a" stroke-width="1.2"><path d="m184 88-49-23 9 35 38 13m-1 20-44 11 24 28 39-24m17 10 41-41 8 38-31 19m-2 22 47-3-15 35-38-5m-9-9-52-3 15 31 38-8m-7-142-18-35 32 7 4 32"/></g><path d="m177 109 37 22m-19 19 31 22" stroke="#ebe0a7" stroke-width="2"/>`,
    ),
  manta: () =>
    svg(
      `<path class="fin-left" d="M197 102Q135 66 57 29q24 106 114 130" fill="#284f68" stroke="#7dabb655"/><path class="fin-right" d="M218 102Q290 60 366 34q-17 105-117 128" fill="#284f68" stroke="#7dabb655"/><path d="M175 101q39-25 73 4l9 51-39 45-50-42z" fill="#365e73"/><path d="m185 103-20-25 2 32m68-7 22-24-4 34" stroke="#b1d5d0" stroke-width="10" stroke-linecap="round"/><path d="M218 197q0 40 17 64" stroke="#6d929e" stroke-width="3"/><path d="M181 141q32 13 63 0" stroke="#a6c8ca" stroke-width="2"/>${eye(180, 118, 3)}${eye(245, 118, 3)}`,
    ),
  greenland: () =>
    svg(
      `<path d="M338 147 395 91 385 151 403 180 332 164" fill="#688791"/><path d="M26 132Q83 83 164 111l25-45 32 50q63 2 130 35-84 40-218 31-71-3-107-31z" fill="#6d8993" stroke="#a8bec150"/><path d="m180 165 43 44-6-46" fill="#50717c"/><path d="M38 153q27 10 54 0" stroke="#263f50" stroke-width="2"/>${eye(60, 133, 3)}<g stroke="#324e60" stroke-width="3"><path d="m111 125-8 29m18-27-8 29m18-26-7 26m17-24-7 24m17-21-6 23"/></g><g fill="#afbec050">${[
        [150, 145],
        [170, 130],
        [226, 141],
        [257, 148],
        [190, 168],
        [130, 163],
        [293, 147],
      ]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`)
        .join("")}</g>`,
    ),
  viperfish: () =>
    svg(
      `${fish("#739cab", true, true)}<path d="M201 95q-4-66-67-57" stroke="#a6becb" stroke-width="2"/><circle class="light-organ" cx="133" cy="38" r="5" fill="#b9f4ec"/>${dots(
        [
          [163, 176],
          [183, 178],
          [203, 178],
          [223, 175],
          [243, 171],
          [263, 165],
          [283, 158],
        ],
      )}`,
    ),
  fangtooth: () =>
    svg(
      `<path d="m282 142 95-41-9 52 22 45-103-32" fill="#74625e"/><path d="M74 90q78-57 159 14l72 37-40 54-144 3-52-34z" fill="#a08978" stroke="#d0c0a0" stroke-width="1"/><path d="M77 141q87 44 153 12l-26 43-80-1-49-31" fill="#1c2331"/><g class="jaw" fill="#f0dfbc"><path d="m102 148 12 48 8-44 13 35 10-31m30 36 13-59 11 57m9-11 10-41 6 34"/></g><path d="m115 94 26 26 30-14 27 27" stroke="#d0b895" stroke-width="2"/>${eye(103, 119, 5)}<path d="m226 170 33 45 3-39" fill="#78665d"/>`,
    ),
  ghostshark: () =>
    svg(
      `<path d="M38 130Q79 74 168 103l45-59 11 72q59 18 101 45 43 32 79 4-17 49-75 19l-76-28q-102 71-181 18z" fill="#a1b9c7" stroke="#d9e9e5" stroke-width="1"/><path class="fin-left" d="m126 143 16 83 61-55" fill="#6e96af"/><path d="m88 173 36 23 12-19" fill="#7d9db0"/><path d="M56 164q21 7 32-6" stroke="#455f76" stroke-width="2"/>${eye(76, 124, 9)}<path d="m121 120-10 24" stroke="#546e87" stroke-width="3"/><path d="m204 92 6-54" stroke="#d3dede" stroke-width="2"/>`,
    ),
  dragonfish: () =>
    svg(
      `${fish("#234053", true)}<path d="M74 157q-5 63 46 46" stroke="#7eb2c3" stroke-width="2"/><circle class="light-organ" cx="123" cy="202" r="6" fill="#b8f3e1"/>${dots(
        [
          [150, 172],
          [169, 179],
          [189, 180],
          [209, 180],
          [229, 176],
          [249, 170],
          [269, 164],
          [289, 155],
        ],
      )}`,
    ),
  gulper: () =>
    svg(
      `<path d="M157 126q71-33 133 12 30 23 61 36 37 17 48-6-4 38-49 26l-91-29-95-9" fill="#51647f"/><path d="M44 65q101-7 149 50l-22 49-105-18z" fill="#697e95"/><path class="jaw" d="m51 112 113 41 16-18q-13 101-100 76z" fill="#1d304b" stroke="#a2b1c6" stroke-width="2"/><path d="m53 115 114 38" stroke="#c6cfdd" stroke-width="3"/>${eye(73, 91, 3)}<circle class="light-organ" cx="398" cy="168" r="4" fill="#f4b4b4"/>`,
    ),
  isopod: () =>
    svg(
      `<g transform="rotate(-15 210 140)"><ellipse cx="212" cy="143" rx="105" ry="66" fill="#9e94a6" stroke="#dac5d2" stroke-width="2"/>${[145, 164, 185, 206, 227, 248, 269].map((x, i) => `<path d="M${x} 91q-16 50 0 104" stroke="#dac5d2" stroke-width="9" fill="none"/><path d="m${x} 185 ${-15 + i * 2} 35 12 7" stroke="#b2a1b4" stroke-width="6" stroke-linejoin="round"/><path d="m${x} 105 -16-27 10-17" stroke="#b2a1b4" stroke-width="5" stroke-linejoin="round"/>`).join("")}<path d="M131 116q-59-47-71-16m76 34q-58-15-77 7" stroke="#c7b4c8" stroke-width="3"/><ellipse cx="127" cy="139" rx="25" ry="31" fill="#b2a0b5"/>${eye(117, 125, 5)}<path d="m306 118 26 22-29 27" fill="#c1adc1"/></g>`,
    ),
  strawberry: () =>
    svg(
      `<path d="M195 80q-50-31-68 14l31 33m55-42q57-28 61 20l-39 26" fill="#ad5776"/><path d="M188 43q-40 40-33 98l43 39 39-40q-1-62-49-97" fill="#d78599" stroke="#f5bac0"/>${eye(180, 131, 15)}${eye(219, 140, 5)}<g class="tendrils" stroke="#df97ad" stroke-width="7" stroke-linecap="round"><path d="M179 162q-63 60-87 37m96-33q-27 84-56 65m66-61q5 74 28 70m-15-77q39 70 62 40m-54-40q76 37 85 7"/></g>${dots(
        [
          [185, 76],
          [174, 93],
          [204, 98],
          [195, 111],
          [170, 115],
          [214, 116],
          [181, 151],
          [200, 151],
        ],
        "#ffd8cd",
        2.5,
      )}`,
    ),
  glass: () =>
    svg(
      `<path d="M199 37q-61 44-52 105 10 36 52 41 43-4 53-42 7-65-53-104" fill="#b6deeb25" stroke="#cce9ef" stroke-width="1.5"/><path d="M198 53q-19 54 1 111" stroke="#d6e9df70" stroke-width="2"/><path d="M199 163q-15-40 4-59 20 32-4 59" fill="#d0b4af"/>${eye(167, 155, 11)}${eye(230, 155, 11)}<g class="tendrils" stroke="#b9dbe8" stroke-width="4" stroke-linecap="round"><path d="M177 177q-41 49-73 37m80-32q-11 57-30 58m40-57q2 66 18 58m-7-58q27 59 53 48m-40-55q55 37 81 13"/></g><path d="m155 101-43 21 40 16m94-37 45 22-41 16" fill="#b6deeb35" stroke="#cce9ef90"/>`,
    ),
  flapjack: () =>
    svg(
      `<path class="fin-left" d="M159 114q-82-77-88-15-2 40 75 48" fill="#d78f83"/><path class="fin-right" d="M252 114q80-77 87-14 2 40-74 48" fill="#d78f83"/><path d="M205 68q-67 0-65 80l-32 51q22 31 48-1 31 41 51 4 30 40 53 2 22 23 51-10l-47-50q6-78-59-76" fill="#e5ac98" stroke="#f6cfb1" stroke-width="1"/>${eye(174, 134, 9)}${eye(238, 134, 9)}<path d="M157 173q45 27 90 0" stroke="#c88b81" stroke-width="2"/><g fill="#f6d3b7"><circle cx="155" cy="193" r="3"/><circle cx="185" cy="204" r="3"/><circle cx="230" cy="204" r="3"/><circle cx="262" cy="191" r="3"/></g>`,
    ),
  phantom: () =>
    svg(
      `<g class="tendrils" fill="#a8567e" fill-opacity=".7" stroke="#dca8c450" stroke-width="1"><path d="M150 112q-62 47-28 94t-40 52q66 6 61-56t37-85"/><path d="M183 120q-14 66 12 92t-18 59q68-11 40-69t0-78"/><path d="M218 119q54 52 24 87t27 62q-1-42 7-64t-24-89"/><path d="M245 114q84 27 53 82t26 70q-16-43 5-75t-55-85"/></g><path class="jelly-bell" d="M121 117q-2-86 83-90 83-4 94 82-78 44-177 8" fill="#b27499" stroke="#edb8d0" stroke-width="1.5"/><path d="M146 105q21-62 58-65 48 3 69 54" stroke="#f7d4e535" stroke-width="4"/>`,
    ),
  harp: () =>
    svg(
      `<path d="M207 247V151m-7 91-34 18m42-18 32 18" stroke="#dfd3c0" stroke-width="3"/><path d="M92 146q111 41 238 0" stroke="#e7e3d7" stroke-width="5"/>${[95, 124, 153, 182, 211, 240, 269, 298, 327].map((x, i) => `<path d="M${x} ${146 + Math.sin((i / 8) * Math.PI) * 20}V${45 + Math.abs(i - 4) * 10}" stroke="#e5e5de" stroke-width="3"/><circle cx="${x}" cy="${45 + Math.abs(i - 4) * 10}" r="6" fill="#eee9de"/><path d="m${x - 5} 103 5 4 5-4m-10 20 5 4 5-4" stroke="#f6f1dd" stroke-width="1.5"/>`).join("")}`,
    ),
  seaspider: () =>
    svg(
      `<g stroke="#d0b5a2" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="m186 128-52-69-60 44m116 32-84-2-49 68m129-61-41 55-42 58m93-111 9 57-28 52m34-123 51-69 62 44m-114 32 83-2 50 68m-129-61 42 55 43 58m-96-111-8 57 27 52"/></g><path d="M197 109q19-9 30 8l-6 35-18 1-12-22z" fill="#e6cfb5"/><path d="m211 111-1-40 10-8 2 48" fill="#ddc0a7"/>`,
    ),
  boneworm: () =>
    svg(
      `<path d="M63 220q-22-17-10-30 9-8 22 1l268-6q15-17 27-5 14 15-1 28 13 14-1 25-12 11-27-5l-267 5q-9 14-20 7-11-10 9-20" fill="#a9adb2" stroke="#d1d2cb"/><g stroke="#e6c2b3" stroke-width="4">${[110, 155, 208, 255, 301].map((x) => `<path d="M${x} 208q-15-50 0-83"/>`).join("")}</g><g class="tendrils" stroke="#e58c9e" stroke-width="3" stroke-linecap="round">${[110, 155, 208, 255, 301].map((x, i) => Array.from({ length: 7 }, (_, j) => `<path d="M${x} 130q${(j - 3) * 12} -15 ${(j - 3) * 10} ${-45 - (i % 2) * 20}"/>`).join("")).join("")}</g>`,
    ),
  bigfin: () =>
    svg(
      `<path class="fin-left" d="M197 53q-65-41-62 19 7 39 59 26" fill="#b1a8d180" stroke="#d9d2f3"/><path class="fin-right" d="M221 53q65-41 62 19-7 39-59 26" fill="#b1a8d180" stroke="#d9d2f3"/><path d="M208 20q-24 32-14 85l14 14 17-17q6-51-17-82" fill="#c3bcdd"/>${eye(201, 100, 3)}${eye(218, 100, 3)}<g class="tendrils" stroke="#d9d6e9" stroke-width="1.4">${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `<path d="M${199 + i * 2} 113  ${128 + i * 18} ${143 + Math.abs(i - 4.5) * 2}V${267 - (i % 3) * 9}"/>`).join("")}</g>`,
    ),
};

export function animalArt(key) {
  let markup;
  if (key === "turtle")
    return '<img src="assets/turtle.svg" alt="" loading="lazy" width="380" height="270">';
  if (extra[key]) markup = extra[key]();
  else if (CREATURE_SVGS[key]) markup = CREATURE_SVGS[key]();
  else throw new Error(`Missing animal illustration: ${key}`);
  const prefix = `ocean-${++instance}-`;
  return markup
    .replace(/id="([^"]+)"/g, (_, id) => `id="${prefix}${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${prefix}${id})`)
    .replace("<svg ", '<svg role="presentation" ');
}

export function storyArt(key) {
  if (key === "vents")
    return svg(
      `<g fill="#33414d" stroke="#76848b"><path d="M80 260 91 158 117 144 139 260m38 0 10-161 26-15 25 176m48 0 15-115 26-9 23 124"/></g><g class="vent-plume" stroke="#92a2b540" stroke-width="20" stroke-linecap="round"><path d="M104 140q-30-25 5-62t-9-48m102 49q32-26 2-54m108 108q33-30 3-66"/></g>`,
    );
  if (key === "wreck")
    return svg(
      `<path d="M55 190 100 233h230l50-40-145-15z" fill="#52616a" stroke="#788a8b"/><path d="m95 184 17-43 111 5-3 36m24 2 4-54 68 7 16 49" fill="#63757c"/><path d="m144 144 2-28h23l-1 28m109-12 1-38h17l-1 41M118 159l74 3m64-13 43 4" stroke="#9eafa9" stroke-width="3"/><path d="m35 235 84 4 73-6 110 11 93-6" stroke="#8eaaa7" stroke-width="2"/>`,
    );
  if (key === "whalefall")
    return svg(
      `<path d="M49 174q116 14 294-5" stroke="#b7bbb0" stroke-width="9" stroke-linecap="round"/>${[90, 119, 148, 177, 206, 235, 264].map((x) => `<path d="M${x} 174q-9-58 18-62m-18 62q-10 45 13 48" stroke="#a5aea6" stroke-width="4"/>`).join("")}<path d="m315 174 47-33 33 26-38 27z" fill="#a6afa5"/>`,
    );
  if (key === "trieste")
    return svg(
      `<path d="m70 149 15-42 228 4 30 39-28 22H91z" fill="#b9bbab" stroke="#e0ddc8"/><path d="m112 108 12-34h127l19 35" fill="#617e86"/><circle cx="212" cy="189" r="31" fill="#d3c5a5" stroke="#f4e5c3"/><circle cx="214" cy="190" r="11" fill="#294c60"/><path d="m67 127-24-15v53l28-14m141-75V51h16" stroke="#d0d0b9" stroke-width="8"/>`,
    );
  return "";
}
