from py import Open_Topo


def main(coordinates: dict):
    Open_Topo.get_tiff(coordinates)


if __name__ == "__main__":
    main({"west": "-110.993573", "south": "45.720453", "east": "-110.910913", "north": "45.842322"})
