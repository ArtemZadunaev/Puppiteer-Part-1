let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const expected =
      "GitHub · Change is constant. GitHub keeps you ahead. · GitHub";
    const firstLink = await page.$("header div div a");

    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();

    expect(title2).toEqual(expected);
  }, 10000);

  test("The first link attribute", async () => {
    const expected = "#start-of-content";

    const actual = await page.$eval("a", (link) => link.getAttribute("href"));

    expect(actual).toEqual(expected);
  }, 10000);

  test("The page contains Sign in button", async () => {
    const expected = "Get started with Team";
    const btnSelector = ".btn-large-mktg.btn-mktg";

    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);

    expect(actual).toContain(expected);
  }, 10000);
});


test("title content on enterprise", async () => {
  const expected =
    "GitHub Enterprise · The AI-powered developer platform for the agent-ready enterprise · GitHub";

  await page.goto("https://github.com/enterprise");
  const title = await page.title();

  expect(title).toEqual(expected);
}, 10000);


test("The first link attribute", async () => {
    const expected = "#start-of-content";

    await page.goto("https://github.com/customer-stories");
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));

    expect(actual).toEqual(expected);
  }, 10000);


  test("The page Secutity Lab contains ", async () => {
    const expected = "Protect your project";
    const btnSelector = ".btn-animated.btn-hero-protect-project.mt-3";

    await page.goto("https://securitylab.github.com/");

    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);

    expect(actual).toContain(expected);
  }, 10000);
