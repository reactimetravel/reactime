import {
  ArrowPathIcon,
  //CloudArrowUpIcon,
  //CogIcon,
  ArrowDownTrayIcon,
  //ServerIcon,
  ClockIcon,
  CameraIcon,
  PresentationChartLineIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const features = [
  {
    name: "State SnapShot Display",
    description:
      "See your application state in an interactive format for clear and concise state management",
    icon: CameraIcon,
  },
  {
    name: "Time Travel Rendering",
    description:
      "Rewind to previous state changes from your DOM history with a simple click of a button",
    icon: ClockIcon,
  },
  {
    name: "Action Comparison & Snapshot Series",
    description:
      "Save a series of state snapshots and make comparisons to analyze changes in component render performance",
    icon: ArrowPathIcon,
  },
  {
    name: "Components Performance Display",
    description:
      "Visualize the relative latency trends introduced by re-rendering each component on state change",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Download State History",
    description:
      "Save your state history as a JSON source file for future reference",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "Atom and Selector Relationships",
    description:
      "Visualize the mapping of Atoms and Selectors to components in Recoil Apps",
    icon: MapIcon,
  },
];

export default function FeaturesSection() {
  return (
    <div className="lg:py-18 sm:py-18 relative bg-white py-24">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-rose-500">Core Features</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What does Reactime do?
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Reactime is full of features that will make life easier as a
          developer. From time-travel debugging to state snapshot display, check
          out how using Reactime will improve the developer experience.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root h-64 rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-rose-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
