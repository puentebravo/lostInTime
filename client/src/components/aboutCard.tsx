import React from "react";

function AboutCard() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto mt-8 max-h-full bg-gray-600 bg-opacity-90 border-2 border-solid border-yellow-400 rounded shadow-lg max-w-3xl min-w-min">
                <div className="flex justify-between">
                    <img src="..." width="150px" height="150px" alt="test about block" className="rounded-full border-2 " />
                    <img src="..." width="150px" height="150px" alt="test about block" className="rounded-full border-2" />
                </div>
                <h1 className="text-lg text-center text-white">About Us</h1>
                <p className="text-white pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum temporibus illo dolore quibusdam beatae vitae perferendis quisquam facilis, ab rem aspernatur accusantium eos natus similique eius a inventore tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem et incidunt ab sapiente magni eaque harum, dignissimos modi obcaecati doloribus ad iste ducimus reiciendis possimus quo corporis quia fuga? Quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, corrupti? Reiciendis enim laborum aut quam neque provident molestias? Quos, dolor doloremque iste cum ea ex possimus porro facere omnis nihil?</p>
            </div>
        </div>
    )
}


export default AboutCard