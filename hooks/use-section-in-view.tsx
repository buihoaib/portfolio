import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: string, threshold = 0.5) {
    const { ref, inView } = useInView({ threshold });
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            console.log("setActiveSection: ", sectionName)
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, sectionName]);

    return {
        ref,
    };
}
