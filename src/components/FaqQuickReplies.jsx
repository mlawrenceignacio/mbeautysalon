import { useEffect, useMemo, useState } from "react";
import axios from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function FaqQuickReplies({ userId, isLoggedIn }) {
  const [faqs, setFaqs] = useState([]);
  const [q, setQ] = useState("");
  const [sendingId, setSendingId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/faq")
      .then((res) => setFaqs(res.data.faq || []))
      .catch(() => setFaqs([]));
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return faqs;
    return faqs.filter((f) => f.question.toLowerCase().includes(s));
  }, [faqs, q]);

  const sendFaq = async (faqId) => {
    if (!isLoggedIn) return navigate("/login");
    if (!userId) return;
    if (sendingId) return;

    try {
      setSendingId(faqId);
      await axios.post("/chat/faq", { userId, faqId });
    } finally {
      setSendingId(null);
    }
  };

  return (
    <div className="w-[80%] max-w-xl h-[420px] sm:h-[450px] md:h-[450px] border border-pink-200 rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col">
      <div className="px-4 py-3 border-b bg-white">
        <p className="text-red-950 font-bold text-base">Quick FAQs</p>
        <p className="text-xs text-gray-500 mt-0.5">
          Tap a question to send it instantly — you’ll receive an automatic
          reply.
        </p>

        <div className="mt-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search FAQs…"
            className="w-full border border-pink-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-900 bg-white"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-pink-50">
        {filtered.length === 0 ? (
          <div className="h-full flex items-center justify-center text-sm text-gray-500 px-6 text-center">
            No FAQs found.
          </div>
        ) : (
          <div className="divide-y divide-pink-100">
            {filtered.map((f) => {
              const sending = sendingId === f._id;

              return (
                <button
                  key={f._id}
                  onClick={() => sendFaq(f._id)}
                  disabled={!!sendingId}
                  className="w-full text-left px-4 py-3 bg-white hover:bg-pink-50 transition flex items-center justify-between disabled:opacity-70"
                >
                  <div className="pr-3">
                    <p className="text-sm font-semibold text-red-950 leading-snug">
                      {f.question}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-1">
                      {isLoggedIn
                        ? "Tap to send to chat"
                        : "Sign in to send this"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {sending ? (
                      <span className="text-xs font-semibold text-gray-500">
                        Sending…
                      </span>
                    ) : (
                      <span className="w-9 h-9 rounded-full bg-red-900 text-white flex items-center justify-center shadow-sm">
                        ➤
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="px-4 py-3 border-t bg-white">
        <p className="text-xs text-gray-500">
          Once an admin is online, they can continue the conversation live.
        </p>
      </div>
    </div>
  );
}
