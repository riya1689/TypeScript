/**
 * কেন আমরা JavaScript-এর পরিবর্তে TypeScript ব্যবহার করি?

TypeScript basically হল JavaScript-এর super-set, অর্থাৎ JS-এর সব কিছুই এতে কাজ করে, কিন্তু এর সাথে আছে extra power of types 💪

👇 নিচে কিছু মূল কারণ দেওয়া হলো যেগুলোর জন্য বড় বড় কোম্পানিগুলো TypeScript ব্যবহার করে:

1️⃣ Type Safety
👉 Variable, function parameter, object ইত্যাদিতে type define করে দেওয়া যায়।
এতে ভুল data type assign করলে code লেখার সময়ই error ধরা পড়ে।

2️⃣ Early Error Detection (Before Runtime)
👉 JavaScript-এ অনেক সময় error দেখা যায় runtime-এ (অর্থাৎ code চালানোর সময়)।
কিন্তু TypeScript-এ IDE বা compiler আগেই error দেখিয়ে দেয়।

3️⃣ Better Development Experience (DX)
👉 VS Code বা অন্য editor-এ TypeScript দিলে auto-suggestion, intellisense, type hinting — সবকিছু অনেক smooth হয়।

4️⃣ Easy to Maintain Large-Scale Projects
👉 বড় project-এ অনেক developer কাজ করে।
TypeScript-এ type define করে রাখলে team-এর সবাই বুঝতে পারে কোন function কী data নেয় বা return করে।

5️⃣ Improved Readability & Documentation
👉 Code দেখলেই বোঝা যায় কোন variable বা function কী কাজ করছে, কারণ type information নিজেই documentation-এর মতো কাজ করে।

6️⃣ Refactoring is Safer
👉 বড় codebase-এ কোনো variable বা function rename/change করলে TypeScript type-check করে নিশ্চিত করে কিছু ভাঙছে না।

7️⃣ Catch Bugs Before Deploy
👉 TypeScript compiler run-এর আগেই সম্ভাব্য bug detect করে, ফলে production bug অনেক কমে যায়। 
 */