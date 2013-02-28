(function() {
  var Parser, str;
  require('nodeunit');
  Parser = require('../lib/Parser');
  str = 'from SW HOUSTON to #PVnation SOPHOMORE STATUS Just A Soul Whose Intentions Are Good Self-expression should always b limitless if that bothers u...dont follow me';
  exports._unicode_block_name = function(t) {
    var l;
    l = new Parser();
    t.deepEqual(l._unicode_block_name(118, [["0x0000", "0x007F", "Basic Latin"], ["0x0080", "0x00FF", "Latin-1 Supplement"], ["0x0100", "0x017F", "Latin Extended-A"], ["0x0180", "0x024F", "Latin Extended-B"], ["0x0250", "0x02AF", "IPA Extensions"], ["0x02B0", "0x02FF", "Spacing Modifier Letters"], ["0x0300", "0x036F", "Combining Diacritical Marks"], ["0x0370", "0x03FF", "Greek and Coptic"], ["0x0400", "0x04FF", "Cyrillic"], ["0x0500", "0x052F", "Cyrillic Supplement"], ["0x0530", "0x058F", "Armenian"], ["0x0590", "0x05FF", "Hebrew"], ["0x0600", "0x06FF", "Arabic"], ["0x0700", "0x074F", "Syriac"], ["0x0750", "0x077F", "Arabic Supplement"], ["0x0780", "0x07BF", "Thaana"], ["0x0900", "0x097F", "Devanagari"], ["0x0980", "0x09FF", "Bengali"], ["0x0A00", "0x0A7F", "Gurmukhi"], ["0x0A80", "0x0AFF", "Gujarati"], ["0x0B00", "0x0B7F", "Oriya"], ["0x0B80", "0x0BFF", "Tamil"], ["0x0C00", "0x0C7F", "Telugu"], ["0x0C80", "0x0CFF", "Kannada"], ["0x0D00", "0x0D7F", "Malayalam"], ["0x0D80", "0x0DFF", "Sinhala"], ["0x0E00", "0x0E7F", "Thai"], ["0x0E80", "0x0EFF", "Lao"], ["0x0F00", "0x0FFF", "Tibetan"], ["0x1000", "0x109F", "Myanmar"], ["0x10A0", "0x10FF", "Georgian"], ["0x1100", "0x11FF", "Hangul Jamo"], ["0x1200", "0x137F", "Ethiopic"], ["0x1380", "0x139F", "Ethiopic Supplement"], ["0x13A0", "0x13FF", "Cherokee"], ["0x1400", "0x167F", "Unified Canadian Aboriginal Syllabics"], ["0x1680", "0x169F", "Ogham"], ["0x16A0", "0x16FF", "Runic"], ["0x1700", "0x171F", "Tagalog"], ["0x1720", "0x173F", "Hanunoo"], ["0x1740", "0x175F", "Buhid"], ["0x1760", "0x177F", "Tagbanwa"], ["0x1780", "0x17FF", "Khmer"], ["0x1800", "0x18AF", "Mongolian"], ["0x1900", "0x194F", "Limbu"], ["0x1950", "0x197F", "Tai Le"], ["0x1980", "0x19DF", "New Tai Lue"], ["0x19E0", "0x19FF", "Khmer Symbols"], ["0x1A00", "0x1A1F", "Buginese"], ["0x1D00", "0x1D7F", "Phonetic Extensions"], ["0x1D80", "0x1DBF", "Phonetic Extensions Supplement"], ["0x1DC0", "0x1DFF", "Combining Diacritical Marks Supplement"], ["0x1E00", "0x1EFF", "Latin Extended Additional"], ["0x1F00", "0x1FFF", "Greek Extended"], ["0x2000", "0x206F", "General Punctuation"], ["0x2070", "0x209F", "Superscripts and Subscripts"], ["0x20A0", "0x20CF", "Currency Symbols"], ["0x20D0", "0x20FF", "Combining Diacritical Marks for Symbols"], ["0x2100", "0x214F", "Letterlike Symbols"], ["0x2150", "0x218F", "Number Forms"], ["0x2190", "0x21FF", "Arrows"], ["0x2200", "0x22FF", "Mathematical Operators"], ["0x2300", "0x23FF", "Miscellaneous Technical"], ["0x2400", "0x243F", "Control Pictures"], ["0x2440", "0x245F", "Optical Character Recognition"], ["0x2460", "0x24FF", "Enclosed Alphanumerics"], ["0x2500", "0x257F", "Box Drawing"], ["0x2580", "0x259F", "Block Elements"], ["0x25A0", "0x25FF", "Geometric Shapes"], ["0x2600", "0x26FF", "Miscellaneous Symbols"], ["0x2700", "0x27BF", "Dingbats"], ["0x27C0", "0x27EF", "Miscellaneous Mathematical Symbols-A"], ["0x27F0", "0x27FF", "Supplemental Arrows-A"], ["0x2800", "0x28FF", "Braille Patterns"], ["0x2900", "0x297F", "Supplemental Arrows-B"], ["0x2980", "0x29FF", "Miscellaneous Mathematical Symbols-B"], ["0x2A00", "0x2AFF", "Supplemental Mathematical Operators"], ["0x2B00", "0x2BFF", "Miscellaneous Symbols and Arrows"], ["0x2C00", "0x2C5F", "Glagolitic"], ["0x2C80", "0x2CFF", "Coptic"], ["0x2D00", "0x2D2F", "Georgian Supplement"], ["0x2D30", "0x2D7F", "Tifinagh"], ["0x2D80", "0x2DDF", "Ethiopic Extended"], ["0x2E00", "0x2E7F", "Supplemental Punctuation"], ["0x2E80", "0x2EFF", "CJK Radicals Supplement"], ["0x2F00", "0x2FDF", "Kangxi Radicals"], ["0x2FF0", "0x2FFF", "Ideographic Description Characters"], ["0x3000", "0x303F", "CJK Symbols and Punctuation"], ["0x3040", "0x309F", "Hiragana"], ["0x30A0", "0x30FF", "Katakana"], ["0x3100", "0x312F", "Bopomofo"], ["0x3130", "0x318F", "Hangul Compatibility Jamo"], ["0x3190", "0x319F", "Kanbun"], ["0x31A0", "0x31BF", "Bopomofo Extended"], ["0x31C0", "0x31EF", "CJK Strokes"], ["0x31F0", "0x31FF", "Katakana Phonetic Extensions"], ["0x3200", "0x32FF", "Enclosed CJK Letters and Months"], ["0x3300", "0x33FF", "CJK Compatibility"], ["0x3400", "0x4DBF", "CJK Unified Ideographs Extension A"], ["0x4DC0", "0x4DFF", "Yijing Hexagram Symbols"], ["0x4E00", "0x9FFF", "CJK Unified Ideographs"], ["0xA000", "0xA48F", "Yi Syllables"], ["0xA490", "0xA4CF", "Yi Radicals"], ["0xA700", "0xA71F", "Modifier Tone Letters"], ["0xA800", "0xA82F", "Syloti Nagri"], ["0xAC00", "0xD7AF", "Hangul Syllables"], ["0xD800", "0xDB7F", "High Surrogates"], ["0xDB80", "0xDBFF", "High Private Use Surrogates"], ["0xDC00", "0xDFFF", "Low Surrogates"], ["0xE000", "0xF8FF", "Private Use Area"], ["0xF900", "0xFAFF", "CJK Compatibility Ideographs"], ["0xFB00", "0xFB4F", "Alphabetic Presentation Forms"], ["0xFB50", "0xFDFF", "Arabic Presentation Forms-A"], ["0xFE00", "0xFE0F", "Variation Selectors"], ["0xFE10", "0xFE1F", "Vertical Forms"], ["0xFE20", "0xFE2F", "Combining Half Marks"], ["0xFE30", "0xFE4F", "CJK Compatibility Forms"], ["0xFE50", "0xFE6F", "Small Form Variants"], ["0xFE70", "0xFEFF", "Arabic Presentation Forms-B"], ["0xFF00", "0xFFEF", "Halfwidth and Fullwidth Forms"], ["0xFFF0", "0xFFFF", "Specials"], ["0x10000", "0x1007F", "Linear B Syllabary"], ["0x10080", "0x100FF", "Linear B Ideograms"], ["0x10100", "0x1013F", "Aegean Numbers"], ["0x10140", "0x1018F", "Ancient Greek Numbers"], ["0x10300", "0x1032F", "Old Italic"], ["0x10330", "0x1034F", "Gothic"], ["0x10380", "0x1039F", "Ugaritic"], ["0x103A0", "0x103DF", "Old Persian"], ["0x10400", "0x1044F", "Deseret"], ["0x10450", "0x1047F", "Shavian"], ["0x10480", "0x104AF", "Osmanya"], ["0x10800", "0x1083F", "Cypriot Syllabary"], ["0x10A00", "0x10A5F", "Kharoshthi"], ["0x1D000", "0x1D0FF", "Byzantine Musical Symbols"], ["0x1D100", "0x1D1FF", "Musical Symbols"], ["0x1D200", "0x1D24F", "Ancient Greek Musical Notation"], ["0x1D300", "0x1D35F", "Tai Xuan Jing Symbols"], ["0x1D400", "0x1D7FF", "Mathematical Alphanumeric Symbols"], ["0x20000", "0x2A6DF", "CJK Unified Ideographs Extension B"], ["0x2F800", "0x2FA1F", "CJK Compatibility Ideographs Supplement"], ["0xE0000", "0xE007F", "Tags"], ["0xE0100", "0xE01EF", "Variation Selectors Supplement"], ["0xF0000", "0xFFFFF", "Supplementary Private Use Area-A"], ["0x100000", "0x10FFFF", "Supplementary Private Use Area-B"]], 145), ["0x0000", "0x007F", "Basic Latin"]);
    return t.done();
  };
  exports._next_char = function(t) {
    var l;
    l = new Parser();
    t.deepEqual(l._next_char(str, 0, true), [1, 'f']);
    t.deepEqual(l._next_char(str, 1, true), [2, 'r']);
    t.deepEqual(l._next_char(str, 2, true), [3, 'o']);
    t.deepEqual(l._next_char(str, 3, true), [4, 'm']);
    t.deepEqual(l._next_char(str, 4, true), [5, ' ']);
    t.deepEqual(l._next_char(str, 5, true), [6, 's']);
    t.deepEqual(l._next_char(str, 6, true), [7, 'w']);
    t.deepEqual(l._next_char(str, 7, true), [8, ' ']);
    t.deepEqual(l._next_char(str, 8, true), [9, 'h']);
    t.deepEqual(l._next_char(str, 9, true), [10, 'o']);
    t.deepEqual(l._next_char(str, 10, true), [11, 'u']);
    t.deepEqual(l._next_char(str, 11, true), [12, 's']);
    t.deepEqual(l._next_char(str, 12, true), [13, 't']);
    t.deepEqual(l._next_char(str, 13, true), [14, 'o']);
    t.deepEqual(l._next_char(str, 14, true), [15, 'n']);
    t.deepEqual(l._next_char(str, 15, true), [16, ' ']);
    t.deepEqual(l._next_char(str, 16, true), [17, 't']);
    return t.done();
  };
  exports._getBlockCount = function(t) {
    var l;
    l = new Parser();
    t.equal(l._getBlockCount(), 145);
    return t.done();
  };
  exports.analyse = function(t) {
    var l;
    l = new Parser();
    l._string = str;
    l.analyze();
    return t.done();
  };
  exports._utf8char2unicode = function(t) {
    var l;
    l = new Parser();
    t.equal(l._utf8char2unicode('f'), '102');
    t.equal(l._utf8char2unicode('r'), '114');
    t.equal(l._utf8char2unicode('o'), '111');
    t.equal(l._utf8char2unicode('m'), '109');
    t.equal(l._utf8char2unicode('s'), '115');
    t.equal(l._utf8char2unicode('w'), '119');
    t.equal(l._utf8char2unicode('h'), '104');
    t.equal(l._utf8char2unicode('u'), '117');
    t.equal(l._utf8char2unicode('t'), '116');
    return t.done();
  };
  exports._arr_rank = function(t) {
    var l;
    l = new Parser();
    t.deepEqual(l._arr_rank({
      "ion": 3,
      "on ": 3,
      " so": 2,
      "ess": 2,
      "hou": 2,
      "n s": 2,
      "oul": 2,
      "re ": 2,
      "tio": 2,
      "ust": 2,
      " a ": 1,
      " al": 1,
      " ar": 1,
      " b ": 1,
      " bo": 1,
      " do": 1,
      " ex": 1,
      " fo": 1,
      " fr": 1,
      " go": 1,
      " ho": 1,
      " if": 1,
      " in": 1,
      " ju": 1,
      " li": 1,
      " me": 1,
      " pv": 1,
      " se": 1,
      " sh": 1,
      " st": 1,
      " sw": 1,
      " th": 1,
      " to": 1,
      " u ": 1,
      " wh": 1,
      "a s": 1,
      "alw": 1,
      "are": 1,
      "at ": 1,
      "ati": 1,
      "atu": 1,
      "ays": 1,
      "b l": 1,
      "bot": 1,
      "d a": 1,
      "d s": 1,
      "don": 1,
      "e g": 1,
      "e i": 1,
      "e s": 1,
      "elf": 1,
      "ent": 1,
      "ers": 1,
      "exp": 1,
      "f e": 1,
      "f t": 1,
      "fol": 1,
      "fro": 1,
      "goo": 1,
      "hat": 1,
      "her": 1,
      "hom": 1,
      "hos": 1,
      "if ": 1,
      "imi": 1,
      "int": 1,
      "itl": 1,
      "jus": 1,
      "l w": 1,
      "ld ": 1,
      "les": 1,
      "lf ": 1,
      "lim": 1,
      "llo": 1,
      "low": 1,
      "lwa": 1,
      "m s": 1,
      "me ": 1,
      "mit": 1,
      "mor": 1,
      "n t": 1,
      "nat": 1,
      "ns ": 1,
      "nt ": 1,
      "nte": 1,
      "nti": 1,
      "od ": 1,
      "oll": 1,
      "om ": 1,
      "omo": 1,
      "ons": 1,
      "ont": 1,
      "ood": 1,
      "oph": 1,
      "ore": 1,
      "ose": 1,
      "oth": 1,
      "ous": 1,
      "ow ": 1,
      "pho": 1,
      "pre": 1,
      "pvn": 1,
      "res": 1,
      "rom": 1,
      "rs ": 1,
      "s a": 1,
      "s b": 1,
      "s i": 1,
      "s j": 1,
      "s u": 1,
      "se ": 1,
      "sel": 1,
      "sho": 1,
      "sio": 1,
      "sop": 1,
      "sou": 1,
      "ss ": 1,
      "ssi": 1,
      "st ": 1,
      "sta": 1,
      "sto": 1,
      "sw ": 1,
      "t a": 1,
      "t b": 1,
      "t f": 1,
      "tat": 1,
      "ten": 1,
      "tha": 1,
      "the": 1,
      "tle": 1,
      "to ": 1,
      "ton": 1,
      "tus": 1,
      "ul ": 1,
      "uld": 1,
      "us ": 1,
      "vna": 1,
      "w h": 1,
      "w m": 1,
      "way": 1,
      "who": 1,
      "xpr": 1,
      "ys ": 1
    }), {
      "ion": 0,
      "on ": 1,
      " so": 2,
      "ess": 3,
      "hou": 4,
      "n s": 5,
      "oul": 6,
      "re ": 7,
      "tio": 8,
      "ust": 9,
      " a ": 10,
      " al": 11,
      " ar": 12,
      " b ": 13,
      " bo": 14,
      " do": 15,
      " ex": 16,
      " fo": 17,
      " fr": 18,
      " go": 19,
      " ho": 20,
      " if": 21,
      " in": 22,
      " ju": 23,
      " li": 24,
      " me": 25,
      " pv": 26,
      " se": 27,
      " sh": 28,
      " st": 29,
      " sw": 30,
      " th": 31,
      " to": 32,
      " u ": 33,
      " wh": 34,
      "a s": 35,
      "alw": 36,
      "are": 37,
      "at ": 38,
      "ati": 39,
      "atu": 40,
      "ays": 41,
      "b l": 42,
      "bot": 43,
      "d a": 44,
      "d s": 45,
      "don": 46,
      "e g": 47,
      "e i": 48,
      "e s": 49,
      "elf": 50,
      "ent": 51,
      "ers": 52,
      "exp": 53,
      "f e": 54,
      "f t": 55,
      "fol": 56,
      "fro": 57,
      "goo": 58,
      "hat": 59,
      "her": 60,
      "hom": 61,
      "hos": 62,
      "if ": 63,
      "imi": 64,
      "int": 65,
      "itl": 66,
      "jus": 67,
      "l w": 68,
      "ld ": 69,
      "les": 70,
      "lf ": 71,
      "lim": 72,
      "llo": 73,
      "low": 74,
      "lwa": 75,
      "m s": 76,
      "me ": 77,
      "mit": 78,
      "mor": 79,
      "n t": 80,
      "nat": 81,
      "ns ": 82,
      "nt ": 83,
      "nte": 84,
      "nti": 85,
      "od ": 86,
      "oll": 87,
      "om ": 88,
      "omo": 89,
      "ons": 90,
      "ont": 91,
      "ood": 92,
      "oph": 93,
      "ore": 94,
      "ose": 95,
      "oth": 96,
      "ous": 97,
      "ow ": 98,
      "pho": 99,
      "pre": 100,
      "pvn": 101,
      "res": 102,
      "rom": 103,
      "rs ": 104,
      "s a": 105,
      "s b": 106,
      "s i": 107,
      "s j": 108,
      "s u": 109,
      "se ": 110,
      "sel": 111,
      "sho": 112,
      "sio": 113,
      "sop": 114,
      "sou": 115,
      "ss ": 116,
      "ssi": 117,
      "st ": 118,
      "sta": 119,
      "sto": 120,
      "sw ": 121,
      "t a": 122,
      "t b": 123,
      "t f": 124,
      "tat": 125,
      "ten": 126,
      "tha": 127,
      "the": 128,
      "tle": 129,
      "to ": 130,
      "ton": 131,
      "tus": 132,
      "ul ": 133,
      "uld": 134,
      "us ": 135,
      "vna": 136,
      "w h": 137,
      "w m": 138,
      "way": 139,
      "who": 140,
      "xpr": 141,
      "ys ": 142
    });
    return t.done();
  };
  exports._bub_sort = function(t) {
    var l;
    l = new Parser();
    t.deepEqual(l._bub_sort({
      " fr": 1,
      "fro": 1,
      "rom": 1,
      "om ": 1,
      "m s": 1,
      " sw": 1,
      "sw ": 1,
      "w h": 1,
      " ho": 1,
      "hou": 2,
      "ous": 1,
      "ust": 2,
      "sto": 1,
      "ton": 1,
      "on ": 3,
      "n t": 1,
      " to": 1,
      "to ": 1,
      " pv": 1,
      "pvn": 1,
      "vna": 1,
      "nat": 1,
      "ati": 1,
      "tio": 2,
      "ion": 3,
      "n s": 2,
      " so": 2,
      "sop": 1,
      "oph": 1,
      "pho": 1,
      "hom": 1,
      "omo": 1,
      "mor": 1,
      "ore": 1,
      "re ": 2,
      "e s": 1,
      " st": 1,
      "sta": 1,
      "tat": 1,
      "atu": 1,
      "tus": 1,
      "us ": 1,
      "s j": 1,
      " ju": 1,
      "jus": 1,
      "st ": 1,
      "t a": 1,
      " a ": 1,
      "a s": 1,
      "sou": 1,
      "oul": 2,
      "ul ": 1,
      "l w": 1,
      " wh": 1,
      "who": 1,
      "hos": 1,
      "ose": 1,
      "se ": 1,
      "e i": 1,
      " in": 1,
      "int": 1,
      "nte": 1,
      "ten": 1,
      "ent": 1,
      "nti": 1,
      "ons": 1,
      "ns ": 1,
      "s a": 1,
      " ar": 1,
      "are": 1,
      "e g": 1,
      " go": 1,
      "goo": 1,
      "ood": 1,
      "od ": 1,
      "d s": 1,
      " se": 1,
      "sel": 1,
      "elf": 1,
      "lf ": 1,
      "f e": 1,
      " ex": 1,
      "exp": 1,
      "xpr": 1,
      "pre": 1,
      "res": 1,
      "ess": 2,
      "ssi": 1,
      "sio": 1,
      " sh": 1,
      "sho": 1,
      "uld": 1,
      "ld ": 1,
      "d a": 1,
      " al": 1,
      "alw": 1,
      "lwa": 1,
      "way": 1,
      "ays": 1,
      "ys ": 1,
      "s b": 1,
      " b ": 1,
      "b l": 1,
      " li": 1,
      "lim": 1,
      "imi": 1,
      "mit": 1,
      "itl": 1,
      "tle": 1,
      "les": 1,
      "ss ": 1,
      "s i": 1,
      " if": 1,
      "if ": 1,
      "f t": 1,
      " th": 1,
      "tha": 1,
      "hat": 1,
      "at ": 1,
      "t b": 1,
      " bo": 1,
      "bot": 1,
      "oth": 1,
      "the": 1,
      "her": 1,
      "ers": 1,
      "rs ": 1,
      "s u": 1,
      " u ": 1,
      " do": 1,
      "don": 1,
      "ont": 1,
      "nt ": 1,
      "t f": 1,
      " fo": 1,
      "fol": 1,
      "oll": 1,
      "llo": 1,
      "low": 1,
      "ow ": 1,
      "w m": 1,
      " me": 1,
      "me ": 1
    }), {
      "ion": 3,
      "on ": 3,
      " so": 2,
      "ess": 2,
      "hou": 2,
      "n s": 2,
      "oul": 2,
      "re ": 2,
      "tio": 2,
      "ust": 2,
      " a ": 1,
      " al": 1,
      " ar": 1,
      " b ": 1,
      " bo": 1,
      " do": 1,
      " ex": 1,
      " fo": 1,
      " fr": 1,
      " go": 1,
      " ho": 1,
      " if": 1,
      " in": 1,
      " ju": 1,
      " li": 1,
      " me": 1,
      " pv": 1,
      " se": 1,
      " sh": 1,
      " st": 1,
      " sw": 1,
      " th": 1,
      " to": 1,
      " u ": 1,
      " wh": 1,
      "a s": 1,
      "alw": 1,
      "are": 1,
      "at ": 1,
      "ati": 1,
      "atu": 1,
      "ays": 1,
      "b l": 1,
      "bot": 1,
      "d a": 1,
      "d s": 1,
      "don": 1,
      "e g": 1,
      "e i": 1,
      "e s": 1,
      "elf": 1,
      "ent": 1,
      "ers": 1,
      "exp": 1,
      "f e": 1,
      "f t": 1,
      "fol": 1,
      "fro": 1,
      "goo": 1,
      "hat": 1,
      "her": 1,
      "hom": 1,
      "hos": 1,
      "if ": 1,
      "imi": 1,
      "int": 1,
      "itl": 1,
      "jus": 1,
      "l w": 1,
      "ld ": 1,
      "les": 1,
      "lf ": 1,
      "lim": 1,
      "llo": 1,
      "low": 1,
      "lwa": 1,
      "m s": 1,
      "me ": 1,
      "mit": 1,
      "mor": 1,
      "n t": 1,
      "nat": 1,
      "ns ": 1,
      "nt ": 1,
      "nte": 1,
      "nti": 1,
      "od ": 1,
      "oll": 1,
      "om ": 1,
      "omo": 1,
      "ons": 1,
      "ont": 1,
      "ood": 1,
      "oph": 1,
      "ore": 1,
      "ose": 1,
      "oth": 1,
      "ous": 1,
      "ow ": 1,
      "pho": 1,
      "pre": 1,
      "pvn": 1,
      "res": 1,
      "rom": 1,
      "rs ": 1,
      "s a": 1,
      "s b": 1,
      "s i": 1,
      "s j": 1,
      "s u": 1,
      "se ": 1,
      "sel": 1,
      "sho": 1,
      "sio": 1,
      "sop": 1,
      "sou": 1,
      "ss ": 1,
      "ssi": 1,
      "st ": 1,
      "sta": 1,
      "sto": 1,
      "sw ": 1,
      "t a": 1,
      "t b": 1,
      "t f": 1,
      "tat": 1,
      "ten": 1,
      "tha": 1,
      "the": 1,
      "tle": 1,
      "to ": 1,
      "ton": 1,
      "tus": 1,
      "ul ": 1,
      "uld": 1,
      "us ": 1,
      "vna": 1,
      "w h": 1,
      "w m": 1,
      "way": 1,
      "who": 1,
      "xpr": 1,
      "ys ": 1
    });
    return t.done();
  };
  exports._sort_func = function(t) {
    var l;
    l = new Parser();
    t.equal(l._sort_func([" go", 1], ["fro", 1]), -1);
    t.equal(l._sort_func(["me ", 1], [" go", 1]), 1);
    t.equal(l._sort_func([" me", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["w m", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["ow ", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["low", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["llo", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["oll", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["fol", 1], [" go", 1]), 1);
    t.equal(l._sort_func([" fo", 1], [" go", 1]), -1);
    t.equal(l._sort_func([" go", 1], ["rom", 1]), -1);
    t.equal(l._sort_func(["t f", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["nt ", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["ont", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["don", 1], [" go", 1]), 1);
    t.equal(l._sort_func([" do", 1], [" go", 1]), -1);
    t.equal(l._sort_func([" go", 1], ["om ", 1]), -1);
    t.equal(l._sort_func([" u ", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["s u", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["rs ", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["ers", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["her", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["the", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["oth", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["bot", 1], [" go", 1]), 1);
    t.equal(l._sort_func([" bo", 1], [" go", 1]), -1);
    t.equal(l._sort_func([" go", 1], ["m s", 1]), -1);
    t.equal(l._sort_func(["t b", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["at ", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["hat", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["tha", 1], [" go", 1]), 1);
    t.equal(l._sort_func([" th", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["f t", 1], [" go", 1]), 1);
    t.equal(l._sort_func(["if ", 1], [" go", 1]), 1);
    return t.done();
  };
  exports.getTrigramRank = function(t) {
    var l;
    l = new Parser(str);
    l.setPadStart(true);
    l.analyze();
    t.deepEqual(l.getTrigramRanks(), { ion: 0,
      'on ': 1,
      ' so': 2,
      ess: 3,
      hou: 4,
      'n s': 5,
      oul: 6,
      're ': 7,
      tio: 8,
      ust: 9,
      ' a ': 10,
      ' al': 11,
      ' ar': 12,
      ' b ': 13,
      ' bo': 14,
      ' fo': 15,
      ' fr': 16,
      ' go': 17,
      ' ho': 18,
      ' if': 19,
      ' in': 20,
      ' ju': 21,
      ' li': 22,
      ' me': 23,
      ' pv': 24,
      ' se': 25,
      ' sh': 26,
      ' st': 27,
      ' sw': 28,
      ' th': 29,
      ' to': 30,
      ' ud': 31,
      ' wh': 32,
      'a s': 33,
      alw: 34,
      are: 35,
      'at ': 36,
      ati: 37,
      atu: 38,
      ays: 39,
      'b l': 40,
      bot: 41,
      'd a': 42,
      'd s': 43,
      don: 44,
      'e g': 45,
      'e i': 46,
      'e s': 47,
      elf: 48,
      ent: 49,
      ers: 50,
      exp: 51,
      'f t': 52,
      fex: 53,
      fol: 54,
      fro: 55,
      goo: 56,
      hat: 57,
      her: 58,
      hom: 59,
      hos: 60,
      'if ': 61,
      imi: 62,
      int: 63,
      itl: 64,
      jus: 65,
      'l w': 66,
      'ld ': 67,
      les: 68,
      lfe: 69,
      lim: 70,
      llo: 71,
      low: 72,
      lwa: 73,
      'm s': 74,
      'me ': 75,
      mit: 76,
      mor: 77,
      'n t': 78,
      nat: 79,
      'ns ': 80,
      'nt ': 81,
      nte: 82,
      nti: 83,
      'o p': 84,
      'od ': 85,
      oll: 86,
      'om ': 87,
      omo: 88,
      ons: 89,
      ont: 90,
      ood: 91,
      oph: 92,
      ore: 93,
      ose: 94,
      oth: 95,
      ous: 96,
      'ow ': 97,
      pho: 98,
      pre: 99,
      pvn: 100,
      res: 101,
      rom: 102,
      'rs ': 103,
      's a': 104,
      's b': 105,
      's i': 106,
      's j': 107,
      's u': 108,
      'se ': 109,
      sel: 110,
      sho: 111,
      sio: 112,
      sop: 113,
      sou: 114,
      'ss ': 115,
      ssi: 116,
      'st ': 117,
      sta: 118,
      sto: 119,
      'sw ': 120,
      't a': 121,
      't b': 122,
      't f': 123,
      tat: 124,
      ten: 125,
      tha: 126,
      the: 127,
      tle: 128,
      'to ': 129,
      ton: 130,
      tus: 131,
      udo: 132,
      'ul ': 133,
      uld: 134,
      'us ': 135,
      vna: 136,
      'w h': 137,
      'w m': 138,
      way: 139,
      who: 140,
      xpr: 141,
      'ys ': 142
    });
    return t.done();
  };
}).call(this);
