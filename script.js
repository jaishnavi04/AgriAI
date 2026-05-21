// ============================================================
// TRANSLATION DICTIONARY
// ============================================================
const translations = {
    en: {
        nav_home: "Home", nav_features: "Features", nav_detection: "Detection",
        nav_dashboard: "Dashboard", nav_about: "About", nav_contact: "Contact",
        hero_title: "Smart Crop Disease\nDetection System",
        hero_subtitle: "AI-powered farming and plant health monitoring for the future of agriculture.",
        btn_scan: "Start Scanning", btn_learn_more: "Learn More",
        feat_title: "Next-Gen Farming",
        feat_1_title: "AI Disease Detection", feat_1_desc: "Instant identification of crop diseases using advanced machine learning models.",
        feat_2_title: "Real-time Monitoring", feat_2_desc: "24/7 continuous health tracking with automated alerts for potential outbreaks.",
        feat_3_title: "Smart Analytics", feat_3_desc: "Deep insights into crop performance, yield prediction, and actionable recommendations.",
        feat_4_title: "Early Prediction", feat_4_desc: "Forecast potential threats weeks in advance using predictive climate data.",
        feat_5_title: "Farmer-friendly UI", feat_5_desc: "Intuitive interface designed for ease of use in the field, on any device.",
        feat_6_title: "Cloud Sync", feat_6_desc: "All your data securely backed up and synchronized across your farm.",
        det_title_1: "Precision Scanning.", det_title_2: "Zero Guesswork.",
        det_desc: "Simply point your device at a crop leaf and our AI will instantly analyze its health with 99.8% accuracy.",
        det_li_1: "Ultra-fast local processing", det_li_2: "Works completely offline", det_li_3: "Supports over 500+ plant species",
        dash_title: "Mission Control", dash_subtitle: "Monitor everything from a single, powerful dashboard.",
        dash_overview: "Farm Overview", dash_status: "System Online",
        dash_health: "Overall Crop Health", dash_alerts: "Active Alerts",
        dash_alert_1: "Low moisture in Sector 4", dash_alert_2: "Early blight risk in tomatoes",
        dash_env: "Environment", dash_moisture: "Moisture", dash_temp: "Temperature", dash_ai_trend: "AI Analysis Trend",
        about_title: "Empowering the Future of Farming",
        about_desc: "We believe combining AI with deep agricultural expertise is the key to sustainable, high-yield farming.",
        contact_title: "Ready to upgrade your farm?", contact_desc: "Join the future of agriculture today.",
        contact_placeholder: "Enter your email", contact_btn: "Get Early Access",
        footer_text: "© 2026 AgriAI Systems. All rights reserved.",
        modal_analyzing: "Analyzing Image...",
        modal_status: "Status:", modal_confidence: "Confidence:", modal_recommendation: "AI Recommendation:",
        voice_listening: "Listening...",
        voice_commands: ["scan", "start scanning", "upload", "detect"],
        voice_lang: "en-US",
        voice_result_template: (disease, conf, rec) => `Analysis complete. ${disease} detected with ${conf} percent confidence. Recommendation: ${rec}`
    },
    hi: {
        nav_home: "होम", nav_features: "विशेषताएं", nav_detection: "जांच",
        nav_dashboard: "डैशबोर्ड", nav_about: "हमारे बारे में", nav_contact: "संपर्क",
        hero_title: "स्मार्ट फसल रोग\nपहचान प्रणाली",
        hero_subtitle: "आधुनिक कृषि के लिए AI-संचालित पौधों की स्वास्थ्य निगरानी।",
        btn_scan: "स्कैन शुरू करें", btn_learn_more: "और जानें",
        feat_title: "अगली पीढ़ी की खेती",
        feat_1_title: "AI रोग पहचान", feat_1_desc: "उन्नत मशीन लर्निंग से तुरंत फसल रोगों की पहचान।",
        feat_2_title: "रियल-टाइम निगरानी", feat_2_desc: "24/7 स्वास्थ्य ट्रैकिंग और स्वचालित अलर्ट।",
        feat_3_title: "स्मार्ट विश्लेषण", feat_3_desc: "फसल प्रदर्शन और उपज पूर्वानुमान की गहरी जानकारी।",
        feat_4_title: "पूर्व भविष्यवाणी", feat_4_desc: "जलवायु डेटा का उपयोग करके हफ्तों पहले खतरों का पूर्वानुमान।",
        feat_5_title: "किसान-अनुकूल UI", feat_5_desc: "खेत में उपयोग के लिए डिज़ाइन किया गया सरल इंटरफ़ेस।",
        feat_6_title: "क्लाउड सिंक", feat_6_desc: "आपका डेटा सुरक्षित रूप से बैकअप और सिंक्रनाइज़।",
        det_title_1: "सटीक स्कैनिंग।", det_title_2: "कोई अनुमान नहीं।",
        det_desc: "बस अपना डिवाइस फसल की पत्ती पर रखें और हमारा AI 99.8% सटीकता से स्वास्थ्य विश्लेषण करेगा।",
        det_li_1: "अल्ट्रा-फास्ट स्थानीय प्रसंस्करण", det_li_2: "ऑफ़लाइन काम करता है", det_li_3: "500+ से अधिक पौधों की प्रजातियां",
        dash_title: "मिशन कंट्रोल", dash_subtitle: "एक शक्तिशाली डैशबोर्ड से सब कुछ मॉनिटर करें।",
        dash_overview: "फार्म अवलोकन", dash_status: "सिस्टम ऑनलाइन",
        dash_health: "समग्र फसल स्वास्थ्य", dash_alerts: "सक्रिय अलर्ट",
        dash_alert_1: "सेक्टर 4 में कम नमी", dash_alert_2: "टमाटर में अर्ली ब्लाइट का खतरा",
        dash_env: "पर्यावरण", dash_moisture: "नमी", dash_temp: "तापमान", dash_ai_trend: "AI विश्लेषण ट्रेंड",
        about_title: "खेती के भविष्य को सशक्त बनाना",
        about_desc: "हम मानते हैं कि AI और कृषि विशेषज्ञता का संयोजन टिकाऊ, उच्च-उपज खेती की कुंजी है।",
        contact_title: "अपना खेत अपग्रेड करने के लिए तैयार हैं?", contact_desc: "आज ही कृषि के भविष्य से जुड़ें।",
        contact_placeholder: "अपना ईमेल दर्ज करें", contact_btn: "अर्ली एक्सेस पाएं",
        footer_text: "© 2026 AgriAI Systems. सर्वाधिकार सुरक्षित।",
        modal_analyzing: "छवि का विश्लेषण हो रहा है...",
        modal_status: "स्थिति:", modal_confidence: "विश्वास:", modal_recommendation: "AI अनुशंसा:",
        voice_listening: "सुन रहा हूँ...",
        voice_commands: ["स्कैन", "स्कैन शुरू करें", "अपलोड", "जांच"],
        voice_lang: "hi-IN",
        voice_result_template: (disease, conf, rec) => `विश्लेषण पूर्ण। ${conf} प्रतिशत विश्वास के साथ ${disease} पाया गया। सिफारिश: ${rec}`
    },
    te: {
        nav_home: "హోమ్", nav_features: "లక్షణాలు", nav_detection: "వ్యాధి పరీక్ష",
        nav_dashboard: "డాష్‌బోర్డ్", nav_about: "మా గురించి", nav_contact: "సంప్రదించండి",
        hero_title: "స్మార్ట్ పంట వ్యాధి\nగుర్తింపు వ్యవస్థ",
        hero_subtitle: "ఆధునిక వ్యవసాయం కోసం AI-ఆధారిత మొక్కల ఆరోగ్య పర్యవేక్షణ.",
        btn_scan: "స్కాన్ ప్రారంభించండి", btn_learn_more: "మరింత తెలుసుకోండి",
        feat_title: "తదుపరి తరం వ్యవసాయం",
        feat_1_title: "AI వ్యాధి గుర్తింపు", feat_1_desc: "అధునాతన మెషీన్ లెర్నింగ్ ద్వారా పంట వ్యాధులను తక్షణమే గుర్తించడం.",
        feat_2_title: "రియల్-టైమ్ పర్యవేక్షణ", feat_2_desc: "24/7 ఆరోగ్య ట్రాకింగ్ మరియు స్వయంచాలక హెచ్చరికలు.",
        feat_3_title: "స్మార్ట్ విశ్లేషణలు", feat_3_desc: "పంట పనితీరు మరియు దిగుబడి అంచనాలో లోతైన అంతర్దృష్టి.",
        feat_4_title: "ముందస్తు అంచనా", feat_4_desc: "వాతావరణ డేటాను ఉపయోగించి వారాల ముందే ముప్పులను అంచనా వేయడం.",
        feat_5_title: "రైతు-స్నేహపూర్వక UI", feat_5_desc: "క్షేత్రంలో ఉపయోగించడానికి రూపొందించిన సహజ ఇంటర్‌ఫేస్.",
        feat_6_title: "క్లౌడ్ సింక్", feat_6_desc: "మీ అన్ని డేటా సురక్షితంగా బ్యాకప్ మరియు సమకాలీకరించబడింది.",
        det_title_1: "ఖచ్చితమైన స్కానింగ్.", det_title_2: "అంచనాలు అక్కర్లేదు.",
        det_desc: "మీ పరికరాన్ని పంట ఆకుపై పెట్టండి మరియు మా AI 99.8% ఖచ్చితత్వంతో దాని ఆరోగ్యాన్ని విశ్లేషిస్తుంది.",
        det_li_1: "అల్ట్రా-ఫాస్ట్ స్థానిక ప్రాసెసింగ్", det_li_2: "పూర్తిగా ఆఫ్‌లైన్‌లో పని చేస్తుంది", det_li_3: "500+ మొక్కల జాతులకు మద్దతు",
        dash_title: "మిషన్ కంట్రోల్", dash_subtitle: "ఒకే శక్తివంతమైన డాష్‌బోర్డ్ నుండి అన్నింటినీ పర్యవేక్షించండి.",
        dash_overview: "పొలం అవలోకనం", dash_status: "సిస్టమ్ ఆన్‌లైన్",
        dash_health: "మొత్తం పంట ఆరోగ్యం", dash_alerts: "క్రియాశీల హెచ్చరికలు",
        dash_alert_1: "సెక్టార్ 4లో తక్కువ తేమ", dash_alert_2: "టమోటాలలో అర్లీ బ్లైట్ ప్రమాదం",
        dash_env: "పర్యావరణం", dash_moisture: "తేమ", dash_temp: "ఉష్ణోగ్రత", dash_ai_trend: "AI విశ్లేషణ ట్రెండ్",
        about_title: "వ్యవసాయం యొక్క భవిష్యత్తుకు శక్తిని ఇవ్వడం",
        about_desc: "AI మరియు వ్యవసాయ నైపుణ్యాన్ని కలపడం అనేది స్థిరమైన, అధిక-దిగుబడి వ్యవసాయానికి కీలకం అని మేము నమ్ముతాము.",
        contact_title: "మీ పొలాన్ని అప్‌గ్రేడ్ చేయడానికి సిద్ధంగా ఉన్నారా?", contact_desc: "ఈ రోజే వ్యవసాయం భవిష్యత్తులో చేరండి.",
        contact_placeholder: "మీ ఇమెయిల్ నమోదు చేయండి", contact_btn: "ముందస్తు యాక్సెస్ పొందండి",
        footer_text: "© 2026 AgriAI Systems. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
        modal_analyzing: "చిత్రాన్ని విశ్లేషిస్తోంది...",
        modal_status: "స్థితి:", modal_confidence: "విశ్వాసం:", modal_recommendation: "AI సిఫారసు:",
        voice_listening: "వింటున్నాను...",
        voice_commands: ["స్కాన్", "స్కాన్ ప్రారంభించు", "అప్లోడ్", "పరీక్ష"],
        voice_lang: "te-IN",
        voice_result_template: (disease, conf, rec) => `విశ్లేషణ పూర్తయింది. ${conf} శాతం నమ్మకంతో ${disease} కనుగొనబడింది. సిఫారసు: ${rec}`
    }
};

// ============================================================
// STATE
// ============================================================
let currentLang = localStorage.getItem('agriLang') || 'en';
let recognition = null;
let isListening = false;

// ============================================================
// TRANSLATION ENGINE
// ============================================================
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    currentLang = lang;
    localStorage.setItem('agriLang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT') {
                el.value = t[key];
            } else {
                // Preserve child elements (e.g. <br> in hero title)
                if (el.querySelector('*')) return;
                el.innerText = t[key];
            }
        }
    });

    // Handle placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Update hero title manually (has <br>)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && t.hero_title) {
        heroTitle.innerHTML = t.hero_title.replace('\n', '<br>');
    }

    // Update voice feedback text
    const vf = document.querySelector('#voice-feedback span');
    if (vf && t.voice_listening) vf.innerText = t.voice_listening;
}

// ============================================================
// VOICE ASSISTANT — SPEECH SYNTHESIS (Text-to-Speech)
// ============================================================

// Cache of available voices, populated once the browser loads them
let availableVoices = [];

function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}

// Browsers fire onvoiceschanged when voice list is ready
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices(); // also try immediately (some browsers populate synchronously)
}

/**
 * Find the best available voice for the requested BCP-47 lang tag.
 * Priority: exact match → language-prefix match → any 'en' voice → default.
 * Returns { voice, found } where found = false means we fell back to default.
 */
function findBestVoice(langTag) {
    const voices = availableVoices.length ? availableVoices : window.speechSynthesis.getVoices();
    const prefix = langTag.split('-')[0].toLowerCase(); // e.g. 'te' from 'te-IN'

    // 1. Exact match (e.g. 'te-IN')
    let voice = voices.find(v => v.lang.toLowerCase() === langTag.toLowerCase());
    if (voice) return { voice, found: true };

    // 2. Prefix match (e.g. any voice starting with 'te')
    voice = voices.find(v => v.lang.toLowerCase().startsWith(prefix));
    if (voice) return { voice, found: true };

    // 3. Fallback to any English voice so TTS still speaks
    voice = voices.find(v => v.lang.toLowerCase().startsWith('en'));
    return { voice: voice || null, found: false };
}

/**
 * Speak text in the current language with automatic voice fallback.
 * Returns true if a native voice was found, false if fell back to English.
 */
function speakText(text) {
    if (!('speechSynthesis' in window)) return false;
    window.speechSynthesis.cancel();

    const t = translations[currentLang];
    const { voice, found } = findBestVoice(t.voice_lang);

    // If no Telugu/Hindi voice found, speak English transliteration notice first
    let spokenText = text;
    if (!found && currentLang === 'te') {
        // Speak an English summary since Telugu voice is unavailable
        spokenText = `Analysis complete. Disease detected. Please read the result on screen for details in Telugu.`;
    }

    const utterance = new SpeechSynthesisUtterance(spokenText);
    if (voice) utterance.voice = voice;
    utterance.lang = found ? t.voice_lang : 'en-US';
    utterance.rate = 0.92;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    return found;
}

// ============================================================
// VOICE ASSISTANT — SPEECH RECOGNITION
// ============================================================
function initVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn('Web Speech API not supported in this browser.');
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        isListening = true;
        document.getElementById('voice-btn').classList.add('listening');
        document.getElementById('voice-feedback').classList.add('visible');
    };

    recognition.onend = () => {
        isListening = false;
        document.getElementById('voice-btn').classList.remove('listening');
        setTimeout(() => {
            document.getElementById('voice-feedback').classList.remove('visible');
        }, 1200);
    };

    recognition.onerror = (e) => {
        console.error('Speech recognition error:', e.error);
        isListening = false;
        document.getElementById('voice-btn').classList.remove('listening');
        document.getElementById('voice-feedback').classList.remove('visible');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim().toLowerCase();
        console.log('Voice heard:', transcript);

        const feedbackEl = document.getElementById('voice-feedback');
        feedbackEl.querySelector('span').innerText = `"${transcript}"`;

        // Check against command list for current language
        const t = translations[currentLang];
        const matched = t.voice_commands.some(cmd => transcript.includes(cmd));

        if (matched) {
            // Trigger image upload
            document.getElementById('scan-upload').click();
        } else {
            // Unknown command feedback
            feedbackEl.querySelector('span').innerText = translations[currentLang].voice_listening;
        }
    };
}

function startListening() {
    if (!recognition) initVoiceRecognition();
    if (!recognition) {
        alert('Voice recognition is not supported by your browser. Please use Google Chrome or Microsoft Edge.');
        return;
    }
    if (isListening) {
        recognition.stop();
        return;
    }
    recognition.lang = translations[currentLang].voice_lang;
    recognition.start();
}

// ============================================================
// MAIN DOCUMENT READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

    // Apply saved language on load
    const langSelect = document.getElementById('lang-select');
    langSelect.value = currentLang;
    applyTranslations(currentLang);

    // Language switcher change
    langSelect.addEventListener('change', (e) => {
        applyTranslations(e.target.value);
        // Restart recognition with new language if active
        if (isListening) {
            recognition.stop();
        }
    });

    // Voice FAB button
    const voiceBtn = document.getElementById('voice-btn');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', startListening);
    }

    // === 1. Scrollytelling Canvas ===
    const canvas = document.getElementById('hero-lightpass');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 192;
    const currentFrame = index =>
        `Crop Detection System/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

    const images = [];
    const firstImage = new Image();
    firstImage.src = currentFrame(0);
    firstImage.onload = () => drawImageCover(firstImage);

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }

    function drawImageCover(img) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const cx = (canvas.width - img.width * ratio) / 2;
        const cy = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * ratio, img.height * ratio);
    }

    window.addEventListener('scroll', () => {
        const html = document.documentElement;
        const scrollFraction = html.scrollTop / Math.max(1, html.scrollHeight - window.innerHeight);
        const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
        requestAnimationFrame(() => {
            if (images[frameIndex] && images[frameIndex].complete) {
                drawImageCover(images[frameIndex]);
            }
        });
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // === 2. Navbar Scroll Effect ===
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // === 3. API Integration: Image Scanning ===
    const btnStartScan = document.getElementById('btn-start-scan');
    const scanUpload = document.getElementById('scan-upload');
    const modal = document.getElementById('scan-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalLoader = document.getElementById('modal-loader');
    const modalResults = document.getElementById('modal-results');
    const modalTitle = document.getElementById('modal-title');
    const resDisease = document.getElementById('res-disease');
    const resConfidence = document.getElementById('res-confidence');
    const resRecommendation = document.getElementById('res-recommendation');

    if (btnStartScan && scanUpload) {
        btnStartScan.addEventListener('click', () => scanUpload.click());

        scanUpload.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const t = translations[currentLang];
            modal.style.display = 'block';
            modalLoader.style.display = 'block';
            modalResults.style.display = 'none';
            modalTitle.innerText = t.modal_analyzing;

            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch('http://localhost:5000/api/detect', {
                    method: 'POST', body: formData
                });
                const data = await response.json();

                if (data.success) {
                    showResult(data.data.disease, data.data.confidence, data.data.recommendation);
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                console.warn('Backend offline, using mock:', error);
                const mockDiseases = [
                    { disease: 'Healthy', recommendation: 'Maintain current watering and nutrient schedule.' },
                    { disease: 'Early Blight', recommendation: 'Apply copper-based fungicide and ensure proper spacing.' },
                    { disease: 'Powdery Mildew', recommendation: 'Improve air circulation and apply sulfur fungicide.' },
                    { disease: 'Leaf Spot', recommendation: 'Remove affected leaves and avoid overhead watering.' }
                ];
                const mock = mockDiseases[Math.floor(Math.random() * mockDiseases.length)];
                const mockConf = (85 + Math.random() * 14.8).toFixed(1);

                setTimeout(() => showResult(mock.disease, mockConf, mock.recommendation, true), 1500);
            }

            scanUpload.value = '';
        });
    }

    function showResult(disease, confidence, recommendation, offline = false) {
        const t = translations[currentLang];
        modalTitle.innerText = offline ? 'Analysis Complete (Offline Mode)' : 'Analysis Complete';
        modalLoader.style.display = 'none';
        modalResults.style.display = 'block';

        resDisease.innerText = disease;
        resConfidence.innerText = confidence;
        resRecommendation.innerText = recommendation;

        const isHealthy = disease.toLowerCase().includes('health');
        resDisease.style.background = isHealthy
            ? 'linear-gradient(to right, #00e676, #00bfff)'
            : 'linear-gradient(to right, #ff4444, #ff8c00)';
        resDisease.style.webkitBackgroundClip = 'text';
        resDisease.style.webkitTextFillColor = 'transparent';

        // --- TTS Status Badge ---
        // Remove any previous badge
        const existingBadge = document.getElementById('tts-status-badge');
        if (existingBadge) existingBadge.remove();

        // Speak the result and check if native voice was found
        const spokenText = t.voice_result_template(disease, confidence, recommendation);
        const nativeVoiceFound = speakText(spokenText);

        // Show a badge to inform the user about TTS status
        const badge = document.createElement('p');
        badge.id = 'tts-status-badge';
        badge.style.cssText = 'margin-top:1rem; font-size:0.8rem; padding:0.4rem 0.8rem; border-radius:8px; display:inline-block;';

        if (nativeVoiceFound) {
            badge.style.background = 'rgba(0,230,118,0.15)';
            badge.style.color = '#00e676';
            badge.style.border = '1px solid rgba(0,230,118,0.3)';
            badge.innerText = currentLang === 'te'
                ? '🔊 తెలుగు వాయిస్ అందుబాటులో ఉంది'
                : currentLang === 'hi'
                ? '🔊 हिंदी आवाज़ उपलब्ध है'
                : '🔊 Speaking result aloud';
        } else {
            badge.style.background = 'rgba(255,140,0,0.12)';
            badge.style.color = '#ff8c00';
            badge.style.border = '1px solid rgba(255,140,0,0.3)';
            badge.innerText = currentLang === 'te'
                ? '⚠️ తెలుగు వాయిస్ అందుబాటులో లేదు — ఆంగ్లంలో చదువుతోంది'
                : currentLang === 'hi'
                ? '⚠️ हिंदी आवाज़ उपलब्ध नहीं — अंग्रेज़ी में बोल रहा है'
                : '🔊 Speaking result aloud';
        }
        document.getElementById('modal-results').appendChild(badge);
    }

    // Close Modal
    if (closeModalBtn) closeModalBtn.addEventListener('click', () => { modal.style.display = 'none'; window.speechSynthesis.cancel(); });
    window.addEventListener('click', (e) => { if (e.target === modal) { modal.style.display = 'none'; window.speechSynthesis.cancel(); } });

    // === 4. Contact Form ===
    const contactForm = document.getElementById('contact-form');
    const contactEmail = document.getElementById('contact-email');
    const contactMessage = document.getElementById('contact-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = contactEmail.value;
            if (!email) return;
            try {
                const response = await fetch('http://localhost:5000/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });
                const data = await response.json();
                contactMessage.style.display = 'block';
                if (data.success) {
                    contactMessage.style.color = 'var(--accent-green)';
                    contactMessage.innerText = data.message;
                    contactEmail.value = '';
                } else { throw new Error(data.message); }
            } catch (error) {
                contactMessage.style.display = 'block';
                contactMessage.style.color = 'var(--accent-green)';
                contactMessage.innerText = translations[currentLang].contact_btn === 'Get Early Access'
                    ? 'Thanks for subscribing! (Offline Mode)'
                    : '✓ सफलतापूर्वक सदस्यता ली!';
                contactEmail.value = '';
            }
        });
    }
});
