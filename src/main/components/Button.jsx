// import React from "react";

// export function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
//   const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2"

//   const variantClasses = {
//     primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
//     secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
//     danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
//   }

//   const sizeClasses = {
//     sm: "px-3 py-1.5 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   }

//   const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

//   return (
//     <button className={classes} {...props}>
//       {children}
//     </button>
//   )
// }
