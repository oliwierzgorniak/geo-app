import Settings from '../../../Settings.json'

export default async function handleDeleteButton(
  id,
  navigate,
  users,
  setUsers
) {
  const u = users.filter((user) => user.id !== id);
  console.log(u);
  setUsers(u);

  const body = JSON.stringify({ id: id });
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  };
  const res = await fetch(`${Settings.host}:${Settings.port}/delete`, options);
}
