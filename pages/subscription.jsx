"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import Meta from "../components/meta/Meta";

export default function Pricing() {
  return (
    <>
      <Meta
        title="Pricing - Resume Builder"
        description="Choose a plan that suits your resume needs."
        keywords="resume pricing, premium resume, free resume builder, subscription plans"
      />

      <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
        {/* Background particles */}
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlespricing"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={80}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Page Heading */}
        <div className="z-10 text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-lg text-gray-300">
            Simple and transparent pricing. Choose the plan that fits you best.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Free Plan */}
          <div className="bg-black/30 border border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-3xl font-semibold mb-6">KES 0</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>✓ Basic resume builder</li>
              <li>✓ ATS-friendly template</li>
              <li>✓ 1 resume download</li>
            </ul>
            <button className="w-full bg-gray-800 hover:bg-gray-700 py-2 rounded-md">
              Get Started
            </button>
          </div>

          {/* Intermediate Plan */}
          <div className="bg-black/30 border border-indigo-500 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Intermediate</h2>
            <p className="text-3xl font-semibold mb-6">KES 499</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>✓ All Free features</li>
              <li>✓ Multiple resume versions</li>
              <li>✓ Priority support</li>
              <li>✓ Custom templates</li>
            </ul>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-md">
              Upgrade Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-black/30 border border-yellow-500 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Premium</h2>
            <p className="text-3xl font-semibold mb-6">KES 999</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>✓ Everything in Intermediate</li>
              <li>✓ AI-powered suggestions</li>
              <li>✓ Export in DOCX & PDF</li>
              <li>✓ LinkedIn-ready format</li>
            </ul>
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-md">
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
