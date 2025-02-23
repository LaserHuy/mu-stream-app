import React from "react";
import Layout from "../Layout/Layout";
import Header from "../components/Header";

const AboutUs: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto px-2 my-6">
                <Header title="About Us" />
                <div className="text-white xl:py-20 py-10 px-4">
                    <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
                        <div>
                            <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                                Free Movies to Watch, Anytime Anywhere.
                            </h3>
                            <div className="mt-3 text-sm leading-8 text-text">
                                <p>
                                    Select your favorite streaming services to discover more, search faster, 
                                    and get curated recommendations—all without ever leaving MUStream. Connect 
                                    with friends to see who’s watching what, where.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="p-8 bg-white/20 rounded-lg">
                                    <span className="text-3xl block font-extrabold text-secondary">10K</span>
                                    <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                    </p>
                                </div>
                                <div className="p-8 bg-white/20  rounded-lg">
                                    <span className="text-3xl block font-extrabold text-secondary">8K</span>
                                    <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                                    <p className="mb-0 text-text leading-7 text-sm">
                                        Completely free, without registration! Lorem Ipsum is simply
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            src="/about-main.png"
                            alt="aboutus"
                            className="h-full xl:block hidden rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutUs;