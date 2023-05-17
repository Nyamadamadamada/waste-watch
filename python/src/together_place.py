import csv
import json

# 入力ファイル名
input_file = "./output/output.csv"

# 出力ファイル名
output_file = "./output/output.json"


# 緯度経度が同じ施設をまとめる
def together_place(input_file):
    list = []
    included_values = []
    # 入力 CSV ファイルを開く
    with open(input_file, "r", encoding="utf-8") as file:
        csv_data = csv.DictReader(file)
        for row in csv_data:
            data_dict = {}
            title = row["title"]
            # すでにlistに登録済みの場合はスキップ
            if title in included_values:
                continue

            included_values.append(title)
            # イテレータを分けるため再度CSVファイルを開く
            with open(input_file, "r", encoding="utf-8") as file:
                csv_data = csv.DictReader(file)
                facilities = [item for item in csv_data if item["title"] == title]
            is_cluster = len(facilities) > 1
            # ネストするキーと値を指定
            if is_cluster:
                data_dict["name"] = row["title"] + "_の集まり"
                data_dict["coordinates"] = row["coordinates"]
                data_dict["is_cluster"] = is_cluster
                data_dict["facilities"] = facilities
                data_dict["title"] = row["title"]
            else:
                data_dict["name"] = row["name"]
                data_dict["coordinates"] = row["coordinates"]
                data_dict["is_cluster"] = is_cluster
                data_dict["local_government"] = row["local_government"]
                data_dict["fill_rate"] = row["fill_rate"]
                data_dict["landfill_site"] = row["landfill_site"]
                data_dict["waste_type"] = row["waste_type"]
                data_dict["total_volume"] = row["total_volume"]
                data_dict["facility_status"] = row["facility_status"]
                data_dict["title"] = row["title"]
            list.append(data_dict)
    print("配列に格納")
    return list


def list_to_json(list, output_file):
    # 出力 JSON ファイルを開く
    with open(output_file, "w", encoding="utf-8", newline="") as f:
        json.dump(list, f, ensure_ascii=False, indent=2)
    return "JSONファイルの出力処理が完了しました。"


list = together_place(input_file)
result = list_to_json(list, output_file)

print(result)
