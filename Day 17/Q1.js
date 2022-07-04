//  Given a valid (IPv4) IP `address`, return a defanged version of that IP address.

//  A *defanged IP address* replaces every period `"."` with `"[.]"`.

const getDeganged = (address) => {
  return address.split(".").join("[.]");
};

console.log(getDeganged("255.100.50.0"));
