import csv
from get_coordinate import get_coordinate

# 入力ファイル名
input_file = "./data/incineration.csv"
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
                    "factory_type",
                    "name",
                    "coordinates",
                    "address",
                    "local_government",
                    "annual_throughput",
                    "remarks",
                    "industrial_waste",
                ]
            )
            writer_error = csv.writer(errorfile)

            # 都道府県名,地方公共団体名,施設名称,年間処理量,施設の改廃,産業廃棄物の搬入の有無
            for row in reader:
                coordinates, address = get_coordinate(row[2], row[0])
                if not coordinates:
                    # 住所不定
                    writer_error.writerow([row[2]])
                else:
                    local_government = row[1] + "(" + row[0] + ")"
                    annual_throughput = row[3]
                    remarks = row[4]
                    industrial_waste = row[5]
                    writer.writerow(
                        [
                            "incineration_facility",
                            row[2],
                            coordinates,
                            address,
                            local_government,
                            annual_throughput,
                            remarks,
                            industrial_waste,
                        ]
                    )
    return "CSVファイルの処理が完了しました。"


result = process_csv(input_file, output_file)

print(result)
