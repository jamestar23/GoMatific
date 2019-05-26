import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Lesson Name",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "about": "Explanation for this Lesson",
    "lesson": "assets/img/lessons/Q1lesson1.PNG",
    "quarter": "1",
  };
  defaultFormat: any = {
    "word": "Math word",
    "definition": "Math word definition",
    "sampleImage": "assets/img/lessons/Q1lesson1.PNG",
  };


  constructor() {
    let items = [
    //These are all the libraries for lessons

      //Quarter 1 Lessons 1-5
      {
        "category": "lesson",
        "name": "Place Value Through Millions",
        "about": "Lesson 1",
        "lesson": "assets/img/lessons/Q1_L1.jpg",
        "quarter": "1",
        "pdf":"q1l1",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Reading and Writing Whole Numbers",
        "about": "Lesson 2",
        "lesson": "assets/img/lessons/Q1_L2.jpg",
        "quarter": "1",
        "pdf":"q1l2",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Rounding Whole Numbers",
        "about": "Lesson 3",
        "lesson": "assets/img/lessons/Q1_L3.jpg",
        "quarter": "1",
        "pdf":"q1l3",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Order of Operations on Whole Numbers",
        "about": "Lesson 4",
        "lesson": "assets/img/lessons/Q1_L4.jpg",
        "quarter": "1",
        "pdf":"q1l4",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Solving Real-life Problems Involving Whole Numbers",
        "about": "Lesson 5",
        "lesson": "assets/img/lessons/Q1_L5.jpg",
        "quarter": "1",
        "pdf":"q1l5",
        "lessonCount":"5",
      },
      //Quarter 2 Lessons 1-3
      {
        "category": "lesson",
        "name": "Divisibility Rules",
        "about": "Lesson 1",
        "lesson": "assets/img/lessons/Q2_L1.jpg",
        "quarter": "2",
        "pdf":"q2l1",
        "lessonCount":"3",
      },
      {
        "category": "lesson",
        "name": "Greatest Common Factor",
        "about": "Lesson 2",
        "lesson": "assets/img/lessons/Q2_L2.jpg",
        "quarter": "2",
        "pdf":"q2l2",
        "lessonCount":"3",
      },
      {
        "category": "lesson",
        "name": "Least Common Multiples",
        "about": "Lesson 3",
        "lesson": "assets/img/lessons/Q2_L3.jpg",
        "quarter": "2",
        "pdf":"q2l3",
        "lessonCount":"3",
      },
      //Quarter 3 Lessons 1-4
      {
        "category": "lesson",
        "name": "Adding Fractions and Mixed Numbers",
        "about": "Lesson 1",
        "lesson": "assets/img/lessons/Q3_L1.jpg",
        "quarter": "3",
        "pdf":"q3l1",
        "lessonCount":"4",
      },
      {
        "category": "lesson",
        "name": "Subtracting Fractions and Mixed Numbers",
        "about": "Lesson 2",
        "lesson": "assets/img/lessons/Q3_L2.jpg",
        "quarter": "3",
        "pdf":"q3l2",
        "lessonCount":"4",
      },
      {
        "category": "lesson",
        "name": "Multiplying Fractions and Whole Numbers",
        "about": "Lesson 3",
        "lesson": "assets/img/lessons/Q3_L3.jpg",
        "quarter": "3",
        "pdf":"q3l3",
        "lessonCount":"4",
      },
      {
        "category": "lesson",
        "name": "Dividing Fractions and Whole Numbers",
        "about": "Lesson 4",
        "lesson": "assets/img/lessons/Q3_L4.jpg",
        "quarter": "3",
        "pdf":"q3l4",
        "lessonCount":"4",
      },
      //Quarter 4 Lessons 1-5
      {
        "category": "lesson",
        "name": "Placing Value through Ten Thousandths",
        "about": "Lesson 1",
        "lesson": "assets/img/lessons/Q4_L1.jpg",
        "quarter": "4",
        "pdf":"q4l1",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Reading and Writing Decimals",
        "about": "Lesson 2",
        "lesson": "assets/img/lessons/Q4_L2.jpg",
        "quarter": "4",
        "pdf":"q4l2",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Rounding Decimals",
        "about": "Lesson 3",
        "lesson": "assets/img/lessons/Q4_L3.jpg",
        "quarter": "4",
        "pdf":"q4l3",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Comparing Decimals",
        "about": "Lesson 4",
        "lesson": "assets/img/lessons/Q4_L4.jpg",
        "quarter": "4",
        "pdf":"q4l4",
        "lessonCount":"5",
      },
      {
        "category": "lesson",
        "name": "Adding and Subtracting Decimals through Thousandths",
        "about": "Lesson 5",
        "lesson": "assets/img/lessons/Q4_L5.jpg",
        "quarter": "4",
        "pdf":"q4l5",
        "lessonCount":"5",
      },

      //Quarter 5 Lessons 1-7
      {
        "category": "lesson",
        "name": "Introduction to Ratio",
        "about": "Lesson 1",
        "lesson": "assets/img/lessons/Q5_L1.jpg",
        "quarter": "5",
        "pdf":"q5l1",
        "lessonCount":"7",
      },
      {
        "category": "lesson",
        "name": "Ratio in Simplest Form",
        "about": "Lesson 2",
        "lesson": "assets/img/lessons/Q5_L2.jpg",
        "quarter": "5",
        "pdf":"q5l2",
        "lessonCount":"7",
      },
      {
        "category": "lesson",
        "name": "Equivalent Ratios",
        "about": "Lesson 3",
        "lesson": "assets/img/lessons/Q5_L3.jpg",
        "quarter": "5",
        "pdf":"q5l3",
        "lessonCount":"7",
      },
      {
        "category": "lesson",
        "name": "Proportion",
        "about": "Lesson 4",
        "lesson": "assets/img/lessons/Q5_L4.jpg",
        "quarter": "5",
        "pdf":"q5l4",
        "lessonCount":"7",
      },
      {
        "category": "lesson",
        "name": "Direct Proportion",
        "about": "Lesson 5",
        "lesson": "assets/img/lessons/Q5_L5.jpg",
        "quarter": "5",
        "pdf":"q5l5",
        "lessonCount":"7",
      },
      {
        "category": "lesson",
        "name": "Percent",
        "about": "Lesson 6",
        "lesson": "assets/img/lessons/Q5_L6.jpg",
        "quarter": "5",
        "pdf":"q5l6",
        "lessonCount":"7",
      },
      {
        "category": "lesson",
        "name": "Percent, Fraction and Decimal",
        "about": "Lesson 7",
        "lesson": "assets/img/lessons/Q5_L7.jpg",
        "quarter": "5",
        "pdf":"q5l7",
        "lessonCount":"7",
      },

      //Library for Mathtionary

      //------A---------
      {
        "category":"math",
        "word": "acute angle",///
        "definition": "An angle with measure between zero degrees and 90 degrees",
        "sampleImage": "assets/img/term-img/acuteangle.jpg",
      },
      {
        "category":"math",
        "word": "acute triangle",///
        "definition": "Triangle with all interior angles measuring less than 90 degrees.",
        "sampleImage": "assets/img/term-img/acutetriangle.jpg",
      },
      {
        "category":"math",
        "word": "addend",//
        "definition": "A number used in the mathematical operation of addition (e.g., 6 + 8 = 14, 6 and 8 are addends).",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "addition",
        "definition": "A mathematical operation that combines two or more numbers to calculate a sum.",
        "sampleImage": "assets/img/term-img/Addition.png",
      },
      {
        "category":"math",
        "word": "additive inverse ",///
        "definition": "A number is what you add to a number to create the sum of zero. So in other words, the additive inverse of x is another number, y, as long as the sum of x + y equals zero. The additive inverse of x is equal and opposite in sign to it (so, y = -xor vice versa). ",
        "sampleImage": "assets/img/term-img/Additive-inverse.png",
      },
      {
        "category": "math",
        "word": "adjacent angle",
        "definition": "Two angles <AOC and <COB, with a common side OC, are adjacent angles if C is in the interior of < AOB.",
        "sampleImage": "assets/img/term-img/adjacent-angle.jpg",
      },
      {
        "category": "math",
        "word": "arc",
        "definition": "are named by their endpoints. The blue arc above would be called ‘arc AB’. or ‘arc BA’, the order of the endpoints does not matter.",
        "sampleImage": "assets/img/term-img/Arc.gif",
      },
      {
        "category": "math",
        "word": "area",
        "definition": "A flat, or plane figure is the number of unit squares that can be contained within it. The unit square is usually some standard unit, like a square meter, a square foot, or a square inch",
        "sampleImage": "assets/img/term-img/Area.gif",
      },
      //------B---------
      {
        "category":"math",
        "word": "bar graph ",
        "definition": "A representation of the length of either vertical or horizontal bars used to enumerate and compare data. ",
        "sampleImage": "assets/img/term-img/bar-graph.png",
      },
      {
        "category":"math",
        "word": "benchmark",
        "definition": "A commonly known point of reference from which measurements may be made (e.g., four quarters make a whole). ",
        "sampleImage": "assets/img/term-img/benchmark.jpg",
      },
      {
        "category":"math",
        "word": "benchmark fraction",
        "definition": "A commonly known fraction that serves as a meaningful reference point for measurement comparison. ",
        "sampleImage": "assets/img/term-img/benchmark-fractions.jpg",
      },
      {
        "category": "math",
        "word": "bundling/unbundling",
        "definition": "Putting smaller units together (or apart) to make a larger (smaller) one, example; putting 10 ones together to make a ten or 10 tens together to make a hundred.",
        "sampleImage": "assets/img/term-img/Bundling-and-unbundling-bundles-of-4.png",
      },
      //------C---------
      {
        "category":"math",
        "word": "capacity",
        "definition": "The amount of space in units or cubes that can fit into a solid(Note: also referred to as volume.).",
        "sampleImage": "assets/img/term-img/capacity.png",
      },
      {
        "category":"math",
        "word": "centimeter ",
        "definition": "Unit of measurement.",
        "sampleImage": "assets/img/term-img/centimeter.jpg",
      },
      {
        "category":"math",
        "word": "circle",
        "definition": "A set of points in a plane that are equidistant from a given point, called the center. ",
        "sampleImage": "assets/img/term-img/circle.png",
      },
      {
        "category": "math",
        "word": "collinear",
        "definition": "Three or more points that lie on the same line.",
        "sampleImage": "assets/img/term-img/collinear.png",
      },
      {
        "category": "math",
        "word": "common denominator",
        "definition": "A number divisible by all of the denominators in a set of fractions.",
        "sampleImage": "assets/img/term-img/common-denominator.png",
      },
      {
        "category": "math",
        "word": "common factor",
        "definition": "A whole number that divides without remainder into two or more non-zero numbers.",
        "sampleImage": "assets/img/term-img/common-factor.png",
      },
      {
        "category": "math",
        "word": "common multiple",
        "definition": "A whole-number multiple of two or more given numbers (e.g., 48 is a common multiple of 2, 3 and 4).",
        "sampleImage": "assets/img/term-img/common-multiple.gif",
      },
      {
        "category": "math",
        "word": "complementary angles",
        "definition": "Any two angles whose measures have a sum of 90 degrees.",
        "sampleImage": "assets/img/term-img/complimentaryangle.jpg",
      },
      {
        "category": "math",
        "word": "cube",
        "definition": "Is a number multiplied by itself three times It is also a three-dimensional shape where each of the six sides is a square.",
        "sampleImage": "assets/img/term-img/cube.png",
      },
      {
        "category": "math",
        "word": "cube root",
        "definition": "Is the number that multiplies by itself three times in order to create a cubic value. That was a bit of a mouthful.  Example: 3 × 3 × 3 = 27, so the cube root of 27 is 3. ",
        "sampleImage": "assets/img/term-img/cube-root.png",
      },
      //------D---------
      {
        "category":"math",
        "word": "data",
        "definition": "Quantitative and / or qualitative information within a context gathered through observation, questioning and / or measurement. ",
        "sampleImage": "assets/img/term-img/data.png",
      },
      {
        "category":"math",
        "word": "data set",
        "definition": "A defined group of quantitative and/or qualitative information within a context gathered through observations, questioning and/or measurement.",
        "sampleImage": "assets/img/term-img/dataset.png",
      },
      {
        "category":"math",
        "word": "decimal fraction",
        "definition": "A proper fraction whose denominator is a power of 10.",
        "sampleImage": "assets/img/term-img/decimal-fraction.jpg",
      },
      //------E---------
      {
        "category":"math",
        "word": "equal",
        "definition": "A term that indicates the same amount, measure or quantity as another amount, measure or quantity.",
        "sampleImage": "assets/img/term-img/equal.gif",
      },
      {
        "category": "math",
        "word": "equation",
        "definition": "A mathematical statement divided by an equal symbol that states the two values or expressions have the same value.",
        "sampleImage": "assets/img/term-img/equation.png",
      },
      {
        "category": "math",
        "word": "equilateral triangle",
        "definition": "A triangle with three equal sides.",
        "sampleImage": "assets/img/term-img/equilateraltriangle.jpg",
      },
      {
        "category": "math",
        "word": "equivalent",
        "definition": "Two expressions or statements that always have the same truth value.",
        "sampleImage": "assets/img/term-img/equivalent.gif",
      },
      {
        "category": "math",
        "word": "exponent",
        "definition": "A number placed to the right and above (superscript) a non-zero base that indicates the operation of repeated multiplication.",
        "sampleImage": "assets/img/term-img/exponent.png",
      },
      {
        "category": "math",
        "word": "exponential form",
        "definition": "A mathematical representation of a term raised to a power.",
        "sampleImage": "assets/img/term-img/exponential-form.jpg",
      },
      {
        "category": "math",
        "word": "expression",
        "definition": "A mathematical phrase containing one or more terms linked by operation symbols.",
        "sampleImage": "assets/img/term-img/expression.jpg",
      },
      //------F---------
      {
        "category":"math",
        "word": "factor",
        "definition": "Noun: the value that can be divided into another value with no remainder. Verb: rewrite a number or polynomial as a product of numbers, simpler polynomials, or of polynomials and monomials.",
        "sampleImage": "assets/img/term-img/factor.png",
      },
      {
        "category": "math",
        "word": "fluency", // 
        "definition": "The efficient automatic recall of addition, subtraction, multiplication and division facts; the efficient and automatic recall and use of standard algorithms for addition, subtraction, multiplication and division.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "formula",
        "definition": "A general mathematical equation that relates two or more terms or values.",
        "sampleImage": "assets/img/term-img/formula.png",
      },
      {
        "category": "math",
        "word": "fraction",
        "definition": "A number written in the form of a ratio where the top number is referred to as the numerator and the bottom number is referred to as the denominator.",
        "sampleImage": "assets/img/term-img/fraction.png",
      },
      {
        "category": "math",
        "word": "fractional part or unit",
        "definition": "A part of a whole or a part of a group.",
        "sampleImage": "assets/img/term-img/fractional-part or-unit.png",
      },
      //-------G---------
      {
        "category": "math",
        "word": "geometric solid",
        "definition": "A three-dimensional shape bounded by surfaces (e.g., rectangular prism, pyramid, cylinder, cone, and sphere).",
        "sampleImage": "assets/img/term-img/Gepmetric-solid.jpg",
      },
      {
        "category": "math",
        "word": "gram",
        "definition": "Unit of measure for weight.",
        "sampleImage": "assets/img/term-img/gram.gif",
      },
      //-------H---------
      {
        "category": "math",
        "word": "halfway",
        "definition": "With reference to a number line, the midpoint between two numbers.",
        "sampleImage": "assets/img/term-img/halfway.jpg",
      },
      {
        "category": "math",
        "word": "hash mark",
        "definition": "The marks on a ruler or other measurement tool.",
        "sampleImage": "assets/img/term-img/Hashmarks.png",
      },
      {
        "category": "math",
        "word": "height",
        "definition": "A perpendicular segment from a base to a vertex, or between bases (note: also called altitude).",
        "sampleImage": "assets/img/term-img/Height.png",
      },
      {
        "category": "math",
        "word": "hexagon",
        "definition": "A polygon with six sides.",
        "sampleImage": "assets/img/term-img/Hexagon.jpg",
      },
      {
        "category": "math",
        "word": "horizontal",
        "definition": "Parallel to or in the plane of the horizon; in a coordinate grid, the x-axis is a horizontal line.",
        "sampleImage": "assets/img/term-img/horizontal.png",
      },

      //-------I---------
      {
        "category": "math",
        "word": "improper fraction",
        "definition": "A fraction in which the numerator is greater than the denominator.",
        "sampleImage": "assets/img/term-img/improper-fraction.png",
      },
      {
        "category": "math",
        "word": "inequality", //
        "definition": "A statement relating two or more quantities or values that are not equal using words or symbols (≠, <, >, <, >).",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "interval",
        "definition": "A set of numbers or values between and, in some cases, including two given values.",
        "sampleImage": "assets/img/term-img/interval.jpg",
      },
      {
        "category": "math",
        "word": "isosceles triangle", //--
        "definition": "A triangle that has two or more congruent sides. (Note: equilateral triangles are a subset of isosceles triangles.)",
        "sampleImage": "assets/img/term-img/isoscelestriangle.jpg",
      },

      //-------J---------

      //-------K---------
      {
        "category": "math",
        "word": "kilogram",//
        "definition": "Unit of measure for mass.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "kilometer",
        "definition": "Unit of measure for length.",
        "sampleImage": "assets/img/term-img/kilometer.jpg",
      },
      {
        "category": "math",
        "word": "kite",
        "definition": "A quadrilateral with two distinct pairs of congruent adjacent sides and no congruent opposite sides.",
        "sampleImage": "assets/img/term-img/kite.jpg",
      },

      //-------L---------
      {
        "category": "math",
        "word": "length",
        "definition": "Distance measurement from end to end; in a rectangular shape, length can be used to describe any of the four sides.",
        "sampleImage": "assets/img/term-img/length.gif",
      },
      {
        "category": "math",
        "word": "line",
        "definition": "A straight set of points that extends infinitely in opposite directions. (Note: this is an undefined term in Euclidean geometry.)",
        "sampleImage": "assets/img/term-img/line.png",
      },
      {
        "category": "math",
        "word": "line graph",
        "definition": "A representation used to show change over an interval, with the data points connected by line segments.",
        "sampleImage": "assets/img/term-img/Line-graph.png",
      },
      {
        "category": "math",
        "word": "linear expression",
        "definition": "A collection of numbers, symbols, operations, and two or fewer variables with a degree of one.",
        "sampleImage": "assets/img/term-img/Linear-Expression.gif",
      },
      {
        "category": "math",
        "word": "liter (L)",
        "definition": "A metric unit of capacity that is equal to the volume of a cube that measures 10 centimeters on a side.",
        "sampleImage": "assets/img/term-img/Liter.gif",
      },

      //-------M---------
      {
        "category": "math",
        "word": "mass",//
        "definition": "The amount of matter that a body contains.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "mean",
        "definition": "A measure of center where the sum of a set of numbers is divided by the number of elements in the set. (Also referred to as the average.)",
        "sampleImage": "assets/img/term-img/mean.gif",
      },
      {
        "category": "math",
        "word": "median",
        "definition": "A measure of center that identifies a value such that half the data is above the value and half the data is below the value when the data is listed in order.",
        "sampleImage": "assets/img/term-img/Median.jpg",
      },
      {
        "category": "math",
        "word": "meter",
        "definition": "Unit of measurement.",
        "sampleImage": "assets/img/term-img/Meter.jpg",
      },
      {
        "category": "math",
        "word": "metric system of measurement",//
        "definition": "A measurement system based on the base-ten numeration system (e.g., meter, liter, gram).",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "milliliter",
        "definition": "Unit of measure for liquid volume.",
        "sampleImage": "assets/img/term-img/Milliliter.jpg",
      },
      {
        "category": "math",
        "word": "millimeter",
        "definition": "A metric unit of length equal to one thousandth of a meter.",
        "sampleImage": "assets/img/term-img/millimeter.gif",
      },
      {
        "category": "math",
        "word": "mixed number",
        "definition": "A number represented by a whole number next to a fraction, and is equal to the sum of the whole number and the fraction.",
        "sampleImage": "assets/img/term-img/Mixednumber.png",
      },
      {
        "category": "math",
        "word": "mixed units",//
        "definition": "Example, three meters, 43 centimeters.",
        "sampleImage": "assets/img/term-img/Mode.png",
      },
      {
        "category": "math",
        "word": "mode",
        "definition": "A measure of center that is the value or values that occur(s) most frequently in a given set of numbers.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "multiple of a number",
        "definition": "A number into which a given number may be divided with no remainder",
        "sampleImage": "assets/img/term-img/Multiple-of-a-number.png",
      },
      {
        "category": "math",
        "word": "multiplication",
        "definition": "The operation of repeated addition.",
        "sampleImage": "assets/img/term-img/multiplication.png",
      },
      {
        "category": "math",
        "word": "multiplier",
        "definition": "The factor representing the number of units.",
        "sampleImage": "assets/img/term-img/Multiplier.jpg",
      },

      //-------N---------
      {
        "category": "math",
        "word": "number sentence",//
        "definition": "Example, 2 + 1 = 3 or 3 = 2 + 1",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "numerator",//
        "definition": "The number of equal parts of a total number of parts in a fraction; it is found above the fraction bar(e.g., 4 in the fraction 4/7).",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "numerical expression",
        "definition": "Any combination of constants, operators, and/or words that result in a number. (Note: also referred to as an arithmetic expression.)",
        "sampleImage": "assets/img/term-img/Numerical-Expression.jpg",
      },
      //-------O---------
      {
        "category": "math",
        "word": "obtuse angle",//--
        "definition": "An angle whose measure is greater than 90 degrees and less than 180 degrees.",
        "sampleImage": "assets/img/term-img/obtuseangle.jpg",
      },
      {
        "category": "math",
        "word": "obtuse triangle",//--
        "definition": "A triangle with an interior obtuse angle.",
        "sampleImage": "assets/img/term-img/obtusetriangle.jpg",
      },
      {
        "category": "math",
        "word": "odd number",
        "definition": "An integer that is not divisible by two.",
        "sampleImage": "assets/img/term-img/OddNumber.jpg",
      },
      {
        "category": "math",
        "word": "operation",
        "definition": "The process or execution of a specific rule on a set of numbers.",
        "sampleImage": "assets/img/term-img/Operation.jpg",
      },
      {
        "category": "math",
        "word": "ordered pair",//
        "definition": "A pair of numbers used to locate and describe points in the coordinate plane in the form (x, y).",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "ordinal number",
        "definition": "A whole number that names the position of an object in a set.",
        "sampleImage": "assets/img/term-img/ordinal-number.jpg",
      },
      //-------P---------
      {
        "category": "math",
        "word": "parallel lines",
        "definition": "Lines in the same plane that never intersect and are always equidistant.",
        "sampleImage": "assets/img/term-img/ParallelLines.jpg",
      },
      {
        "category": "math",
        "word": "percent",
        "definition": "A ratio that calculates the parts per hundred (e.g; 20% is 20 parts of 100).",
        "sampleImage": "assets/img/term-img/percent.png",
      },
      {
        "category": "math",
        "word": "perpendicular lines",
        "definition": "Two lines that intersect to form right angles.",
        "sampleImage": "assets/img/term-img/PerpendicularLines.png",
      },
      {
        "category": "math",
        "word": "place value",
        "definition": "The value of a numeral based on the position of each digit in the number.",
        "sampleImage": "assets/img/term-img/PlaceValue.png",
      },
      {
        "category": "math",
        "word": "point",
        "definition": "A location in space that has no dimension. (Note: this is an undefined term in Euclidean geometry.)",
        "sampleImage": "assets/img/term-img/point.png",
      },
      {
        "category": "math",
        "word": "polygon",
        "definition": "A closed two-dimensional figure made up of segments, which intersect only at the segment endpoints.",
        "sampleImage": "assets/img/term-img/polygon.png",
      },
      {
        "category": "math",
        "word": "prime factor",
        "definition": "All the factors of a quantity that are only divisible by the number one and itself (e.g; the prime factors of 42 are 7, 3 and 2).",
        "sampleImage": "assets/img/term-img/PrimeFactor.jpg",
      },
      {
        "category": "math",
        "word": "prime number",
        "definition": "A number that has exactly two different factors, one and itself.",
        "sampleImage": "assets/img/term-img/prime-numbers.jpg",
      },
      {
        "category": "math",
        "word": "probability",//
        "definition": "The measure of the likelihood of the occurrence of an event.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "product",
        "definition": "The result obtained when two or more quantities are multiplied.",
        "sampleImage": "assets/img/term-img/Product .png",
      },
      {
        "category": "math",
        "word": "proper fraction",
        "definition": "A fraction whose numerator is smaller than its denominator.",
        "sampleImage": "assets/img/term-img/Proper-Fraction.png",
      },
      {
        "category": "math",
        "word": "properties of equality",
        "definition": "Rules for producing equivalent expressions (e.g., identity, transitive, reflexive, addition property of equality, to name a few).",
        "sampleImage": "assets/img/term-img/Properties-of-Equality.jpg",
      },
      //-------Q---------
      {
        "category": "math",
        "word": "quadrilateral",
        "definition": "A polygon with four sides.",
        "sampleImage": "assets/img/term-img/Quadrilateral.png",
      },
      {
        "category": "math",
        "word": "quotient",
        "definition": "The answer to a division problem.",
        "sampleImage": "assets/img/term-img/Quotient.jpg",
      },
      //-------R---------
      {
        "category": "math",
        "word": "ratio",
        "definition": "A comparison of two quantities by division that can be expressed",
        "sampleImage": "assets/img/term-img/ratio.jpg",
      },
      {
        "category": "math",
        "word": "reflex angle",
        "definition": "An angle that is greater than 180° and less than 360°.",
        "sampleImage": "assets/img/term-img/Reflex-Angle.png",
      },
      {
        "category": "math",
        "word": "remainder",
        "definition": "The number left over when an integer is divided by another.",
        "sampleImage": "assets/img/term-img/remainder.gif",
      },
      {
        "category": "math",
        "word": "right angle",//--
        "definition": "An angle whose measure is 90°.",
        "sampleImage": "assets/img/term-img/rightangle.jpg",
      },
      {
        "category": "math",
        "word": "right triangle",//--
        "definition": "A triangle that contains a right angle.",
        "sampleImage": "assets/img/term-img/righttriangle.jpg",
      },
      //-------S---------
      {
        "category": "math",
        "word": "scalene triangle",//--
        "definition": "A triangle with no congruent sides.",
        "sampleImage": "assets/img/term-img/scalenetriangle.jpg",
      },
      {
        "category": "math",
        "word": "scientific notation",
        "definition": "A representation of a very large or very small number expressed as the product of a power of 10, and a decimal number greater than or equal to one and less than 10.",
        "sampleImage": "assets/img/term-img/ScientificNotation.png",
      },
      {
        "category": "math",
        "word": "simplest form",
        "definition": "Fractional: a fraction that has no common factor for the numerator and denominator. Polynomial: an expression that has no common factors for all terms and no like terms Radical: there are no perfect square factors contained in the radicand and there are no like terms.",
        "sampleImage": "assets/img/term-img/SimplestForm.gif",
      },
      {
        "category": "math",
        "word": "standard notation",
        "definition": "A number written with one digit for each place value in a base ten numeric system.",
        "sampleImage": "assets/img/term-img/StandardNotation.png",
      },
      {
        "category": "math",
        "word": "subtraction",
        "definition": "A mathematical operation that calculates the difference between two numbers.",
        "sampleImage": "assets/img/term-img/subtraction.jpg",
      },
      {
        "category": "math",
        "word": "sum",
        "definition": "The result of addition.",
        "sampleImage": "assets/img/term-img/Sum.jpg",
      },
      {
        "category": "math",
        "word": "supplementary angles",//--
        "definition": "Two angles whose measures have a sum of 180",
        "sampleImage": "assets/img/term-img/supplementaryangle.jpg",
      },
      {
        "category": "math",
        "word": "symmetry",
        "definition": "A one-to-one correspondence in size, form and arrangement of parts, related to a plane, line or point.",
        "sampleImage": "assets/img/term-img/Symmetry.png",
      },
      //-------T---------
      {
        "category": "math",
        "word": "table of values",
        "definition": "A chart that organizes data (values) in rows and columns to illustrate facts and figures.",
        "sampleImage": "assets/img/term-img/TableofValues.jpg",
      },
      {
        "category": "math",
        "word": "triangle",//--
        "definition": "A polygon with three sides",
        "sampleImage": "assets/img/term-img/mathtionarypic/triangle.jpg",
      },
      //-------U---------
      {
        "category": "math",
        "word": "unit form",//
        "definition": "A single undivided entity or whole. The first position in a place-value counting system, representing a single-digit number: unit form counting states the amount of hundreds, tens, and ones in each number, example; 11 is stated to have 1 ten 1 one, 20 as 2 tens, 27 as 2 tens 7 ones, 100 as 1 hundred, and 146 as 1 hundred 4 tens 6 ones.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "unit fraction",
        "definition": "A fraction with a numerator of one; non-unit fractions are fractions with numerators other than 1.",
        "sampleImage": "assets/img/term-img/unit-fraction.jpg",
      },
      {
        "category": "math",
        "word": "unknown",
        "definition": "The missing number in a number sentence.",
        "sampleImage": "assets/img/term-img/Unknown.jpg",
      },
      //-------V---------
      {
        "category": "math",
        "word": "value",//
        "definition": "How much.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "variable",
        "definition": "A symbol that represents a quantity.",
        "sampleImage": "assets/img/term-img/variable.png",
      },
      {
        "category": "math",
        "word": "Venn diagram",
        "definition": "A representation that uses circles to show relationships between two or more sets.",
        "sampleImage": "assets/img/term-img/Venn-diagram.jpg",
      },
      {
        "category": "math",
        "word": "verify",//
        "definition": "The process of demonstrating or proving that a response is correct.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      {
        "category": "math",
        "word": "vertical",
        "definition": "At right angles to the plane of the horizon or to a horizontal axis.",
        "sampleImage": "assets/img/term-img/Vertical.png",
      },
      {
        "category": "math",
        "word": "volume",
        "definition": "The measure of the capacity of a three-dimensional figure (measured in cubic units).",
        "sampleImage": "assets/img/term-img/Volume.jpg",
      },
      //-------W---------
      {
        "category": "math",
        "word": "weight",
        "definition": "A measure of the heaviness of, or the force of gravity on, an object.",
        "sampleImage": "assets/img/term-img/weight.jpg",
      },
      {
        "category": "math",
        "word": "whole",
        "definition": "The entire object, collection of objects or quantity being considered.",
        "sampleImage": "assets/img/term-img/Whole.jpg",
      },
      {
        "category": "math",
        "word": "whole numbers",
        "definition": "The set of numbers consisting of the natural numbers and zero.",
        "sampleImage": "assets/img/term-img/Whole-Numbers.jpg",
      },
      {
        "category": "math",
        "word": "word form",//
        "definition": "Numbers written in words, example; 576 is five hundred seventy-six.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      //-------X---------
      //-------Y---------
      //-------Z---------
      {
        "category": "math",
        "word": "zero property",//
        "definition": "Addition: the mathematical rule stating that the sum of a term and zero is equal to the original term. Subtraction: the mathematical rule stating that the difference of a term and zero is equal to the original term. Multiplication: the mathematical rule stating that the product of a term and zero is zero. Division: the mathematical rule stating that division of a term by zero is undefined.",
        "sampleImage": "assets/img/term-img/placeholder.png",
      },
      
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }

    if (items["sampleImage"] == "#") {
        console.log("no image")
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
