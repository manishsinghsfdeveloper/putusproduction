import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-red-600"
      >
        Putus Production
      </motion.h1>
      <p className="mt-4 text-lg max-w-xl">
        We are a modern advertising and branding production house. Bold ideas, strong visuals, unforgettable campaigns.
      </p>
      <motion.div
        className="mt-10 p-4 rounded-full bg-red-600 text-white flex items-center gap-2 cursor-pointer hover:bg-red-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Rocket />
        <span>Work With Us</span>
      </motion.div>
    </div>
  );
}

export default App;