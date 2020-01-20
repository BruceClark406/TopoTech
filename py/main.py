from py import Open_Topo
from py import Image_Array


def main(coordinates: dict) -> list:
    # get the tiff of defined area
    url = Open_Topo.get_tiff(coordinates)
    img = Image_Array.open_images_from_url(url)

    # change tiff to numpy array
    img_array = Image_Array.tiff_to_array(img)

    # get shape of numpy array
    img_shape = Image_Array.get_shape(img_array)

    # change numpy to 1 dimensional list
    img_array = Image_Array.numpy_to_1d_list(img_array)

    return [img_array, img_shape]


if __name__ == "__main__":
    main({"west": "-110.993573", "south": "45.720453", "east": "-110.910913", "north": "45.842322"})
