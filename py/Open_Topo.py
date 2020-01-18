import requests


def get_tiff(coordinates: dict):
    URL = "http://opentopo.sdsc.edu/otr/"

    DATASETS = ["SRTMGL3", "SRTMGL1", "SRTMGL1_E", "AW3D30", "AW3D30_E"]

    OUTPUT = ["GTiff", "AAIGrid", "HFA"]

    # Recreating immutable coordinate dict
    parameters = {}
    for key, value in coordinates.items():
        parameters.update({key: value})
    parameters.update({"demtype": DATASETS[1], "outputFormat": OUTPUT[0]})

    req = requests.post(URL + "getdem", params=parameters)
    return req.url


if __name__ == "__main__":
    information = {"west": "-110.993573", "south": "45.720453", "east": "-110.910913", "north": "45.842322"}
    get_tiff(information)
