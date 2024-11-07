const posts = [
  {
    id: "62e69d5a5458aac0ed320b35",
    title: "id labore ex et quam laborum",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium",
  },
  {
    id: "62e69d5a5458aac0ed320b1c",
    title: "quo vero reiciendis velit similique earum",
    body: "est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et",
  },
  {
    id: "62e69d5a5458aac0ed320b32",
    title: "odio adipisci rerum aut animi",
    body: "quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    id: "62e69d5a5458aac0ed320b39",
    title: "alias odio sit",
    body: "non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati",
  },
  {
    id: "62e69d5a5458aac0ed320b53",
    title: "vero eaque aliquid doloribus et culpa",
    body: "harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et",
  },
  {
    id: "62e69d5a5458aac0ed320b19",
    title: "et fugit eligendi deleniti quidem qui sint nihil autem",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in",
  },
  {
    id: "62e69d5a5458aac0ed320b25",
    title: "repellat consequatur praesentium vel minus molestias voluptatum",
    body: "maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor",
  },
];

interface Record {
  id: string;
  title: string;
  body: string;
}

type RecordById = { [key: string]: Record };

interface NormalizedData {
  byId: RecordById;
  allIds: string[];
}

const normalizeData = (unnormalizedData: Record[]): NormalizedData => {
  const normalizedById: RecordById = {};

  unnormalizedData.forEach((record) => {
    normalizedById[record.id] = record;
  });

  const normalizedData = {
    byId: normalizedById,
    allIds: unnormalizedData.map((record: Record) => record.id),
  };

  return normalizedData;
};

console.log(normalizeData(posts));
