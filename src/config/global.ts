export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "Adrian",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    social: {
      github: "https://github.com/tamadogy",
      email: "jay.robin.jr19@gmail.com"
    }
  }
} as const; 