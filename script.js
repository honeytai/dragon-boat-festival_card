var g = function(id){
	return document.getElementById(id);
}

var Timeline = function(){
	this.order = [];
	this.add = function(timeout, func, log){
		this.order.push({
			timeout: timeout,
			func: func,
			log: log
		});
	}
	this.start = function(ff){
		for(s in this.order){
			(function(me){
				var fn = me.func;
				var timeout = me.timeout;
				var log = me.log;
				timeout = Math.max(timeout-(ff||0),0);

				setTimeout(fn,timeout);
				setTimeout(function(){
					console.log('time->',timeout,'log->',log);
				},timeout);
			})(this.order[s])
		}
	}
}
//初始化场景
var s1 = new Timeline();
//粽子展开的场景
var s2 = new Timeline();
//粽子旋转场景
var s3 = new Timeline();
//祝福字体的出现
var s4 = new Timeline();

s1.add(1, function(){
	g('c_zongzi_box').className = 'c_zongzi_box c_zongzi_box_rock';
	g('c_shengzi_1').onclick = function(){
		s2.start();
		g('c_shengzi_1').onclick = function(){

		}
	}
})
//定义粽子展开场景
s2.add(1,function(){
	g('c_zongzi_box').className = 'c_zongzi_box';
	
})
s2.add(500,function(){
	g('c_shengzi_1').className = 'c_shengzi_2';
})
s2.add(1000,function(){
	g('c_shengzi_1').className = 'c_shengzi_3';
})
s2.add(1500,function(){
	g('c_shengzi_1').className = 'c_shengzi_4';
})
s2.add(2000,function(){
	g('c_shengzi_1').className = 'c_shengzi_0';
})
s2.add(2500,function(){
	g('c_zongzi').className = 'c_zongzi c_zongzi_out';
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in';
	g('c_zuoye').className = 'c_zuoye c_zuoye_in';
	g('c_youye').className = 'c_youye c_youye_in';
	// g('c_t_1').className = 'c_t_1 c_t_in';
})
s2.add(3000,function(){
	g('c_zuoye').className = 'c_zuoye c_zuoye_in c_zuoye_out';
	g('c_youye').className = 'c_youye c_youye_in c_youye_out';
	g('c_diye').className = 'c_diye c_diye_in';
})
s2.add(3500,function(){
	g('text').className = 'text_in text';
})
s2.add(8000,function(){
	s3.start();
})

s3.add(1000,function(){
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in';
})
s3.add(1000,function(){
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_bite_0';
})
s3.add(2000,function(){
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_bite_1';
})
s3.add(3000,function(){
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_bite_2';
})
s3.add(4000,function(){
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_bite_3';
})
s3.add(5000,function(){
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_bite_4';
})
s3.add(6000,function(){
	g('c_zongzirou').className = 'c_zongzirou c_zongzirou_in c_zongzirou_bite_5';
	s4.start();

})
s4.add(1000,function(){
	g('c_t_1').className = 'c_t_1 c_t_in';
})
s4.add(1500,function(){
	g('c_t_1').className = 'c_t_1 c_t_in c_t_move_1';
})
s4.add(2500,function(){
	g('c_t_1').className = 'c_t_1 c_t_in c_t_move_2';
})
s4.add(3500,function(){
	g('c_t_1').className = 'c_t_1 c_t_out';
	g('c_t_2').className = 'c_t_2 c_t_in';
})
s4.add(4500,function(){
	g('c_t_2').className = 'c_t_2 c_t_in c_t_move_1';
})
s4.add(5500,function(){
	g('c_t_2').className = 'c_t_2 c_t_in c_t_move_2';
})
s4.add(6500,function(){
	g('c_t_2').className = 'c_t_2 c_t_out';
	g('c_t_3').className = 'c_t_3 c_t_in';
})
s4.add(7500,function(){
	g('c_t_3').className = 'c_t_3 c_t_in c_t_move_1';
})
s4.add(8500,function(){
	g('c_t_3').className = 'c_t_3 c_t_in c_t_move_2';
})
s4.add(9500,function(){
	g('c_t_3').className = 'c_t_3 c_t_out';
	s4.start();
})


s1.start();