**本项目 是一款科技产品首发与体验，测评平台，由各科技迷共同开发与维护。底层基于高性能nodejs驱动开发**
>>平台架构 由：sailsjs+ mongodb 
	sailsjs 项目主页：http://sailsjs.org


前端：angel-fund

后端：zac

##系统功能

**用户系统**
用户角色：平台，投资人，项目供应商

**产品录入系统**
字段：

##参与开发准备工作

github 多人协作开发指南：
现有分支名：

>>origin/angel-fund //
  origin/master	//主分支
  origin/zac   //后端负责主导分支

	1：新建自己的本地分支 git命令  git branch 新分支名字 
 分支名规则'github帐号  _（server或Client）' 例如：'zac_server'(server表示后端组，Client表示前段组)
	2：发布到远程分支 git push origin  新分支名字
	
配合相关组开发 如进行后端开发 那么拉取 origin/zac 分支到本地
拉取远程分支到本地 git checkout  -b zac origin/zac

3：然后切换自己的分支 git checkout 自己的分支名
4：合并相关组分支  git merge zac

前后端负责人，定期合并各自相关组人的分支（各自负责人 负责本组人的需求开发）

项目统筹人 定期和并 前后端分支；








