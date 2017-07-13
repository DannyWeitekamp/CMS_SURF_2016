Search.setIndex({docnames:["CMS_Deep_Learning.preprocessing","index","io","layers","postprocessing","postprocessing_example","preprocessing","storage","utils"],envversion:52,filenames:["CMS_Deep_Learning.preprocessing.rst","index.rst","io.rst","layers.rst","postprocessing.rst","postprocessing_example.rst","preprocessing.rst","storage.rst","utils.rst"],objects:{"CMS_Deep_Learning.io":{DataIterator:[2,1,1,""],TrialIterator:[2,1,1,""],flatten:[2,3,1,""],gen_from_data:[2,3,1,""],get_sizes_meta_dict:[2,3,1,""],load_hdf5_dataset:[2,3,1,""],nb_samples_from_h5:[2,3,1,""],restructure:[2,3,1,""],retrieve_data:[2,3,1,""],simple_grab:[2,3,1,""],size_from_meta:[2,3,1,""]},"CMS_Deep_Learning.io.DataIterator":{as_list:[2,2,1,""],length:[2,2,1,""],next:[2,2,1,""]},"CMS_Deep_Learning.layers":{lorentz:[3,0,0,"-"],slice:[3,0,0,"-"]},"CMS_Deep_Learning.layers.lorentz":{Lorentz:[3,1,1,""]},"CMS_Deep_Learning.layers.lorentz.Lorentz":{build:[3,2,1,""],call:[3,2,1,""],get_config:[3,2,1,""],get_output_shape_for:[3,2,1,""]},"CMS_Deep_Learning.layers.slice":{Slice:[3,1,1,""]},"CMS_Deep_Learning.layers.slice.Slice":{call:[3,2,1,""],get_config:[3,2,1,""],get_output_shape_for:[3,2,1,""]},"CMS_Deep_Learning.postprocessing":{colors:[4,0,0,"-"],metrics:[4,0,0,"-"],plot:[4,0,0,"-"]},"CMS_Deep_Learning.postprocessing.colors":{resolveColors:[4,3,1,""]},"CMS_Deep_Learning.postprocessing.metrics":{bin_metric_vs_char:[4,3,1,""],get_roc_data:[4,3,1,""],get_roc_points:[4,3,1,""]},"CMS_Deep_Learning.postprocessing.plot":{plot_bins:[4,3,1,""],plot_dual_roc:[4,3,1,""],plot_history:[4,3,1,""],plot_roc_curve:[4,3,1,""]},"CMS_Deep_Learning.preprocessing":{delphes_parser:[0,0,0,"-"],pandas_to_numpy:[6,0,0,"-"],preprocessing:[0,0,0,"-"]},"CMS_Deep_Learning.preprocessing.delphes_parser":{DeltaRsq:[0,3,1,""],Iso:[0,3,1,""],delphes_to_pandas:[0,3,1,""],doJob:[0,3,1,""],fillEventChars:[0,3,1,""],fillIso:[0,3,1,""],fillTrackMatch:[0,3,1,""],fill_jet:[0,3,1,""],fill_object:[0,3,1,""],getEtaPhiPTasNumpy:[0,3,1,""],getMaxPt_Eta_Phi:[0,3,1,""],main:[0,3,1,""],makeJobs:[0,3,1,""],passJetCuts:[0,3,1,""],passLeptonCuts:[0,3,1,""],roundrobin:[0,3,1,""],store:[0,3,1,""],trackMatch:[0,3,1,""]},"CMS_Deep_Learning.preprocessing.pandas_to_numpy":{get_from_pandas:[6,3,1,""],make_datasets:[6,3,1,""],pandas_to_numpy:[6,3,1,""]},"CMS_Deep_Learning.preprocessing.preprocessing":{ObjectProfile:[0,1,1,""],XY_from_CSV:[0,3,1,""],XY_from_pickle:[0,3,1,""],XY_to_CSV:[0,3,1,""],XY_to_pickle:[0,3,1,""],dataFetchThread:[0,1,1,""],entryGen:[0,3,1,""],genFrom_label_dir_pairs:[0,3,1,""],getFiles_StoreType:[0,3,1,""],getGensDefaultFormat:[0,3,1,""],getNumValFrame:[0,3,1,""],getSizeMetaData:[0,3,1,""],getSizesDict:[0,3,1,""],label_dir_pairs_args_decoder:[0,3,1,""],maxMutualLength:[0,3,1,""],preprocessFromPandas_label_dir_pairs:[0,3,1,""],procsFrom_label_dir_pairs:[0,3,1,""],resolveProfileMaxes:[0,3,1,""],start_num_fromSplits:[0,3,1,""],strideFromTargetSize:[0,3,1,""]},"CMS_Deep_Learning.preprocessing.preprocessing.dataFetchThread":{run:[0,2,1,""]},"CMS_Deep_Learning.storage":{MPIArchiving:[7,0,0,"-"],archiving:[7,0,0,"-"],batch:[7,0,0,"-"]},"CMS_Deep_Learning.storage.MPIArchiving":{MPI_KerasTrial:[7,1,1,""]},"CMS_Deep_Learning.storage.MPIArchiving.MPI_KerasTrial":{execute:[7,2,1,""],kill:[7,2,1,""],setCustomObjects:[7,2,1,""]},"CMS_Deep_Learning.storage.archiving":{DataProcedure:[7,1,1,""],KerasTrial:[7,1,1,""],Storable:[7,1,1,""],compute_hash:[7,3,1,""],decode_callback:[7,3,1,""],encode_callback:[7,3,1,""],get_all_data:[7,3,1,""],get_all_trials:[7,3,1,""],get_blob_path:[7,3,1,""],get_data_by_function:[7,3,1,""],get_trials_by_name:[7,3,1,""],read_data_archive:[7,3,1,""],read_json_obj:[7,3,1,""],split_hash:[7,3,1,""],write_data_archive:[7,3,1,""],write_json_obj:[7,3,1,""],write_object:[7,3,1,""]},"CMS_Deep_Learning.storage.archiving.DataProcedure":{archive:[7,2,1,""],from_json:[7,4,1,""],get_all_paths:[7,5,1,""],get_data:[7,2,1,""],get_func:[7,5,1,""],is_archived:[7,2,1,""],load_hdf5_data:[7,2,1,""],set_encoder:[7,2,1,""],summary:[7,2,1,""],to_hashable:[7,2,1,""],to_json:[7,2,1,""],write:[7,2,1,""]},"CMS_Deep_Learning.storage.archiving.KerasTrial":{compile:[7,2,1,""],execute:[7,2,1,""],fit:[7,2,1,""],fit_generator:[7,2,1,""],from_json:[7,4,1,""],get_all_paths:[7,5,1,""],get_from_record:[7,2,1,""],get_history:[7,2,1,""],get_model:[7,2,1,""],get_train:[7,2,1,""],get_val:[7,2,1,""],is_complete:[7,2,1,""],set_compilation:[7,2,1,""],set_fit:[7,2,1,""],set_fit_generator:[7,2,1,""],set_model:[7,2,1,""],set_train:[7,2,1,""],set_validation:[7,2,1,""],summary:[7,2,1,""],test:[7,2,1,""],to_hashable:[7,2,1,""],to_json:[7,2,1,""],to_record:[7,2,1,""],write:[7,2,1,""]},"CMS_Deep_Learning.storage.archiving.Storable":{find:[7,4,1,""],gen_hash:[7,2,1,""],get_all_paths:[7,5,1,""],get_all_records:[7,4,1,""],get_path:[7,2,1,""],hash:[7,2,1,""],output_as_dir:[7,2,1,""],read_record:[7,2,1,""],remove_from_archive:[7,2,1,""],remove_from_record:[7,2,1,""],to_hashable:[7,2,1,""],to_json:[7,2,1,""],write:[7,2,1,""],write_record:[7,2,1,""]},"CMS_Deep_Learning.storage.batch":{batchAssertArchived:[7,3,1,""],batchExecuteAndTestTrials:[7,3,1,""]},"CMS_Deep_Learning.utils":{deepconfig:[8,0,0,"-"]},"CMS_Deep_Learning.utils.deepconfig":{deepconfig:[8,1,1,""]},CMS_Deep_Learning:{io:[2,0,0,"-"],preprocessing:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:classmethod","5":"py:staticmethod"},terms:{"00000000e":5,"100mb":6,"18713450e":5,"1st":3,"4th":3,"57699805e":5,"94931774e":5,"99805068e":5,"case":[0,7],"char":[],"class":[0,2,3,4,6,7,8],"default":[3,6],"final":[0,3],"float":[0,6],"function":[0,2,4,6,7],"import":[],"int":[2,4,6],"long":[0,6],"new":0,"return":[0,2,4,6,7],"short":3,"static":[0,7],"true":[0,2,3,4,5,6,7],"try":4,"void":0,DPs:[0,7],For:[2,3,4,6],One:[4,7],The:[0,2,3,4,6],These:[0,7],__package__:5,_ax:5,_eta:0,_method:5,_phi:0,_pred:5,_pt:0,a_eta:0,a_phi:0,a_pt:0,abc:0,about:[0,4],acc:[4,5],acclim:4,accum:5,accumil:[],accumul:[2,4],accuraci:4,accvseventchar:4,acummil:2,add:0,adopt:4,after:7,against:[3,4],aggreg:2,all:[0,6,7],all_dataset:0,all_dp:0,along:[0,3],alpha:[4,5],alphabet:[6,7],alreadi:7,also:[0,4,6],altern:4,alwai:2,among:0,analysi:4,analyz:3,angular:0,ani:[0,2,3],anoth:7,anywai:2,appear:0,append:[5,7],appli:[3,7],arbitrari:2,archiv:[0,1,2],archive_dir:[0,7],archive_on_get_data:7,archivetrain:7,archivevalid:7,arg:[0,4,7],arg_decode_func:7,argmax:5,arguement:[0,7],argument:[0,3,4,7],argv:0,arrai:[0,2,4,5,6,7],as_list:2,ascend:[0,6],assert:0,assert_complet:7,assert_list:2,assertmodel:[],assist:1,assum:2,auc:4,author:[3,4,7],automat:4,availi:0,avg:[],avoid:0,axes:5,axi:[3,4,5],b_eta:0,b_phi:0,back:5,backend:[5,8],background:4,bar:[4,5],base:[0,2,3,7],batch:[0,1,3],batch_siz:[0,2,3,7],batchassertarchiv:[0,7],batchexecuteandtesttri:7,becaus:0,been:4,befor:[0,7],begin:0,being:0,below:[2,4],best:7,better:3,between:0,bia:3,big:0,bigdata:5,bin:4,bin_metric_vs_char:4,binset:4,bitstream:5,bjet:6,blob:7,bookkeep:1,bool:[2,6],boost:3,both:0,bound:3,branch:0,build:[3,4,6],build_accumil:[],build_accumul:[2,4],built:[0,2],calcul:3,call:[0,2,3],callback:7,can:[0,2,3,4,7],cartesian:[0,3],categorical_crossentropi:[],certain:[0,7],char2:[],charact:7,characterist:[2,7],charg:6,check:[0,7],chhadiso:[],chpfiso:6,class_label:[4,5],class_weight:7,classifi:4,classmethod:7,cms_surf_2016:4,collect:[0,2],color:1,color_set:4,colors_contrasting1:4,column:[0,5,6],com:[2,3,4,7],compil:[2,4,7],complet:7,complil:7,comput:[0,4,7],compute_hash:7,concern:7,concurr:6,confusion_matrix:5,consid:0,consist:0,constant:4,contain:[0,1,2,3,4,6,7],contamin:4,context:5,control:7,convert:[2,7],coordin:3,copi:2,core:5,correctli:0,correspoind:0,correspond:[0,2,3,4,6,7],correspondind:4,count:5,counterpart:4,creat:[0,2,6],creation:1,csc:7,csv:0,csvdir:0,cuda:5,cudnn:5,curv:4,custom:[1,2,4],custom_object:[2,4,7],daint:7,danni:[3,4,7],dannyweitekamp:[3,4,7],data:[0,1,2,3,4,6,7],data_arch:7,data_dict:[],data_dir:[0,6],data_directori:0,data_fold:0,data_kei:[0,2,7],data_stor:2,data_subset:5,data_typ:2,databas:2,datafetchthread:0,datafram:5,dataiter:2,dataprocedur:[0,2,7],dataset:[1,6,7],dct:7,decend:[0,6],decod:[0,7],decode_callback:7,deep:1,deepconfig:1,defaultfamili:5,defin:7,defualt:4,degre:5,delph:5,delphes_dir:5,delphes_to_panda:0,deltarsq:0,dep:7,depend:0,deprric:3,deriv:[2,7],descend:6,design:[0,3],determin:[0,3,4,5],devic:5,dicionari:7,dict:[2,4,6],dictionari:[0,2,4,6,7],dicts_by_object:0,differ:[3,4,7],dimens:3,dir:6,directori:[0,2,6,7],dirr:5,disk:0,displai:4,dist:5,distanc:0,doe:[0,3,7],doing:1,dojob:0,domain:4,dp_data_kei:0,dp_out:7,dp_out_dir:7,dps:7,draw:2,dtype:5,duander:[2,7],dweiteka:7,dxy:0,each:[0,2,3,4,6,7],ecal:2,eem:[],effect:3,effici:[1,5],eflowneutralhadron:[],eflowphoton:[],eflowtrack:[],ehad:[],either:[0,7],electron:[],eleiso:[],element:4,els:4,empti:[0,5],encod:7,encode_callback:7,end:3,energi:[0,6],engergi:1,engin:3,enough:[0,6],entri:[0,2,7],entrygen:0,entryindex:0,environ:5,equal:[0,4,6],equalbin:4,error:4,especi:1,essenti:[2,7],eta:[0,6],etc:[0,3,6],evalu:4,even:[0,2],event:[0,4,5,6],everi:6,exampl:[2,3],excess:0,execut:7,exist:7,expect:0,express:7,extra:2,fall:5,fals:[0,2,3,4,6,7],famili:5,far:7,featur:[4,6],feed:0,file:[0,1,6],file_path:2,file_start_read:6,file_total_ev:6,filenam:[0,2,7],filepath:[0,2,6],files:6,filesystem:0,fill:0,fill_jet:0,fill_object:0,filleventchar:0,filliso:0,filltrackmatch:0,find:[0,1,3,4,7],findfont:5,first:[0,2,3,6,7],fit:[0,7],fit_gener:7,fixednum:0,flatten:2,flavor:0,flip:[4,5],float32:5,folder:[0,6],follow:2,font:5,font_manag:5,fontext:5,forc:6,forgo:3,form:[0,3,7],format:[0,2],forward:3,found:[2,3,5,7],fpr:4,fraction:0,frame:[0,3],freedom:5,freq:5,frequent:0,from:[0,2,3,4,6,7],from_json:7,func:7,gammaiso:[],gammapfiso:6,geforc:5,gen:7,gen_from_data:2,gen_hash:7,gener:[0,1,7],generator1:0,generator2:0,genfrom_label_dir_pair:0,get:[0,2,4,6,7],get_all_data:7,get_all_path:7,get_all_record:7,get_all_tri:7,get_blob_path:7,get_config:3,get_data:7,get_data_by_funct:7,get_famili:5,get_from_panda:6,get_from_record:7,get_func:7,get_histori:7,get_model:7,get_output_shape_for:3,get_path:7,get_roc_data:[4,5],get_roc_point:[4,5],get_sizes_meta_dict:2,get_train:7,get_trials_by_nam:7,get_val:7,getdata:7,getetaphiptasnumpi:0,getfiles_storetyp:0,getgensdefaultformat:0,getmaxpt_eta_phi:0,getnumvalfram:0,getsizemetadata:0,getsizesdict:0,gev:5,github:[2,7],give:7,given:[0,2,3,4,6,7],glob:5,global:0,gmail:[3,4,7],goe:6,gotten:2,gpu:8,grab:[0,2,7],graph:4,grid:4,groundtruth:4,group:[0,2,7],gtx:5,h5py:2,handl:4,has:[3,7],hash:7,hashabl:7,hashcod:7,have:[0,3,4,6,7],hcal:2,hdf5:[0,2,7],hdfstore:0,header:[0,6],held:3,helper:6,here:0,hfl_train:6,high:1,highest:[0,5],hist:4,histo:[4,5],histori:[4,7],hlf:6,hold:[3,4],how:[0,4],howev:2,http:[2,7],implement:[0,7],impli:3,includ:[0,2,6],increas:0,independ:3,index:[0,1,4],indic:[0,6],indici:0,infer:4,info:2,inform:[0,2,4],initial_epoch:7,inlin:5,inp:7,inplac:2,input:[0,2,3,4,7],input_handl:5,input_kei:2,input_shap:3,inputhandl:[],insid:4,instanc:[2,4],instead:[2,3],integ:[0,7],intend:[],intern:2,invers:4,invertcont:[4,5],iosimplif:[],iosimplification_:[],is_archiv:7,is_complet:7,ischhad:6,isel:6,isgamma:6,isgener:7,ismu:6,isneuhad:6,iso:0,isol:0,isotyp:0,item:2,iter:[0,2],its:[0,4,7],itself:2,jean:4,jet:5,job:[0,7],join:0,json:[2,4,5,7],json_str:[2,7],just:2,just_length:2,karg:[0,2,4,7],kei:[0,2,4,7],kera:[0,1,3,4,7],kerastri:[2,4,7],keyword:4,kill:7,kind:0,know:[0,6],kwarg:[0,3,5,7],lab:3,label:[0,2,4,5,6,7],label_dir_pair:0,label_dir_pairs_args_decod:0,label_kei:2,label_nam:0,larg:0,larger:0,last:3,later:7,latter:4,layer:[1,2],lead:0,leaf:0,learn:[1,7],leaves_by_object:0,left:4,legend:4,legendbelow:4,legendtitl:4,length:[0,2],less:0,letpon:5,level:6,lib:5,librari:1,light:2,like:[0,2,3],line:7,list:[0,2,4,6,7],load_hdf5_data:7,load_hdf5_dataset:2,loadweight:7,local:5,locat:7,log:4,logscal:4,look:0,lorentz:1,lorentzappli:3,lorentzlay:3,loss:[2,7],lower:3,lst:2,machin:7,made:4,mag:3,mai:0,mail:[3,4,7],main:0,make:[0,2,3,7],make_dataset:6,makejob:0,mamximum:0,mani:[0,2],marker:4,mask:3,mass:0,match:[0,7],matplotlib:[4,5],matrix:3,matter:[0,2,6],max:[0,5],max_q_siz:[0,7],max_siz:0,maxdist:0,maxi:4,maximum:0,maxjetpt_eta_phi:0,maxlepantikt:6,maxlepdeltaeta:6,maxlepdeltaphi:6,maxlepdeltar:[5,6],maxlepkt:6,maxleppt_eta_phi:0,maxmutuallength:0,maxx:4,mean:[0,5],megabyt:0,memori:0,met:[0,6],metadata:[0,2],metantikt:[],metdeltaeta:[],metdeltaphi:[],metdeltar:[],method:4,metkt:[],metpt_eta_phi:0,metric:[1,2,5,7],might:0,min_sampl:[4,5],mini:4,minu:0,minumum:4,minx:4,missinget:[],mode:[4,5],model:[2,4,5,7],modul:[1,5,7],moment:0,momentum:0,more:[0,3,7],mpi_kerastri:7,mpi_learn:[2,7],mpiarchiv:1,msg:0,msgpack:0,muiso:[],mulipli:0,mulitpli:3,multidiment:3,multifil:1,multipl:[2,4],muontight:[],must:[0,2,4,6,7],mutlipl:4,mutual:0,my_bin:5,my_bins2:5,n_val:0,name:[0,2,4,5,6,7],nb_bin:[4,5],nb_epoch:7,nb_samples_from_h5:2,nb_val_sampl:7,nb_worker:7,ndarrai:[0,2,4],ndarri:4,necessari:[0,2],need:0,nest:[2,7],network:3,neuhadiso:[],neupfiso:6,new_entri:0,next:[0,2],njet:6,none:[0,2,3,4,5,6,7],norm_cont_split:5,normal:[4,5],note:[0,3],now:2,num_jet:0,num_label:0,num_lepton:0,num_process:[6,7],num_sampl:[2,6],num_samples1:0,num_samples2:0,num_test:7,num_val_fram:0,number:[0,2,3,4,6,7],numpi:[0,2,4,5,6,7],obj:[0,7],obj_start:0,object:[0,2,5,7],object_ord:[],object_profil:0,objectprofil:0,objft1:5,objft2:5,objft3:5,observ:0,observ_typ:[0,6],observable_ord:[],off:2,omit:3,one:[0,2,3,4,6,7],onli:[0,2,4,7],opac:4,optim:[2,7],option:[2,4,7],order:[0,2,6,7],other:[0,2,4],otherwis:[],our:0,out:[0,2],output:[0,2,3,4,6,7],output_as_dir:7,output_dir:6,output_model:7,output_train:7,output_v:7,output_weight:7,outputdir:0,packag:5,pad:2,padding_multipli:0,padding_ratio:0,page:1,pair:0,pairwis:0,panada:[0,6],panda:[0,2,5,6],pandas_data_directori:0,pandas_fold:0,pandas_to_numpi:1,param:3,paramet:[2,3,4,6,7],parameter:4,parametr:4,paricl:0,part:[0,6],particl:[0,2,6],particluar:[0,7],pass:[0,2,3,4,7],passjetcut:0,passleptoncut:0,path:[2,4,7],per:[0,6],phi:[0,3,6],phimet:6,physic:1,pickl:0,pickle_saf:7,pickledir:0,plot:1,plot_bin:4,plot_dual_roc:4,plot_histori:4,plot_roc_curv:4,plotaccuraci:4,plotbest:4,plote:4,plotloss:4,plt:[4,5],plu:0,point:[0,2,4],posit:[3,4],positon:3,possibl:[0,7],postproc_ex:5,postprocess:[1,2],pred:5,predict:[2,4,5],prediction_model:2,prefil:0,preliminari:3,prep_func:2,preprocess:[1,7],preprocessfrompandas_label_dir_pair:0,previou:0,previous:0,print:[0,2,5,7],printout:0,probabl:4,proc:0,procedur:7,proceed:0,process:6,procsfrom_label_dir_pair:0,prop:5,properli:0,proport:6,protect:3,prteta:0,prtphi:0,prtstart:0,pt_et:5,pt_et_met:0,pt_threshold:0,push:7,put:[4,6],pyc:5,pyplot:5,python2:5,python:1,qcd:5,quantiti:[0,6],queue:0,quickli:[0,2],raiseerror:7,rang:[0,4],rate:4,ratio:0,raw:2,read:[0,2,3,6,7],read_data_arch:7,read_json_obj:7,read_record:7,realli:3,realpath:5,realworld:0,reason:0,reconsitut:7,reconstitut:[0,7],reconstruc:0,reconstruct:0,record:7,record_stor:7,redo:[0,7],reduc:[],reduct:[],refer:4,regular:7,rehash:7,rel:3,relativist:3,relev:4,remov:[0,7],remove_from_arch:7,remove_from_record:7,replac:7,repo:7,repres:[2,7],req_info:[],request:2,requir:[0,4],requirelepton:0,rerun:0,reshap:1,resolv:[0,2,3],resolvecolor:4,resolveprofilemax:0,respect:3,rest:[6,7],restructur:2,result:[0,3,7],retriev:2,retrieve_data:2,return_predict:2,rmsprop:[],roc:4,roc_auc:4,roc_curv:4,roc_data:[4,5],roc_dict:[4,5],roch:4,root:0,roundrobin:0,row:6,rows_per_ev:6,run:[0,2,7],runtimewarn:5,same:0,sampl:[0,2,4,6,7],sample_weight:[5,7],sample_weight_mod:7,samples_per_class:6,samples_per_epoch:7,samples_per_label:0,samples_to_read:6,san:5,scatter:[4,5],scratch:7,search:1,second:[0,6],see:[0,2,4],seed:7,select:[],self:5,separ:7,seqtyp:2,seri:7,serif:5,set:[0,1,2,3,4,6,7],set_compil:7,set_encod:7,set_fit:7,set_fit_gener:7,set_model:7,set_train:7,set_valid:7,setcustomobject:7,setfit:7,setfit_gener:7,sha1:7,shape:[0,3,4],share:5,shorter:0,should:[0,2,4],show:[4,7],showcompil:7,showdirectori:7,showfit:7,showmodelp:7,shown:4,shownam:7,shownonetyp:7,showrecord:7,showtrain:7,showvalid:7,shrink:0,shuffl:[6,7],significantli:4,simple_grab:2,simpleio_:[],simpli:3,simplif:1,simplifi:1,sinc:0,singl:[0,1],single_list:0,size:[0,1,6],size_from_meta:2,sizesdict:[0,2],sklearn:5,slice:[1,5],sliceda:3,slicedb:3,small:0,smaller:0,snx3000:7,softwar:5,some:[0,2],sometim:[],sort:[0,6],sort_ascend:[0,6],sort_column:[0,6],sort_on:6,sourc:[0,2,3,4,6,7,8],source_data_kei:[],special:6,specif:0,specifi:2,specifii:0,spherecoord:3,spheric:3,split:[0,3,7],split_hash:7,split_str:3,spot:3,squar:0,squat:7,sring:7,stack:4,standard:4,start:[0,3,6,7],start_index:0,start_num_fromsplit:0,std:[],step:0,stepsiz:3,stich:1,stop:3,storabl:7,storag:[1,2,5],store:[0,2,7],storetyp:0,str:[2,4,6],stride:[0,3],stridefromtargets:0,string:[2,3,4,7],structur:[2,7],subdirectori:6,sucessfulli:7,sum:[0,3],sum_input:3,summari:7,sure:[0,2,7],symlink:7,system:[3,7],tabl:[0,6],take:[0,2,3,6,7],taken:[0,2],target:[0,2,6,7],tell:0,tensor:3,test:[3,7],test_proc:7,test_sampl:7,than:[0,7],theano:[5,8],thei:[0,7],them:[2,4,7],theshold:4,theta:3,thi:[0,2,3,4,7],those:4,thre:4,thread:0,thresh:[4,5],threshold:[4,5],through:[0,2],time:0,time_str:7,titl:[4,5],to_hash:7,to_json:7,to_ommit:0,to_record:7,to_return:2,todo:0,togeth:1,too:0,tool:2,topolog:3,total:[0,6],tpr:[4,5],tra:7,track:0,trackindici:0,trackmatch:0,trackstart:0,train:[0,2,3,4,6,7],train_arg_decode_func:7,train_procedur:7,trainabl:6,transform:[2,3],transvers:0,treat:0,trial:[2,4,7],trial_out:7,trial_out_dir:7,trial_record:7,trialiter:2,trketa:0,trkphi:0,true_class:4,true_class_index:[4,5],truncat:0,ttbar:5,tup:7,tupl:[0,2,4,6,7],tutori:4,two:[0,3,7],type:[0,2,6,7],uint:[2,6],uncompil:4,uniqu:[0,7],unjoin:0,unlik:2,unresolv:0,unseen:0,unusu:4,updat:[0,2],usabl:7,use:[0,4,6,7],use_mpi:7,used:[0,3,4,7],useful:[3,4],usegrid:4,useless:2,user:[2,3,4],userwarn:5,uses:3,using:[2,3,7],usr:5,usual:3,util:[0,1,4],v_split:6,val:[2,5,6],val_acc:7,val_arg_decode_func:7,val_procedur:7,valid:[0,4,6],validation_data:7,validation_split:7,valu:[0,2,6,7],vari:4,variou:5,vec_start:3,vector:[3,4],vectori:3,vera:5,verbos:[0,2,6,7],veri:4,verion:2,version:5,view:4,vlimant:4,vtxx:6,vtxy:6,vtxz:6,want:[2,3,4],warn:5,weight:[2,3,4,5,7],weight_output:3,weitekamp:[3,4,7],what:[0,6,7],when:7,where:[0,2,3,6,7],whether:[0,2,4,6],which:[2,3,4,6],with_se:7,within:[],without:0,word:0,work:0,workflow:1,worri:0,would:2,wrapper:7,write:[0,7],write_data_arch:7,write_json_obj:7,write_object:7,write_record:7,wrong:[],x_train:[0,6,7],xlabel:[4,5],xlim:[4,5],xy_from_csv:0,xy_from_pickl:0,xy_to_csv:0,xy_to_pickl:0,y_train:[0,6,7],y_val:[4,5],y_valu:4,ylabel:4,ylim:[4,5],you:[0,2,6],your:2,zero:0,zero_error:2},titles:["CMS_Deep_Learning.preprocessing","CMS_Deep_Learning package","CMS_Deep_Learning.io","CMS_Deep_Learning.layers","CMS_Deep_Learning.postprocessing","Postprocessing Example","CMS_Deep_Learning.preprocessing","CMS_Deep_Learning.storage","CMS_Deep_Learning.utils package"],titleterms:{"class":5,"function":5,"import":5,"long":5,And:5,The:5,Then:5,These:5,Use:5,Using:5,accumil:5,add:5,also:5,although:5,anyth:5,archiv:7,availi:5,batch:7,bin:5,bin_metric_vs_char:5,build_accumil:5,can:5,cell:5,certain:5,characterist:5,cheer:5,choos:5,classifi:5,cms_deep_learn:[0,1,2,3,4,5,6,7,8],collect:5,color:4,com:5,confus:5,contain:5,contamin:5,content:[0,1],control:5,copi:5,cours:5,cultur:5,curv:5,danni:5,dannyweitekamp:5,data:5,dataset:2,deepconfig:8,defin:5,delphes_pars:0,differ:5,directori:5,doc:5,dynam:5,effici:2,encourag:5,exampl:[1,5],fals:5,featur:5,feel:5,file:[2,5],find:[2,5],format:5,fpr:5,free:5,from:5,gener:2,gmail:5,grab:5,have:5,here:5,histogram:5,hlf:5,indic:1,individu:5,input:5,input_handl:[],inputhandl:5,iter:[],layer:3,logscal:5,lorentz:3,machin:5,make:5,map:5,matrix:5,metric:4,modul:0,more:5,mpiarchiv:7,multifil:2,notebook:5,option:5,output:5,over:5,own:5,packag:[1,8],pandas_to_numpi:6,past:5,path:5,patient:5,plate:5,plot:[4,5],plot_bin:5,plot_dual_roc:5,plot_roc_curv:5,plote:5,posit:5,postprocess:[4,5],precomput:5,preprocess:[0,6],previou:5,pull:5,quickli:5,rate:5,repo:5,repositori:5,request:5,reshap:2,roc:5,same:5,simplifi:[2,5],singl:2,size:2,slice:3,some:5,stack:5,stich:2,storag:7,stuff:5,submodul:0,subpackag:1,subset:5,sys:5,tabl:1,take:5,thi:5,time:5,togeth:2,total:5,use:5,using:5,util:[2,8],valu:5,veri:5,without:5,y_valu:5,you:5,your:5}})