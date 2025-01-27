import { CheckIcon, CrossIcon, XIcon } from "lucide-react";
import React from "react";

const DemoTable = () => {
  return (
    <div className="container max-w-[1000px] w-full overflow-x-auto">
      <div className="overflow-hidden min-w-min">
        <div className="grid grid-cols-5 p-4 text-sm font-medium text-gray-100 bg-primary/80 rounded-t-sm border-t border-x border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <div className="flex w-full justify-start items-center">
            Caractéristiques
          </div>
          <div className="flex w-full justify-center items-center">
            Docs&apos;s Dev
          </div>
          <div className="flex w-full justify-center items-center">
            Google Docs
          </div>
          <div className="flex w-full justify-center items-center">
            Microsoft 365
          </div>
          <div className="flex w-full justify-center items-center">Notion</div>
        </div>
        <div className="bg-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">
            Confidentialité <br />
            des données
          </div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
        </div>
        {/* 2eme ligne */}
        <div className="bg-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">
            Édition de code
          </div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
        </div>
        {/* 3eme ligne */}
        <div className="bg-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">IA intégrée</div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <XIcon className="size-8 text-rose-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
        </div>
        {/* 4eme ligne */}
        <div className="bg-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700 rounded-b-sm">
          <div className="text-gray-500 dark:text-gray-400">
            Édition de texte <br />
            collaboratif
          </div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
          <div className="w-full flex items-center justify-center">
            <CheckIcon className="size-8 text-green-500" />
          </div>
        </div>
        {/* 5eme ligne
        <div className="bg-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400">Tarification</div>
          <div className="w-full flex items-center justify-center">
            <p className="text-green-500">
              Flexible <br />
              (Gratuit + Premium)
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p>Gratuit</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p>Payant</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p>Gratuit ou Payant</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DemoTable;
