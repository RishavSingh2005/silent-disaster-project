/* ─── INLINED DATA ───────────────────────────────────────────────────────────
   All environmental and historical data is here.
   No server, no fetch(), no CORS issues. Works on GitHub Pages as-is.
─────────────────────────────────────────────────────────────────────────── */

const RAINFALL = { regions: {
  Mumbai:      { label:"Mumbai, Maharashtra",   d14:[4.2,6.8,9.1,18.4,22.0,35.6,41.2,38.9,52.3,67.8,74.1,81.5,78.3,92.6], d7:[38.9,52.3,67.8,74.1,81.5,78.3,92.6] },
  Chennai:     { label:"Chennai, Tamil Nadu",   d14:[0.0,0.0,2.1,1.4,3.8,5.2,4.0,6.7,8.9,11.3,9.5,14.2,18.8,22.1],        d7:[6.7,8.9,11.3,9.5,14.2,18.8,22.1]  },
  Patna:       { label:"Patna, Bihar",          d14:[12.3,15.6,18.9,22.4,28.1,31.5,27.8,33.2,41.6,55.9,63.4,72.1,68.5,85.3], d7:[33.2,41.6,55.9,63.4,72.1,68.5,85.3] },
  Guwahati:    { label:"Guwahati, Assam",       d14:[18.5,24.3,31.2,28.6,35.8,42.1,38.7,46.3,52.8,61.4,58.9,71.2,76.8,88.4], d7:[46.3,52.8,61.4,58.9,71.2,76.8,88.4] },
  Hyderabad:   { label:"Hyderabad, Telangana",  d14:[0.0,1.2,0.5,3.4,2.1,4.8,3.2,5.6,7.8,6.4,9.1,8.3,11.5,13.2],           d7:[5.6,7.8,6.4,9.1,8.3,11.5,13.2]  },
  Kolkata:     { label:"Kolkata, West Bengal",  d14:[8.4,11.2,14.7,19.3,23.6,31.2,29.8,38.4,44.7,51.3,58.9,63.2,71.5,79.8], d7:[38.4,44.7,51.3,58.9,63.2,71.5,79.8] },
  Jaipur:      { label:"Jaipur, Rajasthan",     d14:[0.0,0.0,0.0,1.2,0.8,2.4,1.9,3.1,2.7,4.5,3.8,5.2,4.9,6.3],             d7:[3.1,2.7,4.5,3.8,5.2,4.9,6.3]   },
  Bhubaneswar: { label:"Bhubaneswar, Odisha",   d14:[9.2,13.4,17.8,24.5,29.3,36.7,33.1,42.8,49.6,58.3,64.7,71.9,80.2,91.5], d7:[42.8,49.6,58.3,64.7,71.9,80.2,91.5] }
}};

const TEMPERATURE = { regions: {
  Mumbai:      { d14:[29.4,30.1,29.8,30.5,31.2,30.8,29.6,29.2,28.8,28.4,28.1,27.9,27.6,27.3], d7:[29.2,28.8,28.4,28.1,27.9,27.6,27.3] },
  Chennai:     { d14:[32.1,33.4,34.2,33.8,34.5,35.1,34.9,35.6,36.2,35.8,36.4,37.1,36.8,37.4], d7:[35.6,36.2,35.8,36.4,37.1,36.8,37.4] },
  Patna:       { d14:[33.2,34.1,34.8,35.3,34.7,33.9,34.2,33.6,32.8,32.1,31.5,31.2,30.8,30.4], d7:[33.6,32.8,32.1,31.5,31.2,30.8,30.4] },
  Guwahati:    { d14:[30.5,31.2,30.8,31.4,30.9,30.2,29.8,29.4,28.9,28.5,28.2,27.8,27.5,27.1], d7:[29.4,28.9,28.5,28.2,27.8,27.5,27.1] },
  Hyderabad:   { d14:[35.8,36.4,37.1,36.8,37.5,38.2,37.9,38.6,39.1,38.8,39.4,40.1,39.7,40.3], d7:[38.6,39.1,38.8,39.4,40.1,39.7,40.3] },
  Kolkata:     { d14:[31.4,32.1,32.8,33.2,32.7,32.1,31.6,31.2,30.8,30.4,30.1,29.8,29.5,29.2], d7:[31.2,30.8,30.4,30.1,29.8,29.5,29.2] },
  Jaipur:      { d14:[38.4,39.1,39.8,40.3,41.2,40.8,41.5,42.1,41.8,42.4,43.1,42.7,43.4,44.1], d7:[42.1,41.8,42.4,43.1,42.7,43.4,44.1] },
  Bhubaneswar: { d14:[32.8,33.4,34.1,33.7,34.4,33.9,33.2,32.6,32.1,31.8,31.4,31.1,30.8,30.5], d7:[32.6,32.1,31.8,31.4,31.1,30.8,30.5] }
}};

const HISTORY = { regions: {
  Mumbai: { label:"Mumbai, Maharashtra", sensitivity:78, flood_years:[2005,2017,2019,2020,2021], avg_rain_mm:2167, drainage:"Low", river_prox:"High", soil:"Clay-dominant, low permeability", note:"The 2005 deluge (944 mm in 24 h) set the benchmark for infrastructure failure in this city." },
  Chennai:{ label:"Chennai, Tamil Nadu", sensitivity:71, flood_years:[2005,2010,2015,2021], avg_rain_mm:1400, drainage:"Medium-Low", river_prox:"High", soil:"Sandy loam with clay patches", note:"The 2015 floods submerged residential and industrial zones across the city." },
  Patna:{ label:"Patna, Bihar", sensitivity:85, flood_years:[2007,2008,2013,2016,2019,2020], avg_rain_mm:1020, drainage:"Low", river_prox:"Very High", soil:"Deep alluvial, high water retention", note:"Patna sits on the Ganges floodplain." },
  Guwahati:{ label:"Guwahati, Assam", sensitivity:88, flood_years:[2012,2015,2017,2019,2020,2022], avg_rain_mm:1600, drainage:"Very Low", river_prox:"Very High", soil:"Alluvial and laterite mix", note:"Guwahati faces compound flooding from both the Brahmaputra and urban runoff." },
  Hyderabad:{ label:"Hyderabad, Telangana", sensitivity:52, flood_years:[2000,2016,2020], avg_rain_mm:812, drainage:"Medium", river_prox:"Medium", soil:"Black cotton soil", note:"Encroachment on water tanks has increased flood exposure." },
  Kolkata:{ label:"Kolkata, West Bengal", sensitivity:80, flood_years:[2000,2007,2015,2017,2021], avg_rain_mm:1582, drainage:"Low", river_prox:"High", soil:"Deep alluvial", note:"Tidal backflow inhibits gravity drainage." },
  Jaipur:{ label:"Jaipur, Rajasthan", sensitivity:31, flood_years:[2006,2014], avg_rain_mm:590, drainage:"Medium", river_prox:"Low", soil:"Sandy", note:"Occasional extreme events cause localised flooding." },
  Bhubaneswar:{ label:"Bhubaneswar, Odisha", sensitivity:82, flood_years:[2006,2008,2011,2013,2018,2020], avg_rain_mm:1496, drainage:"Low-Medium", river_prox:"High", soil:"Red laterite", note:"Compound cyclone and flood risk." }
}};

/* ─── STATE ───────────────────────────────────────────────────────────────── */
const state = { region: 'Mumbai', days: 7 };

/* ─── NAVIGATION ─────────────────────────────────────────────────────────── */
function showDash() {
  document.getElementById('pg-landing').style.display = 'none';
  document.getElementById('pg-dash').style.display = 'block';
  document.getElementById('d-ts').textContent = new Date().toLocaleString('en-IN');
  update();
}

function showLanding() {
  document.getElementById('pg-dash').style.display = 'none';
  document.getElementById('pg-landing').style.display = 'flex';
}

/* ─── INIT ───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('region-select');
  Object.keys(RAINFALL.regions).forEach(k => {
    const o = document.createElement('option');
    o.value = k;
    o.textContent = RAINFALL.regions[k].label;
    sel.appendChild(o);
  });
});
