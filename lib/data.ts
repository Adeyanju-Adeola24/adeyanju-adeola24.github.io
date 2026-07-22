export const vendors = [
  {
    id: "vendor-1",
    name: "Chidi Okonkwo",
    shop: "Chidi's Gadgets",
    avatar: "CO",
    university: "University of Lagos",
    rating: 4.8,
    reviews: 234,
    verified: true,
    joined: "Jan 2026",
    products: 18,
    responseTime: "< 5 min",
    description: "Your go-to shop for phones, laptops, accessories, and smart devices on campus. Fast delivery within Unilag.",
    badges: ["Top Vendor", "Fast Shipper", "Verified"],
  },
  {
    id: "vendor-2",
    name: "Amina Bello",
    shop: "Amina's Fashion",
    avatar: "AB",
    university: "Ahmadu Bello University",
    rating: 4.9,
    reviews: 312,
    verified: true,
    joined: "Dec 2025",
    products: 42,
    responseTime: "< 2 min",
    description: "Trendy campus fashion — streetwear, native fits, accessories. ABU's most trusted fashion vendor.",
    badges: ["Top Vendor", "Trending"],
  },
  {
    id: "vendor-3",
    name: "Kofi Mensah",
    shop: "Kofi's Books & Supplies",
    avatar: "KM",
    university: "University of Ghana",
    rating: 4.7,
    reviews: 189,
    verified: true,
    joined: "Feb 2026",
    products: 56,
    responseTime: "< 10 min",
    description: "Textbooks, stationery, gadgets, and academic supplies. We've got what you need for the semester.",
    badges: ["Verified", "Best Price"],
  },
  {
    id: "vendor-4",
    name: "Zara Mohammed",
    shop: "Zara's Beauty Hub",
    avatar: "ZM",
    university: "University of Cape Town",
    rating: 4.9,
    reviews: 445,
    verified: true,
    joined: "Nov 2025",
    products: 67,
    responseTime: "< 3 min",
    description: "Premium beauty products, skincare, makeup, and fragrances. Curated for the modern student.",
    badges: ["Top Vendor", "Trending", "Fast Shipper"],
  },
  {
    id: "vendor-5",
    name: "Emeka Nwosu",
    shop: "Emeka's Eats",
    avatar: "EN",
    university: "University of Nigeria, Nsukka",
    rating: 4.6,
    reviews: 567,
    verified: true,
    joined: "Oct 2025",
    products: 34,
    responseTime: "< 1 min",
    description: "Homemade meals, snacks, and drinks delivered to your hostel. UNN's favorite campus food vendor.",
    badges: ["Top Vendor", "Fast Shipper", "Trending"],
  },
]

export const products = [
  {
    id: "prod-1",
    title: "iPhone 14 Pro Max - 256GB",
    price: 850000,
    currency: "NGN",
    vendor: vendors[0],
    images: ["📱"],
    category: "Electronics",
    condition: "Like New",
    description: "Barely used iPhone 14 Pro Max in Deep Purple. 256GB storage. Includes original box, charger, and a free case. Battery health at 98%.",
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    tags: ["phone", "apple", "premium"],
  },
  {
    id: "prod-2",
    title: "MacBook Air M3 - 16GB/512GB",
    price: 1450000,
    currency: "NGN",
    vendor: vendors[0],
    images: ["💻"],
    category: "Electronics",
    condition: "New",
    description: "Brand new MacBook Air with M3 chip. 16GB unified memory, 512GB SSD. Space Grey. Sealed box. Full warranty.",
    rating: 5.0,
    reviewCount: 18,
    inStock: true,
    tags: ["laptop", "apple", "m3"],
  },
  {
    id: "prod-3",
    title: "Premium African Print Blazer",
    price: 45000,
    currency: "NGN",
    vendor: vendors[1],
    images: ["👔"],
    category: "Fashion",
    condition: "New",
    description: "Handmade African print blazer. Perfect for events, presentations, and campus parties. Available in 5 patterns. Custom fitting available.",
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    tags: ["fashion", "african print", "blazer"],
  },
  {
    id: "prod-4",
    title: "Calculus Textbook + Solution Manual",
    price: 8500,
    currency: "NGN",
    vendor: vendors[2],
    images: ["📚"],
    category: "Books",
    condition: "Good",
    description: "Stewart Calculus 9th Edition with solution manual. Some highlighting in first 3 chapters. Still in great condition overall.",
    rating: 4.5,
    reviewCount: 23,
    inStock: true,
    tags: ["textbook", "calculus", "academic"],
  },
  {
    id: "prod-5",
    title: "Vitamin C Brightening Serum",
    price: 12500,
    currency: "NGN",
    vendor: vendors[3],
    images: ["🧴"],
    category: "Beauty",
    condition: "New",
    description: "Professional-grade Vitamin C serum. Brightens skin, reduces dark spots, and evens skin tone. 30ml bottle. Dermatologist tested.",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    tags: ["skincare", "serum", "beauty"],
  },
  {
    id: "prod-6",
    title: "Jollof Rice & Chicken Combo",
    price: 3500,
    currency: "NGN",
    vendor: vendors[4],
    images: ["🍛"],
    category: "Food",
    condition: "Fresh",
    description: "Freshly made Jollof rice with grilled chicken, plantain, and coleslaw. Order before 11 AM for lunch delivery. Student favorite!",
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    tags: ["food", "jollof", "lunch"],
  },
  {
    id: "prod-7",
    title: "AirPods Pro 2nd Gen",
    price: 180000,
    currency: "NGN",
    vendor: vendors[0],
    images: ["🎧"],
    category: "Electronics",
    condition: "New",
    description: "Sealed AirPods Pro 2nd Gen with USB-C. Active Noise Cancellation. Spatial Audio. Full Apple warranty.",
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    tags: ["audio", "apple", "earphones"],
  },
  {
    id: "prod-8",
    title: "Streetwear Hoodie - Limited Edition",
    price: 22000,
    currency: "NGN",
    vendor: vendors[1],
    images: ["👕"],
    category: "Fashion",
    condition: "New",
    description: "Limited edition campus streetwear hoodie. Heavy cotton, oversized fit. Only 50 pieces available this drop.",
    rating: 4.9,
    reviewCount: 34,
    inStock: true,
    tags: ["hoodie", "streetwear", "limited"],
  },
]

export const boardItems = [
  { id: "b1", type: "order", title: "New Order #2841", desc: "iPhone 14 Pro Max - Chidi's Gadgets", time: "2 min ago", status: "pending" },
  { id: "b2", type: "message", title: "Message from Amina", desc: "Is the MacBook still available?", time: "15 min ago", status: "unread" },
  { id: "b3", type: "review", title: "New Review ★★★★★", desc: "Zara: 'Amazing product, fast delivery!'", time: "1 hr ago", status: "read" },
  { id: "b4", type: "trend", title: "Trending: Jollof Rice", desc: "450 orders today from Emeka's Eats", time: "3 hrs ago", status: "read" },
  { id: "b5", type: "order", title: "Order #2839 Shipped", desc: "MacBook Air M3 - Delivered to Hostel", time: "5 hrs ago", status: "completed" },
  { id: "b6", type: "alert", title: "MI Recommendation", desc: "Price drop suggested for AirPods Pro", time: "6 hrs ago", status: "action" },
]

export const bulletinPosts = [
  {
    id: "post-1",
    author: "University of Lagos",
    avatar: "UN",
    badge: "Official",
    time: "2 hrs ago",
    title: "Semester Exams Schedule Released",
    content: "The final semester exam timetable is now available on the portal. Download your personalized schedule before Friday.",
    likes: 234,
    comments: 56,
    category: "Academic",
  },
  {
    id: "post-2",
    author: "Campus Security",
    avatar: "CS",
    badge: "Alert",
    time: "5 hrs ago",
    title: "Safety Notice: Lost & Found",
    content: "A lost iPhone 13 was turned in at the security office. Contact campus security to claim. Remember to lock your hostel doors.",
    likes: 89,
    comments: 12,
    category: "Safety",
  },
  {
    id: "post-3",
    author: "Student Council",
    avatar: "SC",
    badge: "Event",
    time: "1 day ago",
    title: "Campus Fest 2026 - This Saturday!",
    content: "Get ready for the biggest campus event of the year! Music, food, games, and prizes. Free entry for all students. See you there!",
    likes: 567,
    comments: 123,
    category: "Event",
  },
  {
    id: "post-4",
    author: "Chidi's Gadgets",
    avatar: "CG",
    badge: "Vendor",
    time: "2 days ago",
    title: "Flash Sale: All Accessories 30% Off",
    content: "Weekend flash sale! Get 30% off all phone accessories. Cases, chargers, screen protectors, and more. Offer ends Sunday.",
    likes: 145,
    comments: 34,
    category: "Promotion",
  },
]

export const trendItems = [
  { id: "t1", title: "AirPods Pro 2", sales: "+340%", category: "Electronics", emoji: "🎧", trending: true },
  { id: "t2", title: "Jollof Rice Combo", sales: "+280%", category: "Food", emoji: "🍛", trending: true },
  { id: "t3", title: "African Print Blazer", sales: "+195%", category: "Fashion", emoji: "👔", trending: true },
  { id: "t4", title: "Vitamin C Serum", sales: "+150%", category: "Beauty", emoji: "🧴", trending: true },
  { id: "t5", title: "Calculus Textbook", sales: "+120%", category: "Books", emoji: "📚", trending: false },
  { id: "t6", title: "Streetwear Hoodie", sales: "+310%", category: "Fashion", emoji: "👕", trending: true },
]

export const chatThreads = [
  {
    id: "chat-1",
    user: "Amina Bello",
    avatar: "AB",
    lastMessage: "Is the MacBook still available? I'm interested.",
    time: "2 min ago",
    unread: true,
    online: true,
  },
  {
    id: "chat-2",
    user: "Kofi Mensah",
    avatar: "KM",
    lastMessage: "Sure, I can do 8,000 for the textbook.",
    time: "1 hr ago",
    unread: false,
    online: false,
  },
  {
    id: "chat-3",
    user: "Zara Mohammed",
    avatar: "ZM",
    lastMessage: "The serum worked wonders! Thank you!",
    time: "3 hrs ago",
    unread: false,
    online: true,
  },
  {
    id: "chat-4",
    user: "Emeka Nwosu",
    avatar: "EN",
    lastMessage: "Your jollof rice order is being prepared 🍛",
    time: "5 hrs ago",
    unread: false,
    online: true,
  },
]

export const chatMessages: Record<string, { text: string; sent: boolean; time: string }[]> = {
  "chat-1": [
    { text: "Hi! Is the MacBook Air M3 still available?", sent: true, time: "2:15 PM" },
    { text: "Hey! Yes, it's still available!", sent: false, time: "2:16 PM" },
    { text: "Great! What's the condition?", sent: true, time: "2:17 PM" },
    { text: "Brand new, sealed box. Full warranty.", sent: false, time: "2:18 PM" },
    { text: "Can I come see it today?", sent: true, time: "2:20 PM" },
    { text: "Sure! I'm in the engineering building. 3 PM?", sent: false, time: "2:21 PM" },
    { text: "Perfect, see you then! 👋", sent: true, time: "2:22 PM" },
    { text: "Is the MacBook still available? I'm interested.", sent: true, time: "2 min ago" },
  ],
  "chat-2": [
    { text: "Hi! Do you have the Calculus textbook?", sent: true, time: "12:30 PM" },
    { text: "Yes, still available!", sent: false, time: "12:32 PM" },
    { text: "Can you do 8,000?", sent: true, time: "12:35 PM" },
    { text: "Sure, I can do 8,000 for the textbook.", sent: false, time: "12:40 PM" },
  ],
  "chat-3": [
    { text: "Just got the Vitamin C serum!", sent: false, time: "10:00 AM" },
    { text: "Awesome! Let me know how it works for you", sent: true, time: "10:05 AM" },
    { text: "The serum worked wonders! Thank you!", sent: false, time: "3 hrs ago" },
  ],
  "chat-4": [
    { text: "Can I order jollof rice for lunch?", sent: true, time: "9:00 AM" },
    { text: "Yes! Order before 11 AM for lunch delivery", sent: false, time: "9:02 AM" },
    { text: "Great, I'll place the order now", sent: true, time: "9:05 AM" },
    { text: "Your jollof rice order is being prepared 🍛", sent: false, time: "5 hrs ago" },
  ],
}

export const moments = [
  {
    id: "mom-1",
    user: "Sarah K.",
    avatar: "SK",
    university: "University of Lagos",
    time: "30 min ago",
    image: "🎉",
    caption: "Just got my African print blazer from Amina's Fashion! Campus fest ready 🔥",
    likes: 45,
    comments: 12,
    liked: false,
  },
  {
    id: "mom-2",
    user: "Tunde A.",
    avatar: "TA",
    university: "University of Ghana",
    time: "2 hrs ago",
    image: "📚",
    caption: "Library grind never stops. Final semester energy 📖💪",
    likes: 89,
    comments: 23,
    liked: true,
  },
  {
    id: "mom-3",
    user: "Grace N.",
    avatar: "GN",
    university: "University of Cape Town",
    time: "3 hrs ago",
    image: "🍛",
    caption: "Emeka's jollof rice hits different after a long lecture. Best ₦3,500 I've spent all week!",
    likes: 156,
    comments: 34,
    liked: false,
  },
  {
    id: "mom-4",
    user: "Michael O.",
    avatar: "MO",
    university: "Ahmadu Bello University",
    time: "5 hrs ago",
    image: "📱",
    caption: "New iPhone 14 Pro Max just landed! Thanks Chidi's Gadgets for the fast delivery 🚀",
    likes: 234,
    comments: 67,
    liked: true,
  },
  {
    id: "mom-5",
    user: "Fatima B.",
    avatar: "FB",
    university: "University of Nigeria, Nsukka",
    time: "6 hrs ago",
    image: "🏆",
    caption: "Won the inter-departmental debate finals! UNN we move 💯",
    likes: 312,
    comments: 89,
    liked: false,
  },
  {
    id: "mom-6",
    user: "Daniel K.",
    avatar: "DK",
    university: "University of Lagos",
    time: "1 day ago",
    image: "🧴",
    caption: "Zara's Vitamin C serum is magic. 2 weeks in and my skin is glowing ✨",
    likes: 178,
    comments: 45,
    liked: true,
  },
  {
    id: "mom-7",
    user: "Ngozi E.",
    avatar: "NE",
    university: "University of Cape Town",
    time: "1 day ago",
    image: "👔",
    caption: "Suited up for the career fair. Amina's Fashion came through with the perfect fit 🙌",
    likes: 98,
    comments: 21,
    liked: false,
  },
  {
    id: "mom-8",
    user: "Oluwaseun A.",
    avatar: "OA",
    university: "University of Ghana",
    time: "2 days ago",
    image: "🎵",
    caption: "Campus fest 2026 was insane! Best night of the semester 🎶🔥",
    likes: 445,
    comments: 123,
    liked: true,
  },
]

export const categories = ["All", "Electronics", "Fashion", "Food", "Beauty", "Books", "Services"]

// --- Admin Data ---

export interface AdminUser {
  id: string
  name: string
  email: string
  role: "superadmin" | "admin" | "moderator" | "support"
  avatar: string
  lastActive: string
  status: "active" | "away" | "offline"
}

export const adminUsers: AdminUser[] = [
  { id: "au-1", name: "David (Founder)", email: "david@hollap.com", role: "superadmin", avatar: "D", lastActive: "Now", status: "active" },
  { id: "au-2", name: "Temi", email: "temi@hollap.com", role: "admin", avatar: "T", lastActive: "5 min ago", status: "active" },
  { id: "au-3", name: "Chioma", email: "chioma@hollap.com", role: "moderator", avatar: "C", lastActive: "1 hr ago", status: "active" },
  { id: "au-4", name: "Emeka", email: "emeka@hollap.com", role: "moderator", avatar: "E", lastActive: "3 hrs ago", status: "away" },
  { id: "au-5", name: "Sade", email: "sade@hollap.com", role: "support", avatar: "S", lastActive: "2 hrs ago", status: "offline" },
  { id: "au-6", name: "Kofi", email: "kofi@hollap.com", role: "support", avatar: "K", lastActive: "1 day ago", status: "offline" },
]

export interface PendingVendor {
  id: string
  shopName: string
  ownerName: string
  email: string
  university: string
  categories: string[]
  submittedAt: string
  status: "pending" | "approved" | "rejected"
  documents: string[]
}

export const pendingVendors: PendingVendor[] = [
  { id: "pv-1", shopName: "Tola's Tech", ownerName: "Tola Adebayo", email: "tola@unilag.edu.ng", university: "University of Lagos", categories: ["Electronics"], submittedAt: "2 hrs ago", status: "pending", documents: ["ID Card", "School ID"] },
  { id: "pv-2", shopName: "Grace's Glow", ownerName: "Grace Okonkwo", email: "grace@unn.edu.ng", university: "University of Nigeria, Nsukka", categories: ["Beauty", "Fashion"], submittedAt: "5 hrs ago", status: "pending", documents: ["ID Card", "Business Reg"] },
  { id: "pv-3", shopName: "BookSmart NG", ownerName: "Samuel Adeleke", email: "samuel@abu.edu.ng", university: "Ahmadu Bello University", categories: ["Books", "Services"], submittedAt: "1 day ago", status: "pending", documents: ["ID Card", "School ID"] },
  { id: "pv-4", shopName: "FitFuel Meals", ownerName: "Hauwa Mohammed", email: "hauwa@unimaid.edu.ng", university: "University of Maiduguri", categories: ["Food"], submittedAt: "2 days ago", status: "pending", documents: ["ID Card", "Health Permit"] },
  { id: "pv-5", shopName: "Campus Kicks", ownerName: "Yaw Asante", email: "yaw@ug.edu.gh", university: "University of Ghana", categories: ["Fashion"], submittedAt: "3 days ago", status: "pending", documents: ["ID Card"] },
  { id: "pv-6", shopName: "Deji's Phone Repairs", ownerName: "Deji Ogun", email: "deji@oau.edu.ng", university: "Obafemi Awolowo University", categories: ["Electronics", "Services"], submittedAt: "4 days ago", status: "pending", documents: ["ID Card", "School ID", "Certification"] },
]

export interface PlatformUser {
  id: string
  name: string
  email: string
  university: string
  type: "student" | "vendor" | "both"
  joined: string
  status: "active" | "suspended" | "banned"
  reports: number
  transactions: number
}

export const platformUsers: PlatformUser[] = [
  { id: "u-1", name: "Sarah K.", email: "sarah@unilag.edu.ng", university: "University of Lagos", type: "student", joined: "Jan 2026", status: "active", reports: 0, transactions: 12 },
  { id: "u-2", name: "Tunde A.", email: "tunde@ug.edu.gh", university: "University of Ghana", type: "student", joined: "Feb 2026", status: "active", reports: 0, transactions: 5 },
  { id: "u-3", name: "Grace N.", email: "grace@uct.ac.za", university: "University of Cape Town", type: "both", joined: "Dec 2025", status: "active", reports: 1, transactions: 34 },
  { id: "u-4", name: "Michael O.", email: "michael@abu.edu.ng", university: "Ahmadu Bello University", type: "student", joined: "Mar 2026", status: "active", reports: 0, transactions: 8 },
  { id: "u-5", name: "Fatima B.", email: "fatima@unn.edu.ng", university: "University of Nigeria, Nsukka", type: "both", joined: "Nov 2025", status: "active", reports: 2, transactions: 45 },
  { id: "u-6", name: "Daniel K.", email: "daniel@unilag.edu.ng", university: "University of Lagos", type: "vendor", joined: "Oct 2025", status: "active", reports: 0, transactions: 89 },
  { id: "u-7", name: "Ngozi E.", email: "ngozi@uct.ac.za", university: "University of Cape Town", type: "student", joined: "Apr 2026", status: "suspended", reports: 3, transactions: 2 },
  { id: "u-8", name: "Oluwaseun A.", email: "seun@ug.edu.gh", university: "University of Ghana", type: "vendor", joined: "Jan 2026", status: "banned", reports: 7, transactions: 12 },
  { id: "u-9", name: "Chidi Okonkwo", email: "chidi@unilag.edu.ng", university: "University of Lagos", type: "vendor", joined: "Jan 2026", status: "active", reports: 0, transactions: 234 },
  { id: "u-10", name: "Amina Bello", email: "amina@abu.edu.ng", university: "Ahmadu Bello University", type: "vendor", joined: "Dec 2025", status: "active", reports: 0, transactions: 312 },
  { id: "u-11", name: "Zara Mohammed", email: "zara@uct.ac.za", university: "University of Cape Town", type: "vendor", joined: "Nov 2025", status: "active", reports: 0, transactions: 445 },
  { id: "u-12", name: "Emeka Nwosu", email: "emeka@unn.edu.ng", university: "University of Nigeria, Nsukka", type: "vendor", joined: "Oct 2025", status: "active", reports: 0, transactions: 567 },
]

export interface Transaction {
  id: string
  buyer: string
  vendor: string
  product: string
  amount: number
  currency: string
  status: "completed" | "pending" | "disputed" | "refunded" | "cancelled"
  date: string
  escrow: boolean
}

export const transactions: Transaction[] = [
  { id: "TXN-2841", buyer: "Sarah K.", vendor: "Chidi's Gadgets", product: "iPhone 14 Pro Max", amount: 850000, currency: "NGN", status: "completed", date: "2 min ago", escrow: false },
  { id: "TXN-2840", buyer: "Michael O.", vendor: "Amina's Fashion", product: "African Print Blazer", amount: 45000, currency: "NGN", status: "completed", date: "1 hr ago", escrow: false },
  { id: "TXN-2839", buyer: "Tunde A.", vendor: "Chidi's Gadgets", product: "MacBook Air M3", amount: 1450000, currency: "NGN", status: "completed", date: "5 hrs ago", escrow: false },
  { id: "TXN-2838", buyer: "Grace N.", vendor: "Emeka's Eats", product: "Jollof Rice & Chicken", amount: 3500, currency: "NGN", status: "pending", date: "3 hrs ago", escrow: false },
  { id: "TXN-2837", buyer: "Fatima B.", vendor: "Zara's Beauty Hub", product: "Vitamin C Serum", amount: 12500, currency: "NGN", status: "disputed", date: "1 day ago", escrow: true },
  { id: "TXN-2836", buyer: "Ngozi E.", vendor: "Kofi's Books", product: "Calculus Textbook", amount: 8500, currency: "NGN", status: "completed", date: "2 days ago", escrow: false },
  { id: "TXN-2835", buyer: "Oluwaseun A.", vendor: "Amina's Fashion", product: "Streetwear Hoodie", amount: 22000, currency: "NGN", status: "refunded", date: "3 days ago", escrow: true },
  { id: "TXN-2834", buyer: "Daniel K.", vendor: "Emeka's Eats", product: "Jollof Rice & Chicken", amount: 3500, currency: "NGN", status: "completed", date: "4 days ago", escrow: false },
  { id: "TXN-2833", buyer: "Grace N.", vendor: "Zara's Beauty Hub", product: "Vitamin C Serum", amount: 12500, currency: "NGN", status: "completed", date: "5 days ago", escrow: false },
  { id: "TXN-2832", buyer: "Sarah K.", vendor: "Chidi's Gadgets", product: "AirPods Pro 2", amount: 180000, currency: "NGN", status: "cancelled", date: "1 week ago", escrow: false },
  { id: "TXN-2831", buyer: "Fatima B.", vendor: "Amina's Fashion", product: "African Print Blazer", amount: 45000, currency: "NGN", status: "completed", date: "1 week ago", escrow: false },
  { id: "TXN-2830", buyer: "Michael O.", vendor: "Chidi's Gadgets", product: "iPhone 14 Pro Max", amount: 850000, currency: "NGN", status: "disputed", date: "1 week ago", escrow: true },
]

export interface ModerationItem {
  id: string
  type: "listing" | "review" | "moment" | "bulletin"
  content: string
  author: string
  reason: string
  reportedBy: string
  reportedAt: string
  status: "pending" | "resolved" | "dismissed"
  flags: number
}

export const moderationQueue: ModerationItem[] = [
  { id: "mod-1", type: "listing", content: "iPhone 14 Pro Max - suspiciously low price", author: "User #3421", reason: "Potential scam listing", reportedBy: "MI Auto-flag", reportedAt: "1 hr ago", status: "pending", flags: 5 },
  { id: "mod-2", type: "review", content: "Fake review - same user posted 5 star reviews for own shop", author: "User #8902", reason: "Review manipulation", reportedBy: "MI Auto-flag", reportedAt: "3 hrs ago", status: "pending", flags: 3 },
  { id: "mod-3", type: "moment", content: "Inappropriate photo in campus moments feed", author: "User #4567", reason: "NSFW content", reportedBy: "User #1122", reportedAt: "5 hrs ago", status: "pending", flags: 8 },
  { id: "mod-4", type: "bulletin", content: "Bulletin post advertising illegal goods", author: "User #6789", reason: "Prohibited items", reportedBy: "User #3344", reportedAt: "1 day ago", status: "pending", flags: 12 },
  { id: "mod-5", type: "listing", content: "MacBook Air - listing uses stolen images", author: "User #2345", reason: "Copyright infringement", reportedBy: "User #5566", reportedAt: "2 days ago", status: "resolved", flags: 4 },
  { id: "mod-6", type: "review", content: "Harassing comment on vendor profile", author: "User #7788", reason: "Harassment", reportedBy: "Vendor #003", reportedAt: "3 days ago", status: "dismissed", flags: 2 },
  { id: "mod-7", type: "moment", content: "Spam - repeated posting of same content", author: "User #9900", reason: "Spam", reportedBy: "MI Auto-flag", reportedAt: "3 days ago", status: "pending", flags: 6 },
]

export const adminAnalytics = {
  dailyActiveUsers: [1200, 1450, 1320, 1580, 1720, 1650, 1890, 2100, 1980, 2230, 2450, 2340, 2560, 2780, 2900, 3120, 3050, 3340, 3560, 3780, 3900, 4120, 4230, 4450, 4670, 4890, 5010, 5230, 5450, 5670],
  revenueDaily: [120000, 145000, 132000, 158000, 172000, 165000, 189000, 210000, 198000, 223000, 245000, 234000, 256000, 278000, 290000, 312000, 305000, 334000, 356000, 378000, 390000, 412000, 423000, 445000, 467000, 489000, 501000, 523000, 545000, 567000],
  usersByUniversity: [
    { name: "Unilag", count: 3200 },
    { name: "UNN", count: 2800 },
    { name: "ABU", count: 2100 },
    { name: "UG (Ghana)", count: 1900 },
    { name: "UCT", count: 1500 },
    { name: "UniIbadan", count: 1200 },
    { name: "OAU", count: 900 },
    { name: "Covenant", count: 700 },
  ],
  categoryBreakdown: [
    { name: "Electronics", count: 320, revenue: 48000000 },
    { name: "Fashion", count: 280, revenue: 12400000 },
    { name: "Food", count: 450, revenue: 5200000 },
    { name: "Beauty", count: 190, revenue: 8900000 },
    { name: "Books", count: 120, revenue: 2100000 },
    { name: "Services", count: 85, revenue: 3400000 },
  ],
  growthRate: 42,
  vendorRetention: 89,
  avgResponseTime: "4.2 min",
  supportTickets: { open: 23, resolved: 156, avgResolution: "2.4 hrs" },
}
