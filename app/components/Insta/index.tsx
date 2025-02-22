import Image from "next/image";
import Link from "next/link";


const Insta = () => {
    return (
        <div className="mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/1.jpg" width={306} height={306} alt="instaOne" className="rounded-3xl"/>
                    <Link href={"https://www.instagram.com/p/DB4fNhfTXv7/?img_index=1"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/2.jpg" width={306} height={306} alt="instaTwo" className="rounded-3xl" />
                    <Link href={"https://www.instagram.com/p/DEaehcEy6hw/"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                <div className="bg-[url(/images/insta/insta3.jpg)] w-64 h-full bg-cover  bg-no-repeat rounded-3xl">

                </div>
                    {/* <Image src="/images/insta/insta3.jpg" width={306} height={306} alt="instaThree" className=" object-scale-down max-h-ful  rounded-3xl" /> */}
                    <Link href={"https://www.instagram.com/p/DD3LFLmvFg1/"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

                <div className="mx-auto imageContainer">
                    <Image src="/images/insta/5.jpg" width={306} height={306} className="rounded-3xl" alt="instaFour" />
                    <Link href={"https://www.instagram.com/p/DFgR1G2zxv6/"} target="_blank">
                        <button
                            className="hidden text-white font-semibold absolute z-10"
                            style={{
                                top: "45%",
                                right: "45%",
                            }}
                        >
                            <Image src="/images/insta/instagram.svg" alt="instagram" width={36} height={36} />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Insta
