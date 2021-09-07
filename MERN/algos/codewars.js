function getMiddle(s)
{
  if (s.length % 2 == 1){
    return s[Math.ceil(s.length/2)];
  }
  else {
    output ="";
    output += s[s.length/2 - 1];
    output += s[s.length/2];
    return output
  }
}

console.log(getMiddle("test"))