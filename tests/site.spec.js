const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// Expected constants
const expectedTitle = 'RESUME';
const expectedLogoText = 'RESUME';
const expectedMenuItemCount = 3;
const expectedHeroTitle = 'Eesha Venkat Pasupuleti';
const expectedHeroSubText = 'Programmer';
const expectedHeroLinkCount = 2;
const expectedFeaturedTitle = 'Skills';
const expectedFeaturedImageCount = 4;
const expectedAboutTitle = 'Checkout my experience';
const expectedBuyTitle = 'I have done 4 projects so far';
const expectedSellTitle = 'Know my education';
const expectedTestimonialsTitle = 'Contact';
const expectedTestimonialCount = 4;
const expectedMetaDescription = 'This is an my own resume';
const expectedMetaKeywordsNotEmpty = '';
const expectedNavs = ['Home', 'About', 'Services', 'Contact'];
const expectedAlts = ['html', 'css', 'js', 'python'];
const expectedLinks = ['Email', 'LinkedIn', 'Contact', 'GitHub'];
const expectedIcons = ['fas fa-phone', 'fas fa-envelope', 'fab fa-github', 'fab fa-linkedin'];
const expectedSubmitButtonText = 'Submit';

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('Check Logo in Header', async ({ page }) => {
  const logoText = await page.locator('.logo').textContent();
  expect(logoText).toBe(expectedLogoText);
});

test('Check Navigation Menu in Header', async ({ page }) => {
  const menuItemCount = await page.locator('.menu .menu-item').count();
  expect(menuItemCount).toBe(expectedMenuItemCount);
});

test('Check Hero Section', async ({ page }) => {
  expect(await page.locator('.hero h1').textContent()).toBe(expectedHeroTitle);
  expect(await page.locator('.hero .sub-text').textContent()).toBe(expectedHeroSubText);
});

test('Check Links in Hero Section', async ({ page }) => {
  const linkCount = await page.locator('.hero .hero-text a').count();
  expect(linkCount).toBe(expectedHeroLinkCount);
});

test('Check Featured Section', async ({ page }) => {
  expect(await page.locator('.featured h2').textContent()).toBe(expectedFeaturedTitle);
  const imageCount = await page.locator('.featured .image-container img').count();
  expect(imageCount).toBe(expectedFeaturedImageCount);
});

test('Check About Section', async ({ page }) => {
  expect(await page.locator('#about h2').textContent()).toBe(expectedAboutTitle);
});

test('Check Buy Section', async ({ page }) => {
  expect(await page.locator('#buy h2').textContent()).toBe(expectedBuyTitle);
});


test('Check Footer', async ({ page }) => {
  const footerLinkCount = await page.locator('.footer-link').count();
  expect(footerLinkCount).toBeGreaterThan(0);
});

test('Check SEO Meta Description', async ({ page }) => {
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  expect(metaDescription).toBe(expectedMetaDescription);
});

test('Check SEO Meta Keywords', async ({ page }) => {
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  expect(metaKeywords).not.toBe(expectedMetaKeywordsNotEmpty);
});

test('Check Newsletter Form Elements', async ({ page }) => {
  const newsletterForm = await page.locator('.newsletter-form');
  const inputField = await newsletterForm.locator('input[type="email"]');
  const submitButton = await newsletterForm.locator('input[type="submit"]');
  expect(await inputField.isVisible()).toBe(true);
  expect(await submitButton.isVisible()).toBe(true);
  expect(await submitButton.getAttribute('value')).toBe(expectedSubmitButtonText);
});

test('Check All Navigation Links', async ({ page }) => {
  const navLinks = await page.locator('.menu-item');
  const count = await navLinks.count();

  for (let i = 0; i < count; i++) {
    const link = navLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});


test('Check All Featured Company Logos', async ({ page }) => {
  const images = await page.locator('.image-container img');
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const image = images.nth(i);
    expect(await image.isVisible()).toBe(true);
  }
});


test('Check All Testimonials', async ({ page }) => {
  const testimonials = await page.locator('.testimonial');
  const count = await testimonials.count();

  for (let i = 0; i < count; i++) {
    const testimonial = testimonials.nth(i);
    expect(await testimonial.isVisible()).toBe(true);
  }
});

test('Check All Footer Links', async ({ page }) => {
  const footerLinks = await page.locator('.footer-link');
  const count = await footerLinks.count();

  for (let i = 0; i < count; i++) {
    const link = footerLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});

test('Check All Footer Icons', async ({ page }) => {
  const footerIcons = await page.locator('.footer-link i');
  const count = await footerIcons.count();

  for (let i = 0; i < count; i++) {
    const icon = footerIcons.nth(i);
    expect(await icon.isVisible()).toBe(true);
  }
});

