function Foo() {
    // Private function Qux
    const Qux = () => {
      console.log("Qux function is called.");
    };

    // Public method Bar
    this.Bar = () => {
      console.log("Bar function is called.");
      Qux(); // Call the private function Qux from inside Bar
    };
  }

  // Create instances of Foo
  const fooInstance1 = new Foo();
  const fooInstance2 = new Foo();

  // Call the public method Bar on instances
  fooInstance1.Bar(); // This will call both Bar and Qux
  fooInstance2.Bar(); // This will call both Bar and Qux
