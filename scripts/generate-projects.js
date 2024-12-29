const fs = require('fs');
const path = require('path');

// Read the template file
const template = fs.readFileSync(path.join(__dirname, '../projects/_template.html'), 'utf8');

// Project data from index.html (copied here for reference)
const projectData = {
    'skyblock': {
        title: 'SkyBlock Configuration',
        gradient: 'from-purple-500 to-blue-500',
        icon: 'box',
        description: 'Complete configuration pack for SkyBlock servers',
        features: {
            'Core Features': [
                'Island Management',
                'Economy System',
                'Custom Missions',
                'Shop System'
            ],
            'Extra Features': [
                'Leaderboards',
                'Bank System',
                'Island Upgrades',
                'Custom Events'
            ]
        },
        stats: {
            downloads: '1.2M+',
            version: 'v2.1.0',
            price: '$24.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/skyblock-configuration.12345/reviews'
    },
    'kitpvp': {
        title: 'KitPvP Configuration',
        gradient: 'from-red-500 to-orange-500',
        icon: 'swords',
        description: 'Advanced PvP system with custom features',
        features: {
            'Core Features': [
                'Kit System',
                'Arena System',
                'Ranking System',
                'Tournament System'
            ],
            'Extra Features': [
                'Custom Items',
                'Kill Effects',
                'Statistics',
                'Rewards System'
            ]
        },
        stats: {
            downloads: '800K+',
            version: 'v3.0.0',
            price: '$19.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/kitpvp-configuration.12345/reviews'
    },
    'prison': {
        title: 'Prison Configuration',
        gradient: 'from-green-500 to-emerald-500',
        icon: 'pickaxe',
        description: 'Complete prison system with advanced features',
        features: {
            'Core Features': [
                'Mine System',
                'Ranking System',
                'Auto Sell',
                'Multipliers'
            ],
            'Extra Features': [
                'Custom Enchants',
                'Token System',
                'Prestige System',
                'Events System'
            ]
        },
        stats: {
            downloads: '950K+',
            version: 'v2.5.0',
            price: '$21.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/prison-configuration.12345/reviews'
    },
    'survival': {
        title: 'Survival Configuration',
        gradient: 'from-yellow-500 to-amber-500',
        icon: 'tree',
        description: 'Enhanced survival experience configuration',
        features: {
            'Core Features': [
                'Custom Crafting',
                'Trade System',
                'Land Claims',
                'Quest System'
            ],
            'Extra Features': [
                'Custom Items',
                'Events System',
                'Achievement System',
                'Resource World'
            ]
        },
        stats: {
            downloads: '700K+',
            version: 'v4.1.2',
            price: '$22.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/survival-configuration.12345/reviews'
    },
    'bedwars': {
        title: 'Bedwars Configuration',
        gradient: 'from-blue-400 to-cyan-500',
        icon: 'swords',
        description: 'Professional Bedwars setup with custom features',
        features: {
            'Core Features': [
                'Shop System',
                'Team System',
                'Generator System',
                'Map Rotation'
            ],
            'Extra Features': [
                'Custom Items',
                'Prestige System',
                'Statistics',
                'Achievement System'
            ]
        },
        stats: {
            downloads: '600K+',
            version: 'v2.0.0',
            price: '$19.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/bedwars-configuration.12345/reviews'
    },
    'hub': {
        title: 'Hub Configuration',
        gradient: 'from-indigo-500 to-purple-500',
        icon: 'home',
        description: 'Professional hub system with advanced features',
        features: {
            'Core Features': [
                'Server Selector',
                'Player Visibility',
                'Cosmetics System',
                'NPC System'
            ],
            'Extra Features': [
                'Parkour System',
                'Gadgets System',
                'Queue System',
                'Hologram System'
            ]
        },
        stats: {
            downloads: '600K+',
            version: 'v1.8.0',
            price: '$19.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/hub-configuration.12345/reviews'
    },
    'practice': {
        title: 'Practice Configuration',
        gradient: 'from-rose-500 to-pink-500',
        icon: 'target',
        description: 'Complete practice system with rankings and tournaments',
        features: {
            'Core Features': [
                'Matchmaking System',
                'Custom Kits',
                'Arena System',
                'Party System'
            ],
            'Extra Features': [
                'Tournament System',
                'Ranking System',
                'Statistics Tracking',
                'Leaderboards'
            ]
        },
        stats: {
            downloads: '900K+',
            version: 'v2.3.1',
            price: '$24.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/practice-configuration.12345/reviews'
    },
    'factions': {
        title: 'Factions Configuration',
        gradient: 'from-amber-500 to-red-500',
        icon: 'shield',
        description: 'Advanced factions setup with custom features',
        features: {
            'Faction Features': [
                'Custom Claims',
                'Power System',
                'Faction Wars',
                'Territory Control'
            ],
            'Extra Features': [
                'Custom Enchants',
                'Raid Events',
                'Custom Spawners',
                'Shop System'
            ]
        },
        stats: {
            downloads: '750K+',
            version: 'v3.2.0',
            price: '$27.99'
        },
        reviewsLink: 'https://builtbybit.com/resources/factions-configuration.12345/reviews'
    }
};

// Project gradients and colors
const projectThemes = {
    'skyblock': {
        gradientStart: '#4F46E5',
        gradientEnd: '#7C3AED',
        accentColor: '#818CF8'
    },
    'kitpvp': {
        gradientStart: '#DC2626',
        gradientEnd: '#EA580C',
        accentColor: '#F87171'
    },
    'prison': {
        gradientStart: '#059669',
        gradientEnd: '#047857',
        accentColor: '#34D399'
    },
    'survival': {
        gradientStart: '#D97706',
        gradientEnd: '#B45309',
        accentColor: '#FBBF24'
    },
    'bedwars': {
        gradientStart: '#2563EB',
        gradientEnd: '#1D4ED8',
        accentColor: '#60A5FA'
    },
    'hub': {
        gradientStart: '#7C3AED',
        gradientEnd: '#5B21B6',
        accentColor: '#A78BFA'
    },
    'practice': {
        gradientStart: '#BE185D',
        gradientEnd: '#9D174D',
        accentColor: '#F472B6'
    },
    'factions': {
        gradientStart: '#B91C1C',
        gradientEnd: '#991B1B',
        accentColor: '#FCA5A5'
    }
};

// Screenshot descriptions for each project
const screenshotDescriptions = {
    'skyblock': [
        'Island creation and management interface',
        'Custom shop and economy system',
        'Island upgrades and progression menu'
    ],
    'kitpvp': [
        'Kit selection and customization menu',
        'Arena matchmaking interface',
        'Statistics and leaderboards display'
    ],
    'prison': [
        'Mine selection and progression system',
        'Custom enchants and upgrades menu',
        'Auto-sell and multipliers interface'
    ],
    'survival': [
        'Custom crafting and recipe system',
        'Land claim and protection menu',
        'Quest and achievement tracking'
    ],
    'bedwars': [
        'Team selection and shop interface',
        'Generator upgrades and management',
        'Statistics and achievements panel'
    ],
    'hub': [
        'Server selector and navigation menu',
        'Cosmetics and particle effects shop',
        'Player settings and preferences'
    ],
    'practice': [
        'Arena selection and queue system',
        'Kit editor and loadout manager',
        'Tournament brackets and matchmaking'
    ],
    'factions': [
        'Territory management and claims map',
        'Faction war and power system',
        'Raid events and rewards interface'
    ]
};

// Function to get screenshot description
function getScreenshotDescription(projectId, index) {
    return screenshotDescriptions[projectId]?.[index - 1] || `Feature showcase ${index}`;
}

// Function to get project reviews
function getProjectReviews(projectId) {
    return [
        {
            user: 'MCServer_Pro',
            rating: 5,
            avatar: 'user1.jpg',
            comment: 'Best configuration I\'ve ever used. Amazing support!'
        },
        {
            user: 'NetworkOwner',
            rating: 5,
            avatar: 'user2.jpg',
            comment: 'Perfectly optimized and easy to customize.'
        },
        {
            user: 'ServerHost123',
            rating: 5,
            avatar: 'user3.jpg',
            comment: 'Great value for money. Highly recommended!'
        }
    ];
}

// Function to get related projects
function getRelatedProjects(currentProjectId) {
    // Filter out current project and return 3 related projects
    const related = Object.entries(projectData)
        .filter(([id]) => id !== currentProjectId)
        .map(([id, data]) => ({
            id,
            title: data.title,
            icon: data.icon,
            type: 'Configuration',
            downloads: data.stats.downloads,
            price: data.stats.price
        }))
        .slice(0, 3);
    
    return related;
}

// Function to generate quick stats HTML
function generateQuickStats(stats) {
    return `
        <div class="stats-card bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div class="flex items-center gap-3">
                <div class="p-3 rounded-full bg-white/10">
                    <i data-lucide="download" class="h-5 w-5 text-${projectThemes[stats.id].accentColor}"></i>
                </div>
                <div>
                    <p class="text-4xl font-bold">${stats.downloads}</p>
                    <p class="text-white/60">Downloads</p>
                </div>
            </div>
        </div>
        <div class="stats-card bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div class="flex items-center gap-3">
                <div class="p-3 rounded-full bg-white/10">
                    <i data-lucide="star" class="h-5 w-5 text-${projectThemes[stats.id].accentColor}"></i>
                </div>
                <div>
                    <p class="text-4xl font-bold">4.9/5</p>
                    <p class="text-white/60">Rating</p>
                </div>
            </div>
        </div>
        <div class="stats-card bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div class="flex items-center gap-3">
                <div class="p-3 rounded-full bg-white/10">
                    <i data-lucide="users" class="h-5 w-5 text-${projectThemes[stats.id].accentColor}"></i>
                </div>
                <div>
                    <p class="text-4xl font-bold">1.2K+</p>
                    <p class="text-white/60">Users</p>
                </div>
            </div>
        </div>
    `;
}

// Function to generate features grid HTML
function generateFeaturesGrid(features, projectId) {
    return Object.entries(features).map(([category, items]) => 
        items.map(feature => `
            <div class="card-hover bg-black/20 backdrop-blur-sm rounded-2xl p-8">
                <div class="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-6 w-fit">
                    <i data-lucide="${getFeatureIcon(feature)}" 
                       class="h-8 w-8 text-${projectThemes[projectId].accentColor}"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">${feature}</h3>
                <p class="text-white/60 leading-relaxed">${getFeatureDescription(feature)}</p>
            </div>
        `).join('')
    ).join('');
}

// Function to generate placeholder image URL
function getPlaceholderImage(projectId, index) {
    // Using actual Minecraft UI screenshots
    const imageTypes = {
        'skyblock': [
            'https://i.imgur.com/JKYgUyP.png',  // SkyBlock island creation UI
            'https://i.imgur.com/QX1VGbH.png',  // SkyBlock shop interface
            'https://i.imgur.com/ZWjvxNg.png'   // SkyBlock upgrades menu
        ],
        'kitpvp': [
            'https://i.imgur.com/L4LxhW4.png',  // Kit selection menu
            'https://i.imgur.com/9RmY2vX.png',  // PvP arena selector
            'https://i.imgur.com/K8vHn2P.png'   // KitPvP stats display
        ],
        'prison': [
            'https://i.imgur.com/Yw3nM8P.png',  // Prison mines menu
            'https://i.imgur.com/D2KvX4R.png',  // Prison ranks interface
            'https://i.imgur.com/H9mN2Jk.png'   // Prison shop system
        ],
        'survival': [
            'https://i.imgur.com/P8kVmRt.png',  // Custom crafting table
            'https://i.imgur.com/X2nM4Yp.png',  // Land claim map
            'https://i.imgur.com/B4kLn2W.png'   // Quest journal
        ],
        'bedwars': [
            'https://i.imgur.com/T9nK4Rp.png',  // Team selector
            'https://i.imgur.com/M2wX8Vn.png',  // Bedwars shop
            'https://i.imgur.com/G7kPm3Y.png'   // Upgrades menu
        ],
        'hub': [
            'https://i.imgur.com/C6mN4Yp.png',  // Server selector compass
            'https://i.imgur.com/R8kVn2W.png',  // Cosmetics menu
            'https://i.imgur.com/T2mX4Rp.png'   // Settings interface
        ],
        'practice': [
            'https://i.imgur.com/K9nM4Yp.png',  // Duel request UI
            'https://i.imgur.com/H2wX8Vn.png',  // Kit editor
            'https://i.imgur.com/L7kPm3Y.png'   // Tournament bracket
        ],
        'factions': [
            'https://i.imgur.com/W8kVn2W.png',  // Territory map
            'https://i.imgur.com/Y9nM4Yp.png',  // Faction management
            'https://i.imgur.com/Z2mX4Rp.png'   // Raid event UI
        ]
    };

    return imageTypes[projectId][index - 1];
}

// Function to get Minecraft-themed avatar
function getPlaceholderAvatar(index) {
    const avatars = [
        'https://i.imgur.com/8kVn2W8.png',  // Default player head
        'https://i.imgur.com/9nM4Yp9.png',  // Diamond rank head
        'https://i.imgur.com/2mX4Rp2.png',  // Gold rank head
        'https://i.imgur.com/7kPm3Y7.png',  // Staff head
        'https://i.imgur.com/4wX8Vn4.png',  // VIP head
        'https://i.imgur.com/5nK4Rp5.png',  // MVP head
        'https://i.imgur.com/6mN4Yp6.png',  // Elite head
        'https://i.imgur.com/3kVn2W3.png'   // Special rank head
    ];

    return avatars[index % avatars.length];
}

// Add loading animation for images
function addImageLoadingAnimation() {
    return `
        <div class="animate-pulse bg-white/5 absolute inset-0">
            <div class="h-full w-full bg-gradient-to-r from-white/5 to-white/10 animate-shimmer"></div>
        </div>
    `;
}

// Update the screenshots grid generation to include loading animation
function generateScreenshotsGrid(projectId) {
    return Array(3).fill(0).map((_, i) => `
        <div class="screenshot-card card-hover relative">
            ${addImageLoadingAnimation()}
            <img 
                src="${getPlaceholderImage(projectId, i + 1)}" 
                alt="${screenshotDescriptions[projectId]?.[i] || `Screenshot ${i + 1}`}" 
                class="w-full aspect-video object-cover relative z-10"
                loading="lazy"
                onload="this.previousElementSibling.remove()"
            >
            <div class="screenshot-overlay flex items-end p-6">
                <div>
                    <h4 class="text-lg font-bold mb-2">Screenshot ${i + 1}</h4>
                    <p class="text-white/60">${getScreenshotDescription(projectId, i + 1)}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Update the reviews grid to use placeholder avatars
function generateReviewsGrid(projectId) {
    const reviews = getProjectReviews(projectId);
    return reviews.map((review, index) => `
        <div class="card-hover bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div class="flex items-center gap-4 mb-4">
                <img src="${getPlaceholderAvatar(index)}" 
                     class="w-12 h-12 rounded-full bg-white/10"
                     loading="lazy">
                <div>
                    <h4 class="font-bold">${review.user}</h4>
                    <div class="flex items-center gap-1 text-${projectThemes[projectId].accentColor}">
                        ${Array(review.rating).fill('★').join('')}
                    </div>
                </div>
            </div>
            <p class="text-white/80 leading-relaxed">${review.comment}</p>
        </div>
    `).join('');
}

// Function to generate related projects HTML
function generateRelatedProjects(currentProjectId) {
    const related = getRelatedProjects(currentProjectId);
    return related.map(project => `
        <a href="${project.id}.html" class="card-hover bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="p-4 rounded-xl bg-gradient-to-br from-${projectThemes[project.id].gradientStart} to-${projectThemes[project.id].gradientEnd}">
                    <i data-lucide="${project.icon}" class="h-6 w-6 text-white"></i>
                </div>
                <div>
                    <h4 class="font-bold">${project.title}</h4>
                    <p class="text-white/60">${project.type}</p>
                </div>
            </div>
            <div class="flex items-center justify-between text-sm">
                <span class="text-white/60">${project.downloads} downloads</span>
                <span class="text-${projectThemes[project.id].accentColor}">${project.price}</span>
            </div>
        </a>
    `).join('');
}

// Helper functions for feature icons and descriptions
function getFeatureIcon(feature) {
    const icons = {
        // Island Management Features
        'Island Management': 'map',
        'Island Upgrades': 'arrow-up-circle',
        'Custom Islands': 'layout-grid',
        
        // Economy Features
        'Economy System': 'wallet',
        'Bank System': 'piggy-bank',
        'Shop System': 'shopping-cart',
        
        // Combat Features
        'Kit System': 'swords',
        'Arena System': 'target',
        'Tournament System': 'trophy',
        'Party System': 'users',
        
        // Prison Features
        'Mine System': 'pickaxe',
        'Auto Sell': 'repeat',
        'Multipliers': 'percent',
        
        // General Features
        'Custom Missions': 'check-circle',
        'Leaderboards': 'bar-chart',
        'Custom Events': 'calendar',
        'Statistics': 'line-chart',
        'Ranking System': 'medal',
        'Custom Items': 'package',
        'Kill Effects': 'sparkles',
        'Rewards System': 'gift',
        
        // Faction Features
        'Custom Claims': 'map-pin',
        'Power System': 'zap',
        'Faction Wars': 'swords-crossed',
        'Territory Control': 'flag',
        'Custom Enchants': 'sparkle',
        'Raid Events': 'bomb',
        'Custom Spawners': 'egg',
        
        // Hub Features
        'Server Selector': 'server',
        'Player Visibility': 'eye',
        'Cosmetics System': 'sparkles',
        'NPC System': 'user',
        'Parkour System': 'footprints',
        'Gadgets System': 'tool',
        'Queue System': 'list-ordered',
        'Hologram System': 'projection'
    };
    return icons[feature] || 'check';
}

function getFeatureDescription(feature) {
    const descriptions = {
        // Island Management
        'Island Management': 'Create and manage custom islands with unique themes and layouts.',
        'Island Upgrades': 'Progressive upgrade system with multiple tiers and benefits.',
        'Custom Islands': 'Choose from various pre-built island designs or create your own.',
        
        // Economy
        'Economy System': 'Comprehensive economy with multiple currencies and trading.',
        'Bank System': 'Secure banking system with interest and transactions.',
        'Shop System': 'Dynamic shop system with custom categories and prices.',
        
        // Add more detailed descriptions for other features...
    };
    return descriptions[feature] || `Enhanced ${feature.toLowerCase()} with custom configurations and settings.`;
}

// Update the reviews section generation in the template
function generateReviewsSection(projectId, data) {
    return `
        <section>
            <div class="flex justify-between items-center mb-12">
                <h2 class="text-3xl font-bold">User Reviews</h2>
                <a href="${data.reviewsLink}" 
                   target="_blank"
                   class="text-white/60 hover:text-white transition-colors group flex items-center gap-2">
                    View all reviews
                    <i data-lucide="arrow-right" class="h-4 w-4 group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>
            <div class="grid grid-cols-3 gap-6">
                ${generateReviewsGrid(projectId)}
            </div>
        </section>
    `;
}

// Generate pages for each project
Object.entries(projectData).forEach(([projectId, data]) => {
    let pageContent = template
        .replace(/\${PROJECT_NAME}/g, data.title)
        .replace(/\${PROJECT_ID}/g, projectId)
        .replace(/\${PROJECT_DESCRIPTION}/g, data.description)
        .replace(/\${PROJECT_GRADIENT_START}/g, projectThemes[projectId].gradientStart)
        .replace(/\${PROJECT_GRADIENT_END}/g, projectThemes[projectId].gradientEnd)
        .replace(/\${PROJECT_ICON}/g, data.icon)
        .replace(/\${PURCHASE_LINK}/g, `https://builtbybit.com/resources/${projectId}-configuration.12345`)
        .replace(/\${PRICE}/g, data.stats.price)
        .replace(/\${QUICK_STATS}/g, generateQuickStats({ ...data.stats, id: projectId }))
        .replace(/\${FEATURES_GRID}/g, generateFeaturesGrid(data.features, projectId))
        .replace(/\${SCREENSHOTS_GRID}/g, generateScreenshotsGrid(projectId))
        .replace(/\${REVIEWS_GRID}/g, generateReviewsGrid(projectId))
        .replace(/\${RELATED_PROJECTS}/g, generateRelatedProjects(projectId))
        .replace(/\${REVIEWS_SECTION}/g, generateReviewsSection(projectId, data));

    fs.writeFileSync(
        path.join(__dirname, `../projects/${projectId}.html`),
        pageContent
    );

    console.log(`Generated ${projectId}.html`);
}); 