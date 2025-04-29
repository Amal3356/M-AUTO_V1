import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function InfoCard({ title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-gray-800 shadow-xl hover:shadow-2xl transition duration-300">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-400 text-sm">{desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
