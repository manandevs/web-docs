import { DocsSidebarConfig } from "@/types/nav";

export const docsConfig: DocsSidebarConfig = {
  sidebar: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/v1/getting-started/introduction",
          items: []
        },
        {
          title: "Installation",
          href: "/docs/v1/getting-started/installation",
          items: []
        },
      ]
    },
    {
      title: "API Reference",
      items: [
        {
          title: "Endpoints",
          href: "/docs/v1/api-reference/endpoints",
          items: [],
        }
      ]
    }
  ]
}