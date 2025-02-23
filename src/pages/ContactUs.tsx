import React from "react";
import Layout from "../Layout/Layout";
import Header from "../components/Header";
import { ContactData } from "../data/Data";
import { ContactProps } from "../types/Mu";

const ContactUs: React.FC<ContactProps> = ({ title, info, icon, contact }) => {
    return (
        <Layout>
            <div className="container mx-auto px-2 my-6">
                <Header title="Contact Us" />
                <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
                    {ContactData.map((item) => (
                        <div
                            key={item.id}
                            className="p-10 bg-white/20 rounded-lg text-white flex flex-col items-center text-center"
                            >
                            <item.icon className="w-10 h-10 p-2 rounded-full bg-secondary text-primary text-2xl mb-2"/>
                            <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                            <p className="text-sm text-text leading-7">
                                <a href={`mailto:${item.contact}`} className="text-blue-600">
                                {item.contact}
                                </a>{' '}
                                {item.info}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ContactUs;
