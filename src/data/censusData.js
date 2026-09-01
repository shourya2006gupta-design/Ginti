/**
 * Census state-wise timeline data.
 *
 * IMPORTANT: This is ILLUSTRATIVE / DEMO data created for a hackathon prototype.
 * Official Census 2027 dates have not been announced as of this build date.
 * When official dates are published, replace this data file.
 */

export const LANGUAGES = [
  // Top 5 most spoken languages in India (hard‑coded)
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },

  // All scheduled regional languages of India (ISO‑639‑1 where available)
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'as', label: 'Assamese', nativeLabel: 'অসমীয়া' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'Malayalam', nativeLabel: 'മലയാളം' },
  { code: 'or', label: 'Odia', nativeLabel: 'ଓଡ଼ିଆ' },
  { code: 'pa', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' },
  { code: 'sa', label: 'Sanskrit', nativeLabel: 'संस्कृत' },
  { code: 'ur', label: 'Urdu', nativeLabel: 'اردو' },
  { code: 'ma', label: 'Manipuri (Meitei)', nativeLabel: 'মীৎই লোন্' },
  { code: 'sat', label: 'Santali', nativeLabel: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  { code: 'ks', label: 'Kashmiri', nativeLabel: 'کٲشُر' },
  { code: 'kok', label: 'Konkani', nativeLabel: 'कोंकणी' },
  { code: 'doi', label: 'Dogri', nativeLabel: 'डोगरी' },
  { code: 'si', label: 'Sinhalese', nativeLabel: 'සිංහල' },
  { code: 'ne', label: 'Nepali', nativeLabel: 'नेपाली' },
  { code: 'mni', label: 'Meitei (Manipuri)', nativeLabel: 'মৈতি' },
  { code: 'bo', label: 'Bodo', nativeLabel: 'बड़ो' },
];

export const TOP_LANGUAGES = LANGUAGES.slice(0, 5);

export const STATES = [
  { id: 'AN', name: 'Andaman & Nicobar Islands' },
  { id: 'AP', name: 'Andhra Pradesh' },
  { id: 'AR', name: 'Arunachal Pradesh' },
  { id: 'AS', name: 'Assam' },
  { id: 'BR', name: 'Bihar' },
  { id: 'CH', name: 'Chandigarh' },
  { id: 'CG', name: 'Chhattisgarh' },
  { id: 'DD', name: 'Dadra & Nagar Haveli and Daman & Diu' },
  { id: 'DL', name: 'Delhi' },
  { id: 'GA', name: 'Goa' },
  { id: 'GJ', name: 'Gujarat' },
  { id: 'HR', name: 'Haryana' },
  { id: 'HP', name: 'Himachal Pradesh' },
  { id: 'JK', name: 'Jammu & Kashmir' },
  { id: 'JH', name: 'Jharkhand' },
  { id: 'KA', name: 'Karnataka' },
  { id: 'KL', name: 'Kerala' },
  { id: 'LA', name: 'Ladakh' },
  { id: 'LD', name: 'Lakshadweep' },
  { id: 'MP', name: 'Madhya Pradesh' },
  { id: 'MH', name: 'Maharashtra' },
  { id: 'MN', name: 'Manipur' },
  { id: 'ML', name: 'Meghalaya' },
  { id: 'MZ', name: 'Mizoram' },
  { id: 'NL', name: 'Nagaland' },
  { id: 'OD', name: 'Odisha' },
  { id: 'PY', name: 'Puducherry' },
  { id: 'PB', name: 'Punjab' },
  { id: 'RJ', name: 'Rajasthan' },
  { id: 'SK', name: 'Sikkim' },
  { id: 'TN', name: 'Tamil Nadu' },
  { id: 'TS', name: 'Telangana' },
  { id: 'TR', name: 'Tripura' },
  { id: 'UP', name: 'Uttar Pradesh' },
  { id: 'UK', name: 'Uttarakhand' },
  { id: 'WB', name: 'West Bengal' },
];

export const STATE_TIMELINE = {
  'MH': {
    phase1: { start: '2027-04-01', end: '2027-05-15' },
    phase2: { start: '2027-07-01', end: '2027-08-15' },
  },
  'DL': {
    phase1: { start: '2027-04-01', end: '2027-05-15' },
    phase2: { start: '2027-07-01', end: '2027-08-15' },
  },
  'KA': {
    phase1: { start: '2027-04-15', end: '2027-05-30' },
    phase2: { start: '2027-07-15', end: '2027-08-30' },
  },
  'TN': {
    phase1: { start: '2027-04-15', end: '2027-05-30' },
    phase2: { start: '2027-07-15', end: '2027-08-30' },
  },
  'UP': {
    phase1: { start: '2027-05-01', end: '2027-06-15' },
    phase2: { start: '2027-08-01', end: '2027-09-15' },
  },
  'WB': {
    phase1: { start: '2027-05-01', end: '2027-06-15' },
    phase2: { start: '2027-08-01', end: '2027-09-15' },
  },
  'GJ': {
    phase1: { start: '2027-04-01', end: '2027-05-15' },
    phase2: { start: '2027-07-01', end: '2027-08-15' },
  },
  'RJ': {
    phase1: { start: '2027-04-15', end: '2027-05-30' },
    phase2: { start: '2027-07-15', end: '2027-08-30' },
  },
  'KL': {
    phase1: { start: '2027-04-01', end: '2027-05-15' },
    phase2: { start: '2027-07-01', end: '2027-08-15' },
  },
  'AP': {
    phase1: { start: '2027-04-15', end: '2027-05-30' },
    phase2: { start: '2027-07-15', end: '2027-08-30' },
  },
  'TS': {
    phase1: { start: '2027-04-15', end: '2027-05-30' },
    phase2: { start: '2027-07-15', end: '2027-08-30' },
  },
  'MP': {
    phase1: { start: '2027-05-01', end: '2027-06-15' },
    phase2: { start: '2027-08-01', end: '2027-09-15' },
  },
  'BR': {
    phase1: { start: '2027-05-01', end: '2027-06-15' },
    phase2: { start: '2027-08-01', end: '2027-09-15' },
  },
  'PB': {
    phase1: { start: '2027-04-01', end: '2027-05-15' },
    phase2: { start: '2027-07-01', end: '2027-08-15' },
  },
  'HR': {
    phase1: { start: '2027-04-01', end: '2027-05-15' },
    phase2: { start: '2027-07-01', end: '2027-08-15' },
  },
  'OD': {
    phase1: { start: '2027-05-01', end: '2027-06-15' },
    phase2: { start: '2027-08-01', end: '2027-09-15' },
  },
  'AS': {
    phase1: { start: '2027-05-15', end: '2027-06-30' },
    phase2: { start: '2027-08-15', end: '2027-09-30' },
  },
  'JH': {
    phase1: { start: '2027-05-01', end: '2027-06-15' },
    phase2: { start: '2027-08-01', end: '2027-09-15' },
  },
  'CG': {
    phase1: { start: '2027-05-01', end: '2027-06-15' },
    phase2: { start: '2027-08-01', end: '2027-09-15' },
  },
  'UK': {
    phase1: { start: '2027-04-15', end: '2027-05-30' },
    phase2: { start: '2027-07-15', end: '2027-08-30' },
  },
  'HP': {
    phase1: { start: '2027-04-15', end: '2027-05-30' },
    phase2: { start: '2027-07-15', end: '2027-08-30' },
  },
  'JK': {
    phase1: { start: '2027-05-15', end: '2027-06-30' },
    phase2: { start: '2027-08-15', end: '2027-09-30' },
  },
  'GA': {
    phase1: { start: '2027-04-01', end: '2027-05-15' },
    phase2: { start: '2027-07-01', end: '2027-08-15' },
  },
};

const DEFAULT_TIMELINE = {
  phase1: { start: '2027-04-01', end: '2027-05-15' },
  phase2: { start: '2027-07-01', end: '2027-08-15' },
};

export function getStateTimeline(stateId) {
  return STATE_TIMELINE[stateId] || DEFAULT_TIMELINE;
}

export function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
