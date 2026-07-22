"use client";
import Link from "next/link";

const allReviews = [
  { id: "rv1", user: "Michael O.", avatar: "MO", vendor: "Chidi's Gadgets", product: "iPhone 14 Pro Max", rating: 5, text: "Exactly as described. Fast delivery and great communication. Would buy again!", time: "2 days ago", likes: 12 },
  { id: "rv2", user: "Sarah K.", avatar: "SK", vendor: "Amina's Fashion", product: "African Print Blazer", rating: 5, text: "The blazer is gorgeous! Perfect fit and beautiful fabric. Got so many compliments.", time: "1 week ago", likes: 24 },
  { id: "rv3", user: "Tunde A.", avatar: "TA", vendor: "Kofi's Books & Supplies", product: "Calculus Textbook", rating: 4, text: "Good condition as described. Fair price. Would recommend.", time: "2 weeks ago", likes: 5 },
  { id: "rv4", user: "Grace N.", avatar: "GN", vendor: "Zara's Beauty Hub", product: "Vitamin C Serum", rating: 5, text: "My skin has never looked better! This serum is amazing. Fast shipping too.", time: "3 weeks ago", likes: 45 },
  { id: "rv5", user: "Daniel K.", avatar: "DK", vendor: "Emeka's Eats", product: "Jollof Rice & Chicken", rating: 5, text: "Best jollof rice on campus. Period. Always fresh and generous portions.", time: "1 month ago", likes: 67 },
  { id: "rv6", user: "Fatima B.", avatar: "FB", vendor: "Chidi's Gadgets", product: "MacBook Air M3", rating: 5, text: "Brand new as advertised. Great price. Chidi is very responsive and helpful.", time: "1 month ago", likes: 18 },
  { id: "rv7", user: "Oluwaseun A.", avatar: "OA", vendor: "Amina's Fashion", product: "Streetwear Hoodie", rating: 4, text: "Nice hoodie, quality material. Runs slightly large but I actually prefer the oversized look.", time: "1 month ago", likes: 8 },
  { id: "rv8", user: "Ngozi E.", avatar: "NE", vendor: "Zara's Beauty Hub", product: "Vitamin C Serum", rating: 5, text: "Third bottle I'm ordering! This stuff works. Zara always delivers quickly.", time: "2 months ago", likes: 33 },
]

export default function ReviewsPage() {
  return (
    <div className="pt-14 pb-20 px-4 max-w-lg mx-auto">
      <div className="py-4">
        <h1 className="text-xl font-bold">Reviews</h1>
        <p className="text-sm text-gray-500">What students are saying</p>
      </div>

      {/* Summary */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#F77737]">4.8</p>
            <p className="text-[10px] text-gray-500">Average Rating</p>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-2 text-xs">
                <span className="text-gray-400 w-3">{star}</span>
                <span className="text-[10px]">★</span>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F77737] rounded-full" style={{ width: `${[62, 22, 10, 4, 2][5 - star]}%` }} />
                </div>
                <span className="text-gray-500 w-6 text-right">{["62%", "22%", "10%", "4%", "2%"][5 - star]}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">Based on 1,247 reviews across all vendors</p>
      </div>

      {/* Reviews List */}
      <div className="space-y-3">
        {allReviews.map((review) => (
          <div key={review.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#833AB4] to-[#0088cc] flex items-center justify-center text-xs font-bold">
                {review.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{review.user}</p>
                <p className="text-[10px] text-gray-500">{review.time}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">{'★'.repeat(review.rating)}</p>
                <Link href={`/prototype/vendors/vendor-1`} className="text-[10px] text-[#0088cc] hover:underline">{review.vendor}</Link>
              </div>
            </div>
            <p className="text-sm text-gray-400">{review.text}</p>
            <div className="flex items-center gap-3 mt-2 pt-2 border-t border-white/5">
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#FD1D1D] transition-colors">
                👍 <span>{review.likes}</span>
              </button>
              <button className="text-xs text-gray-500 hover:text-[#0088cc] transition-colors">
                💬 Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
