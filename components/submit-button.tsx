import { Send } from "lucide-react";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-indigo-400 text-white rounded-lg outline-none transition-all border-2 border-indigo-400 hover:bg-white hover:text-indigo-400 disabled:bg-opacity-65"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    Submit
                    <Send size={30} />
                </>
            )}
        </button>
    );
}
