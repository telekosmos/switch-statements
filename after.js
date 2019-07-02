
class PNGConverter {
  convert(filename) {
    console.log(`PNGConverter: Convert ${filename} to PNG`);
  }
}

class GIFConverter {
  convert(filename) {
    console.log(`GIFConverter: Convert ${filename} to GIF`);
  }
}

class JPGConverter {
  convert(filename) {
    console.log(`JPGConverter: Convert ${filename} to JPG`);
  }
}

class SVGConverter {
  convert(filename) {
    console.log(`SVGConverter: Convert ${filename} to SVG`);
  }
}


class PicConverter {
  constructor(filename) {
    this.filename = filename;
    this.converters = {
      'png': new PNGConverter(),
      'gif': new GIFConverter(),
      'jpg': new JPGConverter(),
      'svg': new SVGConverter()
    }
  }

  convert(format) {
    const converter = this.converters[format] || this.converters.gif;
    converter.convert(this.filename);
  }
}

const converter = new PicConverter('my-filename.jpg');
converter.convert('gif');
