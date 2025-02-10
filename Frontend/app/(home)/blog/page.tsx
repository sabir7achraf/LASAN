import React from "react"
import StartNow from "@/components/startNow";
import Bgvedio from "@/components/myComponent/bgvedio";
import {ImageInterval} from "@/components/myComponent/imageInterval";
import ImageScroll from "@/components/myComponent/imageScroll";



export default function BlogPage() {
  return (
      <div>
          <div className=" w-[200vh] h-[90vh]">
              <Bgvedio/>
          </div>
          <div className="bg-amber-900 text-black w-[200vh] h-[90vh]">
              <ImageScroll/>
          </div>
          <div className="text-black w-[200vh] h-[80vh] bg-blue-400">
              <ImageInterval/>
          </div>
      </div>

  );
}
