export const questionnaire = {
  id: "0d237fdf-f957-4374-b12d-f5e666749621",
  displayName: "Basic esports knowledge",
  sections: [
    {
      displayName: "League of Legends",
      questions: [
        {
          type: "freetext",
          text:
            "Discuss the suitability of League of Legends as high school esport",
        },
        {
          type: "multi",
          text: "In which genre would you classify League of Legends ?",
          options: [
            {
              text: "First Person Shooter",
            },
            {
              text: "MOBA",
            },
            {
              text: "Real-time strategy",
            },
          ],
        },
      ],
    },
    {
      displayName: "Esports (general)",
      questions: [
        {
          type: "multi",
          text:
            "Which spelling of ’esports’ are acceptable: 1. Esports, 2. e-sports",
          options: [
            {
              text: "1",
            },
            {
              text: "1 and 2",
            },
            {
              text: "2",
            },
            {
              text: "None",
            },
          ],
        },
      ],
    },
  ],
};

export const answers = {
  id: "99a8327f-8bf4-4fe4-bc4b-74308a4ce760",
  by: { name: "Bob Shmoe", email: "bob@acme.com" },
  at: "2018-09-24T13:38:05Z",
  for: "0d237fdf-f957-4374-b12d-f5e666749621",
  sections: [
    {
      answers: [
        {
          answer:
            "Excellent. Simple enough for kids to get into, complex enough to foster team strategy.",
        },
        {
          answer: 1, // 0-based index
        },
      ],
    },
    {
      answers: [
        {
          answer: 3, // 0-based index
        },
      ],
    },
  ],
};
