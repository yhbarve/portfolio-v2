import { GithubGraph } from "@/components/unlumen-ui/github-graph";

export default function Portfolio() {
  return <GithubGraph account="yhbarve" cellSize={10} showLegend={false} showAccount={false} cellGap={2} variant="github" months={3} />;
}