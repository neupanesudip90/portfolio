// import { Download, ExternalLink, FileText } from "lucide-react";

// export const metadata = {
//   title: "Resume - Sudip Neupane",
//   description: "Download or view my resume.",
//   icons: {
//     icon: "/favicon.png",
//   },
//   keywords:
//     "resume, download resume, view resume, sudip neupane resume, software engineer resume",
// };

// export default function Resume() {

//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center bg-bg-page ">
//       {/* Header */}
//       <div className="text-center mb-3">
//         <div className="flex items-center justify-center gap-2 mb-3">
//           <FileText className="w-6 h-6 text-primary" />
//           <h1 className="text-xl text-primary font-bold tracking-tight">
//             Resume
//           </h1>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-3 mb-6">
//         <a
//           href="/resume.pdf"
//           download="Sudip_Neupane_Resume.pdf"
//           className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-primary
//                      text-sm font-medium hover:opacity-90 transition-all duration-200
//                      active:scale-95 shadow-sm"
//         >
//           <Download className="w-4 h-4" />
//           Download Resume
//         </a>
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 px-5 py-2.5 text-primary rounded-lg border border-border
//                      text-sm font-medium hover:bg-bg-hover transition-all duration-200
//                      active:scale-95"
//         >
//           <ExternalLink className="w-4 h-4" />
//           Open in Tab
//         </a>
//       </div>

//       {/* PDF Viewer */}
//       <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-border shadow-lg">
//         {/* Toolbar bar */}
//         <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-hover">
//           <span className="text-xs text-secondary font-mono">
//             Sudip_Neupane_Resume.pdf
//           </span>
//           <div className="flex gap-1.5">
//             <span className="w-3 h-3 rounded-full bg-red-400" />
//             <span className="w-3 h-3 rounded-full bg-yellow-400" />
//             <span className="w-3 h-3 rounded-full bg-green-400" />
//           </div>
//         </div>

//         {/* Embed */}
//         <iframe
//           src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
//           className="w-full"
//           style={{ height: "80vh" }}
//           title="Sudip Neupane Resume"
//         />
//       </div>

//       {/* Footer note */}
//       <p className="mt-6 text-xs text-secondary text-center">
//         Can't see the PDF?{" "}
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline underline-offset-2 hover:text-primary transition-colors"
//         >
//           Open it directly
//         </a>
//       </p>
//     </section>
//   );
// }
import { Download, ExternalLink, FileText } from "lucide-react";

export const metadata = {
  title: "Resume - Sudip Neupane",
  description: "Download or view my resume.",
  icons: { icon: "/favicon.png" },
  keywords:
    "resume, download resume, view resume, sudip neupane resume, software engineer resume",
};

const RESUME_URL = "/resume.pdf";
const GOOGLE_DOCS_VIEWER = `https://docs.google.com/viewer?url=${encodeURIComponent(
  "https://yourdomain.com/resume.pdf",
)}&embedded=true`;

export default function Resume() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-bg-page">
      {/* Header */}
      <div className="text-center mb-3">
        <div className="flex items-center justify-center gap-2 mb-3">
          <FileText className="w-6 h-6 text-primary" />
          <h1 className="text-xl text-primary font-bold tracking-tight">
            Resume
          </h1>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <a
          href={RESUME_URL}
          download="Sudip_Neupane_Resume.pdf"
          className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-primary 
                     text-sm font-medium hover:opacity-90 transition-all duration-200 
                     active:scale-95 shadow-sm"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 text-primary rounded-lg border border-border
                     text-sm font-medium hover:bg-bg-hover transition-all duration-200 active:scale-95"
        >
          <ExternalLink className="w-4 h-4" />
          Open in Tab
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-border shadow-lg">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-hover">
          <span className="text-xs text-secondary font-mono">
            Sudip_Neupane_Resume.pdf
          </span>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </div>

        <iframe
          src={GOOGLE_DOCS_VIEWER}
          className="w-full hidden sm:block"
          style={{ height: "80vh" }}
          title="Sudip Neupane Resume"
        />
        <iframe
          src={GOOGLE_DOCS_VIEWER}
          className="w-full block sm:hidden"
          style={{ height: "85vh" }}
          title="Sudip Neupane Resume"
        />
      </div>

      {/* Footer note */}
      <p className="mt-6 text-xs text-secondary text-center">
        Can't see the PDF?{" "}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          Open it directly
        </a>
      </p>
    </section>
  );
}
