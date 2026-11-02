import { FORM_KEYS, type FormKey } from "./schemas";

export type TopicStat = {
  pre: number | null;
  post: number | null;
  preN: number;
  postN: number;
};

export type Indicators = {
  counts: Record<FormKey, number>;
  english: TopicStat;
  ai: TopicStat;
  satisfaction: { average: number | null; recommendPercent: number | null; n: number };
};

export type StoredRow = { form: string; data: Record<string, unknown> };

function emptyTopic(): TopicStat {
  return { pre: null, post: null, preN: 0, postN: 0 };
}

function average(values: number[]) {
  if (values.length === 0) return null;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10;
}

function topicStat(rows: StoredRow[], topic: "ingles" | "ia"): TopicStat {
  const pre = rows.filter((row) => row.data.topic === topic && row.data.phase === "pre");
  const post = rows.filter((row) => row.data.topic === topic && row.data.phase === "post");
  const scores = (group: StoredRow[]) =>
    group.map((row) => Number(row.data.score)).filter((score) => Number.isFinite(score));
  return {
    pre: average(scores(pre)),
    post: average(scores(post)),
    preN: pre.length,
    postN: post.length,
  };
}

export function aggregate(rows: StoredRow[]): Indicators {
  const counts = Object.fromEntries(FORM_KEYS.map((key) => [key, 0])) as Record<FormKey, number>;
  for (const row of rows) {
    if (row.form in counts) counts[row.form as FormKey] += 1;
  }

  const reviews = rows.filter((row) => row.form === "satisfaccion");
  const ratings = reviews
    .map((row) => {
      const values = [row.data.contentRating, row.data.clarityRating, row.data.usefulnessRating].map(Number);
      if (values.some((value) => !Number.isFinite(value))) return null;
      return values.reduce((sum, value) => sum + value, 0) / values.length;
    })
    .filter((value): value is number => value != null);
  const recommends = reviews.filter((row) => row.data.wouldRecommend === true).length;

  return {
    counts,
    english: topicStat(
      rows.filter((row) => row.form === "evaluacion"),
      "ingles",
    ),
    ai: topicStat(
      rows.filter((row) => row.form === "evaluacion"),
      "ia",
    ),
    satisfaction: {
      n: reviews.length,
      average: average(ratings),
      recommendPercent: reviews.length === 0 ? null : Math.round((recommends / reviews.length) * 100),
    },
  };
}

export function emptyIndicators(): Indicators {
  return aggregate([]);
}
