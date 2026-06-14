/* ─── RISK ENGINE ────────────────────────────────────────────────────────────
   Pure, rule-based scoring. No ML. No hidden weights.
   Each of the four factors is independently computed and documented.
   Max total: 100 pts. Same inputs → same output, always.
─────────────────────────────────────────────────────────────────────────── */

const RiskEngine = (() => {

  // Factor 1 — Rainfall Acceleration (0–40 pts)
  function fAcceleration(rain) {
    const n = rain.length, mid = Math.floor(n / 2);
    const early  = rain.slice(0, mid).reduce((a,b)=>a+b,0) / mid;
    const recent = rain.slice(mid).reduce((a,b)=>a+b,0) / (n - mid);
    const pct    = early > 0 ? ((recent - early) / early) * 100 : (recent > 0 ? 100 : 0);

    let score, detail;
    if      (pct >= 150) { score=40; detail=`Rainfall has accelerated sharply — recent daily average (${recent.toFixed(1)} mm) is more than 2.5× the earlier average (${early.toFixed(1)} mm). Rapid accumulation of this magnitude is a strong precursor to drainage stress and potential flooding.`; }
    else if (pct >= 80)  { score=28; detail=`Rainfall is rising at a notable rate. Recent average (${recent.toFixed(1)} mm/day) is ~${Math.round(pct)}% above the earlier window average (${early.toFixed(1)} mm/day). Drainage systems may be approaching capacity.`; }
    else if (pct >= 30)  { score=15; detail=`A moderate upward trend in rainfall is present. Recent daily average: ${recent.toFixed(1)} mm vs. earlier: ${early.toFixed(1)} mm. The situation warrants monitoring over the next 48 hours.`; }
    else if (pct > 0)    { score=6;  detail=`Rainfall is marginally higher recently (${recent.toFixed(1)} mm/day) versus earlier (${early.toFixed(1)} mm/day). The increase is not alarming at current rates.`; }
    else                 { score=0;  detail=`Rainfall is stable or declining over this window — ${recent.toFixed(1)} mm/day recently versus ${early.toFixed(1)} mm/day earlier. No acceleration signal present.`; }

    return { score, max:40, detail, label:"Rainfall Acceleration", ico:"↑", early, recent, pct };
  }

  // Factor 2 — Recent Rainfall Volume (0–30 pts)
  function fVolume(rain) {
    const r3 = rain.slice(-3).reduce((a,b)=>a+b,0) / 3;

    let score, detail;
    if      (r3 >= 70) { score=30; detail=`3-day trailing average is ${r3.toFixed(1)} mm/day — a high-volume event.`; }
    else if (r3 >= 40) { score=20; detail=`Recent 3-day average of ${r3.toFixed(1)} mm/day indicates heavy sustained rainfall.`; }
    else if (r3 >= 20) { score=10; detail=`Moderate sustained rainfall averaging ${r3.toFixed(1)} mm/day.`; }
    else if (r3 >= 8)  { score=4;  detail=`Light to moderate rainfall (${r3.toFixed(1)} mm/day).`; }
    else               { score=0;  detail=`Recent rainfall is low (${r3.toFixed(1)} mm/day).`; }

    return { score, max:30, detail, label:"Recent Rainfall Volume", ico:"▪", r3 };
  }

  // Factor 3 — Historical Sensitivity (0–20 pts)
  function fHistory(sensitivity) {
    const score = Math.round((sensitivity / 100) * 20);

    let detail;
    if      (sensitivity >= 80) { detail=`Very high historical sensitivity (${sensitivity}/100).`; }
    else if (sensitivity >= 60) { detail=`Moderate-to-high historical sensitivity (${sensitivity}/100).`; }
    else if (sensitivity >= 40) { detail=`Moderate historical sensitivity (${sensitivity}/100).`; }
    else                        { detail=`Low historical sensitivity (${sensitivity}/100).`; }

    return { score, max:20, detail, label:"Historical Sensitivity", ico:"◎" };
  }

  // Factor 4 — Heat–Rain Interaction (0–10 pts)
  function fHeatRain(temp, rain) {
    const t3 = temp.slice(-3).reduce((a,b)=>a+b,0) / 3;
    const r3 = rain.slice(-3).reduce((a,b)=>a+b,0) / 3;
    const hot = t3 >= 36, heavy = r3 >= 30, mod = r3 >= 15;

    let score, detail;
    if (hot && heavy)   { score=10; detail=`High average temperature (${t3.toFixed(1)}°C) combined with heavy rainfall.`; }
    else if (hot && mod){ score=5;  detail=`Elevated temperatures (${t3.toFixed(1)}°C) with moderate rainfall.`; }
    else                { score=0;  detail=`Temperature–rainfall interaction is not significant.`; }

    return { score, max:10, detail, label:"Heat–Rain Interaction", ico:"◈", t3, r3 };
  }

  function calculate(rain, temp, sensitivity) {
    const factors = [
      fAcceleration(rain),
      fVolume(rain),
      fHistory(sensitivity),
      fHeatRain(temp, rain)
    ];

    const total = Math.min(100, factors.reduce((s,f)=>s+f.score, 0));

    let level, desc;
    if      (total >= 71) { level='High';   desc="Environmental conditions indicate elevated flood likelihood if rainfall continues."; }
    else if (total >= 41) { level='Medium'; desc="Conditions are trending toward elevated risk. Close monitoring advised."; }
    else                  { level='Low';    desc="Current conditions do not indicate a near-term flood threat."; }

    return { total, level, desc, factors };
  }

  return { calculate };
})();
