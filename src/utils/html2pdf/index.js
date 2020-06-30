import html2canvas from "html2canvas";
import JsPDF from "jspdf";

// 导出为pdf
async function html2pdf(ele) {
  const canvas = await html2canvas(ele);

  canvas.style.display = "none";

  document.body.appendChild(canvas);
  const pageData = canvas.toDataURL("image/jpeg", 1.0);

  // 方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
  const pdf = new JsPDF("", "pt", "a4");
  // addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
  pdf.addImage(
    pageData,
    "JPEG",
    0,
    0,
    595.28,
    (592.28 / canvas.width) * canvas.height
  );
  pdf.save("program.pdf");
}

export default html2pdf;
export {
  html2pdf
}