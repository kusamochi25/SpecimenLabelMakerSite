# SpecimenLabelMakerSite

標本ラベルメーカーのApp Store向け公式静的サイトです。

## 公開URLの用途

- `https://specimen-label-maker-site.pages.dev/privacy`: App Store Connectの「プライバシーポリシーURL」
- `https://specimen-label-maker-site.pages.dev/support`: App Store Connectの「サポートURL」
- `https://specimen-label-maker-site.pages.dev/terms`: 利用規約
- `https://specimen-label-maker-site.pages.dev/commerce`: 特定商取引法に基づく表記
- `https://specimen-label-maker-site.pages.dev/api`: API利用説明
- `https://specimen-label-maker-site.pages.dev/updates`: 更新履歴
- `https://specimen-label-maker-site.pages.dev/usage`: 使用方法
- `https://specimen-label-maker-site.pages.dev/pdf-technology`: PDF、印刷、セル配置に関する技術読み物
- `https://specimen-label-maker-site.pages.dev/`: サイト入口
- `https://specimen-label-maker-site.pages.dev/app-ads.txt`: AdMob販売者情報

## ローカル確認

```bash
python3 -m http.server 8080 --directory /Users/kaihatsushogou/Desktop/SpecimenLabelMakerSite
```

サイトを公開した後、App Store ConnectへHTTPSの公開URLを登録します。プライバシーポリシーを変更する場合は、アプリ内の `LegalDocumentsView.swift` と同じ内容になるよう更新してください。
