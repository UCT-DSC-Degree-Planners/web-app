# import pdfminer
from pdfminer.high_level import extract_text

text = extract_text(r"C:\Users\danim\OneDrive - University of Cape Town\4th year\Controls\MRTDAN014_Lab1.pdf")
print(text)



