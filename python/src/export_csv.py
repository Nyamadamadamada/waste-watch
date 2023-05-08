import csv
from get_coordinate import get_coordinate

# 入力ファイル名
input_file = "./input/tower_prefecture.csv"

# 出力ファイル名
output_file = "./output/output.csv"
error_file = "./output/error.csv"


def process_csv(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as csvfile:
        next(csv.reader(csvfile))
        reader = csv.reader(csvfile)
        with open(output_file, "w", encoding="utf-8", newline="") as outputcsv, open(
            error_file, "w", encoding="utf-8", newline=""
        ) as errorfile:
            writer = csv.writer(outputcsv)
            # 施設名,都道府県,緯度経度,タイトル
            writer.writerow(
                [
                    "place_name",
                    "title",
                    "coordinates",
                    "prefecture",
                ]
            )
            writer_error = csv.writer(errorfile)

            for row in reader:
                coordinates, title = get_coordinate(row[0], row[1])
                if not coordinates:
                    # 住所不定
                    writer_error.writerow([row[0]])
                else:
                    writer.writerow(
                        [
                            row[0], 
                            row[1],
                            coordinates,
                            title,
                        ]
                    )
    return "CSVファイルの処理が完了しました。"


result = process_csv(input_file, output_file)

print(result)
