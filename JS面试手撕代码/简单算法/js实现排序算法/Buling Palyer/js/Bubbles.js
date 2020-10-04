/**
 * JavaScript Bubbles
 *  By EtherDream 2010
 */
+function()
{
	//
	// 娴忚鍣ㄨ緟鍔�
	//
	var _VER_ = navigator.userAgent;
	var _FF_ = /Firefox/.test(_VER_);
	var _IE6_ = /IE 6/.test(_VER_);

	var W3C = !!window.addEventListener;


	try{document.execCommand("BackgroundImageCache", false, true)}catch(e){}


	//
	// 甯搁噺
	//
	var R = 111;				//娉℃场鍗婂緞

	var POW_RATE = 0.001;		//琛ュ伩姒傜巼
	var POW_MIN = 0.1;			//琛ュ伩鑼冨洿(鍩轰簬璇炵敓閫熷害)
	var POW_MAX = 0.3;

	var START_X_MIN = 8;		//X鏂瑰悜璇炵敓閫熷害鑼冨洿
	var START_X_MAX = 12;
	var START_Y_MIN = 6;		//Y鏂瑰悜璇炵敓閫熷害鑼冨洿
	var START_Y_MAX = 8;

	var D2 = 4 * R * R;			//鍦嗗績璺濈^2鐨勮寖鍥�.灏忎簬鏈€灏忓€煎垯杩涘叆閲嶅彔鐘舵€�

	var rnd = Math.random;


	var arrBubs = [];
	var iBottom;
	var iRight;


	//function Init()
	//{
		if(W3C)
			document.addEventListener("resize", handleResize, false);
		else
			window.attachEvent("onresize", handleResize);

		handleResize();
		Timer(render, 17);
	//}


	function Timer(call, time)
	{
		var last = +new Date;
		var delay = 0;

		return setInterval(function()
		{
			// 鏃堕棿宸疮璁�
			var cur = +new Date;
			delay += (cur - last);
			last = cur;

			// 璁＄畻甯ф暟
			if(delay >= time)
			{
				call();
				delay %= time;
			}
		}, 1);
	}

	function render()
	{
		var i, objBub;

		for(i=0,n=arrBubs.length; i<n; i++)
		{
			objBub = arrBubs[i];
			objBub.update();

			//
			// 涓€瀹氬嚑鐜囩粰浜堥澶栬ˉ鍋�
			//
			//if(rnd() < POW_RATE)
			//	objBub.speedUp(POW_MIN + rnd() * (POW_MAX - POW_MIN));
		}
	}

	function handleResize()
	{
		iRight = document.documentElement.clientWidth - 2 * R;
		iBottom = document.documentElement.clientHeight - 2 * R;
	}

	window.CreateBubble = function()
	{
		var obj = new Bubble();

		obj.shot(START_X_MIN + rnd() * (START_X_MAX - START_X_MIN),
				 START_Y_MIN + rnd() * (START_Y_MAX - START_Y_MIN));

		arrBubs.push(obj);
	};

	var T = 0;

	/******************************
	 * 绫�: Bubble
	 * 璇存槑: 鍗曚釜娉℃场
	 ******************************/
	function Bubble()
	{
		var APLHA = 0.8;
		var POW = [1, APLHA, APLHA*APLHA];
		var kOpa = [];
		var kStp = [];
		var arrFlt = [];

		var id = T++;
		var x = 0, y = 0;
		var vx = 0, vy = 0;
		var arrD2 = [];

		var vx_def, vy_def;
		var styBox;
		var output;

		var round = Math.round;
		var abs = Math.abs;
		var sin = Math.sin;
		var rnd = Math.random;


		function Init()
		{
			var oBox = document.createElement("div");
			styBox = oBox.style;

			document.body.appendChild(oBox);

			styBox.position = "absolute";
			styBox.width = R * 2 + "px";
			styBox.height = R * 2 + "px";

			for(var i=0; i<4; i++)
			{
				var div = document.createElement("div");
				var sty = div.style;

				sty.position = "absolute";
				sty.width = "222px";
				sty.height = "222px";

				oBox.appendChild(div);

				// 娉℃场椤跺眰
				if(i == 3)
				{
					if(_IE6_)
						sty.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=http://www.zzsky.cn/effect/images/201110/302230/heart.png)";
					else
						sty.backgroundImage = "url(http://www.zzsky.cn/effect/images/201110/302230/heart.png)";

					//output = div;
					break;
				}

				kOpa[i] = 3 * rnd();
				kStp[i] = 0.02 * rnd();

				if(W3C)
				{
					sty.backgroundImage = "url(http://www.zzsky.cn/effect/images/201110/302230/ch" + i + ".png)";
					arrFlt[i] = sty;
				}
				else
				{
					sty.filter = "alpha progid:DXImageTransform.Microsoft.AlphaImageLoader(src=http://www.zzsky.cn/effect/images/201110/302230/ch" + i + ".png)";
					arrFlt[i] = div.filters.alpha;
				}
			}
		}

		function updateColor()
		{
			var i, v;

			for(i=0; i<3; i++)
			{
				v = abs(sin(kOpa[i] += kStp[i] * rnd()));
				v *= POW[i];

				v = ((v * 1e4) >> 0) / 1e4;
				arrFlt[i].opacity = W3C? v : v*100;
			}
		}

		function shot(_vx, _vy)
		{
			vx_def = _vx;
			vy_def = _vy;

			vx = _vx;
			vy = _vy;
		}

		function getPos()
		{
			return {x:x, y:y};
		}

		function getSpeed()
		{
			return {vx:vx, vy:vy};
		}

		function setSpeed(_vx, _vy)
		{
			vx = _vx;
			vy = _vy;
		}

		function speedUp(rate)
		{
			var r = vy / vx;

			vx = vx_def * rate;
			vy = vx * r;
		}

		function getID()
		{
			return id;
		}

		function update()
		{
			x += vx;		//绉诲姩
			y += vy;

			//
			// 杈圭晫纰版挒
			//
			if(x >= iRight)
			{
				vx = -vx;
				x = iRight;
			}
			else if(x <= 0)
			{
				vx = -vx;
				x = 0;
			}

			if(y >= iBottom)
			{
				vy = -vy;
				y = iBottom;
			}
			else if(y <= 0)
			{
				vy = -vy;
				y = 0;
			}

			//
			// 娉℃场纰版挒
			//
			var i, p;
			for(i=0,n=arrBubs.length; i<n; i++)
			{
				bub = arrBubs[i];

				if(bub == this)
					continue;

				p = bub.getPos();
				var dx = p.x - x;
				var dy = p.y - y;

				var dx2 = dx * dx;
				var dy2 = dy * dy;
				var d2 = dx2 + dy2;

				var tid = bub.getID();
				var preD2 = arrD2[tid];
				arrD2[tid] = d2;

				if(d2 > D2)	
					continue;

				if(d2 > preD2)
					continue;

				//
				// 纰版挒璁＄畻
				//
				p = bub.getSpeed();

				var Vx = p.vx;
				var Vy = p.vy;

				var z1 = (Vy - vy) * dx * dy;
				var z2 = (Vx - vx) * dx * dy;

				// 褰撳墠娉℃场 鏂伴€熷害
				vx = (vx * dy2 + Vx * dx2 + z1) / d2;
				vy = (vy * dx2 + Vy * dy2 + z2) / d2;

				// 琚挒娉℃场 鏂伴€熷害
				bub.setSpeed(
					(vx * dx2 + Vx * dy2 - z1) / d2, 
					(vy * dy2 + Vy * dx2 - z2) / d2);
			}

			if(_FF_)
			{
				styBox.left = round(x) + "px";
				styBox.top = round(y) + "px";
			}
			else
			{
				styBox.pixelLeft = round(x);
				styBox.pixelTop = round(y);
			}

			updateColor();
		}

		this.shot = shot;
		this.update = update;
		this.speedUp = speedUp;
		this.getSpeed = getSpeed;
		this.setSpeed = setSpeed;
		this.getPos = getPos;
		this.getID = getID;

		Init();
	}

}();