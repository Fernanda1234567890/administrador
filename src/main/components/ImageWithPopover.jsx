// import React from 'react';

// const ImageWithPopover = () => {
//   Datos de las tarjetas (puedes personalizarlos)
//   const cardsData = [
//     {
//       src: 'https://image.flaticon.com/icons/png/512/604/604792.png',
//       alt: 'Mussels Soup',
//       title: 'MUSSELS SOUP',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       link: '#',
//     },
//     {
//       src: 'https://image.flaticon.com/icons/png/512/604/604819.png',
//       alt: 'Grilled Fish',
//       title: 'GRILLED FISH',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       link: '#',
//     },
//     {
//       src: 'https://image.flaticon.com/icons/png/512/604/604818.png',
//       alt: 'Chicken Burger',
//       title: 'CHICKEN BURGER',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       link: '#',
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gray-200 flex items-center justify-center py-12 px-4">
//       <div className="text-center max-w-5xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">BEAUTIFUL HOVER CARDS</h1>
//         <div className="container flex justify-center gap-6 flex-wrap">
//           {cardsData.map((card, index) => (
//             <div
//               key={index}
//               className="card w-64 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               <img
//                 src={card.src}
//                 alt={card.alt}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="content p-4 text-center">
//                 <h2 className="text-xl font-semibold text-blue-800 mb-2">{card.title}</h2>
//                 <p className="text-gray-600 mb-4">{card.description}</p>
//                 <a
//                   href={card.link}
//                   className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
//                 >
//                   Order Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageWithPopover;