import React from 'react'

export default function DetailsCard() {
    <main className="mt-4 p-4">
    <h1 className="text-xl font-semibold text-gray-700 text-center">
            Send ETH payment</h1>
    <div className="">
    <div className="my-3">
        <input
            type="text"
            name="addr"
            className="input input-bordered block w-full focus:ring focus:outline-none"
            placeholder="Recipient Address"
        />
    </div>
    <div className="my-3">
        <input
            name="ether"
            type="text"
            className="input input-bordered block w-full focus:ring focus:outline-none"
            placeholder="Amount in ETH"
        />
    </div>
  </div>
  </main>
}

      