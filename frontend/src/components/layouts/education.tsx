import { div } from "framer-motion/client";
import { FcGraduationCap } from "react-icons/fc";

export default function Education() {
  return (
    <div>
    <div className="mt-10">
      <p className="text-fluid-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
        education
      </p>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FcGraduationCap className="w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-800">
                Bachelor of Computer Engineering
              </p>
              <p className="text-fluid-xs text-gray-500">
                National College of Engineering
              </p>
              <p className="text-fluid-xs text-gray-500">
                Tribhuvan University,IOE
              </p>
            </div>
          </div>
          <p className="text-fluid-xs font-medium text-gray-800">2021 - 2025</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FcGraduationCap className="w-6 h-6" />
            <div>
              <p className="text-sm font-medium text-gray-800">High School</p>
              <p className="text-fluid-xs text-gray-500">
                Southwestern State College
              </p>
              <p className="text-fluid-xs text-gray-500">Kathmandu, Nepal</p>
            </div>
                  </div>
                  <p className="text-fluid-xs font-medium text-gray-800">2018 - 2020</p>
        </div>
      </div>
          </div>

    </div>
  );

  
}
