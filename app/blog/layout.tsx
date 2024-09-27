import '@/styles/globals.css';
import Bgvedio from "@/components/bgvedio";
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
            {children}
        </div>
    </section>
    </div>
)
    ;
}
