import React from "react"
import StartNow from "@/components/startNow";
import Bgvedio from "@/components/bgvedio";
import {ImageInterval} from "@/components/imageInterval";



export default function BlogPage() {
  return (
      <div>
          <div className=" w-[200vh] h-[90vh]">
              <Bgvedio/>
          </div>
          <div className="bg-amber-50 text-black w-[200vh] h-[60vh]">
              something else
          </div>
          <div className="text-black w-[200vh] h-[80vh] bg-blue-400">
              <ImageInterval/>
          </div>
      </div>

  );
}
