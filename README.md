# 场域 FIELD

先锋结构主义个人站点。TypeScript + React + Vite。

线上地址：https://chinachiao.github.io/field/

```bash
npm install
npm run dev
```

站点数据在 `src/data/`。联系方式写入 `src/data/site.ts` 的 `contact` 字段后才会显示；空字段会自动隐藏。

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。
