import { SatellitePreset } from "../types";

// High-quality simulated IR and Ground Truth satellite imagery generated using procedural SVG data URIs
// These provide instant, reliable high-resolution testing for hackathon judges and demo presentations.

export const SATELLITE_PRESETS: SatellitePreset[] = [
  {
    id: "agri_punjab_01",
    title: "Punjab Agricultural Basin & Irrigation Canals",
    category: "Agriculture",
    description: "Near-Infrared (NIR) band satellite capture showing dense wheat fields and irrigation canal networks. High reflectance indicates healthy crop biomass.",
    irImageUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ir_agri" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="40%" stop-color="#cccccc" />
            <stop offset="80%" stop-color="#666666" />
            <stop offset="100%" stop-color="#222222" />
          </radialGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="#999999" stroke-width="1.5" stroke-dasharray="4,2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ir_agri)" />
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.6"/>
        <!-- River/Canal (Dark in NIR due to water absorption) -->
        <path d="M 0 100 Q 150 250, 300 180 T 512 350" fill="none" stroke="#111111" stroke-width="32" opacity="0.9"/>
        <path d="M 0 100 Q 150 250, 300 180 T 512 350" fill="none" stroke="#000000" stroke-width="20"/>
        <!-- Crop circle irrigation -->
        <circle cx="180" cy="380" r="60" fill="#eeeeee" opacity="0.8"/>
        <circle cx="380" cy="100" r="45" fill="#dddddd" opacity="0.7"/>
        <text x="20" y="480" font-family="monospace" font-size="16" fill="#ffffff" opacity="0.7">BAND: NIR (840nm) - RES: 10m</text>
      </svg>
    `),
    gtRgbUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="rgb_agri" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="#2d6a4f" />
            <stop offset="50%" stop-color="#40916c" />
            <stop offset="90%" stop-color="#52b788" />
            <stop offset="100%" stop-color="#1b4332" />
          </radialGradient>
          <pattern id="grid_rgb" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="#74c69d" stroke-width="1" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rgb_agri)" />
        <rect width="100%" height="100%" fill="url(#grid_rgb)"/>
        <!-- Water Canal -->
        <path d="M 0 100 Q 150 250, 300 180 T 512 350" fill="none" stroke="#1d3557" stroke-width="32"/>
        <path d="M 0 100 Q 150 250, 300 180 T 512 350" fill="none" stroke="#457b9d" stroke-width="20"/>
        <!-- Crop circles -->
        <circle cx="180" cy="380" r="60" fill="#95d5b2"/>
        <circle cx="380" cy="100" r="45" fill="#74c69d"/>
        <!-- Bare soil patches -->
        <rect x="320" y="320" width="120" height="80" rx="4" fill="#d8f3dc" opacity="0.5"/>
      </svg>
    `)
  },
  {
    id: "cyclone_bengal_02",
    title: "Bay of Bengal Cyclone Vortex",
    category: "Weather Analysis",
    description: "Thermal Infrared (TIR) imagery of a severe cyclonic storm. Bright white cloud tops indicate freezing temperatures in deep convective eyewalls.",
    irImageUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1a1a1a" />
        <!-- Spiral bands -->
        <g transform="translate(256,256)">
          <path d="M 0 0 Q 80 -120, 200 -50 T 250 180" fill="none" stroke="#cccccc" stroke-width="60" opacity="0.7" stroke-linecap="round"/>
          <path d="M 0 0 Q -100 100, -180 30 T -220 -160" fill="none" stroke="#e6e6e6" stroke-width="70" opacity="0.8" stroke-linecap="round"/>
          <circle cx="0" cy="0" r="140" fill="url(#vortex)" />
          <!-- Eye of cyclone -->
          <circle cx="0" cy="0" r="28" fill="#111111" stroke="#ffffff" stroke-width="4"/>
        </g>
        <defs>
          <radialGradient id="vortex">
            <stop offset="0%" stop-color="#000000"/>
            <stop offset="25%" stop-color="#ffffff"/>
            <stop offset="70%" stop-color="#999999"/>
            <stop offset="100%" stop-color="#1a1a1a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <text x="20" y="480" font-family="monospace" font-size="16" fill="#ffffff" opacity="0.7">INSAT-3D TIR (10.8Âµm) - CYCLONE EYE</text>
      </svg>
    `),
    gtRgbUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <!-- Ocean Background -->
        <rect width="100%" height="100%" fill="#0a2f5c" />
        <!-- Deep water currents -->
        <circle cx="100" cy="400" r="150" fill="#0d3b70" opacity="0.6"/>
        <!-- Spiral clouds in crisp white & cyan shadow -->
        <g transform="translate(256,256)">
          <path d="M 0 0 Q 80 -120, 200 -50 T 250 180" fill="none" stroke="#e0f2fe" stroke-width="65" opacity="0.85" stroke-linecap="round"/>
          <path d="M 0 0 Q -100 100, -180 30 T -220 -160" fill="none" stroke="#ffffff" stroke-width="75" opacity="0.95" stroke-linecap="round"/>
          <circle cx="0" cy="0" r="130" fill="#f0f9ff" opacity="0.9"/>
          <!-- Eye -->
          <circle cx="0" cy="0" r="26" fill="#071e3d" stroke="#bae6fd" stroke-width="3"/>
        </g>
      </svg>
    `)
  },
  {
    id: "fire_uttarakhand_03",
    title: "Himalayan Forest Fire Thermal Anomaly",
    category: "Forest Fire",
    description: "Mid-Wave Infrared (MWIR) satellite detection of active wildfire fronts in pine forests. Extreme saturation points indicate active combustion.",
    irImageUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <!-- Forest terrain in IR -->
        <rect width="100%" height="100%" fill="#333333" />
        <!-- Ridges -->
        <path d="M 0 200 L 150 120 L 320 220 L 512 140 L 512 512 L 0 512 Z" fill="#444444"/>
        <path d="M 0 350 L 200 280 L 400 380 L 512 300 L 512 512 L 0 512 Z" fill="#555555"/>
        <!-- Fire hotspots (Super bright white/gray in uncolorized IR) -->
        <circle cx="280" cy="240" r="35" fill="#ffffff" />
        <circle cx="320" cy="210" r="25" fill="#eeeeee" />
        <circle cx="230" cy="260" r="20" fill="#dddddd" />
        <!-- Smoke plume -->
        <path d="M 280 240 Q 380 150, 480 40" fill="none" stroke="#999999" stroke-width="50" opacity="0.6" stroke-linecap="round"/>
        <text x="20" y="480" font-family="monospace" font-size="16" fill="#ffffff" opacity="0.7">SENSOR: MWIR (3.9Âµm) - THERMAL ALERT</text>
      </svg>
    `),
    gtRgbUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <!-- Lush mountain forest -->
        <rect width="100%" height="100%" fill="#1e3f20" />
        <path d="M 0 200 L 150 120 L 320 220 L 512 140 L 512 512 L 0 512 Z" fill="#2a522b"/>
        <path d="M 0 350 L 200 280 L 400 380 L 512 300 L 512 512 L 0 512 Z" fill="#346235"/>
        <!-- Fire hotspots in glowing orange/red -->
        <circle cx="280" cy="240" r="38" fill="#ff4500" opacity="0.9"/>
        <circle cx="280" cy="240" r="20" fill="#ffd700" />
        <circle cx="320" cy="210" r="25" fill="#e63946" />
        <circle cx="230" cy="260" r="22" fill="#f77f00" />
        <!-- Gray smoke plume -->
        <path d="M 280 240 Q 380 150, 480 40" fill="none" stroke="#ced4da" stroke-width="55" opacity="0.75" stroke-linecap="round"/>
      </svg>
    `)
  },
  {
    id: "defense_border_04",
    title: "High-Altitude Airbase & Airstrip Surveillance",
    category: "Defense",
    description: "High-resolution Synthetic Aperture Radar (SAR) / Thermal infrared reconnaissance capture of military runway infrastructure and hangars.",
    irImageUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#2b2b2b" />
        <!-- Runway (Dark/smooth tarmac) -->
        <polygon points="80,450 140,450 420,60 360,60" fill="#111111" stroke="#555555" stroke-width="3"/>
        <!-- Taxiway -->
        <path d="M 250 250 L 350 320 L 420 230" fill="none" stroke="#1c1c1c" stroke-width="24"/>
        <!-- Hangars (Bright metallic thermal reflection) -->
        <rect x="360" y="300" width="50" height="35" fill="#f0f0f0" />
        <rect x="420" y="240" width="50" height="35" fill="#e0e0e0" />
        <!-- Aircraft thermal footprint -->
        <circle cx="200" cy="300" r="12" fill="#ffffff"/>
        <text x="20" y="480" font-family="monospace" font-size="16" fill="#ffffff" opacity="0.7">ISRO CARTOSAT / RISAT-2B RECON</text>
      </svg>
    `),
    gtRgbUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <!-- Arid desert terrain -->
        <rect width="100%" height="100%" fill="#8d775f" />
        <!-- Asphalt runway -->
        <polygon points="80,450 140,450 420,60 360,60" fill="#343a40"/>
        <line x1="110" y1="450" x2="390" y2="60" stroke="#ffffff" stroke-width="3" stroke-dasharray="15,15"/>
        <!-- Taxiways -->
        <path d="M 250 250 L 350 320 L 420 230" fill="none" stroke="#495057" stroke-width="24"/>
        <!-- Camouflaged green hangars -->
        <rect x="360" y="300" width="50" height="35" fill="#4a5d4e" stroke="#2f3e33" stroke-width="2"/>
        <rect x="420" y="240" width="50" height="35" fill="#4a5d4e" stroke="#2f3e33" stroke-width="2"/>
        <!-- Jet fighter silver body -->
        <polygon points="200,285 208,310 192,310" fill="#adb5bd"/>
      </svg>
    `)
  },
  {
    id: "landcover_urban_05",
    title: "Coastal Metropolitan Land Cover Mapping",
    category: "Land Cover",
    description: "Multispectral infrared capture separating dense urban concrete heat islands from coastal wetlands and mangrove sanctuaries.",
    irImageUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <!-- Land vs Sea -->
        <rect width="100%" height="100%" fill="#151515" />
        <path d="M 0 0 L 350 0 Q 300 250, 400 512 L 0 512 Z" fill="#666666" />
        <!-- Urban heat island grid (Bright thermal emitters) -->
        <g fill="#cccccc">
          <rect x="40" y="60" width="30" height="30" /><rect x="80" y="60" width="30" height="30" /><rect x="120" y="60" width="30" height="30" />
          <rect x="40" y="100" width="30" height="30" /><rect x="80" y="100" width="40" height="40" /><rect x="130" y="100" width="30" height="30" />
          <rect x="50" y="150" width="50" height="30" /><rect x="110" y="150" width="30" height="50" />
        </g>
        <!-- Park/Mangrove inside city -->
        <circle cx="220" cy="220" r="70" fill="#999999" />
        <text x="20" y="480" font-family="monospace" font-size="16" fill="#ffffff" opacity="0.7">RESOURCESAT LISS-IV LAND COVER</text>
      </svg>
    `),
    gtRgbUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <!-- Deep Blue Bay Water -->
        <rect width="100%" height="100%" fill="#0284c7" />
        <!-- Warm earth coastal land -->
        <path d="M 0 0 L 350 0 Q 300 250, 400 512 L 0 512 Z" fill="#e7e5e4" />
        <!-- City rooftops (Gray/red terracotta/white) -->
        <g stroke="#a8a29e" stroke-width="1">
          <rect x="40" y="60" width="30" height="30" fill="#f5f5f4"/><rect x="80" y="60" width="30" height="30" fill="#ef4444"/><rect x="120" y="60" width="30" height="30" fill="#d6d3d1"/>
          <rect x="40" y="100" width="30" height="30" fill="#94a3b8"/><rect x="80" y="100" width="40" height="40" fill="#cbd5e1"/><rect x="130" y="100" width="30" height="30" fill="#f87171"/>
          <rect x="50" y="150" width="50" height="30" fill="#e2e8f0"/><rect x="110" y="150" width="30" height="50" fill="#64748b"/>
        </g>
        <!-- Central Green Park -->
        <circle cx="220" cy="220" r="70" fill="#22c55e" opacity="0.85"/>
      </svg>
    `)
  }
];
