import { FcGraduationCap } from "react-icons/fc";

export default function Education() {
  return (
    <div className="mt-10">
      <p className="text-fluid-xs uppercase tracking-widest  font-semibold mb-6">
        education
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FcGraduationCap className="w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-secondary">
                Bachelor of Computer Engineering
              </p>
              <p className="text-fluid-xs text-secondary">
                National College of Engineering
              </p>
              <p className="text-fluid-xs text-secondary">
                Tribhuvan University,IOE
              </p>
            </div>
          </div>
          <p className="text-fluid-xs font-medium text-secondary">2021 - 2025</p>
        </div>
       
      </div>
    </div>
  );

  
}
