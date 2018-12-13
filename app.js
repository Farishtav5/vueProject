new Vue
({
	el:'#vue-app',
	data:
	{
		name:'Farishta',
	}
	methods:
	{
		greet:function(time)
		{
			return 'Good'+time;
		}
	}
})