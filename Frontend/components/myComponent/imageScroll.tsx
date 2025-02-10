import Image from 'next/image';
export default function  ImageScroll (){
    return (
       <div className="relative ">
           <div className="absolute text-xl text-white">
               Where habits stick. And results are real.
           </div>
        <div className="flex overflow-x-auto space-x-5 py-5 snap-x snap-mandatory top-1/2">
            <div className="flex-shrink-0 flex flex-row items-center snap-start">
                <Image src="/befor.jpg" alt="Before" width={300} height={600}/>
                <Image src="/after.jpg" alt="After" width={300} height={600}/>
            </div>
            <div className="flex-shrink-0 flex flex-row items-center snap-start">
                <Image src="/befor.jpg" alt="Before" width={300} height={600}/>
                <Image src="/after.jpg" alt="After" width={300} height={600}/>
            </div>
            <div className="flex-shrink-0 flex flex-row items-center snap-start">
                <Image src="/befor.jpg" alt="Before" width={300} height={600}/>
                <Image src="/after.jpg" alt="After" width={300} height={600}/>
            </div>
            <div className="flex-shrink-0 flex flex-row items-center snap-start">
                <Image src="/befor.jpg" alt="Before" width={300} height={600}/>
                <Image src="/after.jpg" alt="After" width={300} height={600}/>
            </div>
            <div className="flex-shrink-0 flex flex-row items-center snap-start">
                <Image src="/befor.jpg" alt="Before" width={300} height={600}/>
                <Image src="/after.jpg" alt="After" width={300} height={600}/>
            </div>
            {/* Ajoute d'autres transformations ici */}
        </div>
       </div>
    );
};