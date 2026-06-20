# SpecimensLabelMakerSite

標本ラベルメーカーのApp Store向け公式静的サイトです。

## 公開URLの用途

- `https://specimenlabelmakersite.pages.dev/privacy`: App Store Connectの「プライバシーポリシーURL」
- `https://specimenlabelmakersite.pages.dev/support`: App Store Connectの「サポートURL」
- `https://specimenlabelmakersite.pages.dev/terms`: 利用規約
- `https://specimenlabelmakersite.pages.dev/commerce`: 特定商取引法に基づく表記
- `https://specimenlabelmakersite.pages.dev/api`: API利用説明
- `https://specimenlabelmakersite.pages.dev/updates`: 更新履歴
- `https://specimenlabelmakersite.pages.dev/`: サイト入口

## ローカル確認

```bash
python3 -m http.server 8080 --directory /Users/kaihatsushogou/Desktop/標本ラベルメーカー/SpecimensLabelMakerSite
```

サイトを公開した後、App Store ConnectへHTTPSの公開URLを登録します。プライバシーポリシーを変更する場合は、アプリ内の `LegalDocumentsView.swift` と同じ内容になるよう更新してください。
