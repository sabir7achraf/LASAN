import {Link} from "@nextui-org/link";

export default function SideNav(){

    return (
        <div className="flex flex-col w-1/4 pr-6 border-r ">
                <Link href="/profile" className="hover:text-blue-600 font-semibold">
                   Profile
                </Link>
            <Link href="/training" className="hover:text-blue-600 font-semibold">
                Training
            </Link>

        </div>
    )
}