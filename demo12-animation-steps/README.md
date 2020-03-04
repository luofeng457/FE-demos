1. 用法：`steps(n, <jumpterm>)`
	steps其实是一个分段的阶跃函数，n相当于单次动画的帧数，每帧动画的时间是均等的；`jumpterm`用于确定整个动画的每帧的起止位置；比如n=5时，可以为`0% 20% 40% 60% 80%`，可以为`20% 40% 60% 80% 100%`，还可以为`0% 25% 50% 75% 100%`等；具体的情况就是由参数`jumpterm`决定；
	`jumpterm`的常见取值包括：
	- `jump-start`：左连续函数，在起始位置阶跃；第一帧是已阶跃的位置，（n=5  ⇒  20% 40% 60% 80% 100%）
	- `jump-end`：右连续函数，在结束位置阶跃，右连续保证其可以和第一帧无缝连接，可以循环播放；第一帧为起始位置，（n=5  ⇒   0% 20% 40% 60% 80%）
	- `jump-none`：起止位置均无跳跃，（n=5  ⇒  0% 25% 50% 75% 100%）
	- `jump-both`：起止位置均有跳跃（n=5  ⇒ 16.6% 33.3% 50% 66.6% 83.3%）
	- `start`：同`jump-start`
	- `end`：同`jump-end`
很明显，可以根据属性名就可以区分它们的差异，是否`jump`以及在起始位置还是结束位置`jump`都已经指明；

具体参考https://blog.csdn.net/luofeng457/article/details/103349520