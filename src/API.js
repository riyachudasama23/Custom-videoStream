//Auth token we will use to generate a meeting and connect to it
// export const authToken = "009df2a5-49b3-4e37-8875-b23edb9c1c1a";
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzNDFlYzk5Ny0yNTgxLTQ2OGEtYTMwNi1lYjI2NmJkNjU2MWMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTczNjE0NTcxMiwiZXhwIjoxNzM4NzM3NzEyfQ.xvw1Xk5Gwix_-_KyHcAfbZjeUCyYl4tq7PYWCvgjm5E";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};