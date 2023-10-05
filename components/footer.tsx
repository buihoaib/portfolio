import { Heart } from "lucide-react"
import SocialMediaFooter from "./social-media-footer"

function Footer() {
    return (
        <div
            className="flex flex-col border-t-2 items-center justify-center py-10 gap-4"
        >
            <SocialMediaFooter />
            <div className="flex flex-col justify-center items-center">
                <p>&copy; 2023 All rights reserved.</p>
                <p className="flex justify-center items-center">
                    Developed with
                    <span><Heart className="mx-1" size={16} fill="#FF0000" stroke="#FF0000" /></span>
                    by Trang Bui
                </p>
            </div>
        </div >
    )
}

export default Footer