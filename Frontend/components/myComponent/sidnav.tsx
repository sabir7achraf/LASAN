import {Link} from "@nextui-org/link";

export default function SideNav(){

    return (
        <div className="flex flex-col w-1/4 pr-6 border-r-3 space-y-10 justify-normal border-warning  ">
                <Link href="/profile" className="hover:text-warning font-semibold text-gray-400">
                   Profile
                </Link>
            <Link href="/training" className="hover:text-warning font-semibold text-gray-400">
                Training
            </Link>

        </div>
    )
}