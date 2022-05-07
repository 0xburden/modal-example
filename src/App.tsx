import React from "react";
import Modal from "./Modal";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-mono">The modal will pop up above this</h1>

      <div className="mt-8">
        <Modal triggerText="modal trigger method 1">
          <h2 className="text-center text-xl font-bold">
            Wow. I'm in this MF.
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>
      </div>

      <div className="mt-8">
        <Modal
          trigger={
            <button
              type="button"
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-md shadow-lg"
            >
              Bop It
            </button>
          }
        >
          <h2 className="text-center text-xl font-bold">
            Wow. I'm in this MF.
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>
      </div>

      <div className="mt-8">
        <Modal
          trigger={
            <div className="bg-green-500 cursor-pointer text-white font-bold px-4 py-2 rounded-md shadow-lg">
              Twist it
            </div>
          }
        >
          <h2 className="text-center text-xl font-bold">
            Wow. I'm in this MF.
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>
      </div>
    </div>
  );
}
