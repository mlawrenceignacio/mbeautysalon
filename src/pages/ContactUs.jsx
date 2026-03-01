import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import Footer from "../components/Footer";
import FaqQuickReplies from "../components/FaqQuickReplies";
import useUserStore from "../store/useUserStore";

function ContactUs() {
  const user = useUserStore((state) => state.user);
  const id = user?._id;

  return (
    <div className="flex flex-col w-[100%] h-[100dvh]">
      <Header page={"CONTACT US"} />

      <div className="w-full flex flex-col flex-1 overflow-y-auto">
        <div className="flex flex-col items-center p-3">
          <div className="w-full flex items-center flex-col md:flex-row lg:items-start justify-center mb-5 gap-5">
            <ChatBox userId={id} isLoggedIn={!!user} />

            <FaqQuickReplies userId={id} isLoggedIn={!!user} />
          </div>

          <div className="flex flex-col items-center text-center w-[90%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-2xl lg:text-3xl font-bold text-red-950 mb-2">
              MESSAGE US
            </h1>

            <p className="text-sm md:text-lg p-3 border border-red-950 rounded-lg mb-3 w-full">
              Message us directly through our salon’s built-in messenger. It
              will be handled automatically by our chatbot, but our admins can
              read your messages once we log in. Please wait for our reply!
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
