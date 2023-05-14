import csv
from get_coordinate import get_coordinate

# 入力ファイル名
input_file = "./data/test.csv"


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
            # 都道府県名,地方公共団体名,施設名称,年間処理量,資源回収量,処理対象廃棄物,処理方式,施設の改廃,産業廃棄物の搬入の有無,リユース・リペア機能・内容,
            writer.writerow(
                [
                    "factory_type",
                    "name",
                    "coordinates",
                    "local_government",
                    "annual_throughput",
                    "resource_recovery",
                    "waste_for_processing",
                    "processing_method",
                    "facility_changes",
                    "industrial_waste",
                    "remarks",
                    "reuse_and_repair_features",
                    "title",
                ]
            )
            writer_error = csv.writer(errorfile)

            # 都道府県名,地方公共団体名,施設名称,年間処理量,施設の改廃,産業廃棄物の搬入の有無,
            # 資源回収量: Resource recovery
            # 処理対象廃棄物: Waste for processing
            # 処理方式: Processing method
            # 施設の改廃: Facility changes
            # 産業廃棄物の搬入の有無: Industrial waste transport
            # リユース・リペア機能・内容: Reuse and repair features/content
            for row in reader:
                coordinates, title = get_coordinate(row[2], row[0])
                if not coordinates:
                    writer_error.writerow([row[2]])
                else:
                    local_government = row[1] + "(" + row[0] + ")"
                    annual_throughput = row[3]
                    remarks = row[4]
                    industrial_waste = row[8]
                    resource_recovery = row[4]
                    waste_for_processing = row[5]
                    processing_method = row[6]
                    facility_changes = row[7]
                    reuse_and_repair_features = row[9]
                    writer.writerow(
                        [
                            "bulky_waste",
                            row[2],
                            coordinates,
                            local_government,
                            annual_throughput,
                            resource_recovery,
                            waste_for_processing,
                            processing_method,
                            facility_changes,
                            industrial_waste,
                            remarks,
                            reuse_and_repair_features,
                            title,
                        ]
                    )
    return "CSVファイルの処理が完了しました。"


result = process_csv(input_file, output_file)

print(result)
