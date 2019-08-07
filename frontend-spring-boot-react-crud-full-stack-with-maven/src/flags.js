import Rox from 'rox-browser';

const Flags = {
	addFlag: new Rox.Flag(),
	adminControl: new Rox.Flag()
}

Rox.register('default', Flags);
Rox.setup('INSERT ROLLOUT KEY HERE', {
  syncCompletionHandler: function(a){
    console.log(a.targetGroups);
    console.log(a.experiments);
  },
  debugLevel: 'verbose'
});
export default Flags;
