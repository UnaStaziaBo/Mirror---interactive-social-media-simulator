import {
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import {
  COMMENTS,
  type Comment,
  type CommentCategory,
  type CommStyle,
  type ReplyOption,
  type SupportOption,
} from "../data/story";

import { LeoPost } from "../components/mirror/LeoPost";
import { CommentsList } from "../components/mirror/CommentsList";

import { ReplyModal } from "../components/mirror/ReplyModal";
import { ClassifyModal } from "../components/mirror/ClassifyModal";
import {
  AIFeedbackCard,
  type FeedbackData,
} from "../components/mirror/AIFeedbackCard";
import { SupportModal } from "../components/mirror/SupportModal";
import {
  LeoChat,
  type LeoMessage,
} from "../components/mirror/LeoChat";
import { EndingScreen } from "../components/mirror/EndingScreen";

interface Handled {
  classified?: boolean;
  replied?: boolean;
  correctClass?: boolean;
}

interface Props {
  health: number;
  setHealth: Dispatch<SetStateAction<number>>;
}

export function LeoStoryScreen({
  health,
  setHealth,
}: Props) {

  /* -------------------------------- */
  /* Comments state                   */
  /* -------------------------------- */

  const [handled, setHandled] =
    useState<Record<string, Handled>>({});

  /* -------------------------------- */
  /* Leo chat                         */
  /* -------------------------------- */

  const [leoMessages, setLeoMessages] =
    useState<LeoMessage[]>([
      {
        id: "intro",
        ts: Date.now(),
        text: "I just posted my drawing… nervous. Stay close?",
      },
    ]);

  const [leoTyping, setLeoTyping] =
    useState(false);

  /* -------------------------------- */
  /* Active dialogs                   */
  /* -------------------------------- */

  const [replyTarget, setReplyTarget] =
    useState<Comment | null>(null);

  const [classifyTarget, setClassifyTarget] =
    useState<Comment | null>(null);

  const [supportOpen, setSupportOpen] =
    useState(false);

  const [feedback, setFeedback] =
    useState<FeedbackData | null>(null);

  /* -------------------------------- */
  /* Communication statistics         */
  /* -------------------------------- */

  const [tally, setTally] =
    useState<Record<CommStyle, number>>({
      empathy: 0,
      facts: 0,
      "counter-speech": 0,
      aggression: 0,
    });

  /* -------------------------------- */
  /* Chapter completed?               */
  /* -------------------------------- */

  const done = useMemo(() => {

    const classified =
      Object.values(handled)
        .filter(h => h.classified).length;

    const replied =
      Object.values(handled)
        .filter(h => h.replied).length;

    return classified >= 5 && replied >= 3;

  }, [handled]);

    /* -------------------------------- */
  /* Helpers                          */
  /* -------------------------------- */

  function pushLeo(text: string) {
    setLeoTyping(true);

    setTimeout(() => {
      setLeoMessages((messages) => [
        ...messages,
        {
          id: `${Date.now()}-${Math.random()}`,
          ts: Date.now(),
          text,
        },
      ]);

      setLeoTyping(false);
    }, 900);
  }

  function applyDelta(delta: number) {
    setHealth((value) =>
      Math.max(0, Math.min(100, value + delta))
    );
  }

  /* -------------------------------- */
  /* Reply                            */
  /* -------------------------------- */

  function handleReplySend(reply: ReplyOption) {
    if (!replyTarget) return;

    const comment = replyTarget;

    setReplyTarget(null);

    setHandled((current) => ({
      ...current,
      [comment.id]: {
        ...current[comment.id],
        replied: true,
      },
    }));

    setTally((current) => {
      const next = { ...current };

      reply.styles.forEach((style) => {
        next[style] = (next[style] ?? 0) + 1;
      });

      return next;
    });

    applyDelta(reply.healthDelta);

    setFeedback({
      styles: reply.styles,
      healthDelta: reply.healthDelta,
      why: reply.why,
      leoReaction: reply.leoReaction,
    });

    pushLeo(reply.leoReaction);
  }

  /* -------------------------------- */
  /* Classification                   */
  /* -------------------------------- */

  function handleClassify(category: CommentCategory) {
    if (!classifyTarget) return;

    const comment = classifyTarget;

    setClassifyTarget(null);

    const correct =
      category === comment.trueCategory;

    setHandled((current) => ({
      ...current,
      [comment.id]: {
        ...current[comment.id],
        classified: true,
        correctClass: correct,
      },
    }));

    const delta = correct ? 5 : -4;

    applyDelta(delta);

    const styles: CommStyle[] = correct
      ? ["facts"]
      : ["aggression"];

    setTally((current) => {
      const next = { ...current };

      styles.forEach((style) => {
        next[style]++;

      });

      return next;
    });

        const why = correct
      ? `Correctly labeling this as "${comment.trueCategory}" helps the community understand what's really happening.`
      : `This comment is actually "${comment.trueCategory}". Mislabeling harmful content can make moderation less effective.`;

    const leoReaction = correct
      ? "Good call. I wasn't sure what to think about that comment."
      : "Hmm… I don't think that was the right category.";

    setFeedback({
      styles,
      healthDelta: delta,
      why,
      leoReaction,
    });

    pushLeo(leoReaction);
  }

  /* -------------------------------- */
  /* Public support                   */
  /* -------------------------------- */

  function handleSupportSend(
    support: SupportOption
  ) {
    setSupportOpen(false);

    setTally((current) => {
      const next = { ...current };

      support.styles.forEach((style) => {
        next[style] =
          (next[style] ?? 0) + 1;
      });

      return next;
    });

    applyDelta(support.healthDelta);

    setFeedback({
      styles: support.styles,
      healthDelta: support.healthDelta,
      why: support.why,
      leoReaction: support.leoReaction,
    });

    pushLeo(support.leoReaction);
  }

  /* -------------------------------- */
  /* Chapter finished                 */
  /* -------------------------------- */

  if (done) {

    return (

      <EndingScreen
        health={health}
        tally={tally}
      />

    );

  }

  /* -------------------------------- */
  /* Screen                           */
  /* -------------------------------- */

  return (
    <>
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <LeoPost />

        <CommentsList
          comments={COMMENTS}
          handled={handled}
          onReply={setReplyTarget}
          onClassify={setClassifyTarget}
        />
             <div
          style={{
            marginTop: 24,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setSupportOpen(true)}
            style={{
              padding: "12px 24px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              background: "#7c3aed",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            💜 Support Leo
          </button>
        </div>
      </div>

      <LeoChat
        messages={leoMessages}
        typing={leoTyping}
      />

      {replyTarget && (
        <ReplyModal
          comment={replyTarget}
          onCancel={() => setReplyTarget(null)}
          onSend={handleReplySend}
        />
      )}

      {classifyTarget && (
        <ClassifyModal
          comment={classifyTarget}
          onCancel={() => setClassifyTarget(null)}
          onPick={handleClassify}
        />
      )}

      {supportOpen && (
        <SupportModal
          onCancel={() => setSupportOpen(false)}
          onSend={handleSupportSend}
        />
      )}

      {feedback && (
        <AIFeedbackCard
          data={feedback}
          onClose={() => setFeedback(null)}
        />
      )}
    </>
  );
}
      