# ملفات موقع NEXORA AI Academy

## محتويات الحزمة

- `nexora-ai-academy-source.zip`: نسخة المشروع الكاملة للتعديل والتطوير، وتشمل ملفات React وTailwind وGitHub Actions.
- `nexora-ai-academy-static.zip`: نسخة الموقع المبنية الجاهزة للرفع إلى أي استضافة ملفات ثابتة.

## ملاحظة مهمة حول Google Drive

Google Drive مناسب لتخزين الملفات ومشاركتها، لكنه لا يستضيف مواقع React الحديثة بشكل مباشر. لاستخدام الموقع على الإنترنت، ارفع نسخة `static` إلى GitHub Pages أو Netlify أو Vercel أو أي استضافة static أخرى.

## تشغيل نسخة المشروع محليًا

بعد فك ضغط `nexora-ai-academy-source.zip`:

```bash
pnpm install
pnpm dev
```

ثم افتح الرابط الذي يظهر في الطرفية.

## النشر على GitHub Pages

المشروع يحتوي على Workflow جاهز داخل:

```text
.github/workflows/deploy-pages.yml
```

بعد رفع المشروع إلى GitHub وتفعيل Pages من إعدادات المستودع باختيار **GitHub Actions**، سيتم النشر تلقائيًا عند كل تحديث على فرع `main`.
