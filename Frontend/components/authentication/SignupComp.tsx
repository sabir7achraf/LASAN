"use client";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";
import AnimatedDumbells from "../annimation/dumbbelBackground";
import AnimatedLines from "../annimation/ligne";

export default function SignupComp() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [athleteName, setAthleteName] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            email,
            password,
            athleteName,
        };

        try {
            const response = await fetch("http://localhost:8080/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem("token", token);
                console.log("User signed up successfully. Token:", token);
                router.push("/profile");
            } else {
                console.log("Error signing up");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12">
            <AnimatedDumbells />
            <AnimatedLines/>

            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-warning-500 to-warning-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-neutral-800 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-white">Sign up</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSubmit}>
                                <div className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <Input
                                            type="text"
                                            variant="bordered"
                                            label="Athlete Name"
                                            className="h-10 w-full"
                                            onChange={(e) => setAthleteName(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Input
                                            type="email"
                                            variant="bordered"
                                            label="Email"
                                            className="h-10 w-full"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Input
                                            type="password"
                                            variant="bordered"
                                            label="Password"
                                            className="h-10 w-full"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Button className="px-4 py-2 w-full" color="warning" variant="shadow" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-full flex justify-center mt-6">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <svg
                                    className="h-6 w-6 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="800px"
                                    height="800px"
                                    viewBox="-0.5 0 48 48"
                                    version="1.1"
                                >
                                    <title>Google-color</title>
                                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                            <g id="Google" transform="translate(401.000000, 860.000000)">
                                                <path
                                                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                    id="Fill-1"
                                                    fill="#FBBC05"
                                                ></path>
                                                <path
                                                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                    id="Fill-2"
                                                    fill="#EB4335"
                                                ></path>
                                                <path
                                                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                    id="Fill-3"
                                                    fill="#34A853"
                                                ></path>
                                                <path
                                                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                    id="Fill-4"
                                                    fill="#4285F4"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span>Continue with Google</span>
                            </button>
                        </div>
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <Link href="/login">
                                <span className="mx-4 text-gray-500">Login</span>
                            </Link>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}