export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61f92815bf9f47be616d1385",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-9ik1nit3",
                  apiId: "bfdb9329-b9c8-45db-a037-5597938eaa0c",
                },
                {
                  buildHookId: "61f92815dc4be2c90e200cf1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bvkzz7px",
                  apiId: "5fe1cd5f-63dd-4ad6-a4f6-67b0392d345a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/robbiejdunne/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bvkzz7px.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
