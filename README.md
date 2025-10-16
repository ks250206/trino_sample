# trino_sample

分散SQLエンジンの検証用リポジトリ

## 構成
- trino
- postgres
  - port: 5432 
- pgadmin4
  - postgres用GUI
  - port: 8083
- mongodb
- mongo-express
  - mongodb用GUI
  -  port: 8084 
- minio
  - iceberg用オブジェクトストレージ
    - s3互換ストレージとして使用 
  - port: 9000と9001(GUIは後者) 
- postgres_iceberg
  - icebergカタログ用RDB
  -  port: 5433 


## trinoでテーブルを作成するコマンドの例
```sql
-- 倉庫配下の任意のサブパスをスキーマの location に
CREATE SCHEMA iceberg.minio
WITH (location = 's3a://lakehouse/warehouse/minio/');

-- テーブルを作成
CREATE TABLE iceberg.minio.samples (
  id INTEGER,
  name VARCHAR,
  value DOUBLE
)
WITH (
  format = 'PARQUET'
);

INSERT INTO iceberg.minio.samples VALUES (1, 'a', 3.14);

SELECT * FROM iceberg.minio.samples;

```
