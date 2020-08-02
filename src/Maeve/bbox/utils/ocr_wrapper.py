import argparse
import os
from glob import glob

import cv2

from PIL import Image
import pytesseract
import pdf2image

pytesseract.pytesseract.tesseract_cmd = '/usr/bin/tesseract'

class OCR():
    def __init__(self, path='.', ext='pdf', ig_case=False, preprocess='thresh'):
        super().__init__()
        self.path = path
        self.preprocess = preprocess
        self.ext = ext
        self.ig_case = ig_case

        self.files = self.__collect_files__()

    def __collect_files__(self):
        """
        Collect PDF file names in path
        """
        if self.ig_case:
            self.ext = "".join(["[{}]".format(ch + ch.swapcase()) for ch in self.ext])
        return glob(os.path.join(self.path, "*." + self.ext))

    def __preprocess__(self, image):
        """
        Pre-process image
        """
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        if self.preprocess == "thresh":
                gray = cv2.threshold(gray, 0, 255,
                        cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]

        elif self.preprocess == "blur":
                gray = cv2.medianBlur(gray, 3)

        return gray

    def pdf_processing(self):
        """
        Convert and pre-process the PDF to image
        """
        rets = {}
        for file in self.files:
            pages = pdf2image.convert_from_path(pdf_path=file, dpi=200, size=(1654,2340))

            extracts = {}
            for i in range(len(pages)):
                pages[i].save('/tmp/spcs-ob-893_p' + str(i) + '.jpg')
                content = pytesseract.image_to_string(pages[i], lang='eng')
                extracts[int(i)] = str(content)
                os.remove('/tmp/spcs-ob-893_p' + str(i) + '.jpg')
            rets[str(file)] = extracts

        return rets
