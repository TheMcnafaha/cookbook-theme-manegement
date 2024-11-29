import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ThemeSwitch } from "~/components/theme-switch/theme-switch";

export default component$(() => {
  return (
    <div class="bg-purple-400 dark:bg-blue-400">
      <ThemeSwitch />
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <p>Light mode should have a purple background.</p>
      <p>Dark mode should have a blue background.</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
