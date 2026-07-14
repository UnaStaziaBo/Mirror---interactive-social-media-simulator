import { StoryCard } from "../components/mirror/StoryCard";

interface Props {
  onStartLeoStory: () => void;
}

export function MenuScreen({ onStartLeoStory }: Props) {
  const stories = [
    {
      emoji: "🎨",
      title: "Creative Expression",
      description:
        "Support a young artist facing criticism and online hate.",
      available: true,
      accent: "linear-gradient(135deg,#ffd6a5,#ff6a88)",
      onClick: onStartLeoStory,
    },
    {
      emoji: "💬",
      title: "School Group Chat",
      description:
        "Navigate conflicts, rumors and exclusion in a school chat.",
      available: false,
      accent: "linear-gradient(135deg,#c2e9fb,#a1c4fd)",
    },
    {
      emoji: "🌍",
      title: "New Student",
      description:
        "Support a classmate facing prejudice and discrimination.",
      available: false,
      accent: "linear-gradient(135deg,#d4fc79,#96e6a1)",
    },
    {
      emoji: "📱",
      title: "Young Blogger",
      description:
        "Help a content creator deal with harassment and online pressure.",
      available: false,
      accent: "linear-gradient(135deg,#fbc2eb,#a18cd1)",
    },
    {
      emoji: "⚡",
      title: "Political Polarization",
      description:
        "Recognize manipulation and toxic discussions around social issues.",
      available: false,
      accent: "linear-gradient(135deg,#fddb92,#d1fdff)",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid #e5e7eb",
            marginBottom: "20px",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#6b7280",
          }}
        >
          Interactive Story Experience
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "900",
            background:
              "linear-gradient(135deg,#ff6a88,#8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
          }}
        >
          MIRROR
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#6b7280",
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          The internet reflects what we create.
          Step into real online moments and shape
          what the community becomes.
        </p>
      </header>

      <section>
        <div style={{ marginBottom: "24px" }}>
          <h2>Choose a story</h2>

          <p
            style={{
              color: "#6b7280",
              marginTop: "8px",
            }}
          >
            5 chapters · 1 available in this demo
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {stories.map((story) => (
            <StoryCard
              key={story.title}
              emoji={story.emoji}
              title={story.title}
              description={story.description}
              available={story.available}
              accent={story.accent}
              onClick={story.onClick}
            />
          ))}
        </div>
      </section>

      <footer
        style={{
          marginTop: "80px",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        Made for digital citizenship education
      </footer>
    </main>
  );
}