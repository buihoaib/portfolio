import { Dela_Gothic_One } from 'next/font/google'

const gothic = Dela_Gothic_One({
    weight: '400',
    subsets: ['latin'],
})

function Logo() {
    return (
        <div
            className="absolute z-20 top-0 bg-transparent mt-8 ml-8"
        >
            <p
                className="font-bold text-xl text-indigo-400"
            >
                Trang Bui
            </p>
        </div>
    )
}

export default Logo