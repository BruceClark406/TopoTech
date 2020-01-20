import requests
import numpy as np
import datetime
from PIL import Image
from io import BytesIO


def numpy_to_1d_list(img_array: np.ndarray) -> list:
    img_array = img_array.flatten()
    img_array = img_array.tolist()
    return img_array


def tiff_to_jpg(img: Image) -> Image:
    img_array = np.array(img)

    max_elevation = np.amax(img_array)
    min_elevation = np.amin(img_array)
    elevation_domain = max_elevation - min_elevation

    for i in range(len(img_array)):
        for j in range(len(img_array[0])):
            # ((elevation - MIN elv) / (MAX elev - MIN elev)) * 255 = Modified Output
            img_array[i][j] = (img_array[i][j] - min_elevation) / elevation_domain * 255

    img = Image.fromarray(img_array, mode="I")
    img = img.convert("RGB")
    img.show(img)
    # name = datetime.datetime.now().strftime("%m-%d-%Y-%H-%M-%S")
    # img.save(str(name) + ".jpg")


def open_images_from_url(url: str) -> Image:
    image = requests.get(url)
    image = Image.open(BytesIO(image.content))
    return image


def tiff_to_array(img: Image) -> list:
    return np.array(img)


def get_shape(img_array: np.ndarray) -> tuple:
    return img_array.shape