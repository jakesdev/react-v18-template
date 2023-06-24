import { HomeIcon } from "@heroicons/react/20/solid";
import { Key } from "react";

export type BreadcrumbModel = {
  parent: Key | null | undefined;
  child: String;
};

export default function Breadcrumb(prop: BreadcrumbModel) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center">
        <p className="ml-4 mr-4 text-sm font-medium text-gray-500 hover:text-gray-700">
          {prop.parent}
        </p>
        <li key={prop.parent}>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <p className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              {prop.child}
            </p>
          </div>
        </li>
      </ol>
    </nav>
  );
}
