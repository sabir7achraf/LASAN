"use client";
import React, {useEffect, useState} from "react";
import Athlete from "@/entities/Athlete";
import {fetchAthlete} from "@/components/profile/FetchAthlete";
import {Input} from "@nextui-org/input";
export default function ProfilForm() {


    let message: string | null = null;
    let setMessage: boolean = false;

    const [athlete, setAthlete] = useState<Athlete | null>(null)
    const [athleteName, setAthletName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [weight, setWeight] = useState<string | null>(null);
    const [hieght, setHieght] = useState<string | null>(null);


    const Form = {
        athleteName,
        email,
        weight,
        hieght,
    }

    useEffect(() => {
            async function loadAthlet() {
                const data = await fetchAthlete();
                setAthlete(data);
            }

            loadAthlet();
        }, []
    )
    const envoiForme = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8080/updateAthlete',
                {
                    method: "PUT",
                    headers: {
                        'Content-Type': "application/json",
                    },
                    body: JSON.stringify(Form),
                })
            if (response.ok) {
                message = "YOUR PROFILE IS UPDATED SUCCESSFULLY";
                setMessage = true;
            } else {
                message = "THERE IS A ERROR CAN YOU REFRESH THE PAGE !"
                setMessage = true;
            }

        } catch (error) {
            console.error('Error:', error);
        }
    }


        return (
            <div>
                <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                    Profile
                </h1>
                {setMessage && (
                    <div
                        role="alert"
                        className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105"
                    >
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                        <p className="text-xs font-semibold">Success - Everything went smoothly!</p>

                    </div>
                )}
                <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
                <form onSubmit={envoiForme}>
                    <div
                        className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                        <div
                            className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                            <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                                <input type="file" name="profile" id="upload_profile" hidden required/>
                                <label htmlFor="upload_profile">
                                <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none"
                                         strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <input type="file" name="profile" id="upload_cover" hidden required/>
                            <div
                                className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                                <label htmlFor="upload_cover"
                                       className="inline-flex items-center gap-1 cursor-pointer">
                                    Cover
                                    <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none"
                                         strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover
                        Image</h2>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div className="w-full mb-4 mt-6">
                            <label className="mb-2 dark:text-gray-300">First Name</label>
                            <Input type="athleteName" variant="bordered"
                                   className="h-10 w-full"
                                   value={athlete?.athletename}
                                   onChange={(e)  => setAthletName(e.target.value)}

                            />
                        </div>
                        <div className="w-full mb-4 lg:mt-6">
                            <label className="dark:text-gray-300">Email</label>
                            <Input type="athleteName" variant="bordered"
                                   className="h-10 w-full"
                                   value={athlete?.email}
                                   onChange={(e)  => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div
                        className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div className="w-full mb-4 mt-6">
                            <label className="mb-2 dark:text-gray-300">Weight</label>
                            <Input type="athleteName" variant="bordered"
                                   className="h-10 w-full"
                                   value={athlete?.weight ?? ""}
                                   onChange={(e)  => setWeight(e.target.value)}
                            />
                        </div>
                        <div className="w-full mb-4 lg:mt-6">
                            <label className="dark:text-gray-300">Height</label>
                            <Input type="athleteName" variant="bordered"
                                   className="h-10 w-full"
                                   value={athlete?.height ?? ""}
                                   onChange={(e)  => setHieght(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                        <button type="submit" className="w-full p-4">Submit</button>
                    </div>
                </form>
            </div>


        )

}