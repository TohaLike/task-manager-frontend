export function pluralizeTasks(count: number): string {
  const rem100 = count % 100;
  if (rem100 >= 11 && rem100 <= 14) {
    return "задач";
  }

  const rem10 = count % 10;
  if (rem10 === 1) {
    return "задача";
  }
  if (rem10 >= 2 && rem10 <= 4) {
    return "задачи";
  }

  return "задач";
}

export function pluralizeProjects(count: number): string {
  const rem100 = count % 100;
  if (rem100 >= 11 && rem100 <= 14) {
    return "проектов";
  }

  const rem10 = count % 10;
  if (rem10 === 1) {
    return "проект";
  }
  if (rem10 >= 2 && rem10 <= 4) {
    return "проекта";
  }

  return "проектов";
}
