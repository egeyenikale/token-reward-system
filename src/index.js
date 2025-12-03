export const project = {
  slug: "token-reward-system",
  title: "Token Reward System",
  description: "Token reward system for completed tasks.",
  features: [
  "Task registry",
  "Completion proof",
  "Reward calculation",
  "Token transfer",
  "Admin controls",
  "Activity log"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
