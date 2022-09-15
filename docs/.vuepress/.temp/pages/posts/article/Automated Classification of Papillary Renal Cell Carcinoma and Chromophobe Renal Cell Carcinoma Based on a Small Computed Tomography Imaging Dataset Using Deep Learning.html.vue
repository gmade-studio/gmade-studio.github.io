<template><div><h1 id="automated-classification-of-papillary-renal-cell-carcinoma-and-chromophobe-renal-cell-carcinoma-based-on-a-small-computed-tomography-imaging-dataset-using-deep-learning" tabindex="-1"><a class="header-anchor" href="#automated-classification-of-papillary-renal-cell-carcinoma-and-chromophobe-renal-cell-carcinoma-based-on-a-small-computed-tomography-imaging-dataset-using-deep-learning" aria-hidden="true">#</a> Automated Classification of Papillary Renal Cell Carcinoma and Chromophobe Renal Cell Carcinoma Based on a Small Computed Tomography Imaging Dataset Using Deep Learning</h1>
<p>Teng Zuo1, Yanhua Zheng1, Lingfeng He2, Tao Chen3, Bin Zheng4, Song Zheng1, Jinghang You5, Xiaoyan Li6, Rong Liu1, Junjie Bai1, Shuxin Si1, Yingying Wang7, Shuyi Zhang8, Lili Wang4* and Jianhui Chen1*</p>
<ol>
<li>
<p>Department of Urology, Fujian Medical University Union Hospital, Fuzhou, China</p>
</li>
<li>
<p>Institute for Empirical Social Science Research, Xi’an Jiaotong University, Xi’an, China</p>
</li>
<li>
<p>School of Statistics and Mathematics, Central University of Finance and Economics, Beijing, China</p>
</li>
<li>
<p>School of Electrical and Computer Engineering, University of Oklahoma, Norman, OK, United States</p>
</li>
<li>
<p>Department of Radiology, Fujian Medical University Union Hospital, Fuzhou, China</p>
</li>
<li>
<p>Department of Pathology, Fujian Medical University Union Hospital, Fuzhou, China</p>
</li>
<li>
<p>School of Medicine, Fujian Medical University, Fuzhou, China</p>
</li>
<li>
<p>School of Medicine, Xiamen University, Xiamen, China</p>
</li>
</ol>
<p><strong>Objectives:</strong> This study was conducted in order to design and develop a framework utilizing deep learning (DL) to differentiate papillary renal cell carcinoma (PRCC) from chromophobe renal cell carcinoma (ChRCC) using convolutional neural networks (CNNs) on a small set of computed tomography (CT) images and provide a feasible method that can be applied to light devices.</p>
<p><strong>Methods:</strong> Training and validation datasets were established based on radiological, clinical, and pathological data exported from the radiology, urology, and pathology departments. As the gold standard, reports were reviewed to determine the pathological subtype. Six CNN-based models were trained and validated to differentiate the two subtypes. A special test dataset generated with six new cases and four cases from The Cancer Imaging Archive (TCIA) was applied to validate the efficiency of the best model and of the manual processing by abdominal radiologists. Objective evaluation indexes [accuracy, sensitivity, specificity, receiver operating characteristic (ROC) curve, and area under the curve (AUC)] were calculated to assess model performance.</p>
<p><strong>Results:</strong> The CT image sequences of 70 patients were segmented and validated by two experienced abdominal radiologists. The best model achieved 96.8640% accuracy (99.3794% sensitivity and 94.0271% specificity) in the validation set and 100% (case accuracy) and 93.3333% (image accuracy) in the test set. The manual classification achieved 85% accuracy (100% sensitivity and 70% specificity) in the test set.</p>
<p><strong>Conclusions:</strong> This framework demonstrates that DL models could help reliably predict the subtypes of PRCC and ChRCC.</p>
<p><strong>Keywords:</strong> CNN—convolutional neural network, PRCC, papillary renal cell carcinoma, ChRCC,·chromophobe-primary renal cell carcinoma, cancer image classification</p>
<p><strong>Download PDF:</strong> <a href="https://www.frontiersin.org/articles/10.3389/fonc.2021.746750/full" target="_blank" rel="noopener noreferrer">Download from Publisher<ExternalLinkIcon/></a></p>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>With the continuous advancement of imaging technology and increasing awareness of the public for early cancer screening, the detection rate of renal masses is increasing (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B1" target="_blank" rel="noopener noreferrer">Richard et al., 2015<ExternalLinkIcon/></a>). In China, most renal masses are kidney cancer. The incidence of kidney cancer in the Chinese population continues to increase (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B2" target="_blank" rel="noopener noreferrer">Yang et al., 2013<ExternalLinkIcon/></a>). Existing methods can meet the need to distinguish clear cell carcinoma from non-clear cell carcinoma. However, the differentiation between subtypes of non-clear carcinoma may be difficult because of the lack of a quantitative evaluation of images, especially from the early-stage cancers, which usually present atypically (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B3" target="_blank" rel="noopener noreferrer">Rossi et al., 2018<ExternalLinkIcon/></a>). Papillary renal cell carcinoma (PRCC) and chromophobe renal cell carcinoma (ChRCC) are the most common types of non-clear cell carcinoma and are characterized by a unique molecular morphology (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B4" target="_blank" rel="noopener noreferrer">Li et al., 2020<ExternalLinkIcon/></a>). PRCC is associated with activating germline mutations in MET (type I) and activation of the NRF2–ARE pathway (type II) (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B5" target="_blank" rel="noopener noreferrer">Linehan et al., 2016<ExternalLinkIcon/></a>). Typical genetic changes in ChRCC are deletions of chromosomes Y, 1, 2, 6, 10, 13, 17, and 21 (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B6" target="_blank" rel="noopener noreferrer">Moch et al., 2016<ExternalLinkIcon/></a>). The differences in originating factors and driver genes between the two subtypes lead to different treatment options and prognoses (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B8" target="_blank" rel="noopener noreferrer">Ljungberg et al., 2019<ExternalLinkIcon/></a>; <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B7" target="_blank" rel="noopener noreferrer">Turajlic et al., 2018<ExternalLinkIcon/></a>). There is some differentiation between PRCC and ChRCC in imaging findings: PRCC presents as cysts, necrosis, and calcification, while ChRCC presents as central wheel-shape enhancement (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B9" target="_blank" rel="noopener noreferrer">Wang et al., 2020<ExternalLinkIcon/></a>). In low stage or small size masses, however, these characteristics mentioned above are atypical, which usually cause a difficult diagnosis. In addition, according to previous reports (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B10" target="_blank" rel="noopener noreferrer">Sun et al., 2020<ExternalLinkIcon/></a>), the accuracy and sensitivity of the manual classification of PRCC/ChRCC are 61.8% and 84.5%, respectively, which cannot meet this need. Therefore, in the clinic, it is difficult to provide a highly accurate manual subtype differentiation between PRCC and ChRCC, and this remains to be a challenge.</p>
<p>Recently, with the rapid development of computer hardware and deep learning (DL) theory, artificial intelligence (AI) has been widely applied in radiological image processing for classification and is rapidly developing (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B11" target="_blank" rel="noopener noreferrer">Hosny et al., 2018<ExternalLinkIcon/></a>). Notably, the efficacy of DL-based models for the radiological diagnosis of several tumors [e.g., breast cancer (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B12" target="_blank" rel="noopener noreferrer">Lehman et al., 2019<ExternalLinkIcon/></a>), liver cancer (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B13" target="_blank" rel="noopener noreferrer">Yasaka et al., 2018<ExternalLinkIcon/></a>), and lung masses (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B14" target="_blank" rel="noopener noreferrer">Lakhani &amp; Sundaram, 2017<ExternalLinkIcon/></a>)] is superior to that of manual processing according to previous studies (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B15" target="_blank" rel="noopener noreferrer">Cruz-Roa et al., 2017<ExternalLinkIcon/></a>). Convolutional neural networks (CNNs) and improved models have been widely used for medical image processing (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B16" target="_blank" rel="noopener noreferrer">Litjens et al., 2017<ExternalLinkIcon/></a>). DL-based oncological radiological characterization has shown value in medical fields (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B15" target="_blank" rel="noopener noreferrer">Cruz-Roa et al., 2017<ExternalLinkIcon/></a>; <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B11" target="_blank" rel="noopener noreferrer">Hosny et al., 2018<ExternalLinkIcon/></a>; <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B16" target="_blank" rel="noopener noreferrer">Litjens et al., 2017<ExternalLinkIcon/></a>). CNNs and their improved models are currently one of the hot spots in the field of medical image processing. Image processing based on this type of model for assisting in renal tumor examinations has achieved promising results and suggests the possibility of solving the challenges associated with the radiological differentiation of PRCC and ChRCC.</p>
<p>In this study, DL was utilized to classify PRCC and ChRCC from computed tomography (CT) datasets. The current study aimed to exploit DL-based models for renal cell carcinoma subtype classification based on small datasets so that the classification can be implemented in some scenarios without high-performance hardware or shortage of rare subtypes cases, to better promote the accuracy of radiological diagnosis.</p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<p>Institutional review board approval was obtained. The requirement for written informed patient consent was waived. A retrospective review of PRCC and ChRCC patients at Fujian Medical University Union Hospital was performed between 2012 and 2021. Ethical approval was obtained from the Institutional Ethics Committee of Fujian Medical University Union Hospital (No. 2021WSJK033). According to the Helsinki Declaration, all patients (or their legal clients) provided written informed consent before obtaining their clinical, radiological, and pathological data. The framework used to develop an automated method for the differentiation of these two subtypes was comprised of two phases (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#f1" target="_blank" rel="noopener noreferrer">Figure 1<ExternalLinkIcon/></a>): 1) CT scan data, clinical data, and pathological data were gathered and digitized, followed by tumor lesion segmentation and labeling by experts in the radiology department (dataset establishment); and 2) training neural networks; assessing the accuracy, sensitivity, and specificity of the models; and verifying model efficiency through comparison with the pathological diagnosis of new cases (subtype classification).</p>
<p><img src="http://gmade-studio.com/wp-content/uploads/2022/08/dl-based-classification-f1-1024x549.jpg" alt="" loading="lazy"></p>
<p><strong>Figure 1</strong> Flowchart of automated PRCC/ChRCC classification using computer vision.</p>
<h3 id="phase-1" tabindex="-1"><a class="header-anchor" href="#phase-1" aria-hidden="true">#</a> Phase 1</h3>
<h4 id="dataset-establishment" tabindex="-1"><a class="header-anchor" href="#dataset-establishment" aria-hidden="true">#</a> Dataset Establishment</h4>
<p>Patients with a pathological diagnosis obtained by biopsy or surgical resection were included in this study. In addition, 80 patients with available arterial/cortical/nephrogenic phase CT image sequences were reviewed (42 with PRCC and 38 with ChRCC). After randomly selecting 6 cases (3 PRCCs and 3 ChRCCs) for testing sets, the images of 74 tumors (39 PRCCs and 35 ChRCCs) were used to build the datasets. The CT images were obtained using various radiology scanners and non-standard protocols. Arterial phase sequences were preferred when multiple phases existed. Whole sequences were retrieved and exported utilizing the hospital radiological database. The window settings were 40 HU (width) and 400 HU (level). Based on the clinical and pathological data, ROIs of sequences were segmented, labeled, and exported with ITK-SNAP by two abdominal radiologists who have experience of more than 10 years in the diagnosis of urinary system tumor. After cross-validation, images that were exported in.jpg size included 857 images of ChRCCs and 997 images of PRCCs. Labeling was applied in the non-graphical layer so that each slice filename contained the case number, gender, age, and histological subtypes. After resizing, images comprised matrices with 256 * 256 pixels in the axial planes. The dataset was divided into the training set and validation set (90% for the training set and 10% for the validation set).</p>
<h3 id="phase-2" tabindex="-1"><a class="header-anchor" href="#phase-2" aria-hidden="true">#</a> Phase 2</h3>
<h4 id="subtype-classification" tabindex="-1"><a class="header-anchor" href="#subtype-classification" aria-hidden="true">#</a> Subtype Classification</h4>
<h5 id="model-training-and-validation" tabindex="-1"><a class="header-anchor" href="#model-training-and-validation" aria-hidden="true">#</a> Model Training and Validation</h5>
<p>Six pop models [MobileNetV2 (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B17" target="_blank" rel="noopener noreferrer">Howard et al., 2017<ExternalLinkIcon/></a>), EfficientNet (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B18" target="_blank" rel="noopener noreferrer">Tan &amp; Le, 2019<ExternalLinkIcon/></a>), ShuffleNet (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B19" target="_blank" rel="noopener noreferrer">Ma et al., 2018<ExternalLinkIcon/></a>), ResNet-34, ResNet-50, and ResNet-101 (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B20" target="_blank" rel="noopener noreferrer">He et al., 2016<ExternalLinkIcon/></a>)] were adapted for dichotomy based on TensorFlow 2.4.12. Preprocessing involved normalization and augmentation (including Gaussian blur, rotation, flipping, brighter, and darker) (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#f2" target="_blank" rel="noopener noreferrer">Figure 2<ExternalLinkIcon/></a>). In addition to data augmentation, ConvBNReLU (convolution + batch normalization + ReLU) was applied to avoid overfitting. The learning rate was initially set as 0.005 and was optimized by the Adaptive Moment Estimation (ADAM) optimization algorithm in every training phase. The batch size was set as 24. For model training, a desktop workstation with an Intel® Xeon® E5-2678 v3 CPU and an NVIDIA GeForce RTX 2080Ti (11 GB) GPU was used. A list of model parameters, training results, and validation/accuracy results is provided in <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#t1" target="_blank" rel="noopener noreferrer">Table 1<ExternalLinkIcon/></a>.</p>
<p><img src="http://gmade-studio.com/wp-content/uploads/2022/08/dl-based-classification-f2-1024x461.jpg" alt="" loading="lazy"></p>
<p><strong>Figure 2</strong> An example of data augmentation processing. Based on the geometric transformations (rotation and flipping), the Gaussian blur, brighter, and darker were applied, which finally achieved 15× amplification.</p>
<p><strong>Table 1</strong> The results of CNN-based networks for classification task training and validation and the testing results of the models.</p>
<table>
<thead>
<tr>
<th><strong>Models</strong></th>
<th><strong>Parameters</strong></th>
<th><strong>Best validation accuracy</strong></th>
<th><strong>Testing Results</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>MobileNetV2</td>
<td>Total: 2,261,827 Trainable:2,226,434</td>
<td>96.8640%</td>
<td>Accuracy:100% Sensitivity:100% Specificity:100%</td>
</tr>
<tr>
<td>ShuffleNet</td>
<td>Total:1,272,859 Trainalbe:1,256,679</td>
<td>97.3074%</td>
<td>Accuracy:83.3334% Sensitivity:92.3077% Specificity:72.7273%</td>
</tr>
<tr>
<td>EfficientNet</td>
<td>Total:4,053,414 Trainable:4,011,391</td>
<td>Cannot converge</td>
<td>NA</td>
</tr>
<tr>
<td>ResNet-34</td>
<td>Total:21,829,058 Trainable:21,812,034</td>
<td>93.6404%</td>
<td>Accuracy:91.6667% Sensitivity:84.6154% Specificity:100%</td>
</tr>
<tr>
<td>ResNet-50</td>
<td>Total:25,662,403 Trainable:25,609,283</td>
<td>Cannot converge</td>
<td>NA</td>
</tr>
<tr>
<td>ResNet-101</td>
<td>Total:44,706,755 Trainalbe:44,601,411</td>
<td>Cannot converge</td>
<td>NA</td>
</tr>
</tbody>
</table>
<h5 id="model-selection-and-testing" tabindex="-1"><a class="header-anchor" href="#model-selection-and-testing" aria-hidden="true">#</a> Model Selection and Testing</h5>
<p>Based on the results of the training step, MobileNetV2, ShuffleNet, and ResNet-34 were selected as the testing models. A special test set of PRCC/ChRCC samples was established in two parts (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#t2" target="_blank" rel="noopener noreferrer">Table 2<ExternalLinkIcon/></a>): 1) reviewing the new cases in 2021, including six patients (three with PRCC, three with ChRCC); and 2) reviewing cases in The Cancer Imaging Archive (TCIA) datasets, including four patients (two with PRCC from the TCGA-KIRP dataset, two with ChRCC from the TCGA-KICH dataset). Slices were processed by abdominal radiologists, and for each case, three photographs were selected randomly. To assess efficiency from different views, two accuracy values were calculated. 1) Case accuracy: if correctly identified photographs were &gt;2, this case was regarded as correctly identified. Case accuracy was used to reflect the percentage of correct cases. 2) Sample accuracy: this was used to show the proportion of correct images among all images. The accuracy, sensitivity, and specificity of these models were computed. In order to show the efficiency of manual processing, two radiologists were invited to distinguish these cases. Objective measure indexes of manual prediction were also calculated.</p>
<p><strong>Table 2</strong> Information of test sets, comparison result of automated model prediction, and the result of model performance in the validation dataset.</p>
<table>
<thead>
<tr>
<th><strong>Case</strong></th>
<th><strong>Source</strong></th>
<th><strong>Subtypes</strong></th>
<th><strong>Gender</strong></th>
<th><strong>Age</strong></th>
<th><strong>Sample</strong></th>
<th><strong>Automated Prediction</strong></th>
<th><strong>Manual Prediction</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Information of test sets, comparison result of automated model prediction</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1</td>
<td>Union Hospital of FJMU</td>
<td>PRCC</td>
<td>Female</td>
<td>60</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Matched</td>
</tr>
<tr>
<td>2</td>
<td>Union Hospital of FJMU</td>
<td>PRCC</td>
<td>Male</td>
<td>58</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Matched</td>
</tr>
<tr>
<td>3</td>
<td>Union Hospital of FJMU</td>
<td>PRCC</td>
<td>Male</td>
<td>57</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Matched</td>
</tr>
<tr>
<td>4</td>
<td>Union Hospital of FJMU</td>
<td>ChRCC</td>
<td>Male</td>
<td>62</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Matched</td>
</tr>
<tr>
<td>5</td>
<td>Union Hospital of FJMU</td>
<td>ChRCC</td>
<td>Female</td>
<td>41</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Mismatched</td>
</tr>
<tr>
<td>6</td>
<td>Union Hospital of FJMU</td>
<td>ChRCC</td>
<td>Female</td>
<td>62</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Matched</td>
</tr>
<tr>
<td>7</td>
<td>TCGA-KIRP</td>
<td>PRCC</td>
<td>–</td>
<td>–</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Matched</td>
</tr>
<tr>
<td>8</td>
<td>TCGA-KIRP</td>
<td>PRCC</td>
<td>–</td>
<td>–</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Matched</td>
</tr>
<tr>
<td>9</td>
<td>TCGA-KICH</td>
<td>ChRCC</td>
<td>–</td>
<td>–</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Matched 2.Mismatched</td>
</tr>
<tr>
<td>10</td>
<td>TCGA-KICH</td>
<td>ChRCC</td>
<td>–</td>
<td>–</td>
<td><img src="http://gmade-studio.com/blog/publications/dl-based-classification/" alt="" loading="lazy"></td>
<td>Matched</td>
<td>1.Mismatched 2.Matched</td>
</tr>
<tr>
<td><strong>Result of model performance in the validation dataset</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Validation Accuracy</td>
<td></td>
<td></td>
<td></td>
<td>96.8640%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Validation Sensitivity</td>
<td></td>
<td></td>
<td></td>
<td>99.3794%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Validation Specificity</td>
<td></td>
<td></td>
<td></td>
<td>94.0271%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Test accuracy (Total)</td>
<td></td>
<td></td>
<td></td>
<td>100%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Test sensitivity (Total)</td>
<td></td>
<td></td>
<td></td>
<td>100%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Test specificity (Total)</td>
<td></td>
<td></td>
<td></td>
<td>100%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Test accuracy (Sample)</td>
<td></td>
<td></td>
<td></td>
<td>93.3333%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Test sensitivity (Sample)</td>
<td></td>
<td></td>
<td></td>
<td>88.2353%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Test specificity (Sample)</td>
<td></td>
<td></td>
<td></td>
<td>86.6667%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Manual accuracy</td>
<td></td>
<td></td>
<td></td>
<td>85%(90% and 80%)</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Manual sensitivity</td>
<td></td>
<td></td>
<td></td>
<td>100%</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Manual specificity</td>
<td></td>
<td></td>
<td></td>
<td>70%(80% and 60%)</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="results" tabindex="-1"><a class="header-anchor" href="#results" aria-hidden="true">#</a> Results</h2>
<p>The model based on MobileNetV2 (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#t3" target="_blank" rel="noopener noreferrer">Table 3<ExternalLinkIcon/></a> and <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#f3" target="_blank" rel="noopener noreferrer">Figure 3<ExternalLinkIcon/></a>) performed best for tumor subtype diagnosis. The automated method achieved 96.8640% accuracy in the validation dataset (99.3794% sensitivity, 94.0271% specificity). Due to all correctly matching, case accuracy, case sensitivity, and case specificity were all achieved 100%. For every single photograph, image accuracy achieved 93.3333% in the testing dataset (88.2353% sensitivity and 86.6667% specificity). The AUC was 0.9489, and the <em>p</em>-value was less than 0.001. Resource occupancy was less while training and predicting (less than 10 GB of accelerated graphics memory occupied), which means that this model can be applied to low-performance hardware. The manual method achieved 85% accuracy (100% sensitivity, 70% specificity) in the testing dataset. The results are provided in <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#t2" target="_blank" rel="noopener noreferrer">Table 2<ExternalLinkIcon/></a> and <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#f4" target="_blank" rel="noopener noreferrer">Figure 4<ExternalLinkIcon/></a>.</p>
<p><strong>Table 3</strong> The structure of MobileNetV2.</p>
<table>
<thead>
<tr>
<th><strong>Layer(Funtions)</strong></th>
<th><strong>Output Shape</strong></th>
<th><strong>Stride</strong></th>
<th><strong>Filter shape</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Input Layer</td>
<td>None,256,256,3</td>
<td>/</td>
<td>/</td>
</tr>
<tr>
<td>Conv1 (Conv+BN+ReLU6)</td>
<td>None,128,128,32</td>
<td>2</td>
<td>3<em>3</em>32</td>
</tr>
<tr>
<td>inverted_residual (Linear)</td>
<td>None,128,128,16</td>
<td>1</td>
<td>1<em>1</em>32*16</td>
</tr>
<tr>
<td>inverted_residual_1 (ReLU6)</td>
<td>None,64,64,24</td>
<td>2</td>
<td>3<em>3</em>16*24</td>
</tr>
<tr>
<td>inverted_residual_2 (Linear)</td>
<td>None,64,64,24</td>
<td>1</td>
<td>1<em>1</em>24</td>
</tr>
<tr>
<td>inverted_residual_3 (ReLU6)</td>
<td>None,32,32,32</td>
<td>2</td>
<td>3<em>3</em>24*32</td>
</tr>
<tr>
<td>inverted_residual_4 (Linear)</td>
<td>None,32,32,32</td>
<td>1</td>
<td>1<em>1</em>32</td>
</tr>
<tr>
<td>inverted_residual_5 (Linear)</td>
<td>None,32,32,32</td>
<td>1</td>
<td>1<em>1</em>32</td>
</tr>
<tr>
<td>inverted_residual_6 (ReLU6)</td>
<td>None,16,16,64</td>
<td>2</td>
<td>3<em>3</em>32*64</td>
</tr>
<tr>
<td>inverted_residual_7 (Linear)</td>
<td>None,16,16,64</td>
<td>1</td>
<td>1<em>1</em>64</td>
</tr>
<tr>
<td>inverted_residual_8 (Linear)</td>
<td>None,16,16,64</td>
<td>1</td>
<td>1<em>1</em>64</td>
</tr>
<tr>
<td>inverted_residual_9 (Linear)</td>
<td>None,16,16,64</td>
<td>1</td>
<td>1<em>1</em>64</td>
</tr>
<tr>
<td>inverted_residual_10 (Linear)</td>
<td>None,16,16,96</td>
<td>1</td>
<td>1<em>1</em>64*96</td>
</tr>
<tr>
<td>inverted_residual_11 (Linear)</td>
<td>None,16,16,96</td>
<td>1</td>
<td>1<em>1</em>96</td>
</tr>
<tr>
<td>inverted_residual_12 (Linear)</td>
<td>None,16,16,96</td>
<td>1</td>
<td>1<em>1</em>96</td>
</tr>
<tr>
<td>inverted_residual_13 (ReLU6)</td>
<td>None,8,8,160</td>
<td>2</td>
<td>3<em>3</em>96*160</td>
</tr>
<tr>
<td>inverted_residual_14 (Linear)</td>
<td>None,8,8,160</td>
<td>1</td>
<td>1<em>1</em>160</td>
</tr>
<tr>
<td>inverted_residual_15 (Linear)</td>
<td>None,8,8,160</td>
<td>1</td>
<td>1<em>1</em>160</td>
</tr>
<tr>
<td>inverted_residual_16 (Linear)</td>
<td>None,8,8,320</td>
<td>1</td>
<td>1<em>1</em>160*320</td>
</tr>
<tr>
<td>Conv (ReLU6)</td>
<td>None,8,8,1280</td>
<td>1</td>
<td>1<em>1</em>320*1280</td>
</tr>
<tr>
<td>Global average pooling</td>
<td>None,1280</td>
<td>1</td>
<td>Pool 8*8</td>
</tr>
<tr>
<td>Dropout</td>
<td>None,1280</td>
<td>1</td>
<td>Probability = 0.2</td>
</tr>
<tr>
<td>Clssifier(ReLU)</td>
<td>None,2</td>
<td>/</td>
<td>Classifier</td>
</tr>
</tbody>
</table>
<p><img src="http://gmade-studio.com/wp-content/uploads/2022/08/dl-based-classification-f3-1024x390.jpg" alt="" loading="lazy"></p>
<p><strong>Figure 3</strong> The visual structure of MobileNetV2.</p>
<p><img src="http://gmade-studio.com/wp-content/uploads/2022/08/dl-based-classification-f4.jpg" alt="" loading="lazy"></p>
<p><strong>Figure 4</strong> The performance measure of this model, including the ROC curve, AUC (0.949), and confidence intervals (0.849, 1.000).</p>
<h2 id="discussion" tabindex="-1"><a class="header-anchor" href="#discussion" aria-hidden="true">#</a> Discussion</h2>
<p>Before a clinical treatment strategy is developed, the gold standard for the differentiation of subtypes is pathological diagnosis by histological biopsy. Nevertheless, this invasive operation may increase the possibility of needle tract implantation and the metastasis of malignant tumors, as well as the risks of bleeding, infection, and damage to surrounding organs caused by puncture operations. Furthermore, the missed diagnosis rate is approximately 30% (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B21" target="_blank" rel="noopener noreferrer">Soulen, 2018<ExternalLinkIcon/></a>). An ideal renal tumor diagnosis method should avoid unnecessary damage to patients and potential risks as much as possible while ensuring high accuracy and a high detection rate, which points to the need to further improve auxiliary examination image processing technology to increase sensitivity and accuracy, as it has great prospects.</p>
<p>The accuracy and sensitivity of a manual imaging diagnosis cannot meet current clinical diagnosis and treatment needs. In addition, there is still a lack of clinical and radiological features that can accurately predict histology. The current imaging diagnostic method has significant limitations. The accuracy and sensitivity of the manual classification of PRCC/ChRCC according to existing reports are 61.8% and 84.5% (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B10" target="_blank" rel="noopener noreferrer">Sun et al., 2020<ExternalLinkIcon/></a>), which are significantly lower than those of our model. The average accuracy, sensitivity, and specificity of manual classification by our radiologists of these subtypes are 85% (90% and 80%), 100%, and 70% (80% and 60%), which are also lower than those of our model. Our MobileNet-based model also showed better efficacy than manual processing. This result provides an automated approach to the dilemma of diagnosing subtypes with radiological data and may affect the selection of surgical methods and clinical decisions.</p>
<p>As a typical DL algorithm, due to their interlayer parameter sharing characteristics and sparse connection characteristics of the model architecture, CNNs can realize the automated extraction of pixel-level image features without the need to establish and engineer large-scale features in advance, and due to the real-time nature of the model itself, features such as flexibility, associative information storage, and backpropagation algorithm change weights can achieve higher processing accuracy with manual data than traditional machine learning, prompting high-throughput automation based on the feasibility of CNN/DCNN models for imaging and omics analyses. The application of comprehensive digitized clinical data, radiological images, and pathological data has paved the way for automated processing methods based on AI for radiological data processing in the future. In recent years, various studies have started utilizing complete digital radiological and clinical data for segmentation and classification (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B22" target="_blank" rel="noopener noreferrer">Cicek et al., 2016<ExternalLinkIcon/></a>; <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B23" target="_blank" rel="noopener noreferrer">Zhou et al., 2016<ExternalLinkIcon/></a>), verifying the feasibility of this scheme. In nephrology oncology, study interests that incorporated AI started focusing on subtype classification. <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B24" target="_blank" rel="noopener noreferrer">Tanaka et al. (2020)<ExternalLinkIcon/></a>, based on the Inception-v3 CNN model and MR images, identified benign and malignant renal masses (≤4 cm) on images with an accuracy rate of 88%. Based on a CNN model and CT images, <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B25" target="_blank" rel="noopener noreferrer">Baghdadi et al. (2020)<ExternalLinkIcon/></a> identified benign renal oncocytoma and ChRCC on images with an accuracy rate of 95%. <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B26" target="_blank" rel="noopener noreferrer">Zhou et al. (2019)<ExternalLinkIcon/></a> applied transfer learning to classify benign and malignant kidney tumors with CT datasets, and the accuracy of the difference was reported to be 0.95. <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B27" target="_blank" rel="noopener noreferrer">Lee et al. (2018)<ExternalLinkIcon/></a> developed a model that combined DL and manual feature machine learning to classify specific kidney tumor types, and the accuracy was 0.77. These studies prove that the imaging differentiation of kidney tumors based on DL and dichotomy is feasible but lacks utility and requires high-performance hardware, limiting the research results to the clinic. The present models show the possibility of using a high-confidence DL-based diagnostic method for the radiological classification of PRCC/ChRCC and provide a feasible low-performance hardware program with high accuracy for different medical devices that can be applied even to a gaming laptop or a mobile workstation.</p>
<p>There were some new findings obtained during training and validation that have not been reported in research in the same field. First, according to the experimental results, we speculate that the valuable features of PRCC/ChRCC on CT images are commonly overlooked, which indicates that the fewer trainable parameters the model has, the better the accuracy it achieves. Although the feature capacity of the models is correlated linearly with the number of parameters, the number of parameters is seemingly correlated with fitting situations in a parabola. In the lightest model, ShuffleNet, performance is the worst in these coverage models. The best performance is from the MobileNetV2, with a bigger capacity of parameters than ShuffleNet. However, as the number of parameters is continuously increasing, the accuracy is decreasing (ResNet-34). Importantly, too many trainable parameters in this task can cause model under-/overfitting (ResNet-50/ResNet-101). The relation between accuracy and parameters during the classification of small datasets needs further explanation and selection. However, this interesting finding shows the importance of feature capacity assessment of datasets and the right choice of models with a suitable size before promoting performances. Finally, we noticed that extreme data augmentation has little effect on training. We tried several ways to augment and amplify datasets to increase their size, which obviously did not affect the accuracy of the validation dataset.</p>
<p>This study had two main aims: 1) to make the automated classification methods easy to use with broad applicability to provide a highly accurate method that can be used in basic health units and deployed in medical centers with low-performance hardware and 2) to combine these methods with those used in federal studies, which can be used for multicenter studies and to increase model accuracy without the need to gather all the data. The deployment of such a model in devices at health centers will promote clinical treatment. Our future goal is to migrate this processing paradigm to other RCC subtypes. Although this study provides the first automated method for the radiological classification of PRCC/ChRCC subtypes, there are still some limitations. 1) The main limitation is the lack of multicenter validation, and the other limitations include the sizes of the training, validation, and testing datasets, which will be considered in future studies. Our methods used to avoid overfitting included data augmentation and ConvBNReLU but should have been more diverse. Also, due to the limited dataset capacity, the ROC curve was unsmoothed. 2) The underutilization of digital clinical data is another limitation. The conjunctive use of clinical and radiological data can further improve the prediction accuracy. 3) The underuse of multiphase sequences could be considered another limitation of our study. In our study, we exported images based on one patient–one phase. 4) Our dataset was mainly obtained from East Asian patients, and since a population-based analysis reported that racial disparities exist between black and white people in kidney cancer (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B28" target="_blank" rel="noopener noreferrer">Chung et al., 2015<ExternalLinkIcon/></a>), the upshot of our study would have bias in the East Asian population. Multiple factors including race, gender, and age could be taken into consideration for further exploration. 5) Our validation dataset was based on a dataset from our hospital, but it was not the best choice and had a certain effect on the results of training. The ideal validation dataset should be based on three or more datasets from different institutes. The small size of the testing dataset could also have led to a controversy about the results of MobileNetV2, which need to be further tested in multiple centers. 6) Processing of datasets by experts may not be regarded as the best method. Ideally, an automated segmentation procedure contained in the pipeline may be a better choice. However, there were some barriers laid that could hardly be bypassed. We tried two proposals: individual tumor output and area output. We applied U-Net-based methods to draw ROIs and found that the methods of existing reports (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B29" target="_blank" rel="noopener noreferrer">Fabian &amp; Maier-Hein, 2019<ExternalLinkIcon/></a>; <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B31" target="_blank" rel="noopener noreferrer">Hou et al., 2019<ExternalLinkIcon/></a>; <a href="http://gmade-studio.com/blog/publications/dl-based-classification/#B30" target="_blank" rel="noopener noreferrer">Ma, 2019<ExternalLinkIcon/></a>) could not fit the need. In studies, tumor Dice scores were lower than 0.85 generally, which meant that some parts of tumor pixels could not be contained in the processed images and some radiological characters were lost unavoidably. The reason why we finally did not use this method was that this automated segmentation/classification-combined model had a performance lower than expected. Unless the method to improve the tumor Dice score obviously is developed, the automated segmentation–classification model efficiency has a rare possibility to reach the baseline of clinical application. We also tried YOLO-v3-based detection and area segmentation; however, it did not show better performances compared with existing ML-based methods, which finally led to its abandonment. Besides the technological challenges, the main reason why we did not introduce an automated segmentation into the pipeline was that in this study we focused more on the classification, and the key point was realizing the classification of subtypes with low capacity under a smaller feature engineering preprocessing and more automated processing compared with ML-based classification methods. As a challenge in DL-based radiomics, automated segmentation is our next study orientation. We are developing a possible method to realize our proposed DL-based radiological processing series, and we are also trying to integrate several models into a DL-based radiomics workstation (<a href="http://gmade-studio.com/blog/publications/dl-based-classification/#f5" target="_blank" rel="noopener noreferrer">Figure 5<ExternalLinkIcon/></a>).</p>
<p><img src="http://gmade-studio.com/wp-content/uploads/2022/08/dl-based-classification-f5-1024x683.jpg" alt="" loading="lazy"></p>
<p><strong>Figure 5</strong> A demo of a DL-based radiomics workstation (next study).</p>
<p>Overall, although there may be limitations in this study such as a small dataset and differences in races as well as in imaging single-center protocol, the research results may be biased to some extent. However, based on the result that a CNN-assisted diagnosis model with high diagnostic accuracy was developed in a single center of this study, it suggests that the AI research and development model adopted in this study has high clinical application potential in improving the accuracy of differential diagnosis of PRCC and ChRCC, at least in a single regional center. In the future, although there will be some difficult challenges in developing AI high diagnostic accuracy which was caused by some objective factors such as subtle potential differences in image feature led by the discrepancy between race and region and inability in high homogeneity in the imaging method, we still expect that the AI auxiliary renal tumor imaging diagnostic research can expand into different regions, different centers, and different races, together with bigger sample data to validate our conclusion, and can accurately classify as well as precisely and automatically segment multiple pathological types of renal tumor, with the aim of making it an auxiliary diagnostic imaging tool with wide clinical application prospects.</p>
<h2 id="conclusions" tabindex="-1"><a class="header-anchor" href="#conclusions" aria-hidden="true">#</a> Conclusions</h2>
<p>To the best of our knowledge, this study provides the first automated framework for differentiating PRCC and ChRCC that could produce reliable results. This approach may be useful in improving the radiological diagnostic accuracy of RCC and, thus, benefit patients.</p>
<h2 id="data-availability-statement" tabindex="-1"><a class="header-anchor" href="#data-availability-statement" aria-hidden="true">#</a> Data Availability Statement</h2>
<p>The original contributions presented in the study are included in the article/supplementary material. Further inquiries can be directed to the corresponding authors.</p>
<h2 id="ethics-statement" tabindex="-1"><a class="header-anchor" href="#ethics-statement" aria-hidden="true">#</a> Ethics Statement</h2>
<p>Written informed consent was obtained from the individual(s) for the publication of any potentially identifiable images or data included in this article.</p>
<h2 id="author-contributions" tabindex="-1"><a class="header-anchor" href="#author-contributions" aria-hidden="true">#</a> Author Contributions</h2>
<p>TZ and YZ: conceptualization, project administration, writing—original draft, and writing—review and editing. LH and TC: data curation, formal analysis, software, and visualization. BZ, JY, XL, RL, JB, SS, YW, SYZ, and SZ: investigation, methodology, and writing—review and editing. LW and JC: conceptualization, data curation, funding acquisition, investigation, project administration, supervision, validation, writing—original draft, and writing—review and editing. All authors contributed to the article and approved the submitted version.</p>
<h2 id="funding" tabindex="-1"><a class="header-anchor" href="#funding" aria-hidden="true">#</a> Funding</h2>
<p>This work was supported by grants from the Natural Science Foundation of Fujian Province (2019J01153) and the Startup Fund for Scientific Research, Fujian Medical University (2019QH1053).</p>
<h2 id="conflict-of-interest" tabindex="-1"><a class="header-anchor" href="#conflict-of-interest" aria-hidden="true">#</a> Conflict of Interest</h2>
<p>The authors declare that the research was conducted in the absence of any commercial or financial relationships that could be construed as a potential conflict of interest.</p>
<h2 id="publisher-s-note" tabindex="-1"><a class="header-anchor" href="#publisher-s-note" aria-hidden="true">#</a> Publisher’s Note</h2>
<p>All claims expressed in this article are solely those of the authors and do not necessarily represent those of their affiliated organizations, or those of the publisher, the editors and the reviewers. Any product that may be evaluated in this article, or claim that may be made by its manufacturer, is not guaranteed or endorsed by the publisher.</p>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
<p>Baghdadi, A., Aldhaam, N. A., Elsayed, A. S., Hussein, A. A., Cavuoto, L. A., Kauffman, E., &amp; Guru, K. A. (2020). Automated differentiation of benign renal oncocytoma and chromophobe renal cell carcinoma on computed tomography using deep learning [Article]. <em>Bju International</em>, <em>125</em>(4), 553-560. <a href="https://doi.org/10.1111/bju.14985" target="_blank" rel="noopener noreferrer">https://doi.org/10.1111/bju.14985<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/31901213/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1111/bju.14985" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=A+Baghdadi&amp;author=NA+Aldhaam&amp;author=AS+Elsayed&amp;author=AA+Hussein&amp;author=LA+Cavuoto&amp;author=E+Kauffman&amp;publication_year=2020&amp;title=Automated%20Differentiation%20of%20Benign%20Renal%20Oncocytoma%20and%20Chromophobe%20Renal%20Cell%20Carcinoma%20on%20Computed%20Tomography%20Using%20Deep%20Learning&amp;journal=BJU+Int&amp;volume=125&amp;pages=553-60" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Chung, B. I., Leow, J. J., Gelpi-Hammerschmidt, F., Wang, Y., Del Giudice, F., De, S., Chou, E. P., Song, K. H., Almario, L., &amp; Chang, S. L. (2015). Racial Disparities in Postoperative Complications After Radical Nephrectomy: A Population-based Analysis [Article]. <em>Urology</em>, <em>85</em>(6), 1411-1416. <a href="https://doi.org/10.1016/j.urology.2015.03.001" target="_blank" rel="noopener noreferrer">Redirecting<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/25881864/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1016/j.urology.2015.03.001" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=BI+Chung&amp;author=JJ+Leow&amp;author=F+Gelpi-Hammerschmidt&amp;author=Y+Wang&amp;author=F+Del%20Giudice&amp;author=S+De&amp;publication_year=2015&amp;title=Racial%20Disparities%20in%20Postoperative%20Complications%20After%20Radical%20Nephrectomy%3A%20A%20Population-Based%20Analysis&amp;journal=Urology&amp;volume=85&amp;pages=1411-6" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Çiçek, Ö., Abdulkadir, A., Lienkamp, S. S., Brox, T., &amp; Ronneberger, O. (2016). <em>3D U-Net: learning dense volumetric segmentation from sparse annotation</em>. <a href="https://doi.org/10.1007/978-3-319-46723-8_49" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-3-319-46723-8_49<ExternalLinkIcon/></a></p>
<p><a href="http://scholar.google.com/scholar_lookup?author=%C3%96+%C3%87i%C3%A7ek&amp;author=A+Abdulkadir&amp;author=SS+Lienkamp&amp;author=T+Brox&amp;author=O+Ronneberger&amp;publication_year=2016&amp;title=3d%20U-Net%3A%20Learning%20Dense%20Volumetric%20Segmentation%20From%20Sparse%20Annotation&amp;book=Proceedings+of+the+Medical+Image+Computing+and+Computer-Assisted+Intervention.+In:+Lecture+Notes+in+Computer+Science&amp;volume=9901&amp;pages=424-32" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Cruz-Roa, A., Gilmore, H., Basavanhally, A., Feldman, M., Ganesan, S., Shih, N. N. C., Tomaszewski, J., Gonzalez, F. A., &amp; Madabhushi, A. (2017). Accurate and reproducible invasive breast cancer detection in whole-slide images: A Deep Learning approach for quantifying tumor extent [Article]. <em>Scientific Reports</em>, <em>7</em>, 14, Article 46450. <a href="https://doi.org/10.1038/srep46450" target="_blank" rel="noopener noreferrer">Accurate and reproducible invasive breast cancer detection in whole-slide images: A Deep Learning approach for quantifying tumor extent | Scientific Reports<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/28418027/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1038/srep46450" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=A+Cruz-Roa&amp;author=H+Gilmore&amp;author=A+Basavanhally&amp;author=M+Feldman&amp;author=S+Ganesan&amp;author=NNC+Shih&amp;publication_year=2017&amp;title=Accurate%20and%20Reproducible%20Invasive%20Breast%20Cancer%20Detection%20in%20Whole-Slide%20Images%3A%20A%20Deep%20Learning%20Approach%20for%20Quantifying%20Tumour%20Extent&amp;journal=Sci+Rep&amp;volume=7&amp;pages=46450" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Fabian, I., &amp; Maier-Hein, K. H. (2019). An attempt at beating the 3D U-Net. <em>arXiv preprint arXiv:1908.02182</em>.</p>
<p><a href="https://doi.org/10.24926/548719.001" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=I+Fabian&amp;author=KH+.%20Maier-Hein&amp;title=An%20Attempt%20at%20Beating%20the%203D%20U-Net&amp;journal=arXiv&amp;volume=1908.02182v2%20%5Beess.IV%5D&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>He, K. M., Zhang, X. Y., Ren, S. Q., Sun, J., &amp; Ieee. (2016, Jun 27-30). Deep Residual Learning for Image Recognition.<em>IEEE Conference on Computer Vision and Pattern Recognition</em> [2016 ieee conference on computer vision and pattern recognition (cvpr)]. 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Seattle, WA.</p>
<p><a href="http://scholar.google.com/scholar_lookup?author=K+He&amp;author=X+Zhang&amp;author=S+Ren&amp;author=J+Sun&amp;title=Deep%20Residual%20Learning%20for%20Image%20Recognition&amp;book=IEEE+Conference+on+Computer+Vision+&amp;+Pattern+Recognition+IEEE+Computer+Society&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Hosny, A., Parmar, C., Quackenbush, J., Schwartz, L. H., &amp; Aerts, H. (2018). Artificial intelligence in radiology [Review]. <em>Nature Reviews Cancer</em>, <em>18</em>(8), 500-510. <a href="https://doi.org/10.1038/s41568-018-0016-5" target="_blank" rel="noopener noreferrer">Artificial intelligence in radiology | Nature Reviews Cancer<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/29777175/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1038/s41568-018-0016-5" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=A+Hosny&amp;author=C+Parmar&amp;author=J+Quackenbush&amp;author=LH+Schwartz&amp;author=HJ+Aerts&amp;publication_year=2018&amp;title=Artificial%20Intelligence%20in%20Radiology&amp;journal=Nat+Rev+Cancer&amp;volume=18&amp;pages=500-10" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Hou, X., Xie, C., Li, F., &amp; Nan, Y. (2019). Cascaded semantic segmentation for kidney and tumor. <em>Submissions to the</em>.</p>
<p><a href="https://doi.org/10.24926/548719.002" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=X+Hou&amp;author=C+Xie&amp;author=F+Li&amp;author=Y+Nan&amp;title=Cascaded%20Semantic%20Segmentation%20for%20Kidney%20and%20Tumour&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Howard, A. G., Zhu, M., Chen, B., Kalenichenko, D., Wang, W., Weyand, T., Andreetto, M., &amp; Adam, H. (2017). Mobilenets: Efficient convolutional neural networks for mobile vision applications. <em>arXiv preprint arXiv:1704.04861</em>.</p>
<p><a href="http://scholar.google.com/scholar_lookup?author=AG+Howard&amp;author=M+Zhu&amp;author=B+Chen&amp;author=D+Kalenichenko&amp;author=W+Wang&amp;author=T+Weyand&amp;publication_year=2017&amp;title=Mobilenets%3A%20Efficient%20Convolutional%20Neural%20Networks%20for%20Mobile%20Vision%20Applications&amp;journal=arXiv&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Lakhani, P., &amp; Sundaram, B. (2017). Deep Learning at Chest Radiography: Automated Classification of Pulmonary Tuberculosis by Using Convolutional Neural Networks [Article]. <em>Radiology</em>, <em>284</em>(2), 574-582. <a href="https://doi.org/10.1148/radiol.2017162326" target="_blank" rel="noopener noreferrer">https://doi.org/10.1148/radiol.2017162326<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/28436741/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1148/radiol.2017162326" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=P+Lakhani&amp;author=B+Sundaram&amp;publication_year=2017&amp;title=Deep%20Learning%20at%20Chest%20Radiography%3A%20Automated%20Classification%20of%20Pulmonary%20Tuberculosis%20by%20Using%20Convolutional%20Neural%20Networks&amp;journal=Radiology&amp;volume=284&amp;pages=574-82" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Lee, H., Hong, H., Kim, J., &amp; Jung, D. C. (2018). Deep feature classification of angiomyolipoma without visible fat and renal cell carcinoma in abdominal contrast-enhanced CT images with texture image patches and hand-crafted feature concatenation [Article]. <em>Medical Physics</em>, <em>45</em>(4), 1550-1561. <a href="https://doi.org/10.1002/mp.12828" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/mp.12828<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/29474742/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1002/mp.12828" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=H+Lee&amp;author=H+Hong&amp;author=J+Kim&amp;author=DC+Jung&amp;publication_year=2018&amp;title=Deep%20Feature%20Classification%20of%20Angiomyolipoma%20Without%20Visible%20Fat%20and%20Renal%20Cell%20Carcinoma%20in%20Abdominal%20Contrast-%20Enhanced%20CT%20Images%20With%20Texture%20Image%20Patches%20and%20Hand-%20Crafted%20Feature%20Concatenation&amp;journal=Med+Phys&amp;volume=45&amp;pages=1550-61" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Lehman, C. D., Yala, A., Schuster, T., Dontchos, B., Bahl, M., Swanson, K., &amp; Barzilay, R. (2019). Mammographic Breast Density Assessment Using Deep Learning: Clinical Implementation [Article]. <em>Radiology</em>, <em>290</em>(1), 52-58. <a href="https://doi.org/10.1148/radiol.2018180694" target="_blank" rel="noopener noreferrer">https://doi.org/10.1148/radiol.2018180694<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/30325282/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1148/radiol.2018180694" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=CD+Lehman&amp;author=A+Yala&amp;author=T+Schuster&amp;author=B+Dontchos&amp;author=M+Bahl&amp;author=K+Swanson&amp;publication_year=2018&amp;title=Mammographic%20Breast%20Density%20Assessment%20Using%20Deep%20Learning%3A%20Clinical%20Implementation&amp;journal=Radiology&amp;volume=290&amp;pages=52-8" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Li, Y., Luo, Q. Y., Li, Z., Wang, Y., Zhu, C. Y., Li, T. Q., &amp; Li, X. D. (2020). Long Non-coding RNAIRAINInhibits VEGFA Expression via Enhancing Its DNA Methylation Leading to Tumor Suppression in Renal Carcinoma [Article]. <em>Frontiers in Oncology</em>, <em>10</em>, 14, Article 1082. <a href="https://doi.org/10.3389/fonc.2020.01082" target="_blank" rel="noopener noreferrer">https://doi.org/10.3389/fonc.2020.01082<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/32983957/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.3389/fonc.2020.01082" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=Y+Li&amp;author=Q+Luo&amp;author=Z+Li&amp;author=Y+Wang&amp;author=C+Zhu&amp;author=T+Li&amp;publication_year=2020&amp;title=Long%20Non-Coding%20RNA%20IRAIN%20Inhibits%20VEGFA%20Expression%20via%20Enhancing%20Its%20DNA%20Methylation%20Leading%20to%20Tumour%20Suppression%20in%20Renal%20Carcinoma&amp;journal=Front+Oncol&amp;volume=10&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Linehan, W. M., Spellman, P. T., Ricketts, C. J., Creighton, C. J., Fei, S. S., Davis, C., Wheeler, D. A., Murray, B. A., Schmidt, L., Vocke, C. D., Peto, M., Al Mamun, A. A. M., Shinbrot, E., Sethi, A., Brooks, S., Rathmell, W. K., Brooks, A. N., Hoadley, K. A., Robertson, A. G., . . . Canc Genome Atlas Res, N. (2016). Comprehensive Molecular Characterization of Papillary Renal-Cell Carcinoma [Article]. <em>New England Journal of Medicine</em>, <em>374</em>(2), 135-145. <a href="https://doi.org/10.1056/NEJMoa1505917" target="_blank" rel="noopener noreferrer">Comprehensive Molecular Characterization of Papillary Renal-Cell Carcinoma | NEJM<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/26536169/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1056/NEJMoa1505917" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=WM+Linehan&amp;author=PT+Spellman&amp;author=CJ+Ricketts&amp;author=CJ+Creighton&amp;author=SS+Fei&amp;author=C+Davis&amp;publication_year=2016&amp;title=Comprehensive%20Molecular%20Characterization%20of%20Papillary%20Renal-Cell%20Carcinoma&amp;journal=N+Engl+J+Med&amp;volume=374&amp;pages=135" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Litjens, G., Kooi, T., Bejnordi, B. E., Setio, A. A. A., Ciompi, F., Ghafoorian, M., van der Laak, J., van Ginneken, B., &amp; Sanchez, C. I. (2017). A survey on deep learning in medical image analysis [Article]. <em>Medical Image Analysis</em>, <em>42</em>, 60-88. <a href="https://doi.org/10.1016/j.media.2017.07.005" target="_blank" rel="noopener noreferrer">Redirecting<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/28778026/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1016/j.media.2017.07.005" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=G+Litjens&amp;author=T+Kooi&amp;author=BE+Bejnordi&amp;author=AAA+Setio&amp;author=F+Ciompi&amp;author=M+Ghafoorian&amp;publication_year=2017&amp;title=A%20Survey%20on%20Deep%20Learning%20in%20Medical%20Image%20Analysis&amp;journal=Med+Image+Anal&amp;volume=42&amp;pages=60" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Ljungberg, B., Albiges, L., Abu-Ghanem, Y., Bensalan, K., Dabestani, S., Montes, S. F. P., Giles, R. H., Hofmann, F., Hora, M., Kuczyk, M. A., Kuusk, T., Lam, T. B., Marconi, L., Merseburger, A. S., Powles, T., Staehler, M., Tahbaz, R., Volpe, A., &amp; Bex, A. (2019). European Association of Urology Guidelines on Renal Cell Carcinoma: The 2019 Update [Article]. <em>European Urology</em>, <em>75</em>(5), 799-810. <a href="https://doi.org/10.1016/j.eururo.2019.02.011" target="_blank" rel="noopener noreferrer">Redirecting<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/30803729/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1016/j.eururo.2019.02.011" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=B+Ljungberg&amp;author=L+Albiges&amp;author=Y+Abu-Ghanem&amp;author=K+Bensalah&amp;author=S+Dabestani&amp;author=S+Fern%C3%A1ndez-Pello&amp;publication_year=2019%20&amp;title=European%20Association%20of%20Urology%20Guidelines%20on%20Renal%20Cell%20Carcinoma%3A%20The%202019%20Update&amp;journal=Eur+Urol&amp;volume=75&amp;pages=799" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Ma, J. (2019). Solution to the kidney tumor segmentation challenge 2019.</p>
<p><a href="https://doi.org/10.24926/548719.005" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=J+Ma&amp;publication_year=2019&amp;title=Solution%20to%20the%20Kidney%20Tumour%20Segmentation%20Challenge%202019%5BC%5D%2F%2F&amp;journal=2019+Kidney+Tumour+Segmentation+Challenge:+KiTS19&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Ma, N., Zhang, X., Zheng, H.-T., &amp; Sun, J. (2018). Shufflenet v2: Practical guidelines for efficient cnn architecture design. Proceedings of the European conference on computer vision (ECCV),. Cham: Springer (2018).</p>
<p><a href="http://scholar.google.com/scholar_lookup?author=N+Ma&amp;author=X+Zhang&amp;author=H-T+Zheng&amp;author=J+Sun&amp;publication_year=2018&amp;title=ShuffleNet%20V2%3A%20Practical%20Guidelines%20for%20Efficient%20CNN%20Architecture%20Design&amp;book=European+Conference+on+Computer+Vision&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Moch, H., Cubilla, A. L., Humphrey, P. A., Reuter, V. E., &amp; Ulbright, T. M. (2016). The 2016 WHO Classification of Tumours of the Urinary System and Male Genital Organs-Part A: Renal, Penile, and Testicular Tumours [Article]. <em>European Urology</em>, <em>70</em>(1), 93-105. <a href="https://doi.org/10.1016/j.eururo.2016.02.029" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.eururo.2016.02.029<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/26935559/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1016/j.eururo.2016.02.029" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=H+Moch&amp;author=AL+Cubilla&amp;author=PA+Humphrey&amp;author=VE+Reuter&amp;author=TM+Ulbright&amp;publication_year=2016&amp;title=The%202016%20WHO%20Classification%20of%20Tumours%20of%20the%20Urinary%20System%20and%20Male%20Genital%20Organs-Part%20A%3A%20Renal%2C%20Penile%2C%20and%20Testicular%20Tumours&amp;journal=Eur+Urol&amp;volume=70&amp;pages=93" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Richard, P. O., Jewett, M. A. S., Bhatt, J. R., Kachura, J. R., Evans, A. J., Zlotta, A. R., Hermanns, T., Juvet, T., &amp; Finelli, A. (2015). Renal Tumor Biopsy for Small Renal Masses: A Single-center 13-year Experience [Article]. <em>European Urology</em>, <em>68</em>(6), 1007-1013. <a href="https://doi.org/10.1016/j.eururo.2015.04.004" target="_blank" rel="noopener noreferrer">Redirecting<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/25900781/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1016/j.eururo.2015.04.004" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=PO+Richard&amp;author=MAS+Jewett&amp;author=JR+Bhatt&amp;author=JR+Kachura&amp;author=AJ+Evans&amp;author=AR+Zlotta&amp;publication_year=2015&amp;title=Renal%20Tumour%20Biopsy%20for%20Small%20Renal%20Masses%3A%20A%20Single-Center%2013-Year%20Experience&amp;journal=Eur+Urol&amp;volume=68&amp;pages=1007-13" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Rossi, S. H., Prezzi, D., Kelly-Morland, C., &amp; Goh, V. (2018). Imaging for the diagnosis and response assessment of renal tumours [Review]. <em>World Journal of Urology</em>, <em>36</em>(12), 1927-1942. <a href="https://doi.org/10.1007/s00345-018-2342-3" target="_blank" rel="noopener noreferrer">Imaging for the diagnosis and response assessment of renal tumours | SpringerLink<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/29948048/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1007/s00345-018-2342-3" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=SH+Rossi&amp;author=D+Prezzi&amp;author=C+Kelly-Morland&amp;author=V+Goh&amp;publication_year=2018&amp;title=Imaging%20for%20the%20Diagnosis%20and%20Response%20Assessment%20of%20Renal%20Tumours&amp;journal=World+J+Urol&amp;volume=36&amp;pages=1927-42" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Soulen, M. C. (2018). Small Renal Masses: Challenges for the Radiologist [Editorial Material]. <em>Radiology</em>, <em>288</em>(1), 91-92. <a href="https://doi.org/10.1148/radiol.2018180602" target="_blank" rel="noopener noreferrer">https://doi.org/10.1148/radiol.2018180602<ExternalLinkIcon/></a></p>
<p><a href="https://doi.org/10.1148/radiol.2018180602" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=MC+Soulen&amp;publication_year=2018&amp;title=Small%20Renal%20Masses%3A%20Challenges%20for%20the%20Radiologist&amp;journal=Radiol&amp;volume=288&amp;pages=91-2" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Sun, X. Y., Feng, Q. X., Xu, X., Zhang, J., Zhu, F. P., Yang, Y. H., &amp; Zhang, Y. D. (2020). Radiologic-Radiomic Machine Learning Models for Differentiation of Benign and Malignant Solid Rena Masses: Comparison With Expert-Level Radiologists [Article]. <em>American Journal of Roentgenology</em>, <em>214</em>(1), W44-W54. <a href="https://doi.org/10.2214/ajr.19.21617" target="_blank" rel="noopener noreferrer">https://doi.org/10.2214/ajr.19.21617<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/31553660/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.2214/AJR.19.21617" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=XY+Sun&amp;author=QX+Feng&amp;author=X+Xu&amp;author=J+Zhang&amp;author=F-P+Zhu&amp;author=Y-H+Yang&amp;publication_year=2020&amp;title=Radiologic-Radiomic%20Machine%20Learning%20Models%20for%20Differentiation%20of%20Benign%20and%20Malignant%20Solid%20Renal%20Masses%3A%20Comparison%20With%20Expert-Level%20Radiologists&amp;journal=AJR+Am+J+Roentgenol&amp;volume=214&amp;pages=W44-54" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Tan, M. X., &amp; Le, Q. V. (2019, Jun 09-15). EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks.<em>Proceedings of Machine Learning Research</em> [International conference on machine learning, vol 97]. 36th International Conference on Machine Learning (ICML), Long Beach, CA.</p>
<p><a href="http://scholar.google.com/scholar_lookup?author=M+Tan&amp;author=QV+Le&amp;publication_year=2019&amp;title=EfficientNet%3A%20Rethinking%20Model%20Scaling%20for%20Convolutional%20Neural%20Networks&amp;book=arXiv&amp;" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Tanaka, T., Huang, Y., Marukawa, Y., Tsuboi, Y., Masaoka, Y., Kojima, K., Iguchi, T., Hiraki, T., Gobara, H., Yanai, H., Nasu, Y., &amp; Kanazawa, S. (2020). Differentiation of Small (&lt;= 4 cm) Renal Masses on Multiphase Contrast-Enhanced CT by Deep Learning [Article]. <em>American Journal of Roentgenology</em>, <em>214</em>(3), 605-612. <a href="https://doi.org/10.2214/ajr.19.22074" target="_blank" rel="noopener noreferrer">https://doi.org/10.2214/ajr.19.22074<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/31913072/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.2214/AJR.19.22074" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=T+Tanaka&amp;author=Y+Huang&amp;author=Y+Marukawa&amp;author=Y+Tsuboi&amp;author=Y+Masaoka&amp;author=K+Kojima&amp;publication_year=2020&amp;title=Differentiation%20of%20Small%20%28%E2%89%A4%204%20Cm%29%20Renal%20Masses%20on%20Multiphase%20Contrast-Enhanced%20CT%20by%20Deep%20Learning%20%5BPublished%20Correction%20Appears%20in%20AJR%20Am%20J%20Roentgenol&amp;journal=AJR+Am+J+Roentgenol&amp;volume=214&amp;pages=605-12" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Turajlic, S., Swanton, C., &amp; Boshoff, C. (2018). Kidney cancer: The next decade [Editorial Material]. <em>Journal of Experimental Medicine</em>, <em>215</em>(10), 2477-2479. <a href="https://doi.org/10.1084/jem.20181617" target="_blank" rel="noopener noreferrer">Kidney cancer: The next decade | Journal of Experimental Medicine | Rockefeller University Press<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/30217855/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1084/jem.20181617" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=S+Turajlic&amp;author=C+Swanton&amp;author=C+Boshoff&amp;publication_year=2018&amp;title=Kidney%20Cancer%3A%20The%20Next%20Decade&amp;journal=J+Exp+Med&amp;volume=215&amp;pages=2477-9" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Wang, D., Huang, X. Y., Bai, L. C., Zhang, X. L., Wei, J. Y., &amp; Zhou, J. L. (2020). Differential diagnosis of chromophobe renal cell carcinoma and papillary renal cell carcinoma with dual-energy spectral computed tomography [Article]. <em>Acta Radiologica</em>, <em>61</em>(11), 1562-1569, Article 0284185120903447. <a href="https://doi.org/10.1177/0284185120903447" target="_blank" rel="noopener noreferrer">Differential diagnosis of chromophobe renal cell carcinoma and papillary renal cell carcinoma with dual-energy spectral computed tomography - Dan Wang, Xiaoyu Huang, Liangcai Bai, Xueling Zhang, Jinyan Wei, Junlin Zhou, 2020<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/32088966/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1177/0284185120903447" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=D+Wang&amp;author=X+Huang&amp;author=L+Bai&amp;author=X+Zhang&amp;author=J+Wei&amp;author=J+Zhou&amp;publication_year=2020&amp;title=Differential%20Diagnosis%20of%20Chromophobe%20Renal%20Cell%20Carcinoma%20and%20Papillary%20Renal%20Cell%20Carcinoma%20With%20Dual-Energy%20Spectral%20Computed%20Tomography&amp;journal=Acta+Radiol&amp;volume=61&amp;pages=1562-9" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Yang, Y., Xie, L., Zheng, J. L., Tan, Y. T., Zhang, W., &amp; Xiang, Y. B. (2013). Incidence Trends of Urinary Bladder and Kidney Cancers in Urban Shanghai, 1973-2005 [Article]. <em>Plos One</em>, <em>8</em>(12), 9, Article e82430. <a href="https://doi.org/10.1371/journal.pone.0082430" target="_blank" rel="noopener noreferrer">https://doi.org/10.1371/journal.pone.0082430<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/24324788/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1371/journal.pone.0082430" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=Y+Yang&amp;author=L+Xie&amp;author=JL+Zheng&amp;author=YT+Tan&amp;author=W+Zhang&amp;author=YB+Xiang&amp;publication_year=2013&amp;title=Incidence%20Trends%20of%20Urinary%20Bladder%20and%20Kidney%20Cancers%20in%20Urban%20Shanghai%2C%201973-2005&amp;journal=PLoS+One&amp;volume=8&amp;pages=e82430" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Yasaka, K., Akai, H., Abe, O., &amp; Kiryu, S. (2018). Deep Learning with Convolutional Neural Network for Differentiation of Liver Masses at Dynamic Contrast-enhanced CT: A Preliminary Study [Article]. <em>Radiology</em>, <em>286</em>(3), 899-908. <a href="https://doi.org/10.1148/radiol.2017170706" target="_blank" rel="noopener noreferrer">Deep Learning with Convolutional Neural Network for Differentiation of Liver Masses at Dynamic Contrast-enhanced CT: A Preliminary Study | Radiology<ExternalLinkIcon/></a></p>
<p><a href="https://pubmed.ncbi.nlm.nih.gov/29059036/" target="_blank" rel="noopener noreferrer">PubMed Abstract<ExternalLinkIcon/></a> | <a href="https://doi.org/10.1148/radiol.2017170706" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=K+Yasaka&amp;author=H+Akai&amp;author=O+Abe&amp;author=S+Kiryu&amp;publication_year=2017&amp;title=Deep%20Learning%20With%20Con-%20Volutional%20Neural%20Network%20for%20Differentiation%20of%20Liver%20Masses%20at%20Dynamic%20Contrast-Enhanced%20CT%3A%20A%20Preliminary%20Study&amp;journal=Radiology&amp;volume=286&amp;pages=887-96" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Zhou, L. L., Zhang, Z. H., Chen, Y. C., Zhao, Z. Y., Yin, X. D., &amp; Jiang, H. B. (2019). A Deep Learning-Based Radiomics Model for Differentiating Benign and Malignant Renal Tumors [Article]. <em>Translational Oncology</em>, <em>12</em>(2), 292-300. <a href="https://doi.org/10.1016/j.tranon.2018.10.012" target="_blank" rel="noopener noreferrer">Redirecting<ExternalLinkIcon/></a></p>
<p><a href="https://doi.org/10.1016/j.tranon.2018.10.012" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=L+Zhou&amp;author=Z+Zhang&amp;author=Y-C+Chen&amp;author=Z-Y+Zhao&amp;author=X-D+Yin&amp;author=H-B+Jiang&amp;publication_year=2019&amp;title=A%20Deep%20Learning-Based%20Radiomics%20Model%20for%20Differentiating%20Benign%20and%20Malignant%20Renal%20Tumours&amp;journal=Translationaloncology&amp;volume=12&amp;pages=292" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
<p>Zhou, X. R., Ito, T., Takayama, R., Wang, S., Hara, T., &amp; Fujita, H. (2016, Oct 21). Three-Dimensional CT Image Segmentation by Combining 2D Fully Convolutional Network with 3D Majority Voting.<em>Lecture Notes in Computer Science</em> [Deep learning and data labeling for medical applications]. 2nd International Workshop on Deep Learning in Medical Image Analysis (DLMIA) / 1st International Workshop on Large-Scale Annotation of Biomedical Data and Expert Label Synthesis (LABELS), Athens, GREECE.</p>
<p><a href="https://doi.org/10.1007/978-3-319-46976-8_12" target="_blank" rel="noopener noreferrer">CrossRef Full Text<ExternalLinkIcon/></a> | <a href="http://scholar.google.com/scholar_lookup?author=X+Zhou&amp;author=T+Ito&amp;author=R+Takayama&amp;author=S+Wang&amp;author=T+Hara&amp;author=H+Fujita&amp;publication_year=2016&amp;title=Threedimensional%20CT%20Image%20Segmentation%20by%20Combining%202D%20Fully%20Convolutional%20Network%20With%203D%20Majority%20Voting&amp;journal=In:+Proc+Deep+Learn+Med+Image+Anal+(DLMIA)+In:+Lecture+Notes+Comput+Sci&amp;volume=10%200%2008&amp;pages=111-20" target="_blank" rel="noopener noreferrer">Google Scholar<ExternalLinkIcon/></a></p>
</div></template>


