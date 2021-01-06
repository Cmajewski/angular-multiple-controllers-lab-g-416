function ContactController(){
    this.name="Caitlin";
    this.email="test@gmail.com";
    this.phone="012-345-6789"

    var vm=this;

    this.changename=function(){
        vm.name="Something else!"
    }
}