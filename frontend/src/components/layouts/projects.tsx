import { Card } from "../shared/card";
import { Card1 } from "../shared/card1";

export default function Projects() {
  return (
    <div className="mt-10">
      <p className="text-fluid-xs uppercase tracking-widest text-primary font-semibold mb-6">
        projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
        <Card
          image="/homepage.png"
          title="Mock API"
          description="Mock APIs let you simulate real backend responses without writing a single server-side line. Build and test your frontend independently, at your own pace. Ideal for teams that move fast and prototype often."
          githubLinks="https://github.com/user/repo"
          hostingLinks="https://user.github.io/repo"
        />
        <Card1
          image="/homepage.png"
          title="Mock API"
          description="Mock APIs let you simulate real backend responses without writing a single server-side line. Build and test your frontend independently, at your own pace. Ideal for teams that move fast and prototype often."
          githubLinks="https://github.com/user/repo"
          hostingLinks="https://user.github.io/repo"
        />
        <Card
          image="/homepage.png"
          title="Mock API"
          description="Mock APIs let you simulate real backend responses without writing a single server-side line. Build and test your frontend independently, at your own pace. Ideal for teams that move fast and prototype often."
          githubLinks="https://github.com/user/repo"
          hostingLinks="https://user.github.io/repo"
        />
        <Card1
          image="/homepage.png"
          title="Mock API"
          description="Mock APIs let you simulate real backend responses without writing a single server-side line. Build and test your frontend independently, at your own pace. Ideal for teams that move fast and prototype often."
          githubLinks="https://github.com/user/repo"
          hostingLinks="https://user.github.io/repo"
        />
      </div>
    </div>
  );
}
