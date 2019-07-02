
class PNGConverter {
  static convert(filename) {
    console.log(`PNGConverter: Convert ${filename} to PNG`);
  }
}

class GIFConverter {
  static convert(filename) {
    console.log(`GIFConverter: Convert ${filename} to GIF`);
  }
}

class JPGConverter {
  static convert(filename) {
    console.log(`JPGConverter: Convert ${filename} to JPG`);
  }
}

class SVGConverter {
  static convert(filename) {
    console.log(`SVGConverter: Convert ${filename} to SVG`);
  }
}


class PicConverter {
  constructor(filename) {
    this.filename = filename;
    this.converters = {
      'png': PNGConverter,
      'gif': GIFConverter,
      'jpg': JPGConverter,
      'svg': SVGConverter,
    }
  }

  convert(format) {
    const converter = this.converters[format] || this.converters.gif;
    converter.convert(this.filename);
  }
}

const converter = new PicConverter('my-filename.jpg');
converter.convert('gif');
converter.convert('svg');
