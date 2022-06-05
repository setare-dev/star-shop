import React from 'react'
import { Skeleton } from '@mui/material';
function ProductListSkeleton() {
    return (
        <>
            <div className="bg-white dark:bg-slate-800">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                        <div className="group  p-5 rounded-xl  border-gray-200">

                            <div className="w-full aspect-w-1 aspect-h-1 bg-white  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  h-96 flex items-center justify-center">
                                <Skeleton variant="rectangular" width={210} height={250} className="h-52" />
                            </div>

                            <Skeleton variant="text" width="100%" height={100} className="mt-4 text-sm text-gray-700 h-14" />

                        </div >
                        <div className="group  p-5 rounded-xl  border-gray-200">

                            <div className="w-full aspect-w-1 aspect-h-1 bg-white  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  h-96 flex items-center justify-center">
                                <Skeleton variant="rectangular" width={210} height={250} className="h-52" />
                            </div>
                            <Skeleton variant="text" width="100%" height={100} className="mt-4 text-sm text-gray-700 h-14" />

                        </div >
                        <div className="group  p-5 rounded-xl  border-gray-200">

                            <div className="w-full aspect-w-1 aspect-h-1 bg-white  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  h-96 flex items-center justify-center">
                                <Skeleton variant="rectangular" width={210} height={250} className="h-52" />
                            </div>

                            <Skeleton variant="text" width="100%" height={100} className="mt-4 text-sm text-gray-700 h-14" />



                        </div >


                        <div className="group  p-5 rounded-xl  border-gray-200">

                            <div className="w-full aspect-w-1 aspect-h-1 bg-white  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  h-96 flex items-center justify-center">
                                <Skeleton variant="rectangular" width={210} height={250} className="h-52" />
                            </div>

                            <Skeleton variant="text" width="100%" height={100} className="mt-4 text-sm text-gray-700 h-14" />



                        </div >


                    </div>

                </div>
            </div>


        </>

    )
}

export default ProductListSkeleton