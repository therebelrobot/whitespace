var desc = "Testing push, output of numbers 0 through 3";
Test.describe(desc, function () {
  var output1 = "   \t\n\t\n \t\n\n\n";
  var output2 = "   \t \n\t\n \t\n\n\n";
  var output3 = "   \t\t\n\t\n \t\n\n\n";
  var output0 = "    \n\t\n \t\n\n\n";

  Test.assertEquals(whitespace(output1), "1");
  Test.assertEquals(whitespace(output2), "2");
  Test.assertEquals(whitespace(output3), "3");
  Test.assertEquals(whitespace(output0), "0");
});

desc = "Testing ouput of numbers -1 through -3";
Test.describe(desc, function () {
  var outputNegative1 = "  \t\t\n\t\n \t\n\n\n";
  var outputNegative2 = "  \t\t \n\t\n \t\n\n\n";
  var outputNegative3 = "  \t\t\t\n\t\n \t\n\n\n";

  Test.assertEquals(whitespace(outputNegative1), "-1");
  Test.assertEquals(whitespace(outputNegative2), "-2");
  Test.assertEquals(whitespace(outputNegative3), "-3");
});

desc = "Testing simple flow control edge case";
Test.describe(desc, function () {
  desc = "Expecting exception for unclean termination";
  Test.expectError(desc, function () {
    whitespace("");
  });
});

desc = "Testing output of letters A through C";
Test.describe(desc, function () {
  var outputA = "   \t     \t\n\t\n  \n\n\n";
  var outputB = "   \t    \t \n\t\n  \n\n\n";
  var outputC = "   \t    \t\t\n\t\n  \n\n\n";

  Test.assertEquals(whitespace(outputA), "A");
  Test.assertEquals(whitespace(outputB), "B");
  Test.assertEquals(whitespace(outputC), "C");
});

desc = "Testing output of letters A through C with comments";
Test.describe(desc, function () {
  var outputA = "blahhhh   \targgggghhh     \t\n\t\n  \n\n\n";
  var outputB = " I heart \t  cats  \t \n\t\n  \n\n\n";
  var outputC = "   \t  welcome  \t\t\n\t\n to the\nnew\nworld\n";

  Test.assertEquals(whitespace(outputA), "A");
  Test.assertEquals(whitespace(outputB), "B");
  Test.assertEquals(whitespace(outputC), "C");
});

desc = "Testing stack functionality";
Test.describe(desc, function () {
  var pushTwice = "   \t\t\n   \t\t\n\t\n \t\t\n \t\n\n\n";
  var duplicate = "   \t\t\n \n \t\n \t\t\n \t\n\n\n";
  var duplicateN1 = "   \t\n   \t \n   \t\t\n \t  \t \n\t\n \t\n\n\n";
  var duplicateN2 = "   \t\n   \t \n   \t\t\n \t  \t\n\t\n \t\n\n\n";
  var duplicateN3 = "   \t\n   \t \n   \t\t\n \t   \n\t\n \t\n\n\n";
  var swap = "   \t\t\n   \t \n \n\t\t\n \t\t\n \t\n\n\n";
  var discard = "   \t\t\n   \t \n \n\t \n\n\t\n \t\n\n\n";
  var slide = "   \t\t\n   \t \n   \t\n   \t  \n   \t\t \n   \t \t\n   \t\t\t\n \n\t \t\n \t\t\n\t\n \t\t\n \t\t\n \t\t\n \t\n\n\n";

  Test.assertEquals(whitespace(pushTwice), "33");
  Test.assertEquals(whitespace(duplicate), "33");
  Test.assertEquals(whitespace(duplicateN1), "1");
  Test.assertEquals(whitespace(duplicateN2), "2");
  Test.assertEquals(whitespace(duplicateN3), "3");
  Test.assertEquals(whitespace(swap), "32");
  Test.assertEquals(whitespace(discard), "2");
  Test.assertEquals(whitespace(slide), "5123");
});
