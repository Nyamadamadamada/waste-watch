import csv
from get_coordinate import get_coordinate

# 入力ファイル名
input_file = "./data/test.csv"
# input_file = "./data/input1.csv"

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
            writer.writerow(
                [
                    "name",
                    "coordinates",
                    "local_government",
                    "fill_rate",  # 埋め立て済み割合
                    "landfill_site",  # 埋立場所
                    "waste_type",  # 処理対象廃棄物
                    "total_volume",  # 全体容積(m3)
                    "facility_status",  # 処分場の現状
                    "title",
                ]
            )
            writer_error = csv.writer(errorfile)

            for row in reader:
                coordinates, title = get_coordinate(row[2], row[0])
                if not coordinates:
                    # 住所不定
                    writer_error.writerow([row[2]])
                else:
                    local_government = row[1] + "(" + row[0] + ")"
                    fill_rate = row[3]
                    landfill_site = row[4]
                    waste_type = row[5]
                    total_volume = row[6]
                    facility_status = row[7]
                    writer.writerow(
                        [
                            row[2],
                            coordinates,
                            local_government,
                            fill_rate,  # 埋め立て済み割合
                            landfill_site,  # 埋立場所
                            waste_type,  # 処理対象廃棄物
                            total_volume,  # 全体容積(m3)
                            facility_status,  # 処分場の現状
                            title,
                        ]
                    )
    return "CSVファイルの処理が完了しました。"


result = process_csv(input_file, output_file)

print(result)
