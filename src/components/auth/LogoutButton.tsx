import { Button } from "../ui";

export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button>Logout</Button>
    </form>
  );
}
