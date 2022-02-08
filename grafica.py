import PyPDF2
"""import matplotlib.pyplot as plt
import numpy as np

x = np.arange(0,10,0.1)
y = x*np.cos(x)

plt.plot(x,y)
plt.xlabel('x')
plt.ylabel('y')
plt.title('Lab DLS')
plt.show()
print("gggggg")"""

pdf_f = open("RomeoJulieta.pdf")
leer_pdf = PyPDF2.PdfFileReader(pdf_f)

numero_paginas = leer_pdf.getNumPages()
print(f"El pdf tiene {numero_paginas} paginas")
