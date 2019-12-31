import requests
import json


def get_tiff(coordinates: dict):
    URL = "http://opentopo.sdsc.edu/otr/"

    DATASETS = ["SRTMGL3", "SRTMGL1", "SRTMGL1_E", "AW3D30", "AW3D30_E"]

    OUTPUT = ["GTiff","AAIGrid","HFA"]

    information = {"demtype": DATASETS[1], "west": "-110.993573", "south": "45.720453","east": "-110.910913","north": "45.842322", "outputFormat":OUTPUT[2]}
    
    coordinates.update({"demtype": DATASETS[1], "outputFormat":OUTPUT[2]})

    print("got here")
    print(coordinates)

    #req = requests.post(URL+"getdem", params=information)
    #req = requests.post(URL+"getdem", params=coordinates)

    #print(req.url)
