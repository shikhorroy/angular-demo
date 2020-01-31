export class MatTableUtils {
  getTextAlignCSSClass(align: string) {
    if (!align || align === 'center') {
      return 'text-align-center';
    }
    return align === 'right' ? 'text-align-right' : 'text-align-left';
  }

  getColumnWidth(width) {
    return width ? width : '25%';
  }
}
