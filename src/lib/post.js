const posts = [
  {
    id: 1,
    title: "Code as a Mirror to the Mind",
    des: "Explore how writing JavaScript isn’t just technical—it’s reflective. This post journeys through how logical structures, patterns, and modularity express a developer’s thought process.",
    userId: 108,
    publishedDate: "08.05.2025",
  },
  {
    id: 2,
    title: "Redefining Intuition in UI",
    des: "What feels intuitive online often comes from deep design psychology. Learn how subtle visual language and contextual cues shape digital comfort zones.",
    userId: 109,
    publishedDate: "09.05.2025",
  },
  {
    id: 3,
    title: "Backend Architecture with Soul",
    des: "Code can be spiritual—at least metaphorically. This post reflects on how server-side logic, data orchestration, and API consistency create a digital harmony.",
    userId: 110,
    publishedDate: "10.05.2025",
  },
  {
    id: 4,
    title: "Styling Typography That Speaks",
    des: "Dive into how font choices, spacing, and hierarchy influence perception and mood—making your UI not just readable but resonant.",
    userId: 111,
    publishedDate: "11.05.2025",
  },
  {
    id: 5,
    title: "Routing the Invisible Path",
    des: "Uncover how dynamic routing can sculpt user journeys. This post explores the subtle power of navigation that just feels natural.",
    userId: 112,
    publishedDate: "12.05.2025",
  },
  {
    id: 6,
    title: "MERN Dreams and Realities",
    des: "A grounded walkthrough of MERN stack architecture—with reflections on the backend responsibilities that shape frontend elegance.",
    userId: 113,
    publishedDate: "13.05.2025",
  },
  {
    id: 7,
    title: "Responsive Design, Human Intent",
    des: "How media queries and modular CSS honor the user’s context—this piece connects device adaptability with deeper UX empathy.",
    userId: 114,
    publishedDate: "14.05.2025",
  },
];

export const getPost = async (Id, posts) => {
  return posts.find((post) => post.id === parseInt(Id));
};

const users = [
  {
    id: 1,
    userName: "Ashim",
  },
  {
    id: 2,
    userName: "Anup",
  },
  {
    id: 3,
    userName: "Pratap",
  },
  {
    id: 4,
    userName: "Krishna",
  },
  {
    id: 5,
    userName: "Ram",
  },
  {
    id: 6,
    userName: "Suman",
  },
  {
    id: 7,
    userName: "Dipesh",
  },
];
export const getPosts = async () => {
  return posts;
};
export const getUsers = async (id) => {
  return users.find((items) => items.id === id);
};
