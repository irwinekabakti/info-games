// import { FC } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { BreadcrumbWrapper } from "./style";

// interface BreadcrumbProps {
//   dataNameById: Record<string, string>;
// }

// const BreadCrumb: FC<BreadcrumbProps> = ({ dataNameById }) => {
//   const pathname = usePathname();
//   const pathSegments = pathname.split("/").filter(Boolean);

//   return (
//     <BreadcrumbWrapper>
//       {pathSegments.map((segment, index) => {
//         const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
//         const isLast = index === pathSegments.length - 1;

//         let displayName = segment;
//         if (isLast && dataNameById[segment]) {
//           displayName = dataNameById[segment];
//         }

//         return (
//           <Link className="breadcrumb-item" href={href} key={href}>
//             {displayName}
//           </Link>
//         );
//       })}
//     </BreadcrumbWrapper>
//   );
// };

// export default BreadCrumb;

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { BreadcrumbWrapper } from "./style";

interface BreadcrumbProps {
  dataNameById: Record<string, string>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ dataNameById }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { href: "/", label: "Home" },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);

      // Check if this segment is a game ID and we have a name for it
      if (dataNameById[segment]) {
        label = dataNameById[segment];
      }

      return { href, label };
    }),
  ];

  return (
    <BreadcrumbWrapper>
      {breadcrumbs.map((crumb, index): any => (
        <React.Fragment key={crumb.href}>
          <Link href={crumb.href} className="breadcrumb-item">
            {crumb.label}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <span className="separator">&gt;&gt;</span>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
