import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export async function exportAsImage(element, filename = '装机清单.png') {
  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#111118',
      scale: 2,
      useCORS: true,
    })

    const link = document.createElement('a')
    link.download = filename
    link.href = canvas.toDataURL('image/png')
    link.click()
    return true
  } catch (err) {
    console.error('Export image failed:', err)
    return false
  }
}

export async function exportAsPDF(element, filename = '装机清单.pdf') {
  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#111118',
      scale: 2,
      useCORS: true,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const imgWidth = 210
    const pageHeight = 297
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save(filename)
    return true
  } catch (err) {
    console.error('Export PDF failed:', err)
    return false
  }
}
