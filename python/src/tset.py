import requests
import csv

def get_coordinate(place_name):
    """
    国土地理院APIを使用して、住所から緯度経度を取得する関数。
    """
    url = "https://msearch.gsi.go.jp/address-search/AddressSearch"
    params = {"q": place_name}
    r = requests.get(url, params=params)
    data = r.json()
    if "error" in data:
        print(data["error"])
        return None, None
    if not data:
        return None, None
    else:
        coordinates = data[0]["geometry"]["coordinates"]
        address = data[0]["properties"]["title"]
        return coordinates, address


coordinates, address = get_coordinate("東京タワー")
print(coordinates)




def find_prefectural_capital(prefecture):
    with open(prefectural_capital_file, "r", encoding="utf-8") as csvfile:
        next(csv.reader(csvfile))
        reader = csv.reader(csvfile)
        # prefecturesがcsvの都道府県と一致したら、その県庁所在地と緯度経度を返す
        address = ""
        coordinates = []
        for row in reader:
            if row[0] == prefecture:
                coordinates.append(float(row[2]))
                coordinates.append(float(row[3]))
                print(coordinates)

                address = row[0] + row[1]
                return address, coordinates

        return address, coordinates


# q = "東京都港区芝公園４丁目２−８"
# coordinates, address = get_lat_lon(q)
# print("緯度：", coordinates)
# print("住所:", address)
