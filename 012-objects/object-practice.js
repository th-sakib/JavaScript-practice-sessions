{
  const variable = {}; // an empty object
  const obj = {
    name: "sakib",
    age: 20,
  }; // an object with key-value pairs

  obj.name; // access a existing value with key
  obj.name = "Thamidul"; // modify existing value
  obj.newItem = "new item";
  obj["Item with special character"] = "mah";
  delete obj["Item with special character"];
  delete obj.newItem;
  // delete obj["newItem"]
  // console.log(obj["age"]);

  const keyName = "age";
  obj[keyName]; // obj.keyname | wouldn't work
}
{
  // using existing variable as key
  const key = "name";
  const obj = {
    [key]: "sakib",
  };
  // console.log(obj);
}
