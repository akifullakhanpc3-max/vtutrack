const code = localStorage.getItem("subjectCode");

console.log("Retrieved subjectId from localStorage:", code);
function downloadPDF(subjectId) {
    // Build file path using id
    console.log("Downloading PDF for subjectId:", subjectId);
    const pdfUrl = `../../notes/${code}${subjectId}.pdf`;
    console.log("PDF URL:", pdfUrl);
    window.location.href = pdfUrl;

}
