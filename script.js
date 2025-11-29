// =================================================================
// 1. მონაცემთა სტრუქტურა (Data Structure)
// =================================================================

const systemsData = {
    hvac: {
        name: 'გათბობა-გაგრილების სისტემა',
        icon: '❄️',
        color: '#0ea5e9',
        equipment: {
            'outdoor_unit': {
                name: '1.1 გარე ბლოკი',
                tasks: [
                    { id: 'ou1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'ou2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'ou3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'ou4', name: 'მაცივარაგენტის წნევის კონტროლი', type: 'measurement', unit: 'PSI' },
                    { id: 'ou5', name: 'კომპრესორის მუშაობის კონტროლი', type: 'mechanical' },
                    { id: 'ou6', name: 'ვენტილატორის მუშაობის შემოწმება', type: 'mechanical' },
                    { id: 'ou7', name: 'კონდენსატორის გაწმენდა', type: 'maintenance' },
                    { id: 'ou8', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'ou9', name: 'დამიწების კაბელის კონტროლი', type: 'electrical' },
                    { id: 'ou10', name: 'ხმაზე კონტროლი', type: 'sensory' },
                    { id: 'ou11', name: 'მაღალი წნევის აზოტით/ჰაერით გაწმენდა', type: 'maintenance' },
                ]
            },
            'cassette_indoor': {
                name: '1.2.1 კასეტური შიდა ბლოკი',
                tasks: [
                    { id: 'ci1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'ci2', name: 'ჰაერის ფილტრების გაწმენდა/შეცვლა', type: 'maintenance' },
                    { id: 'ci3', name: 'ქიმიური საშუალებით გაწმენდა', type: 'maintenance' },
                    { id: 'ci4', name: 'დრენაჟის მილგაყვანილობის კონტროლი', type: 'visual' },
                    { id: 'ci5', name: 'გარე ბლოკთან კომუნიკაციის კონტროლი', type: 'electrical' },
                    { id: 'ci6', name: 'მართვის პანელის შემოწმება', type: 'electrical' },
                    { id: 'ci7', name: 'თერმოსტატის კალიბრაცია', type: 'measurement', unit: '°C' },
                    { id: 'ci8', name: 'სეზონური გადართვა', type: 'operational' },
                ]
            },
            'duct_indoor': {
                name: '1.2.2 არხული შიდა ბლოკი',
                tasks: [
                    { id: 'di1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'di2', name: 'ჰაერის ფილტრების გაწმენდა/შეცვლა', type: 'maintenance' },
                    { id: 'di3', name: 'ქიმიური საშუალებით გაწმენდა', type: 'maintenance' },
                    { id: 'di4', name: 'დრენაჟის მილგაყვანილობის კონტროლი', type: 'visual' },
                    { id: 'di5', name: 'გარე ბლოკთან კომუნიკაციის კონტროლი', type: 'electrical' },
                    { id: 'di6', name: 'არხების გამართულობის შემოწმება', type: 'visual' },
                    { id: 'di7', name: 'იზოლაციის მდგომარეობა', type: 'visual' },
                    { id: 'di8', name: 'მართვის პანელის შემოწმება', type: 'electrical' },
                ]
            },
            'split': {
                name: '2. სპლიტ სისტემა',
                tasks: [
                    { id: 'sp1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'sp2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'sp3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'sp4', name: 'მაცივარაგენტის წნევის კონტროლი', type: 'measurement', unit: 'PSI' },
                    { id: 'sp5', name: 'ჰაერის ფილტრების გაწმენდა', type: 'maintenance' },
                    { id: 'sp6', name: 'დრენაჟის მილგაყვანილობის კონტროლი', type: 'visual' },
                    { id: 'sp7', name: 'კონდენსატორის გაწმენდა', type: 'maintenance' },
                    { id: 'sp8', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'sp9', name: 'პულტის/თერმოსტატის შემოწმება', type: 'operational' },
                    { id: 'sp10', name: 'სეზონური გადართვა', type: 'operational' },
                ]
            },
            'chiller': {
                name: '3. ჩილერი',
                tasks: [
                    { id: 'ch1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'ch2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'ch3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'ch4', name: 'მაცივარაგენტის წნევის კონტროლი', type: 'measurement', unit: 'PSI' },
                    { id: 'ch5', name: 'გამრეცხვის საწინააღმდეგო ხსნარის კონტროლი', type: 'maintenance' },
                    { id: 'ch6', name: 'კომპრესორის მუშაობის კონტროლი', type: 'mechanical' },
                    { id: 'ch7', name: 'კონდენსატორის გაწმენდა', type: 'maintenance' },
                    { id: 'ch8', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'ch9', name: 'მართვის პანელის შემოწმება', type: 'electrical' },
                    { id: 'ch10', name: 'ავტომატური კონტაქტების გახურებაზე კონტროლი', type: 'electrical' },
                    { id: 'ch11', name: 'წინაღობაზე კონტროლი', type: 'electrical', unit: 'Ω' },
                ]
            },
            'fancoil': {
                name: '3.1 ფანკოილი',
                tasks: [
                    { id: 'fc1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'fc2', name: 'ჰაერის ფილტრების გაწმენდა', type: 'maintenance' },
                    { id: 'fc3', name: 'დრენაჟის მილგაყვანილობის კონტროლი', type: 'visual' },
                    { id: 'fc4', name: 'ჩილერთან კომუნიკაციის კონტროლი', type: 'electrical' },
                    { id: 'fc5', name: 'თერმოსტატის შემოწმება', type: 'operational' },
                    { id: 'fc6', name: 'ვენტილატორის მუშაობის კონტროლი', type: 'mechanical' },
                ]
            },
            'rooftop': {
                name: '4. ROOFTOP',
                tasks: [
                    { id: 'rt1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'rt2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'rt3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'rt4', name: 'მაცივარაგენტის წნევის კონტროლი', type: 'measurement', unit: 'PSI' },
                    { id: 'rt5', name: 'ჰაერის ფილტრების გაწმენდა/შეცვლა', type: 'maintenance' },
                    { id: 'rt6', name: 'ქამრების მდგომარეობის შემოწმება', type: 'mechanical' },
                    { id: 'rt7', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'rt8', name: 'მართვის პანელის შემოწმება', type: 'electrical' },
                    { id: 'rt9', name: 'სეზონური გადართვა', type: 'operational' },
                ]
            },
            'heat_pump': {
                name: '5. თბური ტუმბო',
                tasks: [
                    { id: 'hp1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'hp2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'hp3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'hp4', name: 'მაცივარაგენტის წნევის კონტროლი', type: 'measurement', unit: 'PSI' },
                    { id: 'hp5', name: 'კომპრესორის მუშაობის კონტროლი', type: 'mechanical' },
                    { id: 'hp6', name: 'ჰაერის ფილტრების გაწმენდა', type: 'maintenance' },
                    { id: 'hp7', name: 'გამრეცხვის საწინააღმდეგო ხსნარის კონტროლი', type: 'maintenance' },
                    { id: 'hp8', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'hp9', name: 'მართვის პანელის შემოწმება', type: 'electrical' },
                    { id: 'hp10', name: 'სეზონური გადართვა (გათბობა/გაგრილება)', type: 'operational' },
                ]
            }
        }
    },
    ventilation: {
        name: 'სავენტილაციო სისტემა',
        icon: '🌀',
        color: '#22c55e',
        equipment: {
            'ahu': {
                name: '1. AHU დანადგარი',
                tasks: [
                    { id: 'ahu1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'ahu2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'ahu3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'ahu4', name: 'ჰაერის ფილტრების გაწმენდა/შეცვლა', type: 'maintenance' },
                    { id: 'ahu5', name: 'ქამრების მდგომარეობის შემოწმება', type: 'mechanical' },
                    { id: 'ahu6', name: 'საკისრების შეზეთვა', type: 'maintenance' },
                    { id: 'ahu7', name: 'ვენტილატორის ბალანსირება', type: 'mechanical' },
                    { id: 'ahu8', name: 'დემპერების მუშაობის კონტროლი', type: 'mechanical' },
                    { id: 'ahu9', name: 'მართვის პანელის შემოწმება', type: 'electrical' },
                    { id: 'ahu10', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'ahu11', name: 'თბო-მცვლელის გაწმენდა', type: 'maintenance' },
                    { id: 'ahu12', name: 'კონდენსატის დრენაჟის კონტროლი', type: 'visual' },
                ]
            },
            'ventilator': {
                name: '2. ვენტილატორი',
                tasks: [
                    { id: 'v1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'v2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'v3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'v4', name: 'ქამრების მდგომარეობის შემოწმება', type: 'mechanical' },
                    { id: 'v5', name: 'საკისრების შეზეთვა', type: 'maintenance' },
                    { id: 'v6', name: 'ვიბრაციის კონტროლი', type: 'sensory' },
                    { id: 'v7', name: 'ხმაზე კონტროლი', type: 'sensory' },
                    { id: 'v8', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'v9', name: 'მართვის სისტემის შემოწმება', type: 'electrical' },
                ]
            },
            'kef': {
                name: '3. KEF (სამზარეულოს) ვენტილატორი',
                tasks: [
                    { id: 'kef1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'kef2', name: 'ცხიმის ფილტრების გაწმენდა/შეცვლა', type: 'maintenance' },
                    { id: 'kef3', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'kef4', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'kef5', name: 'ვენტილატორის ფრთების გაწმენდა', type: 'maintenance' },
                    { id: 'kef6', name: 'არხების გაწმენდის კონტროლი', type: 'visual' },
                    { id: 'kef7', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'kef8', name: 'ხანძარსაწინააღმდეგო დემპერების შემოწმება', type: 'safety' },
                ]
            },
            'fire_ventilator': {
                name: '4. სახანძრო ვენტილატორი',
                tasks: [
                    { id: 'fv1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'fv2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'fv3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'fv4', name: 'ტესტური გაშვება', type: 'operational' },
                    { id: 'fv5', name: 'ავტომატური ჩართვის სისტემის შემოწმება', type: 'safety' },
                    { id: 'fv6', name: 'სახანძრო სიგნალიზაციასთან კავშირის ტესტი', type: 'safety' },
                    { id: 'fv7', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'fv8', name: 'სარეზერვო კვების შემოწმება', type: 'electrical' },
                ]
            }
        }
    },
    fire: {
        name: 'სახანძრო უსაფრთხოება',
        icon: '🔥',
        color: '#ef4444',
        equipment: {
            'fire_pump': {
                name: '1. სახანძრო ტუმბო',
                tasks: [
                    { id: 'fp1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'fp2', name: 'მექანიკური ნაწილების კონტროლი', type: 'mechanical' },
                    { id: 'fp3', name: 'ელექტრო კომპონენტების შემოწმება', type: 'electrical' },
                    { id: 'fp4', name: 'ტესტური გაშვება', type: 'operational' },
                    { id: 'fp5', name: 'წნევის მაჩვენებლების კონტროლი', type: 'measurement', unit: 'bar' },
                    { id: 'fp6', name: 'სარქველების მდგომარეობა', type: 'mechanical' },
                    { id: 'fp7', name: 'მილგაყვანილობის გამართულობა', type: 'visual' },
                    { id: 'fp8', name: 'ავტომატური ჩართვის სისტემის ტესტი', type: 'safety' },
                    { id: 'fp9', name: 'ელ. ენერგიის პარამეტრების კონტროლი', type: 'electrical', unit: 'V/A' },
                    { id: 'fp10', name: 'სარეზერვო კვების შემოწმება', type: 'electrical' },
                    { id: 'fp11', name: 'მართვის პანელის შემოწმება', type: 'electrical' },
                    { id: 'fp12', name: 'საკისრების შეზეთვა', type: 'maintenance' },
                    { id: 'fp13', name: 'გამჟღავნების ტესტი', type: 'safety' },
                ]
            },
            'fire_tank': {
                name: '2. სახანძრო რეზერვუარი',
                tasks: [
                    { id: 'ft1', name: 'ვიზუალური დაზიანებების კონტროლი', type: 'visual' },
                    { id: 'ft2', name: 'წყლის დონის კონტროლი', type: 'measurement', unit: '%' },
                    { id: 'ft3', name: 'გაჟონვის შემოწმება', type: 'visual' },
                    { id: 'ft4', name: 'ავტომატური შევსების სისტემის ტესტი', type: 'operational' },
                    { id: 'ft5', name: 'დონის სენსორების კალიბრაცია', type: 'measurement' },
                    { id: 'ft6', name: 'დრენაჟის სარქველის შემოწმება', type: 'mechanical' },
                    { id: 'ft7', name: 'რეზერვუარის სისუფთავის კონტროლი', type: 'visual' },
                    { id: 'ft8', name: 'იზოლაციის მდგომარეობა', type: 'visual' },
                    { id: 'ft9', name: 'სიგნალიზაციის სისტემის ტესტი', type: 'safety' },
                ]
            }
        }
    }
};

// დავალების ტიპის იკონები
const typeIcons = {
    visual: '👁️',
    mechanical: '⚙️',
    electrical: '⚡',
    maintenance: '🔧',
    measurement: '📏',
    operational: '▶️',
    sensory: '👂',
    safety: '🛡️'
};

// დავალების ტიპის სახელები
const typeNames = {
    visual: 'ვიზუალური',
    mechanical: 'მექანიკური',
    electrical: 'ელექტრო',
    maintenance: 'მოვლა',
    measurement: 'გაზომვა',
    operational: 'ოპერაციული',
    sensory: 'სენსორული',
    safety: 'უსაფრთხოება'
};

// სტატუსის ვარიანტები
const statusOptions = [
    { value: 'pending', label: 'მოლოდინში', color: '#94a3b8', bg: '#f1f5f9', short: '⏳' },
    { value: 'ok', label: '✓ კარგი', color: '#16a34a', bg: '#dcfce7', short: '✓' },
    { value: 'warning', label: '⚠ ყურადღება', color: '#ca8a04', bg: '#fef9c3', short: '⚠' },
    { value: 'problem', label: '✗ პრობლემა', color: '#dc2626', bg: '#fee2e2', short: '✗' },
    { value: 'na', label: 'N/A', color: '#6b7280', bg: '#e5e7eb', short: '—' }
];

// პრიორიტეტის ვარიანტები
const priorityOptions = [
    { value: 'low', label: 'დაბალი', color: '#22c55e', icon: '🟢' },
    { value: 'medium', label: 'საშუალო', color: '#eab308', icon: '🟡' },
    { value: 'high', label: 'მაღალი', color: '#f97316', icon: '🟠' },
    { value: 'critical', label: 'კრიტიკული', color: '#ef4444', icon: '🔴' }
];

// =================================================================
// 2. აპლიკაციის მდგომარეობა (Application State)
// =================================================================

const appState = {
    // ნავიგაცია
    currentView: 'home', // home, system, manager, reports, settings
    selectedSystem: null,
    selectedEquipment: null,
    currentInspectionId: null,
    
    // მომხმარებლის როლი
    userRole: localStorage.getItem('userRole') || 'inspector', // inspector, manager, admin
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    
    // მიმდინარე ინსპექტირების მონაცემები
    inspectionData: {
        objectName: '',
        objectAddress: '',
        inspector: '',
        serialNumber: '',
        date: new Date().toISOString().split('T')[0],
        startTime: '',
        endTime: '',
        weather: '',
        temperature: '',
        tasks: {},
        photos: {},
        signatures: {},
        comments: '',
        priority: 'medium',
        nextInspectionDate: '',
        assignedTo: ''
    },
    
    // შენახული ინსპექტირებები
    inspections: JSON.parse(localStorage.getItem('inspections')) || [],
    
    // ობიექტების ბაზა
    objects: JSON.parse(localStorage.getItem('objects')) || [],
    
    // ინსპექტორების სია
    inspectors: JSON.parse(localStorage.getItem('inspectors')) || [
        { id: 1, name: 'გიორგი მაისურაძე', email: 'giorgi@example.com', phone: '+995 555 123456' },
        { id: 2, name: 'ნინო კვარაცხელია', email: 'nino@example.com', phone: '+995 555 234567' },
        { id: 3, name: 'დავით ბერიძე', email: 'davit@example.com', phone: '+995 555 345678' }
    ],
    
    // დაგეგმილი ინსპექტირებები
    scheduledInspections: JSON.parse(localStorage.getItem('scheduledInspections')) || [],
    
    // ფილტრები
    filters: {
        status: 'all',
        system: 'all',
        dateFrom: '',
        dateTo: '',
        inspector: 'all',
        priority: 'all',
        object: 'all'
    },
    
    // სორტირება
    sortBy: 'date',
    sortOrder: 'desc',
    
    // ძებნა
    searchQuery: '',
    
    // შეტყობინებები
    notifications: JSON.parse(localStorage.getItem('notifications')) || [],
    
    // პარამეტრები
    settings: JSON.parse(localStorage.getItem('settings')) || {
        language: 'ka',
        theme: 'dark',
        autoSave: true,
        autoSaveInterval: 30000,
        showCompletedTasks: true,
        defaultPriority: 'medium',
        emailNotifications: true,
        reminderDays: 7
    },
    
    // UI მდგომარეობა
    ui: {
        sidebarOpen: false,
        modalOpen: null,
        loading: false,
        expandedEquipment: [],
        activeTab: 'tasks'
    }
};

// =================================================================
// 3. LocalStorage მენეჯმენტი
// =================================================================

function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('LocalStorage შენახვის შეცდომა:', e);
        showToast('შენახვის შეცდომა', 'error');
        return false;
    }
}

function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.error('LocalStorage წაკითხვის შეცდომა:', e);
        return defaultValue;
    }
}

function saveAllState() {
    saveToLocalStorage('inspections', appState.inspections);
    saveToLocalStorage('objects', appState.objects);
    saveToLocalStorage('inspectors', appState.inspectors);
    saveToLocalStorage('scheduledInspections', appState.scheduledInspections);
    saveToLocalStorage('notifications', appState.notifications);
    saveToLocalStorage('settings', appState.settings);
    saveToLocalStorage('userRole', appState.userRole);
    saveToLocalStorage('currentUser', appState.currentUser);
    
    // მიმდინარე ინსპექტირების დროებითი შენახვა
    if (appState.currentView === 'system' && !appState.currentInspectionId) {
        saveToLocalStorage('tempInspection', appState.inspectionData);
    }
}

// ავტომატური შენახვა
let autoSaveInterval = null;

function startAutoSave() {
    if (appState.settings.autoSave && !autoSaveInterval) {
        autoSaveInterval = setInterval(() => {
            saveAllState();
            console.log('ავტომატური შენახვა:', new Date().toLocaleTimeString());
        }, appState.settings.autoSaveInterval);
    }
}

function stopAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
        autoSaveInterval = null;
    }
}

// =================================================================
// 4. Utility ფუნქციები
// =================================================================

// თარიღის ფორმატირება
function formatDate(dateString, format = 'full') {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = {
        full: { year: 'numeric', month: 'long', day: 'numeric' },
        short: { year: 'numeric', month: '2-digit', day: '2-digit' },
        time: { hour: '2-digit', minute: '2-digit' },
        datetime: { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    };
    return date.toLocaleDateString('ka-GE', options[format] || options.full);
}

// დროის გამოთვლა (რამდენი დრო გავიდა)
function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    const intervals = {
        წელი: 31536000,
        თვე: 2592000,
        კვირა: 604800,
        დღე: 86400,
        საათი: 3600,
        წუთი: 60
    };
    
    for (const [name, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${name}${interval > 1 ? '' : ''} წინ`;
        }
    }
    return 'ახლახანს';
}

// დარჩენილი დროის გამოთვლა
function timeUntil(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = date - now;
    
    if (diff < 0) return { overdue: true, text: 'ვადაგადაცილებული' };
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return { overdue: false, text: `${days} დღე დარჩა`, days };
    if (hours > 0) return { overdue: false, text: `${hours} საათი დარჩა`, days: 0 };
    return { overdue: false, text: 'დღეს', days: 0 };
}

// უნიკალური ID გენერატორი
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ტექსტის შემოკლება
function truncateText(text, maxLength = 50) {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// ობიექტის ღრმა კოპირება
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// დებაუნსი
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =================================================================
// 5. პროგრესის გამოთვლის ფუნქციები
// =================================================================

function getTaskStatus(taskId) {
    return appState.inspectionData.tasks[taskId] || { 
        status: 'pending', 
        note: '', 
        measurement: '',
        photo: null,
        timestamp: null,
        priority: 'medium'
    };
}

function calculateProgress(systemKey, equipmentKey, tasksData = appState.inspectionData.tasks) {
    if (!systemKey || !systemsData[systemKey]) return { completed: 0, total: 0, percentage: 0 };
    
    const equipment = systemsData[systemKey].equipment[equipmentKey];
    if (!equipment) return { completed: 0, total: 0, percentage: 0 };
    
    const total = equipment.tasks.length;
    const completed = equipment.tasks.filter(t =>
        tasksData[t.id]?.status && tasksData[t.id].status !== 'pending'
    ).length;
    
    const ok = equipment.tasks.filter(t => tasksData[t.id]?.status === 'ok').length;
    const warning = equipment.tasks.filter(t => tasksData[t.id]?.status === 'warning').length;
    const problem = equipment.tasks.filter(t => tasksData[t.id]?.status === 'problem').length;
    
    return { 
        completed, 
        total, 
        percentage: Math.round((completed / total) * 100),
        ok,
        warning,
        problem,
        pending: total - completed
    };
}

function calculateSystemProgress(systemKey, tasksData = appState.inspectionData.tasks) {
    if (!systemKey || !systemsData[systemKey]) return { completed: 0, total: 0, percentage: 0 };
    
    const system = systemsData[systemKey];
    let total = 0;
    let completed = 0;
    let ok = 0;
    let warning = 0;
    let problem = 0;
    
    Object.values(system.equipment).forEach(eq => {
        total += eq.tasks.length;
        eq.tasks.forEach(t => {
            const status = tasksData[t.id]?.status;
            if (status && status !== 'pending') completed++;
            if (status === 'ok') ok++;
            if (status === 'warning') warning++;
            if (status === 'problem') problem++;
        });
    });
    
    return { 
        completed, 
        total, 
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        ok,
        warning,
        problem,
        pending: total - completed
    };
}

function calculateOverallProgress(tasksData = appState.inspectionData.tasks) {
    let total = 0;
    let completed = 0;
    let ok = 0;
    let warning = 0;
    let problem = 0;
    
    Object.values(systemsData).forEach(system => {
        Object.values(system.equipment).forEach(eq => {
            total += eq.tasks.length;
            eq.tasks.forEach(t => {
                const status = tasksData[t.id]?.status;
                if (status && status !== 'pending') completed++;
                if (status === 'ok') ok++;
                if (status === 'warning') warning++;
                if (status === 'problem') problem++;
            });
        });
    });
    
    return { 
        completed, 
        total, 
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        ok,
        warning,
        problem,
        pending: total - completed
    };
}

// =================================================================
// 6. ფილტრაცია და ძებნა
// =================================================================

function filterInspections(inspections = appState.inspections) {
    let filtered = [...inspections];
    const { status, system, dateFrom, dateTo, inspector, priority, object } = appState.filters;
    
    // სტატუსით ფილტრაცია
    if (status !== 'all') {
        filtered = filtered.filter(ins => {
            if (status === 'completed') return ins.progress?.percentage === 100;
            if (status === 'in_progress') return ins.progress?.percentage > 0 && ins.progress?.percentage < 100;
            if (status === 'pending') return !ins.progress || ins.progress?.percentage === 0;
            if (status === 'has_problems') return ins.progress?.problem > 0;
            return true;
        });
    }
    
    // სისტემით ფილტრაცია
    if (system !== 'all') {
        filtered = filtered.filter(ins => ins.systemKey === system);
    }
    
    // თარიღით ფილტრაცია
    if (dateFrom) {
        filtered = filtered.filter(ins => new Date(ins.date) >= new Date(dateFrom));
    }
    if (dateTo) {
        filtered = filtered.filter(ins => new Date(ins.date) <= new Date(dateTo));
    }
    
    // ინსპექტორით ფილტრაცია
    if (inspector !== 'all') {
        filtered = filtered.filter(ins => ins.inspector === inspector);
    }
    
    // პრიორიტეტით ფილტრაცია
    if (priority !== 'all') {
        filtered = filtered.filter(ins => ins.priority === priority);
    }
    
    // ობიექტით ფილტრაცია
    if (object !== 'all') {
        filtered = filtered.filter(ins => ins.objectName === object);
    }
    
    // ძებნა
    if (appState.searchQuery) {
        const query = appState.searchQuery.toLowerCase();
        filtered = filtered.filter(ins => 
            ins.objectName?.toLowerCase().includes(query) ||
            ins.inspector?.toLowerCase().includes(query) ||
            ins.serialNumber?.toLowerCase().includes(query) ||
            ins.systemName?.toLowerCase().includes(query) ||
            ins.comments?.toLowerCase().includes(query)
        );
    }
    
    // სორტირება
    filtered.sort((a, b) => {
        let comparison = 0;
        switch (appState.sortBy) {
            case 'date':
                comparison = new Date(b.date) - new Date(a.date);
                break;
            case 'object':
                comparison = (a.objectName || '').localeCompare(b.objectName || '');
                break;
            case 'progress':
                comparison = (b.progress?.percentage || 0) - (a.progress?.percentage || 0);
                break;
            case 'priority':
                const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
                comparison = (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
                break;
            default:
                comparison = new Date(b.savedAt) - new Date(a.savedAt);
        }
        return appState.sortOrder === 'asc' ? -comparison : comparison;
    });
    
    return filtered;
}

function searchTasks(query, systemKey = null) {
    const results = [];
    const systems = systemKey ? { [systemKey]: systemsData[systemKey] } : systemsData;
    
    Object.entries(systems).forEach(([sysKey, system]) => {
        Object.entries(system.equipment).forEach(([eqKey, equipment]) => {
            equipment.tasks.forEach(task => {
                if (task.name.toLowerCase().includes(query.toLowerCase()) ||
                    task.type.toLowerCase().includes(query.toLowerCase())) {
                    results.push({
                        ...task,
                        systemKey: sysKey,
                        systemName: system.name,
                        equipmentKey: eqKey,
                        equipmentName: equipment.name
                    });
                }
            });
        });
    });
    
    return results;
}

// =================================================================
// 7. სტატისტიკა და ანალიტიკა
// =================================================================

function getInspectionStatistics(inspections = appState.inspections) {
    const stats = {
        total: inspections.length,
        completed: 0,
        inProgress: 0,
        pending: 0,
        withProblems: 0,
        withWarnings: 0,
        bySystem: {},
        byInspector: {},
        byMonth: {},
        byPriority: { critical: 0, high: 0, medium: 0, low: 0 },
        averageCompletionTime: 0,
        problemsFound: 0,
        warningsFound: 0
    };
    
    let totalCompletionTime = 0;
    let completedWithTime = 0;
    
    inspections.forEach(ins => {
        // სტატუსის სტატისტიკა
        if (ins.progress?.percentage === 100) {
            stats.completed++;
        } else if (ins.progress?.percentage > 0) {
            stats.inProgress++;
        } else {
            stats.pending++;
        }
        
        // პრობლემები და გაფრთხილებები
        if (ins.progress?.problem > 0) {
            stats.withProblems++;
            stats.problemsFound += ins.progress.problem;
        }
        if (ins.progress?.warning > 0) {
            stats.withWarnings++;
            stats.warningsFound += ins.progress.warning;
        }
        
        // სისტემის სტატისტიკა
        const sysKey = ins.systemKey || 'unknown';
        stats.bySystem[sysKey] = (stats.bySystem[sysKey] || 0) + 1;
        
        // ინსპექტორის სტატისტიკა
        const inspector = ins.inspector || 'უცნობი';
        stats.byInspector[inspector] = (stats.byInspector[inspector] || 0) + 1;
        
        // თვის სტატისტიკა
        const month = ins.date?.substring(0, 7) || 'unknown';
        stats.byMonth[month] = (stats.byMonth[month] || 0) + 1;
        
        // პრიორიტეტის სტატისტიკა
        const priority = ins.priority || 'medium';
        stats.byPriority[priority]++;
        
        // შესრულების დრო
        if (ins.startTime && ins.endTime) {
            const start = new Date(`${ins.date}T${ins.startTime}`);
            const end = new Date(`${ins.date}T${ins.endTime}`);
            const duration = (end - start) / (1000 * 60); // წუთებში
            if (duration > 0) {
                totalCompletionTime += duration;
                completedWithTime++;
            }
        }
    });
    
    if (completedWithTime > 0) {
        stats.averageCompletionTime = Math.round(totalCompletionTime / completedWithTime);
    }
    
    return stats;
}

function getProblematicEquipment(inspections = appState.inspections) {
    const equipmentProblems = {};
    
    inspections.forEach(ins => {
        if (!ins.tasks) return;
        
        Object.entries(ins.tasks).forEach(([taskId, taskData]) => {
            if (taskData.status === 'problem' || taskData.status === 'warning') {
                // დავალების მოძებნა
                Object.entries(systemsData).forEach(([sysKey, system]) => {
                    Object.entries(system.equipment).forEach(([eqKey, equipment]) => {
                        const task = equipment.tasks.find(t => t.id === taskId);
                        if (task) {
                            const key = `${sysKey}_${eqKey}`;
                            if (!equipmentProblems[key]) {
                                equipmentProblems[key] = {
                                    systemKey: sysKey,
                                    systemName: system.name,
                                    equipmentKey: eqKey,
                                    equipmentName: equipment.name,
                                    problems: 0,
                                    warnings: 0,
                                    issues: []
                                };
                            }
                            if (taskData.status === 'problem') {
                                equipmentProblems[key].problems++;
                            } else {
                                equipmentProblems[key].warnings++;
                            }
                            equipmentProblems[key].issues.push({
                                task: task.name,
                                status: taskData.status,
                                note: taskData.note,
                                date: ins.date,
                                object: ins.objectName
                            });
                        }
                    });
                });
            }
        });
    });
    
    return Object.values(equipmentProblems).sort((a, b) => 
        (b.problems + b.warnings) - (a.problems + a.warnings)
    );
}

function getUpcomingInspections(days = 7) {
    const now = new Date();
    const futureDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    
    return appState.scheduledInspections.filter(ins => {
        const insDate = new Date(ins.scheduledDate);
        return insDate >= now && insDate <= futureDate;
    }).sort((a, b) => new Date(a.scheduledDate) - new Date(b.scheduledDate));
}

function getOverdueInspections() {
    const now = new Date();
    
    return appState.scheduledInspections.filter(ins => {
        const insDate = new Date(ins.scheduledDate);
        return insDate < now && ins.status !== 'completed';
    }).sort((a, b) => new Date(a.scheduledDate) - new Date(b.scheduledDate));
}

// =================================================================
// 8. ვალიდაცია
// =================================================================

function validateInspection(data = appState.inspectionData) {
    const errors = [];
    
    if (!data.objectName?.trim()) {
        errors.push({ field: 'objectName', message: 'ობიექტის სახელი სავალდებულოა' });
    }
    
    if (!data.inspector?.trim()) {
        errors.push({ field: 'inspector', message: 'ინსპექტორის სახელი სავალდებულოა' });
    }
    
    if (!data.date) {
        errors.push({ field: 'date', message: 'თარიღი სავალდებულოა' });
    }
    
    // შემოწმება არის თუ არა რომელიმე დავალება შევსებული
    const hasAnyTask = Object.values(data.tasks || {}).some(t => t.status !== 'pending');
    if (!hasAnyTask) {
        errors.push({ field: 'tasks', message: 'მინიმუმ ერთი დავალება უნდა იყოს შესრულებული' });
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

function validateScheduledInspection(data) {
    const errors = [];
    
    if (!data.objectName?.trim()) {
        errors.push({ field: 'objectName', message: 'ობიექტის სახელი სავალდებულოა' });
    }
    
    if (!data.scheduledDate) {
        errors.push({ field: 'scheduledDate', message: 'დაგეგმილი თარიღი სავალდებულოა' });
    } else if (new Date(data.scheduledDate) < new Date()) {
        errors.push({ field: 'scheduledDate', message: 'თარიღი არ შეიძლება იყოს წარსულში' });
    }
    
    if (!data.assignedTo) {
        errors.push({ field: 'assignedTo', message: 'ინსპექტორი უნდა იყოს მინიჭებული' });
    }
    
    if (!data.systemKey) {
        errors.push({ field: 'systemKey', message: 'სისტემა უნდა იყოს არჩეული' });
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

// =================================================================
// 9. შეტყობინებები (Toast Notifications)
// =================================================================

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const icons = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ'
    };
    
    const colors = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-blue-600'
    };
    
    const toast = document.createElement('div');
    toast.className = `${colors[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in`;
    toast.innerHTML = `
        <span class="text-lg">${icons[type]}</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// =================================================================
// 10. მოდალის მართვა
// =================================================================

function openModal(modalType, data = null) {
    appState.ui.modalOpen = { type: modalType, data };
    renderApp();
}

function closeModal() {
    appState.ui.modalOpen = null;
    renderApp();
}

function renderModal() {
    const modal = appState.ui.modalOpen;
    if (!modal) return '';
    
    const modalContent = {
        'confirm': renderConfirmModal,
        'photo': renderPhotoModal,
        'schedule': renderScheduleModal,
        'filter': renderFilterModal,
        'inspector': renderInspectorModal,
        'object': renderObjectModal,
        'details': renderDetailsModal,
        'signature': renderSignatureModal
    };
    
    const contentRenderer = modalContent[modal.type];
    if (!contentRenderer) return '';
    
    return `
        <div class="fixed inset-0 z-50 flex items-center justify-center modal-backdrop" onclick="if(event.target === this) closeModal()">
            <div class="bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto animate-slide-in">
                ${contentRenderer(modal.data)}
            </div>
        </div>
    `;
}

function renderConfirmModal(data) {
    return `
        <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-4">${data?.title || 'დადასტურება'}</h3>
            <p class="text-slate-300 mb-6">${data?.message || 'დარწმუნებული ხართ?'}</p>
            <div class="flex gap-3 justify-end">
                <button onclick="closeModal()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    გაუქმება
                </button>
                <button onclick="${data?.onConfirm}" class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors">
                    ${data?.confirmText || 'დადასტურება'}
                </button>
            </div>
        </div>
    `;
}

function renderPhotoModal(data) {
    return `
        <div class="p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-white">ფოტოს დამატება</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-white">✕</button>
            </div>
            <div class="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center mb-4">
                <input type="file" id="photo-input" accept="image/*" class="hidden" onchange="handlePhotoUpload(event, '${data?.taskId}')" />
                <label for="photo-input" class="cursor-pointer">
                    <div class="text-4xl mb-2">📷</div>
                    <p class="text-slate-400">დააჭირეთ ფოტოს ასატვირთად</p>
                    <p class="text-slate-500 text-sm mt-1">ან გადაიტანეთ ფაილი აქ</p>
                </label>
            </div>
            ${data?.currentPhoto ? `
                <div class="mb-4">
                    <p class="text-slate-400 text-sm mb-2">მიმდინარე ფოტო:</p>
                    <img src="${data.currentPhoto}" class="w-full rounded-lg" alt="Current photo" />
                </div>
            ` : ''}
        </div>
    `;
}

function renderScheduleModal(data) {
    const isEdit = !!data?.id;
    return `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-white">${isEdit ? 'ინსპექტირების რედაქტირება' : 'ახალი ინსპექტირების დაგეგმვა'}</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-white text-xl">✕</button>
            </div>
            <div class="space-y-4">
                <div>
                    <label class="block text-slate-400 text-sm mb-1">ობიექტი *</label>
                    <input type="text" id="schedule-object" value="${data?.objectName || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="ობიექტის სახელი" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">სისტემა *</label>
                    <select id="schedule-system" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white">
                        <option value="">აირჩიეთ სისტემა</option>
                        ${Object.entries(systemsData).map(([key, sys]) => `
                            <option value="${key}" ${data?.systemKey === key ? 'selected' : ''}>${sys.icon} ${sys.name}</option>
                        `).join('')}
                    </select>
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">თარიღი *</label>
                    <input type="date" id="schedule-date" value="${data?.scheduledDate || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">ინსპექტორი *</label>
                    <select id="schedule-inspector" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white">
                        <option value="">აირჩიეთ ინსპექტორი</option>
                        ${appState.inspectors.map(ins => `
                            <option value="${ins.id}" ${data?.assignedTo === ins.id ? 'selected' : ''}>${ins.name}</option>
                        `).join('')}
                    </select>
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">პრიორიტეტი</label>
                    <select id="schedule-priority" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white">
                        ${priorityOptions.map(p => `
                            <option value="${p.value}" ${data?.priority === p.value ? 'selected' : ''}>${p.icon} ${p.label}</option>
                        `).join('')}
                    </select>
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">შენიშვნა</label>
                    <textarea id="schedule-notes" rows="3" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="დამატებითი ინფორმაცია...">${data?.notes || ''}</textarea>
                </div>
            </div>
            <div class="flex gap-3 justify-end mt-6">
                <button onclick="closeModal()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    გაუქმება
                </button>
                <button onclick="saveScheduledInspection(${isEdit ? `'${data.id}'` : 'null'})" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    ${isEdit ? 'განახლება' : 'დაგეგმვა'}
                </button>
            </div>
        </div>
    `;
}

function renderFilterModal(data) {
    return `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-white">ფილტრები</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-white text-xl">✕</button>
            </div>
            <div class="space-y-4">
                <div>
                    <label class="block text-slate-400 text-sm mb-1">სტატუსი</label>
                    <select id="filter-status" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" 
                        onchange="updateFilter('status', this.value)">
                        <option value="all" ${appState.filters.status === 'all' ? 'selected' : ''}>ყველა</option>
                        <option value="completed" ${appState.filters.status === 'completed' ? 'selected' : ''}>დასრულებული</option>
                        <option value="in_progress" ${appState.filters.status === 'in_progress' ? 'selected' : ''}>მიმდინარე</option>
                        <option value="pending" ${appState.filters.status === 'pending' ? 'selected' : ''}>დაუწყებელი</option>
                        <option value="has_problems" ${appState.filters.status === 'has_problems' ? 'selected' : ''}>პრობლემებით</option>
                    </select>
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">სისტემა</label>
                    <select id="filter-system" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                        onchange="updateFilter('system', this.value)">
                        <option value="all">ყველა სისტემა</option>
                        ${Object.entries(systemsData).map(([key, sys]) => `
                            <option value="${key}" ${appState.filters.system === key ? 'selected' : ''}>${sys.name}</option>
                        `).join('')}
                    </select>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-slate-400 text-sm mb-1">თარიღი (დან)</label>
                        <input type="date" id="filter-date-from" value="${appState.filters.dateFrom}"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                            onchange="updateFilter('dateFrom', this.value)" />
                    </div>
                    <div>
                        <label class="block text-slate-400 text-sm mb-1">თარიღი (მდე)</label>
                        <input type="date" id="filter-date-to" value="${appState.filters.dateTo}"
                            class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                            onchange="updateFilter('dateTo', this.value)" />
                    </div>
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">პრიორიტეტი</label>
                    <select id="filter-priority" class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white"
                        onchange="updateFilter('priority', this.value)">
                        <option value="all">ყველა</option>
                        ${priorityOptions.map(p => `
                            <option value="${p.value}" ${appState.filters.priority === p.value ? 'selected' : ''}>${p.icon} ${p.label}</option>
                        `).join('')}
                    </select>
                </div>
            </div>
            <div class="flex gap-3 justify-end mt-6">
                <button onclick="resetFilters()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    გასუფთავება
                </button>
                <button onclick="closeModal()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    დახურვა
                </button>
            </div>
        </div>
    `;
}

function renderInspectorModal(data) {
    const isEdit = !!data?.id;
    return `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-white">${isEdit ? 'ინსპექტორის რედაქტირება' : 'ახალი ინსპექტორი'}</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-white text-xl">✕</button>
            </div>
            <div class="space-y-4">
                <div>
                    <label class="block text-slate-400 text-sm mb-1">სახელი *</label>
                    <input type="text" id="inspector-name" value="${data?.name || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="სრული სახელი" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">ელ. ფოსტა</label>
                    <input type="email" id="inspector-email" value="${data?.email || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="email@example.com" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">ტელეფონი</label>
                    <input type="tel" id="inspector-phone" value="${data?.phone || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="+995 XXX XXXXXX" />
                </div>
            </div>
            <div class="flex gap-3 justify-end mt-6">
                <button onclick="closeModal()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    გაუქმება
                </button>
                <button onclick="saveInspector(${isEdit ? `'${data.id}'` : 'null'})" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    ${isEdit ? 'განახლება' : 'დამატება'}
                </button>
            </div>
        </div>
    `;
}

function renderObjectModal(data) {
    const isEdit = !!data?.id;
    return `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-white">${isEdit ? 'ობიექტის რედაქტირება' : 'ახალი ობიექტი'}</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-white text-xl">✕</button>
            </div>
            <div class="space-y-4">
                <div>
                    <label class="block text-slate-400 text-sm mb-1">დასახელება *</label>
                    <input type="text" id="object-name" value="${data?.name || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="ობიექტის სახელი" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">მისამართი</label>
                    <input type="text" id="object-address" value="${data?.address || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="მისამართი" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">საკონტაქტო პირი</label>
                    <input type="text" id="object-contact" value="${data?.contact || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="საკონტაქტო პირის სახელი" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">ტელეფონი</label>
                    <input type="tel" id="object-phone" value="${data?.phone || ''}" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="+995 XXX XXXXXX" />
                </div>
                <div>
                    <label class="block text-slate-400 text-sm mb-1">შენიშვნა</label>
                    <textarea id="object-notes" rows="3" 
                        class="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white" placeholder="დამატებითი ინფორმაცია...">${data?.notes || ''}</textarea>
                </div>
            </div>
            <div class="flex gap-3 justify-end mt-6">
                <button onclick="closeModal()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    გაუქმება
                </button>
                <button onclick="saveObject(${isEdit ? `'${data.id}'` : 'null'})" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    ${isEdit ? 'განახლება' : 'დამატება'}
                </button>
            </div>
        </div>
    `;
}

function renderDetailsModal(data) {
    if (!data) return '';
    const progress = data.progress || { percentage: 0, ok: 0, warning: 0, problem: 0 };
    
    return `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold text-white">ინსპექტირების დეტალები</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-white text-xl">✕</button>
            </div>
            
            <div class="space-y-4">
                <div class="bg-slate-700/50 rounded-xl p-4">
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span class="text-slate-400">ობიექტი:</span>
                            <p class="text-white font-medium">${data.objectName || '—'}</p>
                        </div>
                        <div>
                            <span class="text-slate-400">თარიღი:</span>
                            <p class="text-white font-medium">${formatDate(data.date)}</p>
                        </div>
                        <div>
                            <span class="text-slate-400">ინსპექტორი:</span>
                            <p class="text-white font-medium">${data.inspector || '—'}</p>
                        </div>
                        <div>
                            <span class="text-slate-400">სისტემა:</span>
                            <p class="text-white font-medium">${data.systemName || '—'}</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-slate-700/50 rounded-xl p-4">
                    <h4 class="text-white font-medium mb-3">პროგრესი</h4>
                    <div class="h-3 bg-slate-600 rounded-full overflow-hidden mb-2">
                        <div class="h-full bg-blue-500 rounded-full" style="width: ${progress.percentage}%"></div>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-green-400">✓ ${progress.ok || 0}</span>
                        <span class="text-yellow-400">⚠ ${progress.warning || 0}</span>
                        <span class="text-red-400">✗ ${progress.problem || 0}</span>
                        <span class="text-slate-400">${progress.percentage}%</span>
                    </div>
                </div>
                
                ${data.comments ? `
                    <div class="bg-slate-700/50 rounded-xl p-4">
                        <h4 class="text-white font-medium mb-2">კომენტარი</h4>
                        <p class="text-slate-300 text-sm">${data.comments}</p>
                    </div>
                ` : ''}
            </div>
            
            <div class="flex gap-3 justify-end mt-6">
                <button onclick="closeModal()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    დახურვა
                </button>
                <button onclick="loadSavedInspection(${data.id}); closeModal();" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    რედაქტირება
                </button>
            </div>
        </div>
    `;
}

function renderSignatureModal(data) {
    return `
        <div class="p-6">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-white">ხელმოწერა</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-white">✕</button>
            </div>
            <div class="bg-white rounded-xl mb-4" style="height: 200px;">
                <canvas id="signature-canvas" class="w-full h-full rounded-xl" style="touch-action: none;"></canvas>
            </div>
            <div class="flex gap-3 justify-end">
                <button onclick="clearSignature()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
                    გასუფთავება
                </button>
                <button onclick="saveSignature('${data?.type || 'inspector'}')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    შენახვა
                </button>
            </div>
        </div>
    `;
}

// =================================================================
// 11. CRUD ოპერაციები - ინსპექტირებები
// =================================================================

window.updateStateAndRender = function(updates) {
    Object.assign(appState, updates);
    renderApp();
    saveAllState();
}

window.handleInputChange = function(field, value, taskId = null) {
    if (taskId) {
        if (!appState.inspectionData.tasks[taskId]) {
            appState.inspectionData.tasks[taskId] = {
                status: 'pending',
                note: '',
                measurement: '',
                photo: null,
                timestamp: null
            };
        }
        appState.inspectionData.tasks[taskId][field] = value;
        appState.inspectionData.tasks[taskId].timestamp = new Date().toISOString();
    } else {
        appState.inspectionData[field] = value;
    }
    renderApp();
    saveAllState();
}

window.quickUpdateStatus = function(taskId, newStatus) {
    const currentTask = appState.inspectionData.tasks[taskId] || {};
    const currentStatus = currentTask.status || 'pending';
    const statusToSet = currentStatus === newStatus ? 'pending' : newStatus;
    
    appState.inspectionData.tasks[taskId] = {
        ...currentTask,
        status: statusToSet,
        timestamp: new Date().toISOString()
    };
    
    // თუ პრობლემაა, გავხსნათ შენიშვნის ველი
    if (statusToSet === 'problem' || statusToSet === 'warning') {
        // ფოკუსი შენიშვნის ველზე
        setTimeout(() => {
            const noteInput = document.querySelector(`input[data-task-note="${taskId}"]`);
            if (noteInput) noteInput.focus();
        }, 100);
    }
    
    renderApp();
    saveAllState();
    
    // შეტყობინება
    const statusLabels = { ok: 'კარგი', warning: 'ყურადღება', problem: 'პრობლემა', na: 'N/A', pending: 'მოლოდინში' };
    showToast(`სტატუსი: ${statusLabels[statusToSet]}`, statusToSet === 'ok' ? 'success' : statusToSet === 'problem' ? 'error' : 'info', 1500);
}

window.bulkUpdateStatus = function(equipmentKey, status) {
    const system = systemsData[appState.selectedSystem];
    if (!system) return;
    
    const equipment = system.equipment[equipmentKey];
    if (!equipment) return;
    
    equipment.tasks.forEach(task => {
        appState.inspectionData.tasks[task.id] = {
            ...appState.inspectionData.tasks[task.id],
            status: status,
            timestamp: new Date().toISOString()
        };
    });
    
    renderApp();
    saveAllState();
    showToast(`ყველა დავალება მონიშნულია: ${status}`, 'success');
}

window.saveInspection = function() {
    if (!appState.selectedSystem) {
        showToast('სისტემა არ არის არჩეული', 'error');
        return;
    }
    
    // ვალიდაცია
    const validation = validateInspection(appState.inspectionData);
    if (!validation.isValid) {
        validation.errors.forEach(err => showToast(err.message, 'error'));
        return;
    }
    
    const systemKey = appState.selectedSystem;
    const system = systemsData[systemKey];
    const isEditing = appState.currentInspectionId !== null;
    
    const newInspection = {
        id: isEditing ? appState.currentInspectionId : generateId(),
        ...deepClone(appState.inspectionData),
        savedAt: new Date().toISOString(),
        systemKey: systemKey,
        systemName: system.name,
        progress: calculateSystemProgress(systemKey, appState.inspectionData.tasks),
        version: isEditing ? ((appState.inspections.find(i => i.id === appState.currentInspectionId)?.version || 0) + 1) : 1
    };
    
    if (isEditing) {
        const index = appState.inspections.findIndex(i => i.id === appState.currentInspectionId);
        if (index !== -1) {
            // ისტორიის შენახვა
            if (!appState.inspections[index].history) {
                appState.inspections[index].history = [];
            }
            appState.inspections[index].history.push({
                ...appState.inspections[index],
                archivedAt: new Date().toISOString()
            });
            appState.inspections[index] = newInspection;
        }
        showToast('ინსპექტირება წარმატებით განახლდა!', 'success');
    } else {
        appState.inspections.unshift(newInspection);
        showToast('ინსპექტირება წარმატებით შენახულია!', 'success');
        
        // შეტყობინების დამატება მენეჯერისთვის
        addNotification({
            type: 'new_inspection',
            title: 'ახალი ინსპექტირება',
            message: `${newInspection.inspector} - ${newInspection.objectName}`,
            inspectionId: newInspection.id,
            date: new Date().toISOString()
        });
    }
    
    // მდგომარეობის გასუფთავება
    resetInspectionData();
    
    updateStateAndRender({
        currentView: 'home',
        selectedSystem: null,
        selectedEquipment: null,
        currentInspectionId: null
    });
}

window.loadSavedInspection = function(id) {
    const inspection = appState.inspections.find(i => i.id === id);
    if (!inspection) {
        showToast('ინსპექტირება ვერ მოიძებნა', 'error');
        return;
    }
    
    appState.inspectionData = deepClone({
        objectName: inspection.objectName || '',
        objectAddress: inspection.objectAddress || '',
        inspector: inspection.inspector || '',
        serialNumber: inspection.serialNumber || '',
        date: inspection.date || new Date().toISOString().split('T')[0],
        startTime: inspection.startTime || '',
        endTime: inspection.endTime || '',
        weather: inspection.weather || '',
        temperature: inspection.temperature || '',
        tasks: inspection.tasks || {},
        photos: inspection.photos || {},
        signatures: inspection.signatures || {},
        comments: inspection.comments || '',
        priority: inspection.priority || 'medium',
        nextInspectionDate: inspection.nextInspectionDate || '',
        assignedTo: inspection.assignedTo || ''
    });
    
    appState.currentInspectionId = inspection.id;
    appState.selectedSystem = inspection.systemKey;
    
    updateStateAndRender({
        currentView: 'system',
        selectedEquipment: null
    });
    
    showToast('ინსპექტირება ჩატვირთულია', 'info');
}

window.deleteInspection = function(id) {
    openModal('confirm', {
        title: 'ინსპექტირების წაშლა',
        message: 'ნამდვილად გსურთ ამ ინსპექტირების წაშლა? ეს მოქმედება შეუქცევადია.',
        confirmText: 'წაშლა',
        onConfirm: `confirmDeleteInspection('${id}')`
    });
}

window.confirmDeleteInspection = function(id) {
    appState.inspections = appState.inspections.filter(i => i.id !== id);
    closeModal();
    updateStateAndRender({ currentView: 'home' });
    showToast('ინსპექტირება წაშლილია', 'success');
}

window.duplicateInspection = function(id) {
    const inspection = appState.inspections.find(i => i.id === id);
    if (!inspection) return;
    
    const duplicate = deepClone(inspection);
    duplicate.id = generateId();
    duplicate.date = new Date().toISOString().split('T')[0];
    duplicate.savedAt = new Date().toISOString();
    duplicate.objectName = `${inspection.objectName} (ასლი)`;
    duplicate.version = 1;
    delete duplicate.history;
    
    // დავალებების სტატუსების გასუფთავება
    Object.keys(duplicate.tasks).forEach(taskId => {
        duplicate.tasks[taskId] = {
            ...duplicate.tasks[taskId],
            status: 'pending',
            timestamp: null
        };
    });
    duplicate.progress = { percentage: 0, ok: 0, warning: 0, problem: 0, pending: duplicate.progress?.total || 0 };
    
    appState.inspections.unshift(duplicate);
    saveAllState();
    renderApp();
    showToast('ინსპექტირება დუბლირებულია', 'success');
}

function resetInspectionData() {
    appState.inspectionData = {
        objectName: '',
        objectAddress: '',
        inspector: appState.currentUser?.name || '',
        serialNumber: '',
        date: new Date().toISOString().split('T')[0],
        startTime: '',
        endTime: '',
        weather: '',
        temperature: '',
        tasks: {},
        photos: {},
        signatures: {},
        comments: '',
        priority: 'medium',
        nextInspectionDate: '',
        assignedTo: ''
    };
    localStorage.removeItem('tempInspection');
}

// =================================================================
// 12. CRUD ოპერაციები - დაგეგმილი ინსპექტირებები
// =================================================================

window.saveScheduledInspection = function(id = null) {
    const data = {
        objectName: document.getElementById('schedule-object')?.value?.trim(),
        systemKey: document.getElementById('schedule-system')?.value,
        scheduledDate: document.getElementById('schedule-date')?.value,
        assignedTo: document.getElementById('schedule-inspector')?.value,
        priority: document.getElementById('schedule-priority')?.value || 'medium',
        notes: document.getElementById('schedule-notes')?.value?.trim()
    };
    
    const validation = validateScheduledInspection(data);
    if (!validation.isValid) {
        validation.errors.forEach(err => showToast(err.message, 'error'));
        return;
    }
    
    const inspector = appState.inspectors.find(i => i.id == data.assignedTo);
    
    const scheduled = {
        id: id || generateId(),
        ...data,
        inspectorName: inspector?.name || '',
        systemName: systemsData[data.systemKey]?.name || '',
        status: 'scheduled',
        createdAt: id ? undefined : new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    if (id) {
        const index = appState.scheduledInspections.findIndex(s => s.id === id);
        if (index !== -1) {
            scheduled.createdAt = appState.scheduledInspections[index].createdAt;
            appState.scheduledInspections[index] = scheduled;
        }
        showToast('გეგმა განახლებულია', 'success');
    } else {
        appState.scheduledInspections.push(scheduled);
        showToast('ინსპექტირება დაგეგმილია', 'success');
        
        // შეტყობინება ინსპექტორისთვის
        addNotification({
            type: 'scheduled',
            title: 'ახალი დავალება',
            message: `${data.objectName} - ${formatDate(data.scheduledDate)}`,
            scheduledId: scheduled.id,
            assignedTo: data.assignedTo,
            date: new Date().toISOString()
        });
    }
    
    closeModal();
    saveAllState();
    renderApp();
}

window.deleteScheduledInspection = function(id) {
    openModal('confirm', {
        title: 'დაგეგმილი ინსპექტირების წაშლა',
        message: 'ნამდვილად გსურთ ამ გეგმის წაშლა?',
        confirmText: 'წაშლა',
        onConfirm: `confirmDeleteScheduled('${id}')`
    });
}

window.confirmDeleteScheduled = function(id) {
    appState.scheduledInspections = appState.scheduledInspections.filter(s => s.id !== id);
    closeModal();
    saveAllState();
    renderApp();
    showToast('გეგმა წაშლილია', 'success');
}

window.startScheduledInspection = function(id) {
    const scheduled = appState.scheduledInspections.find(s => s.id === id);
    if (!scheduled) return;
    
    // მდგომარეობის განახლება
    scheduled.status = 'in_progress';
    scheduled.startedAt = new Date().toISOString();
    
    // ინსპექტირების მონაცემების შევსება
    appState.inspectionData = {
        objectName: scheduled.objectName,
        objectAddress: scheduled.objectAddress || '',
        inspector: scheduled.inspectorName,
        serialNumber: '',
        date: new Date().toISOString().split('T')[0],
        startTime: new Date().toTimeString().slice(0, 5),
        endTime: '',
        weather: '',
        temperature: '',
        tasks: {},
        photos: {},
        signatures: {},
        comments: scheduled.notes || '',
        priority: scheduled.priority,
        nextInspectionDate: '',
        assignedTo: scheduled.assignedTo,
        scheduledId: id
    };
    
    appState.selectedSystem = scheduled.systemKey;
    
    updateStateAndRender({
        currentView: 'system',
        selectedEquipment: null,
        currentInspectionId: null
    });
    
    showToast('ინსპექტირება დაწყებულია', 'info');
}

// =================================================================
// 13. CRUD ოპერაციები - ინსპექტორები
// =================================================================

window.saveInspector = function(id = null) {
    const name = document.getElementById('inspector-name')?.value?.trim();
    const email = document.getElementById('inspector-email')?.value?.trim();
    const phone = document.getElementById('inspector-phone')?.value?.trim();
    
    if (!name) {
        showToast('სახელი სავალდებულოა', 'error');
        return;
    }
    
    const inspector = {
        id: id || generateId(),
        name,
        email,
        phone,
        createdAt: id ? undefined : new Date().toISOString()
    };
    
    if (id) {
        const index = appState.inspectors.findIndex(i => i.id === id);
        if (index !== -1) {
            inspector.createdAt = appState.inspectors[index].createdAt;
            appState.inspectors[index] = inspector;
        }
        showToast('ინსპექტორი განახლებულია', 'success');
    } else {
        appState.inspectors.push(inspector);
        showToast('ინსპექტორი დამატებულია', 'success');
    }
    
    closeModal();
    saveAllState();
    renderApp();
}

window.deleteInspector = function(id) {
    openModal('confirm', {
        title: 'ინსპექტორის წაშლა',
        message: 'ნამდვილად გსურთ ამ ინსპექტორის წაშლა?',
        confirmText: 'წაშლა',
        onConfirm: `confirmDeleteInspector('${id}')`
    });
}

window.confirmDeleteInspector = function(id) {
    appState.inspectors = appState.inspectors.filter(i => i.id !== id);
    closeModal();
    saveAllState();
    renderApp();
    showToast('ინსპექტორი წაშლილია', 'success');
}

// =================================================================
// 14. CRUD ოპერაციები - ობიექტები
// =================================================================

window.saveObject = function(id = null) {
    const name = document.getElementById('object-name')?.value?.trim();
    const address = document.getElementById('object-address')?.value?.trim();
    const contact = document.getElementById('object-contact')?.value?.trim();
    const phone = document.getElementById('object-phone')?.value?.trim();
    const notes = document.getElementById('object-notes')?.value?.trim();
    
    if (!name) {
        showToast('დასახელება სავალდებულოა', 'error');
        return;
    }
    
    const object = {
        id: id || generateId(),
        name,
        address,
        contact,
        phone,
        notes,
        createdAt: id ? undefined : new Date().toISOString()
    };
    
    if (id) {
        const index = appState.objects.findIndex(o => o.id === id);
        if (index !== -1) {
            object.createdAt = appState.objects[index].createdAt;
            appState.objects[index] = object;
        }
        showToast('ობიექტი განახლებულია', 'success');
    } else {
        appState.objects.push(object);
        showToast('ობიექტი დამატებულია', 'success');
    }
    
    closeModal();
    saveAllState();
    renderApp();
}

window.deleteObject = function(id) {
    openModal('confirm', {
        title: 'ობიექტის წაშლა',
        message: 'ნამდვილად გსურთ ამ ობიექტის წაშლა?',
        confirmText: 'წაშლა',
        onConfirm: `confirmDeleteObject('${id}')`
    });
}

window.confirmDeleteObject = function(id) {
    appState.objects = appState.objects.filter(o => o.id !== id);
    closeModal();
    saveAllState();
    renderApp();
    showToast('ობიექტი წაშლილია', 'success');
}

// =================================================================
// 15. შეტყობინებები (Notifications)
// =================================================================

function addNotification(notification) {
    const newNotification = {
        id: generateId(),
        ...notification,
        read: false,
        createdAt: new Date().toISOString()
    };
    appState.notifications.unshift(newNotification);
    saveAllState();
}

window.markNotificationRead = function(id) {
    const notification = appState.notifications.find(n => n.id === id);
    if (notification) {
        notification.read = true;
        saveAllState();
        renderApp();
    }
}

window.markAllNotificationsRead = function() {
    appState.notifications.forEach(n => n.read = true);
    saveAllState();
    renderApp();
    showToast('ყველა შეტყობინება წაკითხულია', 'info');
}

window.deleteNotification = function(id) {
    appState.notifications = appState.notifications.filter(n => n.id !== id);
    saveAllState();
    renderApp();
}

window.clearAllNotifications = function() {
    appState.notifications = [];
    saveAllState();
    renderApp();
    showToast('შეტყობინებები გასუფთავებულია', 'info');
}

function getUnreadNotificationsCount() {
    return appState.notifications.filter(n => !n.read).length;
}

// =================================================================
// 16. ფილტრები და სორტირება
// =================================================================

window.updateFilter = function(filterName, value) {
    appState.filters[filterName] = value;
    renderApp();
}

window.resetFilters = function() {
    appState.filters = {
        status: 'all',
        system: 'all',
        dateFrom: '',
        dateTo: '',
        inspector: 'all',
        priority: 'all',
        object: 'all'
    };
    appState.searchQuery = '';
    renderApp();
    showToast('ფილტრები გასუფთავებულია', 'info');
}

window.updateSort = function(sortBy) {
    if (appState.sortBy === sortBy) {
        appState.sortOrder = appState.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        appState.sortBy = sortBy;
        appState.sortOrder = 'desc';
    }
    renderApp();
}

window.handleSearch = debounce(function(query) {
    appState.searchQuery = query;
    renderApp();
}, 300);

// =================================================================
// 17. ფოტოს მართვა
// =================================================================

window.handlePhotoUpload = function(event, taskId) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
        showToast('მხოლოდ სურათები არის დაშვებული', 'error');
        return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
        showToast('ფაილი არ უნდა აღემატებოდეს 5MB-ს', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        if (!appState.inspectionData.photos) {
            appState.inspectionData.photos = {};
        }
        appState.inspectionData.photos[taskId] = {
            data: e.target.result,
            name: file.name,
            uploadedAt: new Date().toISOString()
        };
        
        if (appState.inspectionData.tasks[taskId]) {
            appState.inspectionData.tasks[taskId].hasPhoto = true;
        }
        
        closeModal();
        saveAllState();
        renderApp();
        showToast('ფოტო ატვირთულია', 'success');
    };
    reader.readAsDataURL(file);
}

window.removePhoto = function(taskId) {
    if (appState.inspectionData.photos && appState.inspectionData.photos[taskId]) {
        delete appState.inspectionData.photos[taskId];
        if (appState.inspectionData.tasks[taskId]) {
            appState.inspectionData.tasks[taskId].hasPhoto = false;
        }
        saveAllState();
        renderApp();
        showToast('ფოტო წაშლილია', 'info');
    }
}

window.viewPhoto = function(taskId) {
    const photo = appState.inspectionData.photos?.[taskId];
    if (photo) {
        openModal('photo', { taskId, currentPhoto: photo.data });
    }
}

// =================================================================
// 18. ხელმოწერის მართვა
// =================================================================

let signatureCanvas = null;
let signatureCtx = null;
let isDrawing = false;

window.initSignatureCanvas = function() {
    signatureCanvas = document.getElementById('signature-canvas');
    if (!signatureCanvas) return;
    
    signatureCtx = signatureCanvas.getContext('2d');
    
    // Canvas-ის ზომის დაყენება
    const rect = signatureCanvas.getBoundingClientRect();
    signatureCanvas.width = rect.width;
    signatureCanvas.height = rect.height;
    
    signatureCtx.fillStyle = 'white';
    signatureCtx.fillRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    signatureCtx.strokeStyle = 'black';
    signatureCtx.lineWidth = 2;
    signatureCtx.lineCap = 'round';
    
    // Mouse events
    signatureCanvas.addEventListener('mousedown', startDrawing);
    signatureCanvas.addEventListener('mousemove', draw);
    signatureCanvas.addEventListener('mouseup', stopDrawing);
    signatureCanvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events
    signatureCanvas.addEventListener('touchstart', handleTouchStart);
    signatureCanvas.addEventListener('touchmove', handleTouchMove);
    signatureCanvas.addEventListener('touchend', stopDrawing);
}

function startDrawing(e) {
    isDrawing = true;
    signatureCtx.beginPath();
    signatureCtx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!isDrawing) return;
    signatureCtx.lineTo(e.offsetX, e.offsetY);
    signatureCtx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = signatureCanvas.getBoundingClientRect();
    isDrawing = true;
    signatureCtx.beginPath();
    signatureCtx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
}

function handleTouchMove(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = signatureCanvas.getBoundingClientRect();
    signatureCtx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    signatureCtx.stroke();
}

window.clearSignature = function() {
    if (signatureCtx && signatureCanvas) {
        signatureCtx.fillStyle = 'white';
        signatureCtx.fillRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    }
}

window.saveSignature = function(type) {
    if (!signatureCanvas) return;
    
    const dataUrl = signatureCanvas.toDataURL('image/png');
    
    if (!appState.inspectionData.signatures) {
        appState.inspectionData.signatures = {};
    }
    
    appState.inspectionData.signatures[type] = {
        data: dataUrl,
        signedAt: new Date().toISOString()
    };
    
    closeModal();
    saveAllState();
    renderApp();
    showToast('ხელმოწერა შენახულია', 'success');
}

// =================================================================
// 19. ექსპორტის ფუნქციები
// =================================================================

window.exportToPDF = function() {
    const element = document.getElementById('report-container');
    if (!element) {
        showToast('PDF-ის გენერაცია ვერ მოხერხდა', 'error');
        return;
    }
    
    const objectName = appState.inspectionData.objectName || 'Inspection_Report';
    const filename = `${objectName.replace(/\s+/g, '_')}_${appState.inspectionData.date}.pdf`;
    
    // ყველა მოწყობილობის გახსნა PDF-ისთვის
    const previousExpanded = [...appState.ui.expandedEquipment];
    appState.ui.expandedEquipment = Object.keys(systemsData[appState.selectedSystem]?.equipment || {});
    renderApp();
    
    showToast('PDF მზადდება...', 'info', 2000);
    
    setTimeout(() => {
        html2pdf(element, {
            margin: 10,
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: false, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        }).then(() => {
            appState.ui.expandedEquipment = previousExpanded;
            renderApp();
            showToast('PDF წარმატებით შეიქმნა', 'success');
        }).catch(err => {
            console.error('PDF Error:', err);
            appState.ui.expandedEquipment = previousExpanded;
            renderApp();
            showToast('PDF-ის გენერაცია ვერ მოხერხდა', 'error');
        });
    }, 500);
}

window.exportToJSON = function(inspectionId = null) {
    let data;
    let filename;
    
    if (inspectionId) {
        data = appState.inspections.find(i => i.id === inspectionId);
        filename = `inspection_${inspectionId}.json`;
    } else if (appState.currentView === 'system') {
        data = {
            inspection: appState.inspectionData,
            system: appState.selectedSystem,
            systemName: systemsData[appState.selectedSystem]?.name
        };
        filename = `inspection_${appState.inspectionData.date || 'draft'}.json`;
    } else {
        data = {
            inspections: appState.inspections,
            exportedAt: new Date().toISOString()
        };
        filename = `all_inspections_${new Date().toISOString().split('T')[0]}.json`;
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    downloadBlob(blob, filename);
    showToast('JSON ექსპორტირებულია', 'success');
}

window.exportToCSV = function() {
    const inspections = filterInspections();
    if (inspections.length === 0) {
        showToast('ექსპორტისთვის მონაცემები არ არის', 'warning');
        return;
    }
    
    const headers = ['ID', 'ობიექტი', 'სისტემა', 'ინსპექტორი', 'თარიღი', 'პროგრესი %', 'კარგი', 'გაფრთხილება', 'პრობლემა', 'პრიორიტეტი'];
    
    const rows = inspections.map(ins => [
        ins.id,
        `"${ins.objectName || ''}"`,
        `"${ins.systemName || ''}"`,
        `"${ins.inspector || ''}"`,
        ins.date || '',
        ins.progress?.percentage || 0,
        ins.progress?.ok || 0,
        ins.progress?.warning || 0,
        ins.progress?.problem || 0,
        ins.priority || 'medium'
    ]);
    
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    downloadBlob(blob, `inspections_${new Date().toISOString().split('T')[0]}.csv`);
    showToast('CSV ექსპორტირებულია', 'success');
}

window.exportStatisticsReport = function() {
    const stats = getInspectionStatistics();
    const problematic = getProblematicEquipment();
    
    const report = {
        generatedAt: new Date().toISOString(),
        summary: stats,
        problematicEquipment: problematic.slice(0, 10),
        upcomingInspections: getUpcomingInspections(30),
        overdueInspections: getOverdueInspections()
    };
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    downloadBlob(blob, `statistics_report_${new Date().toISOString().split('T')[0]}.json`);
    showToast('სტატისტიკის რეპორტი ექსპორტირებულია', 'success');
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// =================================================================
// 20. იმპორტის ფუნქციები
// =================================================================

window.importFromJSON = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.inspections && Array.isArray(data.inspections)) {
                // მრავალი ინსპექტირების იმპორტი
                let imported = 0;
                data.inspections.forEach(ins => {
                    if (!appState.inspections.find(i => i.id === ins.id)) {
                        appState.inspections.push(ins);
                        imported++;
                    }
                });
                saveAllState();
                renderApp();
                showToast(`${imported} ინსპექტირება იმპორტირებულია`, 'success');
            } else if (data.id) {
                // ერთი ინსპექტირების იმპორტი
                if (!appState.inspections.find(i => i.id === data.id)) {
                    appState.inspections.push(data);
                    saveAllState();
                    renderApp();
                    showToast('ინსპექტირება იმპორტირებულია', 'success');
                } else {
                    showToast('ეს ინსპექტირება უკვე არსებობს', 'warning');
                }
            } else {
                showToast('არასწორი ფაილის ფორმატი', 'error');
            }
        } catch (err) {
            console.error('Import error:', err);
            showToast('ფაილის წაკითხვა ვერ მოხერხდა', 'error');
        }
    };
    reader.readAsText(file);
}

// =================================================================
// 21. პარამეტრების მართვა
// =================================================================

window.updateSetting = function(key, value) {
    appState.settings[key] = value;
    saveAllState();
    
    // ავტომატური შენახვის განახლება
    if (key === 'autoSave') {
        if (value) {
            startAutoSave();
        } else {
            stopAutoSave();
        }
    }
    
    if (key === 'autoSaveInterval') {
        stopAutoSave();
        if (appState.settings.autoSave) {
            startAutoSave();
        }
    }
    
    renderApp();
    showToast('პარამეტრი შენახულია', 'success');
}

window.setUserRole = function(role) {
    appState.userRole = role;
    saveAllState();
    renderApp();
    showToast(`როლი შეცვლილია: ${role}`, 'info');
}

window.setCurrentUser = function(user) {
    appState.currentUser = user;
    if (user) {
        appState.inspectionData.inspector = user.name;
    }
    saveAllState();
    renderApp();
}

// =================================================================
// 22. ნავიგაცია
// =================================================================

window.navigateTo = function(view, params = {}) {
    // თუ სისტემის გვერდიდან გამოდის დაუმთავრებელი ინსპექტირებით
    if (appState.currentView === 'system' && view !== 'system') {
        const hasUnsavedChanges = Object.keys(appState.inspectionData.tasks).length > 0;
        if (hasUnsavedChanges && !appState.currentInspectionId) {
            openModal('confirm', {
                title: 'დაუმთავრებელი ინსპექტირება',
                message: 'გაქვთ დაუმთავრებელი ინსპექტირება. გსურთ გაგრძელება შენახვის გარეშე?',
                confirmText: 'დიახ, გასვლა',
                onConfirm: `forceNavigateTo('${view}')`
            });
            return;
        }
    }
    
    forceNavigateTo(view, params);
}

window.forceNavigateTo = function(view, params = {}) {
    closeModal();
    
    if (view === 'home') {
        resetInspectionData();
    }
    
    updateStateAndRender({
        currentView: view,
        selectedSystem: params.system || null,
        selectedEquipment: params.equipment || null,
        currentInspectionId: params.inspectionId || null,
        ...params
    });
}

window.toggleEquipment = function(equipmentKey) {
    const index = appState.ui.expandedEquipment.indexOf(equipmentKey);
    if (index > -1) {
        appState.ui.expandedEquipment.splice(index, 1);
    } else {
        appState.ui.expandedEquipment.push(equipmentKey);
    }
    renderApp();
}

window.expandAllEquipment = function() {
    if (!appState.selectedSystem) return;
    appState.ui.expandedEquipment = Object.keys(systemsData[appState.selectedSystem].equipment);
    renderApp();
}

window.collapseAllEquipment = function() {
    appState.ui.expandedEquipment = [];
    renderApp();
}

window.toggleSidebar = function() {
    appState.ui.sidebarOpen = !appState.ui.sidebarOpen;
    renderApp();
}

window.setActiveTab = function(tab) {
    appState.ui.activeTab = tab;
    renderApp();
}

// =================================================================
// 23. კომპონენტები - Task (დავალება)
// =================================================================

function TaskComponent(task, systemColor, equipmentKey) {
    const taskData = getTaskStatus(task.id);
    const statusInfo = statusOptions.find(s => s.value === taskData.status) || statusOptions[0];
    const isMeasurement = !!task.unit;
    const hasPhoto = appState.inspectionData.photos?.[task.id];
    const priorityInfo = priorityOptions.find(p => p.value === (taskData.priority || 'medium'));
    
    const statusOptionsHtml = statusOptions.map(opt =>
        `<option value="${opt.value}" ${taskData.status === opt.value ? 'selected' : ''}>${opt.label}</option>`
    ).join('');
    
    const quickActionsHtml = statusOptions
        .filter(opt => opt.value !== 'pending')
        .map(opt => {
            const isActive = taskData.status === opt.value;
            return `
                <button
                    onclick="quickUpdateStatus('${task.id}', '${opt.value}')"
                    class="w-8 h-8 flex items-center justify-center text-sm rounded-lg transition-all border ${isActive ? 'scale-110 shadow-lg' : 'opacity-60 hover:opacity-100'}"
                    style="color: ${opt.color}; border-color: ${opt.color}; background: ${isActive ? opt.color + '25' : 'transparent'};"
                    title="${opt.label}"
                >
                    ${opt.short}
                </button>
            `;
        }).join('');
    
    // პრობლემის/გაფრთხილების ინდიკატორი
    const problemClass = taskData.status === 'problem' ? 'priority-critical' : 
                         taskData.status === 'warning' ? 'priority-high' : '';
    
    return `
        <div class="p-4 border-t border-white/5 ${problemClass} transition-all hover:bg-white/5" data-task-id="${task.id}">
            <div class="flex items-start gap-3 mb-3">
                <span class="text-xl flex-shrink-0" title="${typeNames[task.type] || task.type}">${typeIcons[task.type] || '📋'}</span>
                <div class="flex-1 min-w-0">
                    <p class="text-white text-sm font-medium leading-tight">${task.name}</p>
                    <div class="flex items-center gap-2 mt-1">
                        ${task.unit ? `<span class="text-slate-500 text-xs bg-slate-800 px-2 py-0.5 rounded">📏 ${task.unit}</span>` : ''}
                        <span class="text-slate-600 text-xs">${typeNames[task.type] || ''}</span>
                        ${taskData.timestamp ? `<span class="text-slate-600 text-xs">• ${timeAgo(taskData.timestamp)}</span>` : ''}
                    </div>
                </div>
                <div class="flex gap-1 flex-shrink-0">
                    ${quickActionsHtml}
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-${isMeasurement ? '4' : '3'} gap-2 ml-9">
                <select
                    onchange="handleInputChange('status', this.value, '${task.id}')"
                    class="bg-slate-800 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                    style="border-color: ${statusInfo.color}50; color: ${statusInfo.color}; focus:ring-color: ${statusInfo.color};"
                >
                    ${statusOptionsHtml}
                </select>
                
                ${isMeasurement ? `
                    <input
                        type="text"
                        placeholder="გაზომვა (${task.unit})"
                        value="${taskData.measurement || ''}"
                        onchange="handleInputChange('measurement', this.value, '${task.id}')"
                        class="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                    />
                ` : ''}
                
                <input
                    type="text"
                    placeholder="შენიშვნა..."
                    value="${taskData.note || ''}"
                    data-task-note="${task.id}"
                    onchange="handleInputChange('note', this.value, '${task.id}')"
                    class="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all ${!isMeasurement ? 'md:col-span-2' : ''}"
                />
                
                <div class="flex gap-2">
                    <button
                        onclick="openModal('photo', { taskId: '${task.id}', currentPhoto: ${hasPhoto ? `'${appState.inspectionData.photos[task.id].data}'` : 'null'} })"
                        class="flex-1 px-3 py-2 rounded-lg text-sm transition-all ${hasPhoto ? 'bg-green-600/20 text-green-400 border border-green-600/50' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}"
                        title="${hasPhoto ? 'ფოტო ატვირთულია' : 'ფოტოს დამატება'}"
                    >
                        📷 ${hasPhoto ? '✓' : '+'}
                    </button>
                </div>
            </div>
            
            ${hasPhoto ? `
                <div class="ml-9 mt-2">
                    <div class="inline-flex items-center gap-2 bg-slate-800 rounded-lg p-2">
                        <img src="${appState.inspectionData.photos[task.id].data}" class="photo-thumbnail" onclick="viewPhoto('${task.id}')" alt="Photo" />
                        <button onclick="removePhoto('${task.id}')" class="text-red-400 hover:text-red-300 text-sm">✕</button>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// =================================================================
// 24. კომპონენტები - Equipment (მოწყობილობა)
// =================================================================

function EquipmentComponent(equipmentKey, equipment, systemKey, systemColor) {
    const progress = calculateProgress(systemKey, equipmentKey);
    const isExpanded = appState.ui.expandedEquipment.includes(equipmentKey);
    
    const tasksHtml = equipment.tasks.map(task =>
        TaskComponent(task, systemColor, equipmentKey)
    ).join('');
    
    // პროგრესის ფერი
    let progressColor = systemColor;
    if (progress.problem > 0) progressColor = '#ef4444';
    else if (progress.warning > 0) progressColor = '#eab308';
    else if (progress.percentage === 100) progressColor = '#22c55e';
    
    // სტატუსის ბეჯები
    const statusBadges = `
        <div class="flex gap-1 text-xs">
            ${progress.ok > 0 ? `<span class="px-1.5 py-0.5 rounded bg-green-600/20 text-green-400">${progress.ok} ✓</span>` : ''}
            ${progress.warning > 0 ? `<span class="px-1.5 py-0.5 rounded bg-yellow-600/20 text-yellow-400">${progress.warning} ⚠</span>` : ''}
            ${progress.problem > 0 ? `<span class="px-1.5 py-0.5 rounded bg-red-600/20 text-red-400">${progress.problem} ✗</span>` : ''}
        </div>
    `;
    
    return `
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-white/20" data-equipment="${equipmentKey}">
            <div
                onclick="toggleEquipment('${equipmentKey}')"
                class="w-full p-4 md:p-5 text-left flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
            >
                <div class="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                    <div
                        class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-lg md:text-xl flex-shrink-0"
                        style="background: ${systemColor}25; border: 1px solid ${systemColor}50;"
                    >
                        ⚙️
                    </div>
                    <div class="min-w-0 flex-1">
                        <h3 class="text-white font-semibold text-sm md:text-base truncate">${equipment.name}</h3>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-slate-400 text-xs">${equipment.tasks.length} დავალება</span>
                            ${statusBadges}
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center gap-3 md:gap-4 flex-shrink-0">
                    <div class="text-right">
                        <p class="text-white font-bold text-lg">${progress.percentage}%</p>
                        <p class="text-slate-500 text-xs">${progress.completed}/${progress.total}</p>
                    </div>
                    <svg
                        class="w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            
            <div class="px-4 md:px-5 pb-3">
                <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                        class="h-full rounded-full transition-all duration-500"
                        style="width: ${progress.percentage}%; background: ${progressColor};"
                    ></div>
                </div>
            </div>
            
            ${isExpanded ? `
                <div class="border-t border-white/10">
                    <!-- Bulk actions -->
                    <div class="px-4 py-2 bg-slate-800/50 flex items-center justify-between">
                        <span class="text-slate-400 text-xs">სწრაფი მოქმედებები:</span>
                        <div class="flex gap-2">
                            <button onclick="bulkUpdateStatus('${equipmentKey}', 'ok')" class="px-2 py-1 text-xs rounded bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-colors">ყველა ✓</button>
                            <button onclick="bulkUpdateStatus('${equipmentKey}', 'na')" class="px-2 py-1 text-xs rounded bg-slate-600/20 text-slate-400 hover:bg-slate-600/30 transition-colors">ყველა N/A</button>
                        </div>
                    </div>
                    ${tasksHtml}
                </div>
            ` : ''}
        </div>
    `;
}

// =================================================================
// 25. კომპონენტები - System Screen (ინსპექტირების გვერდი)
// =================================================================

function SystemScreen() {
    const systemKey = appState.selectedSystem;
    const system = systemsData[systemKey];
    if (!system) return '<div class="p-10 text-red-500">სისტემა ვერ მოიძებნა</div>';
    
    const isEditing = appState.currentInspectionId !== null;
    const progress = calculateSystemProgress(systemKey);
    
    const equipmentHtml = Object.entries(system.equipment).map(([key, equipment]) =>
        EquipmentComponent(key, equipment, systemKey, system.color)
    ).join('');
    
    // პრიორიტეტის ოფციები
    const priorityOptionsHtml = priorityOptions.map(p => 
        `<option value="${p.value}" ${appState.inspectionData.priority === p.value ? 'selected' : ''}>${p.icon} ${p.label}</option>`
    ).join('');
    
    // ინსპექტორების სია
    const inspectorsHtml = appState.inspectors.map(ins =>
        `<option value="${ins.name}" ${appState.inspectionData.inspector === ins.name ? 'selected' : ''}>${ins.name}</option>`
    ).join('');
    
    // ობიექტების სია
    const objectsHtml = appState.objects.map(obj =>
        `<option value="${obj.name}" ${appState.inspectionData.objectName === obj.name ? 'selected' : ''}>${obj.name}</option>`
    ).join('');

    return `
        <div id="report-container" class="min-h-screen" style="background: linear-gradient(135deg, ${system.color}08, transparent)">
            <div class="bg-slate-900/98 min-h-screen">
                <!-- Header -->
                <header class="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
                    <div class="max-w-7xl mx-auto px-4 py-3 md:py-4">
                        <div class="flex items-center justify-between gap-4">
                            <button
                                onclick="navigateTo('home')"
                                class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                            >
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                <span class="hidden sm:inline">უკან</span>
                            </button>
                            
                            <div class="flex items-center gap-2 md:gap-3">
                                <span class="text-2xl">${system.icon}</span>
                                <div>
                                    <h1 class="text-base md:text-lg font-bold text-white">${system.name}</h1>
                                    <p class="text-slate-400 text-xs">${progress.percentage}% დასრულებული</p>
                                </div>
                            </div>
                            
                            <div class="flex gap-2">
                                <button
                                    onclick="saveInspection()"
                                    class="px-3 md:px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors flex items-center gap-2"
                                >
                                    <span>${isEditing ? '🔄' : '💾'}</span>
                                    <span class="hidden sm:inline">${isEditing ? 'განახლება' : 'შენახვა'}</span>
                                </button>
                                <button
                                    onclick="exportToPDF()"
                                    class="px-3 md:px-4 py-2 text-white rounded-lg text-sm transition-colors flex items-center gap-2"
                                    style="background: ${system.color}"
                                >
                                    <span>📄</span>
                                    <span class="hidden sm:inline">PDF</span>
                                </button>
                            </div>
                        </div>
                        
                        <!-- პროგრესი -->
                        <div class="mt-3 flex items-center gap-4">
                            <div class="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-500" style="width: ${progress.percentage}%; background: ${system.color};"></div>
                            </div>
                            <div class="flex gap-3 text-xs">
                                <span class="text-green-400">${progress.ok} ✓</span>
                                <span class="text-yellow-400">${progress.warning} ⚠</span>
                                <span class="text-red-400">${progress.problem} ✗</span>
                                <span class="text-slate-400">${progress.pending} ⏳</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div class="max-w-7xl mx-auto px-4 py-4 md:py-6">
                    <!-- ინფორმაციის ფორმა -->
                    <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 mb-6">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-white font-bold flex items-center gap-2">
                                <span>📝</span> ინსპექტირების ინფორმაცია
                            </h2>
                            <div class="flex gap-2">
                                <button onclick="expandAllEquipment()" class="text-xs text-slate-400 hover:text-white transition-colors">გაშლა ყველა</button>
                                <span class="text-slate-600">|</span>
                                <button onclick="collapseAllEquipment()" class="text-xs text-slate-400 hover:text-white transition-colors">დახურვა ყველა</button>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">ობიექტი *</label>
                                <input
                                    type="text"
                                    list="objects-list"
                                    value="${appState.inspectionData.objectName}"
                                    onchange="handleInputChange('objectName', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                                    placeholder="ობიექტის სახელი"
                                />
                                <datalist id="objects-list">
                                    ${objectsHtml}
                                </datalist>
                            </div>
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">ინსპექტორი *</label>
                                <input
                                    type="text"
                                    list="inspectors-list"
                                    value="${appState.inspectionData.inspector}"
                                    onchange="handleInputChange('inspector', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                                    placeholder="თქვენი სახელი"
                                />
                                <datalist id="inspectors-list">
                                    ${inspectorsHtml}
                                </datalist>
                            </div>
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">სერიული ნომერი</label>
                                <input
                                    type="text"
                                    value="${appState.inspectionData.serialNumber}"
                                    onchange="handleInputChange('serialNumber', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                                    placeholder="დანადგარის სერიული №"
                                />
                            </div>
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">თარიღი *</label>
                                <input
                                    type="date"
                                    value="${appState.inspectionData.date}"
                                    onchange="handleInputChange('date', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>
                        
                        <!-- დამატებითი ველები -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">დაწყების დრო</label>
                                <input
                                    type="time"
                                    value="${appState.inspectionData.startTime}"
                                    onchange="handleInputChange('startTime', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                                />
                            </div>
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">დასრულების დრო</label>
                                <input
                                    type="time"
                                    value="${appState.inspectionData.endTime}"
                                    onchange="handleInputChange('endTime', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                                />
                            </div>
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">პრიორიტეტი</label>
                                <select
                                    onchange="handleInputChange('priority', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                                >
                                    ${priorityOptionsHtml}
                                </select>
                            </div>
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">შემდეგი შემოწმება</label>
                                <input
                                    type="date"
                                    value="${appState.inspectionData.nextInspectionDate}"
                                    onchange="handleInputChange('nextInspectionDate', this.value)"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>
                        
                        <!-- კომენტარი -->
                        <div class="mt-4">
                            <label class="block text-slate-400 text-sm mb-1">კომენტარი / დასკვნა</label>
                            <textarea
                                rows="3"
                                value="${appState.inspectionData.comments || ''}"
                                onchange="handleInputChange('comments', this.value)"
                                class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all resize-none"
                                placeholder="დამატებითი შენიშვნები და დასკვნა..."
                            >${appState.inspectionData.comments || ''}</textarea>
                        </div>
                        
                        <!-- ხელმოწერები -->
                        <div class="mt-4 flex flex-wrap gap-4">
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">ინსპექტორის ხელმოწერა</label>
                                ${appState.inspectionData.signatures?.inspector ? `
                                    <div class="bg-white rounded-lg p-2 inline-block">
                                        <img src="${appState.inspectionData.signatures.inspector.data}" class="h-16" alt="Signature" />
                                    </div>
                                ` : `
                                    <button onclick="openModal('signature', { type: 'inspector' }); setTimeout(initSignatureCanvas, 100);" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors">
                                        ✍️ ხელმოწერა
                                    </button>
                                `}
                            </div>
                            <div>
                                <label class="block text-slate-400 text-sm mb-1">დამკვეთის ხელმოწერა</label>
                                ${appState.inspectionData.signatures?.client ? `
                                    <div class="bg-white rounded-lg p-2 inline-block">
                                        <img src="${appState.inspectionData.signatures.client.data}" class="h-16" alt="Signature" />
                                    </div>
                                ` : `
                                    <button onclick="openModal('signature', { type: 'client' }); setTimeout(initSignatureCanvas, 100);" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors">
                                        ✍️ ხელმოწერა
                                    </button>
                                `}
                            </div>
                        </div>
                    </div>

                    <!-- მოწყობილობები -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        ${equipmentHtml}
                    </div>
                    
                    <!-- ქვედა ღილაკები -->
                    <div class="mt-6 flex flex-wrap gap-4 justify-center">
                        <button
                            onclick="saveInspection()"
                            class="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                        >
                            ${isEditing ? '🔄 განახლება' : '💾 შენახვა'}
                        </button>
                        <button
                            onclick="exportToPDF()"
                            class="px-6 py-3 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                            style="background: ${system.color}"
                        >
                            📄 PDF ექსპორტი
                        </button>
                        <button
                            onclick="exportToJSON()"
                            class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                        >
                            📥 JSON ექსპორტი
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// =================================================================
// 26. კომპონენტები - Home Screen (მთავარი გვერდი)
// =================================================================

function HomeScreen() {
    const filteredInspections = filterInspections();
    const stats = getInspectionStatistics();
    const upcoming = getUpcomingInspections(7);
    const overdue = getOverdueInspections();
    const unreadCount = getUnreadNotificationsCount();
    
    // სისტემის კარტები
    const systemCardsHtml = Object.entries(systemsData).map(([key, system]) => {
        return `
            <button
                onclick="updateStateAndRender({ selectedSystem: '${key}', currentView: 'system', currentInspectionId: null }); resetInspectionData();"
                class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 text-left transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl"
            >
                <div class="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40" style="background: ${system.color}"></div>
                
                <div class="text-4xl md:text-5xl mb-3 md:mb-4">${system.icon}</div>
                <h3 class="text-lg md:text-xl font-bold text-white mb-2">${system.name}</h3>
                <p class="text-slate-400 text-sm mb-4">
                    ${Object.keys(system.equipment).length} მოწყობილობა
                </p>
                
                <div class="flex items-center gap-2 text-sm font-medium" style="color: ${system.color}">
                    <span>დაწყება</span>
                    <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </button>
        `;
    }).join('');
    
    // შენახული ინსპექტირებების სია
    const inspectionsHtml = filteredInspections.length > 0 ? filteredInspections.slice(0, 10).map((ins, idx) => {
        const progress = ins.progress || { percentage: 0, ok: 0, warning: 0, problem: 0 };
        const priorityInfo = priorityOptions.find(p => p.value === ins.priority) || priorityOptions[1];
        const systemInfo = systemsData[ins.systemKey] || {};
        
        return `
            <div class="p-4 flex items-center gap-4 ${idx > 0 ? 'border-t border-white/10' : ''} transition-colors hover:bg-white/5 group">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style="background: ${systemInfo.color || '#64748b'}25;">
                    ${systemInfo.icon || '📋'}
                </div>
                
                <button onclick="openModal('details', ${JSON.stringify(ins).replace(/"/g, '&quot;')})" class="flex-1 text-left min-w-0">
                    <div class="flex items-center gap-2">
                        <p class="text-white font-medium truncate">${ins.objectName || 'უსახელო ობიექტი'}</p>
                        <span class="text-xs">${priorityInfo.icon}</span>
                    </div>
                    <p class="text-slate-400 text-sm truncate">${ins.systemName || ''} • ${formatDate(ins.date, 'short')} • ${ins.inspector || ''}</p>
                </button>
                
                <div class="flex items-center gap-3 flex-shrink-0">
                    <div class="text-right hidden sm:block">
                        <p class="text-white font-bold">${progress.percentage}%</p>
                        <div class="flex gap-1 text-xs justify-end">
                            ${progress.problem > 0 ? `<span class="text-red-400">${progress.problem}✗</span>` : ''}
                            ${progress.warning > 0 ? `<span class="text-yellow-400">${progress.warning}⚠</span>` : ''}
                        </div>
                    </div>
                    
                    <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onclick="loadSavedInspection('${ins.id}')" class="p-2 hover:bg-blue-600/20 text-blue-400 rounded-lg transition-colors" title="რედაქტირება">
                            ✏️
                        </button>
                        <button onclick="duplicateInspection('${ins.id}')" class="p-2 hover:bg-slate-600/20 text-slate-400 rounded-lg transition-colors" title="დუბლირება">
                            📋
                        </button>
                        <button onclick="deleteInspection('${ins.id}')" class="p-2 hover:bg-red-600/20 text-red-400 rounded-lg transition-colors" title="წაშლა">
                            🗑️
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('') : `
        <div class="p-8 text-center text-slate-400">
            <div class="text-4xl mb-2">📭</div>
            <p>ინსპექტირებები არ მოიძებნა</p>
        </div>
    `;

    return `
        <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div class="bg-grid"></div>
            
            <div class="relative z-10">
                <!-- Header -->
                <header class="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-40">
                    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl md:text-3xl">🔧</span>
                            <div>
                                <h1 class="text-lg md:text-xl font-bold text-white">HVAC ინსპექტირება</h1>
                                <p class="text-slate-400 text-xs hidden sm:block">სისტემების პროფესიონალური შემოწმება</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-2 md:gap-4">
                            <!-- ძებნა -->
                            <div class="relative hidden md:block">
                                <input
                                    type="text"
                                    placeholder="ძებნა..."
                                    value="${appState.searchQuery}"
                                    oninput="handleSearch(this.value)"
                                    class="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-48 lg:w-64"
                                />
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
                            </div>
                            
                            <!-- შეტყობინებები -->
                            <button onclick="navigateTo('notifications')" class="relative p-2 hover:bg-slate-800 rounded-lg transition-colors">
                                <span class="text-xl">🔔</span>
                                ${unreadCount > 0 ? `<span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">${unreadCount}</span>` : ''}
                            </button>
                            
                            <!-- მენეჯერის პანელი -->
                            ${appState.userRole === 'manager' || appState.userRole === 'admin' ? `
                                <button onclick="navigateTo('manager')" class="p-2 hover:bg-slate-800 rounded-lg transition-colors" title="მენეჯერის პანელი">
                                    <span class="text-xl">📊</span>
                                </button>
                            ` : ''}
                            
                            <!-- პარამეტრები -->
                            <button onclick="navigateTo('settings')" class="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                                <span class="text-xl">⚙️</span>
                            </button>
                        </div>
                    </div>
                </header>
                
                <div class="max-w-7xl mx-auto px-4 py-6 md:py-8">
                    <!-- სტატისტიკა -->
                    ${stats.total > 0 ? `
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                            <div class="bg-white/5 border border-white/10 rounded-xl p-4">
                                <p class="text-slate-400 text-sm">სულ</p>
                                <p class="text-2xl font-bold text-white">${stats.total}</p>
                            </div>
                            <div class="bg-green-600/10 border border-green-600/20 rounded-xl p-4">
                                <p class="text-green-400 text-sm">დასრულებული</p>
                                <p class="text-2xl font-bold text-green-400">${stats.completed}</p>
                            </div>
                            <div class="bg-yellow-600/10 border border-yellow-600/20 rounded-xl p-4">
                                <p class="text-yellow-400 text-sm">გაფრთხილებები</p>
                                <p class="text-2xl font-bold text-yellow-400">${stats.warningsFound}</p>
                            </div>
                            <div class="bg-red-600/10 border border-red-600/20 rounded-xl p-4">
                                <p class="text-red-400 text-sm">პრობლემები</p>
                                <p class="text-2xl font-bold text-red-400">${stats.problemsFound}</p>
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- გადაუდებელი შეტყობინებები -->
                    ${overdue.length > 0 ? `
                        <div class="bg-red-600/10 border border-red-600/30 rounded-xl p-4 mb-6 flex items-center gap-4">
                            <span class="text-3xl">⚠️</span>
                            <div>
                                <p class="text-red-400 font-bold">${overdue.length} ვადაგადაცილებული ინსპექტირება</p>
                                <p class="text-red-400/70 text-sm">გთხოვთ შეასრულოთ დაგეგმილი ინსპექტირებები</p>
                            </div>
                            <button onclick="navigateTo('manager')" class="ml-auto px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm transition-colors">ნახვა</button>
                        </div>
                    ` : ''}
                    
                    <!-- სისტემის არჩევა -->
                    <div class="mb-8 md:mb-12">
                        <h2 class="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span>🆕</span> ახალი ინსპექტირება
                        </h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            ${systemCardsHtml}
                        </div>
                    </div>

                    <!-- შენახული ინსპექტირებები -->
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                                <span>📋</span> შენახული ინსპექტირებები
                                ${filteredInspections.length > 0 ? `<span class="text-slate-400 text-sm font-normal">(${filteredInspections.length})</span>` : ''}
                            </h2>
                            <div class="flex gap-2">
                                <button onclick="openModal('filter')" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                                    🔽 ფილტრი
                                </button>
                                <button onclick="exportToCSV()" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                                    📥 CSV
                                </button>
                            </div>
                        </div>
                        
                        <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                            ${inspectionsHtml}
                        </div>
                        
                        ${filteredInspections.length > 10 ? `
                            <div class="mt-4 text-center">
                                <button onclick="navigateTo('reports')" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                                    ყველას ნახვა (${filteredInspections.length}) →
                                </button>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// =================================================================
// 27. კომპონენტები - Manager Dashboard (მენეჯერის პანელი)
// =================================================================

function ManagerDashboard() {
    const stats = getInspectionStatistics();
    const problematic = getProblematicEquipment();
    const upcoming = getUpcomingInspections(14);
    const overdue = getOverdueInspections();
    const activeTab = appState.ui.activeTab || 'overview';
    
    const tabs = [
        { id: 'overview', label: 'მიმოხილვა', icon: '📊' },
        { id: 'scheduled', label: 'დაგეგმილი', icon: '📅' },
        { id: 'inspectors', label: 'ინსპექტორები', icon: '👷' },
        { id: 'objects', label: 'ობიექტები', icon: '🏢' },
        { id: 'problems', label: 'პრობლემები', icon: '⚠️' }
    ];
    
    const tabsHtml = tabs.map(tab => `
        <button
            onclick="setActiveTab('${tab.id}')"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}"
        >
            ${tab.icon} ${tab.label}
        </button>
    `).join('');
    
    let contentHtml = '';
    
    // Overview Tab
    if (activeTab === 'overview') {
        contentHtml = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div class="bg-slate-800 rounded-xl p-5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-slate-400 text-sm">სულ ინსპექტირებები</span>
                        <span class="text-2xl">📋</span>
                    </div>
                    <p class="text-3xl font-bold text-white">${stats.total}</p>
                    <p class="text-slate-500 text-xs mt-1">ბოლო 30 დღე: ${stats.byMonth[new Date().toISOString().substring(0, 7)] || 0}</p>
                </div>
                <div class="bg-slate-800 rounded-xl p-5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-slate-400 text-sm">დასრულებული</span>
                        <span class="text-2xl">✅</span>
                    </div>
                    <p class="text-3xl font-bold text-green-400">${stats.completed}</p>
                    <p class="text-slate-500 text-xs mt-1">${stats.total > 0 ? Math.round(stats.completed / stats.total * 100) : 0}% წარმატებული</p>
                </div>
                <div class="bg-slate-800 rounded-xl p-5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-slate-400 text-sm">აღმოჩენილი პრობლემები</span>
                        <span class="text-2xl">🔴</span>
                    </div>
                    <p class="text-3xl font-bold text-red-400">${stats.problemsFound}</p>
                    <p class="text-slate-500 text-xs mt-1">${stats.withProblems} ინსპექტირებაში</p>
                </div>
                <div class="bg-slate-800 rounded-xl p-5">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-slate-400 text-sm">საშუალო დრო</span>
                        <span class="text-2xl">⏱️</span>
                    </div>
                    <p class="text-3xl font-bold text-blue-400">${stats.averageCompletionTime || '—'}</p>
                    <p class="text-slate-500 text-xs mt-1">წუთი / ინსპექტირება</p>
                </div>
            </div>
            
            <!-- სისტემების სტატისტიკა -->
            <div class="bg-slate-800 rounded-xl p-5 mb-6">
                <h3 class="text-white font-bold mb-4">სისტემების მიხედვით</h3>
                <div class="space-y-3">
                    ${Object.entries(systemsData).map(([key, system]) => {
                        const count = stats.bySystem[key] || 0;
                        const percentage = stats.total > 0 ? Math.round(count / stats.total * 100) : 0;
                        return `
                            <div class="flex items-center gap-4">
                                <span class="text-2xl w-10">${system.icon}</span>
                                <div class="flex-1">
                                    <div class="flex justify-between mb-1">
                                        <span class="text-white text-sm">${system.name}</span>
                                        <span class="text-slate-400 text-sm">${count}</span>
                                    </div>
                                    <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div class="h-full rounded-full" style="width: ${percentage}%; background: ${system.color};"></div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <!-- ინსპექტორების სტატისტიკა -->
            <div class="bg-slate-800 rounded-xl p-5">
                <h3 class="text-white font-bold mb-4">ინსპექტორების მიხედვით</h3>
                <div class="space-y-2">
                    ${Object.entries(stats.byInspector).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, count]) => `
                        <div class="flex items-center justify-between p-2 bg-slate-700/50 rounded-lg">
                            <span class="text-white">${name}</span>
                            <span class="text-slate-400">${count} ინსპექტირება</span>
                        </div>
                    `).join('') || '<p class="text-slate-400 text-center py-4">მონაცემები არ არის</p>'}
                </div>
            </div>
        `;
    }
    
    // Scheduled Tab
    if (activeTab === 'scheduled') {
        const scheduledHtml = appState.scheduledInspections.length > 0 
            ? appState.scheduledInspections.map((sch, idx) => {
                const timeInfo = timeUntil(sch.scheduledDate);
                const priorityInfo = priorityOptions.find(p => p.value === sch.priority) || priorityOptions[1];
                return `
                    <div class="p-4 ${idx > 0 ? 'border-t border-slate-700' : ''} flex items-center gap-4 ${timeInfo.overdue ? 'bg-red-600/10' : ''}">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style="background: ${systemsData[sch.systemKey]?.color || '#64748b'}25;">
                            ${systemsData[sch.systemKey]?.icon || '📋'}
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-white font-medium">${sch.objectName}</p>
                            <p class="text-slate-400 text-sm">${sch.inspectorName} • ${formatDate(sch.scheduledDate)}</p>
                        </div>
                        <div class="text-right">
                            <span class="${timeInfo.overdue ? 'text-red-400' : timeInfo.days <= 3 ? 'text-yellow-400' : 'text-slate-400'} text-sm">${timeInfo.text}</span>
                            <p class="text-xs">${priorityInfo.icon} ${priorityInfo.label}</p>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="startScheduledInspection('${sch.id}')" class="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm transition-colors">▶️</button>
                            <button onclick="openModal('schedule', ${JSON.stringify(sch).replace(/"/g, '&quot;')})" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors">✏️</button>
                            <button onclick="deleteScheduledInspection('${sch.id}')" class="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg text-sm transition-colors">🗑️</button>
                        </div>
                    </div>
                `;
            }).join('')
            : '<div class="p-8 text-center text-slate-400"><div class="text-4xl mb-2">📅</div><p>დაგეგმილი ინსპექტირებები არ არის</p></div>';
        
        contentHtml = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-white font-bold">დაგეგმილი ინსპექტირებები (${appState.scheduledInspections.length})</h3>
                <button onclick="openModal('schedule')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                    ➕ ახლის დაგეგმვა
                </button>
            </div>
            <div class="bg-slate-800 rounded-xl overflow-hidden">
                ${scheduledHtml}
            </div>
        `;
    }
    
    // Inspectors Tab
    if (activeTab === 'inspectors') {
        const inspectorsHtml = appState.inspectors.length > 0
            ? appState.inspectors.map((ins, idx) => {
                const insStats = stats.byInspector[ins.name] || 0;
                return `
                    <div class="p-4 ${idx > 0 ? 'border-t border-slate-700' : ''} flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-xl">👷</div>
                        <div class="flex-1 min-w-0">
                            <p class="text-white font-medium">${ins.name}</p>
                            <p class="text-slate-400 text-sm">${ins.email || ''} ${ins.phone ? '• ' + ins.phone : ''}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-white font-bold">${insStats}</p>
                            <p class="text-slate-400 text-xs">ინსპექტირება</p>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="openModal('inspector', ${JSON.stringify(ins).replace(/"/g, '&quot;')})" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors">✏️</button>
                            <button onclick="deleteInspector('${ins.id}')" class="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg text-sm transition-colors">🗑️</button>
                        </div>
                    </div>
                `;
            }).join('')
            : '<div class="p-8 text-center text-slate-400"><div class="text-4xl mb-2">👷</div><p>ინსპექტორები არ არის დამატებული</p></div>';
        
        contentHtml = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-white font-bold">ინსპექტორები (${appState.inspectors.length})</h3>
                <button onclick="openModal('inspector')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                    ➕ ახლის დამატება
                </button>
            </div>
            <div class="bg-slate-800 rounded-xl overflow-hidden">
                ${inspectorsHtml}
            </div>
        `;
    }
    
    // Objects Tab
    if (activeTab === 'objects') {
        const objectsHtml = appState.objects.length > 0
            ? appState.objects.map((obj, idx) => {
                const objInspections = appState.inspections.filter(i => i.objectName === obj.name).length;
                return `
                    <div class="p-4 ${idx > 0 ? 'border-t border-slate-700' : ''} flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-xl">🏢</div>
                        <div class="flex-1 min-w-0">
                            <p class="text-white font-medium">${obj.name}</p>
                            <p class="text-slate-400 text-sm">${obj.address || 'მისამართი არ არის'}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-white font-bold">${objInspections}</p>
                            <p class="text-slate-400 text-xs">ინსპექტირება</p>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="openModal('object', ${JSON.stringify(obj).replace(/"/g, '&quot;')})" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors">✏️</button>
                            <button onclick="deleteObject('${obj.id}')" class="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg text-sm transition-colors">🗑️</button>
                        </div>
                    </div>
                `;
            }).join('')
            : '<div class="p-8 text-center text-slate-400"><div class="text-4xl mb-2">🏢</div><p>ობიექტები არ არის დამატებული</p></div>';
        
        contentHtml = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-white font-bold">ობიექტები (${appState.objects.length})</h3>
                <button onclick="openModal('object')" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                    ➕ ახლის დამატება
                </button>
            </div>
            <div class="bg-slate-800 rounded-xl overflow-hidden">
                ${objectsHtml}
            </div>
        `;
    }
    
    // Problems Tab
    if (activeTab === 'problems') {
        const problemsHtml = problematic.length > 0
            ? problematic.slice(0, 10).map((eq, idx) => `
                <div class="p-4 ${idx > 0 ? 'border-t border-slate-700' : ''}">
                    <div class="flex items-center gap-4 mb-3">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style="background: ${systemsData[eq.systemKey]?.color || '#64748b'}25;">
                            ${systemsData[eq.systemKey]?.icon || '⚙️'}
                        </div>
                        <div class="flex-1">
                            <p class="text-white font-medium">${eq.equipmentName}</p>
                            <p class="text-slate-400 text-sm">${eq.systemName}</p>
                        </div>
                        <div class="flex gap-3">
                            <span class="text-red-400">${eq.problems} პრობლემა</span>
                            <span class="text-yellow-400">${eq.warnings} გაფრთხილება</span>
                        </div>
                    </div>
                    <div class="ml-14 space-y-1">
                        ${eq.issues.slice(0, 3).map(issue => `
                            <div class="text-sm p-2 rounded bg-slate-700/50 flex items-center gap-2">
                                <span class="${issue.status === 'problem' ? 'text-red-400' : 'text-yellow-400'}">${issue.status === 'problem' ? '✗' : '⚠'}</span>
                                <span class="text-slate-300 flex-1">${issue.task}</span>
                                <span class="text-slate-500 text-xs">${issue.object} • ${formatDate(issue.date, 'short')}</span>
                            </div>
                        `).join('')}
                        ${eq.issues.length > 3 ? `<p class="text-slate-500 text-xs">და კიდევ ${eq.issues.length - 3}...</p>` : ''}
                    </div>
                </div>
            `).join('')
            : '<div class="p-8 text-center text-slate-400"><div class="text-4xl mb-2">✅</div><p>პრობლემური მოწყობილობები არ არის</p></div>';
        
        contentHtml = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-white font-bold">პრობლემური მოწყობილობები</h3>
                <button onclick="exportStatisticsReport()" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-colors flex items-center gap-2">
                    📥 რეპორტის ექსპორტი
                </button>
            </div>
            <div class="bg-slate-800 rounded-xl overflow-hidden">
                ${problemsHtml}
            </div>
        `;
    }

    return `
        <div class="min-h-screen bg-slate-900">
            <header class="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-40">
                <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button onclick="navigateTo('home')" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>უკან</span>
                    </button>
                    <h1 class="text-xl font-bold text-white flex items-center gap-2">📊 მენეჯერის პანელი</h1>
                    <div></div>
                </div>
            </header>
            
            <div class="max-w-7xl mx-auto px-4 py-6">
                <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
                    ${tabsHtml}
                </div>
                ${contentHtml}
            </div>
        </div>
    `;
}

// =================================================================
// 28. კომპონენტები - Settings (პარამეტრები)
// =================================================================

function SettingsScreen() {
    const settings = appState.settings;
    
    return `
        <div class="min-h-screen bg-slate-900">
            <header class="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-40">
                <div class="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button onclick="navigateTo('home')" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>უკან</span>
                    </button>
                    <h1 class="text-xl font-bold text-white flex items-center gap-2">⚙️ პარამეტრები</h1>
                    <div></div>
                </div>
            </header>
            
            <div class="max-w-3xl mx-auto px-4 py-6 space-y-6">
                <!-- მომხმარებლის როლი -->
                <div class="bg-slate-800 rounded-xl p-5">
                    <h3 class="text-white font-bold mb-4">👤 მომხმარებლის როლი</h3>
                    <div class="flex gap-3">
                        <button onclick="setUserRole('inspector')" class="flex-1 p-4 rounded-xl border-2 transition-all ${appState.userRole === 'inspector' ? 'border-blue-500 bg-blue-600/20' : 'border-slate-700 hover:border-slate-600'}">
                            <div class="text-2xl mb-2">👷</div>
                            <p class="text-white font-medium">ინსპექტორი</p>
                            <p class="text-slate-400 text-xs">ინსპექტირებების ჩატარება</p>
                        </button>
                        <button onclick="setUserRole('manager')" class="flex-1 p-4 rounded-xl border-2 transition-all ${appState.userRole === 'manager' ? 'border-blue-500 bg-blue-600/20' : 'border-slate-700 hover:border-slate-600'}">
                            <div class="text-2xl mb-2">📊</div>
                            <p class="text-white font-medium">მენეჯერი</p>
                            <p class="text-slate-400 text-xs">დაგეგმვა და მონიტორინგი</p>
                        </button>
                        <button onclick="setUserRole('admin')" class="flex-1 p-4 rounded-xl border-2 transition-all ${appState.userRole === 'admin' ? 'border-blue-500 bg-blue-600/20' : 'border-slate-700 hover:border-slate-600'}">
                            <div class="text-2xl mb-2">🔐</div>
                            <p class="text-white font-medium">ადმინი</p>
                            <p class="text-slate-400 text-xs">სრული წვდომა</p>
                        </button>
                    </div>
                </div>
                
                <!-- ზოგადი პარამეტრები -->
                <div class="bg-slate-800 rounded-xl p-5">
                    <h3 class="text-white font-bold mb-4">🔧 ზოგადი პარამეტრები</h3>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-white">ავტომატური შენახვა</p>
                                <p class="text-slate-400 text-sm">მონაცემების პერიოდული შენახვა</p>
                            </div>
                            <button onclick="updateSetting('autoSave', ${!settings.autoSave})" class="w-14 h-8 rounded-full transition-colors ${settings.autoSave ? 'bg-blue-600' : 'bg-slate-700'}">
                                <div class="w-6 h-6 bg-white rounded-full shadow transition-transform ${settings.autoSave ? 'translate-x-7' : 'translate-x-1'}"></div>
                            </button>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-white">შესრულებული დავალებების ჩვენება</p>
                                <p class="text-slate-400 text-sm">ყველა დავალების ჩვენება</p>
                            </div>
                            <button onclick="updateSetting('showCompletedTasks', ${!settings.showCompletedTasks})" class="w-14 h-8 rounded-full transition-colors ${settings.showCompletedTasks ? 'bg-blue-600' : 'bg-slate-700'}">
                                <div class="w-6 h-6 bg-white rounded-full shadow transition-transform ${settings.showCompletedTasks ? 'translate-x-7' : 'translate-x-1'}"></div>
                            </button>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-white">შეხსენების დღეები</p>
                                <p class="text-slate-400 text-sm">რამდენი დღით ადრე შეგახსენოთ</p>
                            </div>
                            <select onchange="updateSetting('reminderDays', parseInt(this.value))" class="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white">
                                <option value="1" ${settings.reminderDays === 1 ? 'selected' : ''}>1 დღე</option>
                                <option value="3" ${settings.reminderDays === 3 ? 'selected' : ''}>3 დღე</option>
                                <option value="7" ${settings.reminderDays === 7 ? 'selected' : ''}>7 დღე</option>
                                <option value="14" ${settings.reminderDays === 14 ? 'selected' : ''}>14 დღე</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <!-- მონაცემების მართვა -->
                <div class="bg-slate-800 rounded-xl p-5">
                    <h3 class="text-white font-bold mb-4">💾 მონაცემების მართვა</h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                            <div>
                                <p class="text-white">ექსპორტი JSON</p>
                                <p class="text-slate-400 text-sm">ყველა მონაცემის ექსპორტი</p>
                            </div>
                            <button onclick="exportToJSON()" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition-colors">📥 ექსპორტი</button>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                            <div>
                                <p class="text-white">იმპორტი JSON</p>
                                <p class="text-slate-400 text-sm">მონაცემების იმპორტი ფაილიდან</p>
                            </div>
                            <label class="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg text-sm transition-colors cursor-pointer">
                                📤 იმპორტი
                                <input type="file" accept=".json" onchange="importFromJSON(event)" class="hidden" />
                            </label>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-600/10 border border-red-600/30 rounded-lg">
                            <div>
                                <p class="text-red-400">მონაცემების წაშლა</p>
                                <p class="text-red-400/70 text-sm">ყველა მონაცემის წაშლა</p>
                            </div>
                            <button onclick="confirmClearAllData()" class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm transition-colors">🗑️ წაშლა</button>
                        </div>
                    </div>
                </div>
                
                <!-- ინფორმაცია -->
                <div class="bg-slate-800 rounded-xl p-5">
                    <h3 class="text-white font-bold mb-4">ℹ️ ინფორმაცია</h3>
                    <div class="space-y-2 text-sm">
                        <div class="flex justify-between">
                            <span class="text-slate-400">ვერსია</span>
                            <span class="text-white">1.0.0</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">შენახული ინსპექტირებები</span>
                            <span class="text-white">${appState.inspections.length}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">დაგეგმილი ინსპექტირებები</span>
                            <span class="text-white">${appState.scheduledInspections.length}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-400">LocalStorage გამოყენება</span>
                            <span class="text-white">${(JSON.stringify(localStorage).length / 1024).toFixed(1)} KB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.confirmClearAllData = function() {
    openModal('confirm', {
        title: '⚠️ ყველა მონაცემის წაშლა',
        message: 'ნამდვილად გსურთ ყველა მონაცემის წაშლა? ეს მოქმედება შეუქცევადია და წაიშლება ყველა ინსპექტირება, ობიექტი და პარამეტრი.',
        confirmText: 'დიახ, წაშლა',
        onConfirm: 'clearAllData()'
    });
}

window.clearAllData = function() {
    localStorage.clear();
    location.reload();
}

// =================================================================
// 29. კომპონენტები - Notifications (შეტყობინებები)
// =================================================================

function NotificationsScreen() {
    const notifications = appState.notifications;
    
    const notificationsHtml = notifications.length > 0
        ? notifications.map((notif, idx) => `
            <div class="p-4 ${idx > 0 ? 'border-t border-slate-700' : ''} ${notif.read ? 'opacity-60' : ''} flex items-start gap-4">
                <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl ${notif.read ? 'bg-slate-700' : 'bg-blue-600/20'}">
                    ${notif.type === 'new_inspection' ? '📋' : notif.type === 'scheduled' ? '📅' : '🔔'}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium ${notif.read ? '' : 'font-bold'}">${notif.title}</p>
                    <p class="text-slate-400 text-sm">${notif.message}</p>
                    <p class="text-slate-500 text-xs mt-1">${timeAgo(notif.createdAt)}</p>
                </div>
                <div class="flex gap-2">
                    ${!notif.read ? `<button onclick="markNotificationRead('${notif.id}')" class="text-blue-400 hover:text-blue-300 text-sm">✓</button>` : ''}
                    <button onclick="deleteNotification('${notif.id}')" class="text-slate-400 hover:text-red-400 text-sm">✕</button>
                </div>
            </div>
        `).join('')
        : '<div class="p-8 text-center text-slate-400"><div class="text-4xl mb-2">🔔</div><p>შეტყობინებები არ არის</p></div>';

    return `
        <div class="min-h-screen bg-slate-900">
            <header class="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-40">
                <div class="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button onclick="navigateTo('home')" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>უკან</span>
                    </button>
                    <h1 class="text-xl font-bold text-white flex items-center gap-2">🔔 შეტყობინებები</h1>
                    <div class="flex gap-2">
                        ${notifications.some(n => !n.read) ? `<button onclick="markAllNotificationsRead()" class="text-blue-400 hover:text-blue-300 text-sm">ყველას წაკითხვა</button>` : ''}
                    </div>
                </div>
            </header>
            
            <div class="max-w-3xl mx-auto px-4 py-6">
                <div class="bg-slate-800 rounded-xl overflow-hidden">
                    ${notificationsHtml}
                </div>
                ${notifications.length > 0 ? `
                    <div class="mt-4 text-center">
                        <button onclick="clearAllNotifications()" class="text-red-400 hover:text-red-300 text-sm">ყველას წაშლა</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// =================================================================
// 30. მთავარი რენდერის ფუნქცია
// =================================================================

function renderApp() {
    const root = document.getElementById('app-root');
    const modalRoot = document.getElementById('modal-root');
    
    if (!root) {
        console.error('app-root element not found');
        return;
    }
    
    let content = '';
    
    switch (appState.currentView) {
        case 'home':
            content = HomeScreen();
            break;
        case 'system':
            content = appState.selectedSystem ? SystemScreen() : HomeScreen();
            break;
        case 'manager':
            content = ManagerDashboard();
            break;
        case 'settings':
            content = SettingsScreen();
            break;
        case 'notifications':
            content = NotificationsScreen();
            break;
        case 'reports':
            content = ReportsScreen();
            break;
        default:
            content = HomeScreen();
    }
    
    root.innerHTML = content;
    
    // მოდალის რენდერი
    if (modalRoot) {
        modalRoot.innerHTML = renderModal();
    }
}

// Reports Screen (დამატებითი)
function ReportsScreen() {
    const filteredInspections = filterInspections();
    
    return `
        <div class="min-h-screen bg-slate-900">
            <header class="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-40">
                <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button onclick="navigateTo('home')" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>უკან</span>
                    </button>
                    <h1 class="text-xl font-bold text-white flex items-center gap-2">📋 ყველა ინსპექტირება</h1>
                    <div class="flex gap-2">
                        <button onclick="openModal('filter')" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm">🔽 ფილტრი</button>
                        <button onclick="exportToCSV()" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm">📥 CSV</button>
                    </div>
                </div>
            </header>
            
            <div class="max-w-7xl mx-auto px-4 py-6">
                <div class="bg-slate-800 rounded-xl overflow-hidden">
                    <table class="w-full">
                        <thead class="bg-slate-700">
                            <tr>
                                <th class="px-4 py-3 text-left text-slate-300 text-sm font-medium cursor-pointer hover:text-white" onclick="updateSort('object')">ობიექტი</th>
                                <th class="px-4 py-3 text-left text-slate-300 text-sm font-medium cursor-pointer hover:text-white" onclick="updateSort('date')">თარიღი</th>
                                <th class="px-4 py-3 text-left text-slate-300 text-sm font-medium">სისტემა</th>
                                <th class="px-4 py-3 text-left text-slate-300 text-sm font-medium">ინსპექტორი</th>
                                <th class="px-4 py-3 text-left text-slate-300 text-sm font-medium cursor-pointer hover:text-white" onclick="updateSort('progress')">პროგრესი</th>
                                <th class="px-4 py-3 text-left text-slate-300 text-sm font-medium cursor-pointer hover:text-white" onclick="updateSort('priority')">პრიორიტეტი</th>
                                <th class="px-4 py-3 text-right text-slate-300 text-sm font-medium">მოქმედება</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filteredInspections.map(ins => {
                                const progress = ins.progress || { percentage: 0 };
                                const priorityInfo = priorityOptions.find(p => p.value === ins.priority) || priorityOptions[1];
                                return `
                                    <tr class="border-t border-slate-700 hover:bg-slate-700/50">
                                        <td class="px-4 py-3 text-white">${ins.objectName || '—'}</td>
                                        <td class="px-4 py-3 text-slate-400">${formatDate(ins.date, 'short')}</td>
                                        <td class="px-4 py-3 text-slate-400">${ins.systemName || '—'}</td>
                                        <td class="px-4 py-3 text-slate-400">${ins.inspector || '—'}</td>
                                        <td class="px-4 py-3">
                                            <div class="flex items-center gap-2">
                                                <div class="w-16 h-2 bg-slate-600 rounded-full overflow-hidden">
                                                    <div class="h-full bg-blue-500 rounded-full" style="width: ${progress.percentage}%"></div>
                                                </div>
                                                <span class="text-white text-sm">${progress.percentage}%</span>
                                            </div>
                                        </td>
                                        <td class="px-4 py-3 text-slate-400">${priorityInfo.icon} ${priorityInfo.label}</td>
                                        <td class="px-4 py-3 text-right">
                                            <button onclick="loadSavedInspection('${ins.id}')" class="text-blue-400 hover:text-blue-300 text-sm mr-2">✏️</button>
                                            <button onclick="deleteInspection('${ins.id}')" class="text-red-400 hover:text-red-300 text-sm">🗑️</button>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                    ${filteredInspections.length === 0 ? '<div class="p-8 text-center text-slate-400">ინსპექტირებები არ მოიძებნა</div>' : ''}
                </div>
            </div>
        </div>
    `;
}

// =================================================================
// 31. ინიციალიზაცია
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 HVAC Inspection App initializing...');
    
    // დროებითი ინსპექტირების ჩატვირთვა (თუ არსებობს)
    const tempInspection = loadFromLocalStorage('tempInspection');
    if (tempInspection && Object.keys(tempInspection.tasks || {}).length > 0) {
        const shouldRestore = confirm('გაქვთ დაუმთავრებელი ინსპექტირება. გსურთ გაგრძელება?');
        if (shouldRestore) {
            appState.inspectionData = tempInspection;
        } else {
            localStorage.removeItem('tempInspection');
        }
    }
    
    // ავტომატური შენახვის დაწყება
    if (appState.settings.autoSave) {
        startAutoSave();
    }
    
    // პირველი რენდერი
    renderApp();
    
    console.log('✅ HVAC Inspection App ready!');
    console.log('📊 Loaded inspections:', appState.inspections.length);
    console.log('👤 User role:', appState.userRole);
});

// გვერდის დატოვებისას შენახვა
window.addEventListener('beforeunload', () => {
    saveAllState();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S - შენახვა
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (appState.currentView === 'system') {
            saveInspection();
        }
    }
    
    // Escape - მოდალის დახურვა
    if (e.key === 'Escape' && appState.ui.modalOpen) {
        closeModal();
    }
});

// Global error handler
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error:', msg, 'at', url, lineNo, columnNo);
    showToast('დაფიქსირდა შეცდომა', 'error');
    return false;
};