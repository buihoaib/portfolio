"use client";

import toast from "react-hot-toast";
import { useSectionInView } from "@/hooks/use-section-in-view";
import SubmitButton from "./submit-button";
import { sendEmail } from "@/actions/sendEmail";

function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <section
            id="contact"
            ref={ref}
            className="h-full w-full bg-indigo-50 px-10 py-20 flex flex-col items-center"
        >
            <h1 className="text-3xl uppercase font-bold pb-4 border-indigo-400 border-b-4">Contacts</h1>
            <div className="mt-4 px-20 text-center">
                <p className="font-semibold text-xl">Hello there! Let's talk. </p>
                <p>Feel free to send me an email through the form below. I will get back to you as soon as possible </p>
            </div>

            <form
                className="mt-10 flex flex-col w-full lg:w-[60%]"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg border-2 border-indigo-400"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg p-4 border-2 border-indigo-400"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitButton />
            </form>
        </section>
    )
}

export default Contact