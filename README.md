# Jest採坑紀錄
1.Jest底層是使用commonJS來運行，檔名需設定成.cjs不然會無法運行
2.必須使用不然會找不到import的東西   
 testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
}
告訴jest使用babel的模組解析器，jest沒辦法解析ES語法
