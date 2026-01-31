/* =========================================
   DATABASE: DORK CATEGORIES (ULTIMATE EDITION)
   ========================================= */
const dorksData = [
  // ======================================================
  // TUS 13 CATEGORÍAS ORIGINALES (MODO: SEGURIDAD)
  // ======================================================
  {
    type: "sec",
    category: "Files & Documents",
    icon: "fa-file-alt",
    items: [
      { label: "Public PDFs", dork: "filetype:pdf" },
      { label: "Excel Data", dork: "filetype:xls OR filetype:xlsx OR filetype:csv" },
      { label: "Word Docs", dork: "filetype:doc OR filetype:docx" },
      { label: "Text / Notes", dork: "filetype:txt OR filetype:rtf OR filetype:md" },
      { label: "Presentations", dork: "filetype:ppt OR filetype:pptx" },
      { label: "Spreadsheets (ODS)", dork: "filetype:ods" },
      { label: "Archives", dork: "filetype:zip OR filetype:rar OR filetype:tar OR filetype:gz" }
    ]
  },
  {
    type: "sec",
    category: "Server & Config",
    icon: "fa-server",
    items: [
      { label: "Directory Listing", dork: "intitle:\"index of\"" },
      { label: "Config Files", dork: "filetype:xml OR filetype:conf OR filetype:cnf OR filetype:ini OR filetype:env" },
      { label: "Log Files", dork: "filetype:log OR filetype:err" },
      { label: "Apache / Nginx Status", dork: "inurl:server-status OR intitle:\"nginx status\"" },
      { label: "PHP Info", dork: "inurl:phpinfo.php OR intitle:phpinfo" },
      { label: "Docker Configs", dork: "filename:docker-compose OR filetype:yml intext:docker" },
      { label: "Kubernetes Configs", dork: "filetype:yaml intext:apiVersion" }
    ]
  },
  {
    type: "sec",
    category: "Bug Bounty & Vulnerabilities",
    icon: "fa-bug",
    items: [
      { label: "Open Redirect", dork: "inurl:redir OR inurl:redirect= OR inurl:return= OR inurl:next=" },
      { label: "XSS Parameters", dork: "inurl:q= OR inurl:search= OR inurl:s= OR inurl:lang=" },
      { label: "SQL Injection Params", dork: "inurl:id= OR inurl:cat= OR inurl:pid= OR inurl:sid=" },
      { label: "File Upload Forms", dork: "inurl:upload OR inurl:uploader" },
      { label: "Admin Panels", dork: "inurl:admin OR inurl:login OR inurl:dashboard" },
      { label: "SQL Errors", dork: "intext:\"sql syntax\" OR intext:\"mysql_fetch\" OR intext:\"Fatal error\"" },
      { label: "LFI / RFI", dork: "inurl:file= OR inurl:path= OR inurl:include=" },
      { label: "XXE Targets", dork: "filetype:xml intext:DOCTYPE" }
    ]
  },
  {
    type: "sec",
    category: "Cloud & DevOps",
    icon: "fa-cloud",
    items: [
      { label: "AWS S3 Buckets", dork: "intext:\"s3.amazonaws.com\"" },
      { label: "Azure Blob Storage", dork: "inurl:blob.core.windows.net" },
      { label: "Google Cloud Storage", dork: "inurl:storage.googleapis.com" },
      { label: "Git Repositories", dork: "inurl:/.git OR inurl:.git/config" },
      { label: "Environment Files", dork: "filename:.env" },
      { label: "Jenkins Panels", dork: "intitle:\"Dashboard [Jenkins]\"" },
      { label: "Terraform Files", dork: "filetype:tf OR filetype:tfstate" }
    ]
  },
  {
    type: "sec",
    category: "Databases & Backups",
    icon: "fa-database",
    items: [
      { label: "SQL Dumps", dork: "filetype:sql intext:\"CREATE TABLE\"" },
      { label: "Database Backups", dork: "filetype:bak OR filetype:dump" },
      { label: "SQLite DBs", dork: "filetype:sqlite OR filetype:db" },
      { label: "MongoDB Dumps", dork: "filetype:json intext:mongodb" },
      { label: "Redis Dumps", dork: "filetype:rdb" },
      { label: "cPanel Backups", dork: "filetype:tar.gz inurl:cpanel" }
    ]
  },
  {
    type: "sec",
    category: "Credentials & Secrets",
    icon: "fa-key",
    items: [
      { label: "API Keys", dork: "intext:\"api_key\" OR intext:\"client_secret\"" },
      { label: "AWS Keys", dork: "intext:\"AKIA\" OR intext:\"aws_access_key_id\"" },
      { label: "Private SSH Keys", dork: "intext:\"BEGIN RSA PRIVATE KEY\"" },
      { label: "Passwords Files", dork: "filetype:txt intext:password" },
      { label: "JWT Tokens", dork: "intext:\"eyJ\" OR intext:\"Bearer eyJ\"" },
      { label: "OAuth Tokens", dork: "intext:\"access_token\"" }
    ]
  },
  {
    type: "sec",
    category: "Source Code & Leaks",
    icon: "fa-code",
    items: [
      { label: "Exposed Source Code", dork: "filetype:php OR filetype:js OR filetype:py OR filetype:java" },
      { label: "Backup Source Files", dork: "filetype:old OR filetype:bak OR filetype:swp" },
      { label: "Secrets in JS", dork: "filetype:js intext:key OR intext:token" },
      { label: "Hardcoded Passwords", dork: "intext:\"password =\"" }
    ]
  },
  {
    type: "sec",
    category: "Debug & Dev Environments",
    icon: "fa-laptop-code",
    items: [
      { label: "Debug Enabled", dork: "APP_DEBUG=true OR debug=true" },
      { label: "Test / Dev Sites", dork: "inurl:test OR inurl:dev OR inurl:staging" },
      { label: "Swagger APIs", dork: "inurl:swagger OR inurl:api-docs" },
      { label: "GraphQL Endpoints", dork: "inurl:graphql OR intext:\"__schema\"" }
    ]
  },
  {
    type: "sec",
    category: "Network & Infrastructure",
    icon: "fa-network-wired",
    items: [
      { label: "Open Web Ports", dork: "inurl:8080 OR inurl:8443 OR inurl:9200" },
      { label: "Elasticsearch", dork: "intitle:\"You Know, for Search\"" },
      { label: "Kibana Dashboards", dork: "intitle:\"Kibana\"" },
      { label: "Prometheus Metrics", dork: "inurl:/metrics" }
    ]
  },
  {
    type: "sec",
    category: "People & Identity OSINT",
    icon: "fa-user-secret",
    items: [
      { label: "Employee Lists", dork: "filetype:xls intext:employee" },
      { label: "Phone Directories", dork: "filetype:pdf intext:\"phone directory\"" },
      { label: "CVs / Resumes", dork: "filetype:pdf intext:resume OR intext:curriculum" },
      { label: "ID Numbers", dork: "filetype:xls intext:DNI OR intext:passport" }
    ]
  },
  {
    type: "sec",
    category: "OSINT & Recon",
    icon: "fa-eye",
    items: [
      { label: "Subdomains", dork: "-www" },
      { label: "Wayback Machine", dork: "site:web.archive.org" },
      { label: "Public Cameras", dork: "intitle:\"Live View\" OR inurl:view.shtml" },
      { label: "Printers", dork: "intitle:\"HP LaserJet\"" },
      { label: "IoT Devices", dork: "intitle:\"AXIS\" OR intitle:\"NETGEAR\"" }
    ]
  },
  {
    type: "sec",
    category: "Advanced Operators",
    icon: "fa-search-plus",
    items: [
      { label: "Cached Pages", dork: "cache:" },
      { label: "Related Sites", dork: "related:" },
      { label: "Exact Title", dork: "intitle:\"\"" },
      { label: "Exact URL", dork: "inurl:\"\"" },
      { label: "Exclude Domain", dork: "-example.com" }
    ]
  },
  {
    type: "sec",
    category: "Breach & Incident Intelligence",
    icon: "fa-skull-crossbones",
    items: [
      { label: "Data Breach Reports", dork: "intext:\"data breach\"" },
      { label: "Ransomware Victims", dork: "intext:ransomware filetype:pdf" },
      { label: "Credential Leaks", dork: "filetype:txt intext:credentials" }
    ]
  },

  // ======================================================
  // NUEVAS CATEGORÍAS MEJORADAS (MODO: OCIO / MEDIA)
  // ======================================================
  
  // --- MEJORADO: CURSOS Y EDUCACIÓN ---
  {
    type: "media",
    category: "Courses & Education",
    icon: "fa-graduation-cap",
    items: [
      { label: "Video Courses (MP4)", dork: "intitle:\"index of\" mp4 \"course\" -html -htm -php -asp -jsp" },
      { label: "Udemy Courses", dork: "intitle:\"index of\" /\"udemy\"/ (mp4|mkv) -login" },
      { label: "Programming Tutorials", dork: "intitle:\"index of\" (\"python\"|\"javascript\"|\"java\") \"tutorial\" mp4" },
      { label: "PDF Course Materials", dork: "filetype:pdf (\"complete course\"|\"full guide\"|\"training manual\")" },
      { label: "Lynda/LinkedIn Learning", dork: "intitle:\"index of\" \"lynda\" mp4 -html" },
      { label: "Coursera Materials", dork: "site:coursera.org filetype:pdf" },
      { label: "Google Drive Courses", dork: "site:drive.google.com (\"course\"|\"tutorial\"|\"training\") (inurl:folders|inurl:file)" },
      { label: "Mega.nz Courses", dork: "site:mega.nz \"course\" OR \"tutorial\"" }
    ]
  },

  // --- MEJORADO: PELÍCULAS Y SERIES ---
  {
    type: "media",
    category: "Movies & TV Series",
    icon: "fa-film",
    items: [
      { label: "Movies HD (MKV/MP4)", dork: "intitle:\"index of\" (mkv|mp4) (1080p|720p) -html -htm -php" },
      { label: "Recent Movies 2024-2026", dork: "intitle:\"index of\" mp4 (2024|2025|2026) -html" },
      { label: "4K / 2160p Movies", dork: "intitle:\"index of\" (mkv|mp4) (2160p|4K|UHD) -html" },
      { label: "TV Series Complete", dork: "intitle:\"index of\" (\"S01\"|\"Season\") (mkv|mp4) -html" },
      { label: "Netflix Originals", dork: "intitle:\"index of\" \"netflix\" (mkv|mp4) -html -login" },
      { label: "Marvel / DC Movies", dork: "intitle:\"index of\" (\"marvel\"|\"DC\") (mkv|mp4) -html" },
      { label: "Anime Series", dork: "intitle:\"index of\" \"anime\" (mkv|mp4) -html" },
      { label: "Movies by Genre", dork: "intitle:\"index of\" (\"action\"|\"thriller\"|\"comedy\") mp4 -html" }
    ]
  },

  // --- MEJORADO: MÚSICA Y AUDIO ---
  {
    type: "media",
    category: "Music & Audio",
    icon: "fa-music",
    items: [
      { label: "MP3 Collections", dork: "intitle:\"index of\" mp3 -html -htm -php -asp" },
      { label: "FLAC High Quality", dork: "intitle:\"index of\" flac -html -htm" },
      { label: "Full Albums", dork: "intitle:\"index of\" \"album\" (mp3|flac) -html" },
      { label: "Discographies", dork: "intitle:\"index of\" \"discography\" (mp3|flac)" },
      { label: "Music by Artist", dork: "intitle:\"index of\" /artist-name/ (mp3|flac) -html" },
      { label: "EDM / Electronic", dork: "intitle:\"index of\" (\"edm\"|\"electronic\"|\"techno\") mp3" },
      { label: "Classical Music", dork: "intitle:\"index of\" (\"classical\"|\"symphony\"|\"orchestra\") (mp3|flac)" },
      { label: "Audiobooks", dork: "intitle:\"index of\" \"audiobook\" (mp3|m4b) -html" }
    ]
  },

  // --- MEJORADO: LIBROS Y DOCUMENTOS ---
  {
    type: "media",
    category: "Books & Papers",
    icon: "fa-book",
    items: [
      { label: "E-Books (EPUB)", dork: "intitle:\"index of\" epub -html -htm -php" },
      { label: "E-Books (MOBI/AZW)", dork: "intitle:\"index of\" (mobi|azw|azw3) -html" },
      { label: "PDF Books", dork: "intitle:\"index of\" \"books\" pdf -html" },
      { label: "Programming Books", dork: "filetype:pdf (\"programming\"|\"coding\"|\"development\") -html" },
      { label: "Comics (CBR/CBZ)", dork: "intitle:\"index of\" (cbr|cbz) -html" },
      { label: "Manga Collections", dork: "intitle:\"index of\" \"manga\" (cbr|cbz|pdf)" },
      { label: "Scientific Papers", dork: "filetype:pdf (\"research paper\"|\"journal\"|\"study\")" },
      { label: "Calibre Libraries", dork: "intitle:\"calibre library\" (epub|mobi|pdf)" }
    ]
  },

  // --- MEJORADO: SOFTWARE Y JUEGOS ---
  {
    type: "media",
    category: "Software & Games",
    icon: "fa-gamepad",
    items: [
      { label: "PC Games (ISO)", dork: "intitle:\"index of\" \"game\" iso -html -htm" },
      { label: "Game Installers", dork: "intitle:\"index of\" (\"setup.exe\"|\"installer\") \"game\"" },
      { label: "Android APKs", dork: "intitle:\"index of\" apk -html -htm -php" },
      { label: "Windows Software", dork: "intitle:\"index of\" (exe|msi) \"software\" -html" },
      { label: "macOS Applications", dork: "intitle:\"index of\" (dmg|pkg) -html" },
      { label: "Adobe Products", dork: "intitle:\"index of\" (\"adobe\"|\"photoshop\"|\"illustrator\") -html" },
      { label: "Game ROMs", dork: "intitle:\"index of\" (\"rom\"|\"roms\") (zip|rar) -html" },
      { label: "Cracked Software", dork: "intitle:\"index of\" (\"crack\"|\"keygen\"|\"patch\") -html" }
    ]
  },

  // --- MEJORADO: BÚSQUEDA SOCIAL ---
  {
    type: "media",
    category: "Social & Community",
    icon: "fa-hashtag",
    items: [
      { label: "Reddit Communities", dork: "site:reddit.com/r/" },
      { label: "LinkedIn Profiles", dork: "site:linkedin.com/in/" },
      { label: "Twitter / X Posts", dork: "site:twitter.com OR site:x.com" },
      { label: "Instagram Profiles", dork: "site:instagram.com" },
      { label: "Facebook Pages", dork: "site:facebook.com" },
      { label: "TikTok Users", dork: "site:tiktok.com/@" },
      { label: "GitHub Repositories", dork: "site:github.com" },
      { label: "Medium Articles", dork: "site:medium.com" }
    ]
  },

  // --- NUEVO: RECURSOS GRATUITOS ---
  {
    type: "media",
    category: "Free Resources",
    icon: "fa-gift",
    items: [
      { label: "Free Stock Photos", dork: "intitle:\"index of\" (jpg|png) \"stock\" -html" },
      { label: "Vector Graphics", dork: "intitle:\"index of\" (svg|ai|eps) -html" },
      { label: "Font Collections", dork: "intitle:\"index of\" (ttf|otf) \"fonts\" -html" },
      { label: "Templates & Mockups", dork: "intitle:\"index of\" \"template\" (psd|ai|sketch)" },
      { label: "3D Models", dork: "intitle:\"index of\" (obj|fbx|blend) -html" },
      { label: "Sound Effects", dork: "intitle:\"index of\" \"sound effects\" (mp3|wav)" },
      { label: "Video Footage", dork: "intitle:\"index of\" \"stock footage\" (mp4|mov)" }
    ]
  },

  // --- NUEVO: ARCHIVOS CLOUD ---
  {
    type: "media",
    category: "Cloud Storage",
    icon: "fa-cloud-download-alt",
    items: [
      { label: "Google Drive Public", dork: "site:drive.google.com inurl:folders" },
      { label: "Dropbox Shared", dork: "site:dropbox.com/s/" },
      { label: "Mega.nz Files", dork: "site:mega.nz" },
      { label: "MediaFire Downloads", dork: "site:mediafire.com/file/" },
      { label: "OneDrive Shared", dork: "site:onedrive.live.com" },
      { label: "Box.com Shared", dork: "site:box.com/s/" },
      { label: "WeTransfer Links", dork: "site:wetransfer.com" }
    ]
  }
];

/* =========================================
   VARIABLES & ESTADO
   ========================================= */
const urlParams = new URLSearchParams(window.location.search);
const currentMode = urlParams.get('mode') || 'sec'; // Por defecto 'sec'

const targetInput = document.getElementById('target');
const keywordInput = document.getElementById('keyword-input');
const dorksContainer = document.getElementById('dorks-container');
const queryText = document.getElementById('query-text');
const queryPreview = document.getElementById('query-preview');
const customDorkInput = document.getElementById('custom-dork-input');
const domainGroup = document.getElementById('domain-group');
const scanText = document.getElementById('scan-text');
const statusMode = document.getElementById('status-mode');

/* =========================================
   INICIALIZACIÓN
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    applyModeUI();
    renderDorks();
    setupEventListeners();
});

/* =========================================
   FUNCIÓN DE CAMBIO DE PÁGINA (RECARGA)
   ========================================= */
function switchPageMode(newMode) {
    if (newMode === currentMode) return;
    // Esto recarga la página para mostrar nuevos anuncios
    window.location.search = `?mode=${newMode}`;
}

/* =========================================
   APLICAR UI SEGÚN MODO (SIN RECARGA)
   ========================================= */
function applyModeUI() {
    const btnSec = document.getElementById('btn-sec');
    const btnMedia = document.getElementById('btn-media');
    
    if(currentMode === 'media') {
        if(btnMedia) btnMedia.classList.add('active');
        if(btnSec) btnSec.classList.remove('active');
        
        // MODO MEDIA: Ocultar input de dominio
        if(domainGroup) domainGroup.classList.add('hidden-force');
        
        // Textos
        if(keywordInput) keywordInput.placeholder = "Name of course, movie, artist...";
        if(scanText) scanText.innerText = "SEARCH WEB";
        if(statusMode) statusMode.innerText = "MEDIA_SEARCH";
        
    } else {
        if(btnSec) btnSec.classList.add('active');
        if(btnMedia) btnMedia.classList.remove('active');
        
        // MODO SEC: Mostrar input de dominio
        if(domainGroup) domainGroup.classList.remove('hidden-force');
        
        // Textos
        if(keywordInput) keywordInput.placeholder = "Keyword (e.g. admin, confidential)";
        if(scanText) scanText.innerText = "INITITATE FULL SCAN";
        if(statusMode) statusMode.innerText = "SECURE_CORE";
    }
}

/* =========================================
   RENDERIZADO DE TARJETAS
   ========================================= */
function renderDorks() {
  if (!dorksContainer) return;
  dorksContainer.innerHTML = ''; 
  
  // Filtrar dorks según el modo actual de la URL
  const filteredDorks = dorksData.filter(d => d.type === currentMode);

  filteredDorks.forEach(category => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const iconClass = category.icon || 'fa-terminal';

    const header = document.createElement('h3');
    header.innerHTML = `<i class="fas ${iconClass}"></i> ${category.category}`;
    card.appendChild(header);

    category.items.forEach(item => {
      const btn = document.createElement('button');
      btn.textContent = item.label;
      const safeDork = item.dork.replace(/'/g, "\\'");
      btn.onclick = () => executeSpecificDork(safeDork);
      card.appendChild(btn);
    });

    dorksContainer.appendChild(card);
  });
}

/* =========================================
   EVENT LISTENERS
   ========================================= */
function setupEventListeners() {
    if(targetInput) {
        targetInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runQuickSearch();
        });
        targetInput.addEventListener('blur', () => {
            if(targetInput.value) targetInput.value = cleanDomain(targetInput.value);
        });
    }
    if(keywordInput) {
        keywordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runQuickSearch();
        });
    }
    if(customDorkInput) {
        customDorkInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') runCustomDork();
        });
    }
}

/* =========================================
   EJECUCIÓN DE BÚSQUEDAS
   ========================================= */
function runQuickSearch() {
  let domain = "";
  const keyword = keywordInput.value.trim();

  // En modo SEC, requerimos dominio O keyword
  if (currentMode === 'sec') {
      domain = getCleanDomain();
      if (!domain && !keyword) {
          alert(">> ERROR: Please enter a Target Domain or a Keyword.");
          return;
      }
  } 
  // En modo MEDIA, requerimos keyword obligatoria
  else {
      if (!keyword) {
          alert(">> ERROR: Please enter what you want to search for.");
          return;
      }
  }
  
  let query = "";

  if (currentMode === 'sec') {
      // Hacking logic: site:domain + keyword
      query = domain ? `site:${domain}` : "";
      if (keyword) query += ` intitle:"${keyword}"`;
      if (!keyword && domain) query += ` (intitle:index.of OR inurl:admin)`;
  } else {
      // Media logic: Global search
      query = `intitle:"index of" "${keyword}" -html -php -asp`;
  }

  updatePreview(query);
  openGoogle(query);
}

function executeSpecificDork(dorkCode) {
  let domain = "";
  const keyword = keywordInput.value.trim();
  let finalQuery = "";

  if (currentMode === 'sec') {
      domain = getCleanDomain();
  }

  if (dorkCode.includes("site:")) {
      finalQuery = dorkCode;
      if(keyword) finalQuery += ` "${keyword}"`;
      // Añadir dominio solo si no conflicto
      if(domain && !dorkCode.includes('linkedin') && !dorkCode.includes('twitter')) {
           finalQuery += ` "${domain}"`;
      }
  } else {
      let parts = [];
      if (domain && currentMode === 'sec') parts.push(`site:${domain}`);
      
      if (keyword) {
          if (currentMode === 'media') parts.push(`"${keyword}"`);
          else parts.push(`intitle:"${keyword}"`);
      }
      parts.push(dorkCode);
      finalQuery = parts.join(' ');
  }

  updatePreview(finalQuery);
  openGoogle(finalQuery);
}

function runCustomDork() {
  let customQuery = customDorkInput.value.trim();
  if (!customQuery) return;

  const domain = (currentMode === 'sec') ? getCleanDomain() : ""; 
  
  if (domain && !customQuery.includes('site:')) {
      customQuery = `site:${domain} ${customQuery}`;
  }

  updatePreview(customQuery);
  openGoogle(customQuery);
}

/* =========================================
   UTILIDADES
   ========================================= */
function getCleanDomain() {
    if(!targetInput) return "";
    const raw = targetInput.value.trim();
    if (!raw) return ""; 
    const clean = cleanDomain(raw);
    targetInput.value = clean;
    return clean;
}

function cleanDomain(domain) {
  return domain
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    .replace(/\/.*$/, '') 
    .replace(/\.$/, '')   
    .toLowerCase();
}

function updatePreview(query) {
    if(queryPreview) queryPreview.classList.remove('hidden');
    if(queryText) queryText.textContent = query;
}

function openGoogle(query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
}

const copyBtn = document.getElementById('copy-btn');
if(copyBtn) {
    copyBtn.addEventListener('click', () => {
        const text = queryText.textContent;
        if(text === 'waiting for input...') return;
        
        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> COPIED';
            copyBtn.style.color = '#fff';
            copyBtn.style.borderColor = '#fff';
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
                copyBtn.style.color = ''; 
                copyBtn.style.borderColor = '';
            }, 2000);
        });
    });
}
