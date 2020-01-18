from py import Open_Topo
from py import Image_Array


def main(coordinates: dict):
    url = Open_Topo.get_tiff(coordinates)
    img = Image_Array.open_images_from_url(url)
    img_array = Image_Array.tiff_to_array_1d(img)
    return img_array


if __name__ == "__main__":
    main({"west": "-110.993573", "south": "45.720453", "east": "-110.910913", "north": "45.842322"})
