/*
 * GitHub repositories — the saved copy behind the dock's GitHub popup.
 *
 * The popup fetches https://api.github.com/users/LulamileMkhungela/repos live
 * when it opens (see js/desktop.js → hydrateGitHubRepos) and only falls back
 * to this snapshot when the API is blocked, offline or rate-limited, so a
 * visitor always sees a repo list.
 *
 * Snapshot taken 2026-10-21 with:
 *   curl -s "https://api.github.com/users/LulamileMkhungela/repos?per_page=100&sort=pushed"
 * Re-run that, paste the fields below and bump github-repos.js?v= in
 * index.html whenever the list needs a refresh.
 */
window.GITHUB_REPOS = {
  username: "LulamileMkhungela",
  profileUrl: "https://github.com/LulamileMkhungela",
  apiUrl: "https://api.github.com/users/LulamileMkhungela/repos?per_page=100&sort=pushed",
  fetched: "2026-10-21",
  repos: [
    { name: "portfolio.github.io", url: "https://github.com/LulamileMkhungela/portfolio.github.io", language: "HTML", description: "", pushed: "2026-10-21", stars: 0, fork: false },
    { name: "LulamileMkhungela", url: "https://github.com/LulamileMkhungela/LulamileMkhungela", language: "", description: "", pushed: "2026-10-21", stars: 0, fork: false },
    { name: "design-ops", url: "https://github.com/LulamileMkhungela/design-ops", language: "TypeScript", description: "", pushed: "2026-10-20", stars: 0, fork: false },
    { name: "Forma-Plugin", url: "https://github.com/LulamileMkhungela/Forma-Plugin", language: "TypeScript", description: "", pushed: "2026-10-20", stars: 0, fork: false },
    { name: "web", url: "https://github.com/LulamileMkhungela/web", language: "TypeScript", description: "", pushed: "2026-10-09", stars: 0, fork: false },
    { name: "LulaGazette", url: "https://github.com/LulamileMkhungela/LulaGazette", language: "JavaScript", description: "", pushed: "2026-10-09", stars: 0, fork: false },
    { name: "Remembers-App", url: "https://github.com/LulamileMkhungela/Remembers-App", language: "JavaScript", description: "", pushed: "2026-10-08", stars: 0, fork: false },
    { name: "ServiceWaze", url: "https://github.com/LulamileMkhungela/ServiceWaze", language: "Python", description: "", pushed: "2026-10-01", stars: 0, fork: false },
    { name: "website-template", url: "https://github.com/LulamileMkhungela/website-template", language: "TypeScript", description: "", pushed: "2026-09-28", stars: 0, fork: false },
    { name: "CoffeOrderApp", url: "https://github.com/LulamileMkhungela/CoffeOrderApp", language: "Java", description: "", pushed: "2026-09-17", stars: 0, fork: false },
    { name: "LinkPips", url: "https://github.com/LulamileMkhungela/LinkPips", language: "", description: "", pushed: "2026-07-25", stars: 0, fork: false },
    { name: "fnb_app_of_the_year", url: "https://github.com/LulamileMkhungela/fnb_app_of_the_year", language: "JavaScript", description: "", pushed: "2024-12-26", stars: 0, fork: false },
    { name: "Gude", url: "https://github.com/LulamileMkhungela/Gude", language: "JavaScript", description: "", pushed: "2022-05-05", stars: 0, fork: false },
    { name: "Gudee", url: "https://github.com/LulamileMkhungela/Gudee", language: "CSS", description: "", pushed: "2022-03-14", stars: 0, fork: false },
    { name: "Food-Ordering-App", url: "https://github.com/LulamileMkhungela/Food-Ordering-App", language: "Java", description: "", pushed: "2020-08-05", stars: 0, fork: false },
    { name: "Find", url: "https://github.com/LulamileMkhungela/Find", language: "Java", description: "", pushed: "2020-07-29", stars: 0, fork: false },
    { name: "EntreHiveApp", url: "https://github.com/LulamileMkhungela/EntreHiveApp", language: "Java", description: "Initial commit", pushed: "2019-01-29", stars: 0, fork: false },
    { name: "MyQuizApp", url: "https://github.com/LulamileMkhungela/MyQuizApp", language: "Java", description: "MyQuizApp", pushed: "2018-03-03", stars: 0, fork: false }
  ]
};
