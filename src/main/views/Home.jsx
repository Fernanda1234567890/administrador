import React from 'react'

const About = () => {
  return (
    <>
    <div>aqui encontraras mas informacion detallada </div>
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Cargo
                </th>
                <th scope="col" class="px-6 py-3">
                    Unidad
                </th>
                <th scope="col" class="px-6 py-3">
                    telf
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ph. D. Ing. Pedro Guido López Cortés 
                </th>
                <td class="px-6 py-4">
                    Rector

                </td>
                <td class="px-6 py-4">
                    Superior
                </td>
                <td class="px-6 py-4">
                    622-4545
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    M. Sc. Ing. David Soraide Lozano
                </th>
                <td class="px-6 py-4">
                    Vicerrector
                </td>
                <td class="px-6 py-4">
                    Superior
                </td>
                <td class="px-6 py-4">
                    622-2020
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    M. Sc. Abog. Jaqueline Filipps Díaz
                </th>
                <td class="px-6 py-4">
                    Secretario General
                </td>
                <td class="px-6 py-4">
                    Intermedio
                </td>
                <td class="px-6 py-4">
                    622-8084
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </>
  )
}

export default About