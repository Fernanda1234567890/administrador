import React from 'react'

const Units = () => {
  return (
    <>
    <h2 className="text-2 font-bold mb-4 text-gray-800 text-left">
    Unidades registradas :
    </h2>
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre Unidad
                </th>
                <th scope="col" className="px-6 py-3">
                    Depende de...
                </th>
                <th scope="col" className="px-6 py-3">
                    Responsable
                </th>
                <th scope="col" className="px-6 py-3">
                    id de la Unidad
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-[#082F47] dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ph. D. Ing. Pedro Guido López Cortés 
                </th>
                <td className="px-6 py-4">
                    Rector

                </td>
                <td className="px-6 py-4">
                    Superior
                </td>
                <td className="px-6 py-4">
                    622-4545
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-[#082F47] dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    M. Sc. Ing. David Soraide Lozano
                </th>
                <td className="px-6 py-4">
                    Vicerrector
                </td>
                <td className="px-6 py-4">
                    Superior
                </td>
                <td className="px-6 py-4">
                    622-2020
                </td>
            </tr>
            <tr className="bg-white dark:bg-[#082F47]">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    M. Sc. Abog. Jaqueline Filipps Díaz
                </th>
                <td className="px-6 py-4">
                    Secretario General
                </td>
                <td className="px-6 py-4">
                    Intermedio
                </td>
                <td className="px-6 py-4">
                    622-8084
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </>
  )
}

export default Units