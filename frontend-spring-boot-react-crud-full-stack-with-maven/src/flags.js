//import Rox from 'rox-react-native';
import Rox from 'rox-browser';

const Flags = {
	addFlag: new Rox.Flag(),
	adminControl: new Rox.Flag(),
	multiFlag: new Rox.Flag()
}

Rox.register('default', Flags);
Rox.setup('5d41ce5f2b1633417b3408a4', {
  syncCompletionHandler: function(a){
    console.log(a.targetGroups);
    console.log(a.experiments);
  },
  debugLevel: 'verbose'
});
export default Flags;