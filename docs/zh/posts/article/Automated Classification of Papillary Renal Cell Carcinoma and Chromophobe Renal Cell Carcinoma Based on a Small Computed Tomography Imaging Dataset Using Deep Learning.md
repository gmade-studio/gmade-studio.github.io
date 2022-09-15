---
icon: edit
date: 2021-12-01
category:
  - DL-based RCC Radiomics
tag:
  - cancer image classification
  - convolutional neural network

copyright: Copyright © 2022 Gmade Studio
footer: 闽公网安备 35082202820079号| 闽ICP备2022010448号 
---

# Automated Classification of Papillary Renal Cell Carcinoma and Chromophobe Renal Cell Carcinoma Based on a Small Computed Tomography Imaging Dataset Using Deep Learning

 Teng Zuo1, Yanhua Zheng1, Lingfeng He2, Tao Chen3, Bin Zheng4, Song Zheng1, Jinghang You5, Xiaoyan Li6, Rong Liu1, Junjie Bai1, Shuxin Si1, Yingying Wang7, Shuyi Zhang8, Lili Wang4* and Jianhui Chen1*

1. Department of Urology, Fujian Medical University Union Hospital, Fuzhou, China

2.  Institute for Empirical Social Science Research, Xi’an Jiaotong University, Xi’an, China  

3. School of Statistics and Mathematics, Central University of Finance and Economics, Beijing, China  

4. School of Electrical and Computer Engineering, University of Oklahoma, Norman, OK, United States  

5.  Department of Radiology, Fujian Medical University Union Hospital, Fuzhou, China

6. Department of Pathology, Fujian Medical University Union Hospital, Fuzhou, China

7. School of Medicine, Fujian Medical University, Fuzhou, China  

8. School of Medicine, Xiamen University, Xiamen, China

**Objectives:** This study was conducted in order to design and develop a framework utilizing deep learning (DL) to differentiate papillary renal cell carcinoma (PRCC) from chromophobe renal cell carcinoma (ChRCC) using convolutional neural networks (CNNs) on a small set of computed tomography (CT) images and provide a feasible method that can be applied to light devices.

**Methods:** Training and validation datasets were established based on radiological, clinical, and pathological data exported from the radiology, urology, and pathology departments. As the gold standard, reports were reviewed to determine the pathological subtype. Six CNN-based models were trained and validated to differentiate the two subtypes. A special test dataset generated with six new cases and four cases from The Cancer Imaging Archive (TCIA) was applied to validate the efficiency of the best model and of the manual processing by abdominal radiologists. Objective evaluation indexes [accuracy, sensitivity, specificity, receiver operating characteristic (ROC) curve, and area under the curve (AUC)] were calculated to assess model performance.

**Results:** The CT image sequences of 70 patients were segmented and validated by two experienced abdominal radiologists. The best model achieved 96.8640% accuracy (99.3794% sensitivity and 94.0271% specificity) in the validation set and 100% (case accuracy) and 93.3333% (image accuracy) in the test set. The manual classification achieved 85% accuracy (100% sensitivity and 70% specificity) in the test set.

**Conclusions:** This framework demonstrates that DL models could help reliably predict the subtypes of PRCC and ChRCC.

**Keywords:** CNN—convolutional neural network, PRCC, papillary renal cell carcinoma, ChRCC,·chromophobe-primary renal cell carcinoma, cancer image classification

**Download PDF:** [Download from Publisher](https://www.frontiersin.org/articles/10.3389/fonc.2021.746750/full)

## Introduction

With the continuous advancement of imaging technology and increasing awareness of the public for early cancer screening, the detection rate of renal masses is increasing ([Richard et al., 2015](http://gmade-studio.com/blog/publications/dl-based-classification/#B1)). In China, most renal masses are kidney cancer. The incidence of kidney cancer in the Chinese population continues to increase ([Yang et al., 2013](http://gmade-studio.com/blog/publications/dl-based-classification/#B2)). Existing methods can meet the need to distinguish clear cell carcinoma from non-clear cell carcinoma. However, the differentiation between subtypes of non-clear carcinoma may be difficult because of the lack of a quantitative evaluation of images, especially from the early-stage cancers, which usually present atypically ([Rossi et al., 2018](http://gmade-studio.com/blog/publications/dl-based-classification/#B3)). Papillary renal cell carcinoma (PRCC) and chromophobe renal cell carcinoma (ChRCC) are the most common types of non-clear cell carcinoma and are characterized by a unique molecular morphology ([Li et al., 2020](http://gmade-studio.com/blog/publications/dl-based-classification/#B4)). PRCC is associated with activating germline mutations in MET (type I) and activation of the NRF2–ARE pathway (type II) ([Linehan et al., 2016](http://gmade-studio.com/blog/publications/dl-based-classification/#B5)). Typical genetic changes in ChRCC are deletions of chromosomes Y, 1, 2, 6, 10, 13, 17, and 21 ([Moch et al., 2016](http://gmade-studio.com/blog/publications/dl-based-classification/#B6)). The differences in originating factors and driver genes between the two subtypes lead to different treatment options and prognoses ([Ljungberg et al., 2019](http://gmade-studio.com/blog/publications/dl-based-classification/#B8); [Turajlic et al., 2018](http://gmade-studio.com/blog/publications/dl-based-classification/#B7)). There is some differentiation between PRCC and ChRCC in imaging findings: PRCC presents as cysts, necrosis, and calcification, while ChRCC presents as central wheel-shape enhancement ([Wang et al., 2020](http://gmade-studio.com/blog/publications/dl-based-classification/#B9)). In low stage or small size masses, however, these characteristics mentioned above are atypical, which usually cause a difficult diagnosis. In addition, according to previous reports ([Sun et al., 2020](http://gmade-studio.com/blog/publications/dl-based-classification/#B10)), the accuracy and sensitivity of the manual classification of PRCC/ChRCC are 61.8% and 84.5%, respectively, which cannot meet this need. Therefore, in the clinic, it is difficult to provide a highly accurate manual subtype differentiation between PRCC and ChRCC, and this remains to be a challenge.

Recently, with the rapid development of computer hardware and deep learning (DL) theory, artificial intelligence (AI) has been widely applied in radiological image processing for classification and is rapidly developing ([Hosny et al., 2018](http://gmade-studio.com/blog/publications/dl-based-classification/#B11)). Notably, the efficacy of DL-based models for the radiological diagnosis of several tumors [e.g., breast cancer ([Lehman et al., 2019](http://gmade-studio.com/blog/publications/dl-based-classification/#B12)), liver cancer ([Yasaka et al., 2018](http://gmade-studio.com/blog/publications/dl-based-classification/#B13)), and lung masses ([Lakhani & Sundaram, 2017](http://gmade-studio.com/blog/publications/dl-based-classification/#B14))] is superior to that of manual processing according to previous studies ([Cruz-Roa et al., 2017](http://gmade-studio.com/blog/publications/dl-based-classification/#B15)). Convolutional neural networks (CNNs) and improved models have been widely used for medical image processing ([Litjens et al., 2017](http://gmade-studio.com/blog/publications/dl-based-classification/#B16)). DL-based oncological radiological characterization has shown value in medical fields ([Cruz-Roa et al., 2017](http://gmade-studio.com/blog/publications/dl-based-classification/#B15); [Hosny et al., 2018](http://gmade-studio.com/blog/publications/dl-based-classification/#B11); [Litjens et al., 2017](http://gmade-studio.com/blog/publications/dl-based-classification/#B16)). CNNs and their improved models are currently one of the hot spots in the field of medical image processing. Image processing based on this type of model for assisting in renal tumor examinations has achieved promising results and suggests the possibility of solving the challenges associated with the radiological differentiation of PRCC and ChRCC.

In this study, DL was utilized to classify PRCC and ChRCC from computed tomography (CT) datasets. The current study aimed to exploit DL-based models for renal cell carcinoma subtype classification based on small datasets so that the classification can be implemented in some scenarios without high-performance hardware or shortage of rare subtypes cases, to better promote the accuracy of radiological diagnosis.

## Methods

Institutional review board approval was obtained. The requirement for written informed patient consent was waived. A retrospective review of PRCC and ChRCC patients at Fujian Medical University Union Hospital was performed between 2012 and 2021. Ethical approval was obtained from the Institutional Ethics Committee of Fujian Medical University Union Hospital (No. 2021WSJK033). According to the Helsinki Declaration, all patients (or their legal clients) provided written informed consent before obtaining their clinical, radiological, and pathological data. The framework used to develop an automated method for the differentiation of these two subtypes was comprised of two phases ([Figure 1](http://gmade-studio.com/blog/publications/dl-based-classification/#f1)): 1) CT scan data, clinical data, and pathological data were gathered and digitized, followed by tumor lesion segmentation and labeling by experts in the radiology department (dataset establishment); and 2) training neural networks; assessing the accuracy, sensitivity, and specificity of the models; and verifying model efficiency through comparison with the pathological diagnosis of new cases (subtype classification).

![](https://www.frontiersin.org/files/Articles/746750/fonc-11-746750-HTML-r1/image_m/fonc-11-746750-g001.jpg)

**Figure 1** Flowchart of automated PRCC/ChRCC classification using computer vision.

### Phase 1

#### Dataset Establishment

Patients with a pathological diagnosis obtained by biopsy or surgical resection were included in this study. In addition, 80 patients with available arterial/cortical/nephrogenic phase CT image sequences were reviewed (42 with PRCC and 38 with ChRCC). After randomly selecting 6 cases (3 PRCCs and 3 ChRCCs) for testing sets, the images of 74 tumors (39 PRCCs and 35 ChRCCs) were used to build the datasets. The CT images were obtained using various radiology scanners and non-standard protocols. Arterial phase sequences were preferred when multiple phases existed. Whole sequences were retrieved and exported utilizing the hospital radiological database. The window settings were 40 HU (width) and 400 HU (level). Based on the clinical and pathological data, ROIs of sequences were segmented, labeled, and exported with ITK-SNAP by two abdominal radiologists who have experience of more than 10 years in the diagnosis of urinary system tumor. After cross-validation, images that were exported in.jpg size included 857 images of ChRCCs and 997 images of PRCCs. Labeling was applied in the non-graphical layer so that each slice filename contained the case number, gender, age, and histological subtypes. After resizing, images comprised matrices with 256 * 256 pixels in the axial planes. The dataset was divided into the training set and validation set (90% for the training set and 10% for the validation set).

### Phase 2

#### Subtype Classification

##### Model Training and Validation

Six pop models [MobileNetV2 ([Howard et al., 2017](http://gmade-studio.com/blog/publications/dl-based-classification/#B17)), EfficientNet ([Tan & Le, 2019](http://gmade-studio.com/blog/publications/dl-based-classification/#B18)), ShuffleNet ([Ma et al., 2018](http://gmade-studio.com/blog/publications/dl-based-classification/#B19)), ResNet-34, ResNet-50, and ResNet-101 ([He et al., 2016](http://gmade-studio.com/blog/publications/dl-based-classification/#B20))] were adapted for dichotomy based on TensorFlow 2.4.12. Preprocessing involved normalization and augmentation (including Gaussian blur, rotation, flipping, brighter, and darker) ([Figure 2](http://gmade-studio.com/blog/publications/dl-based-classification/#f2)). In addition to data augmentation, ConvBNReLU (convolution + batch normalization + ReLU) was applied to avoid overfitting. The learning rate was initially set as 0.005 and was optimized by the Adaptive Moment Estimation (ADAM) optimization algorithm in every training phase. The batch size was set as 24. For model training, a desktop workstation with an Intel® Xeon® E5-2678 v3 CPU and an NVIDIA GeForce RTX 2080Ti (11 GB) GPU was used. A list of model parameters, training results, and validation/accuracy results is provided in [Table 1](http://gmade-studio.com/blog/publications/dl-based-classification/#t1).

![](https://www.frontiersin.org/files/Articles/746750/fonc-11-746750-HTML-r1/image_m/fonc-11-746750-g002.jpg)

**Figure 2** An example of data augmentation processing. Based on the geometric transformations (rotation and flipping), the Gaussian blur, brighter, and darker were applied, which finally achieved 15× amplification.

**Table 1** The results of CNN-based networks for classification task training and validation and the testing results of the models.

| **Models**   | **Parameters**                        | **Best validation accuracy** | **Testing Results**                                         |
| ------------ | ------------------------------------- | ---------------------------- | ----------------------------------------------------------- |
| MobileNetV2  | Total: 2,261,827 Trainable:2,226,434  | 96.8640%                     | Accuracy:100% Sensitivity:100% Specificity:100%             |
| ShuffleNet   | Total:1,272,859 Trainalbe:1,256,679   | 97.3074%                     | Accuracy:83.3334% Sensitivity:92.3077% Specificity:72.7273% |
| EfficientNet | Total:4,053,414 Trainable:4,011,391   | Cannot converge              | NA                                                          |
| ResNet-34    | Total:21,829,058 Trainable:21,812,034 | 93.6404%                     | Accuracy:91.6667% Sensitivity:84.6154% Specificity:100%     |
| ResNet-50    | Total:25,662,403 Trainable:25,609,283 | Cannot converge              | NA                                                          |
| ResNet-101   | Total:44,706,755 Trainalbe:44,601,411 | Cannot converge              | NA                                                          |

##### Model Selection and Testing

Based on the results of the training step, MobileNetV2, ShuffleNet, and ResNet-34 were selected as the testing models. A special test set of PRCC/ChRCC samples was established in two parts ([Table 2](http://gmade-studio.com/blog/publications/dl-based-classification/#t2)): 1) reviewing the new cases in 2021, including six patients (three with PRCC, three with ChRCC); and 2) reviewing cases in The Cancer Imaging Archive (TCIA) datasets, including four patients (two with PRCC from the TCGA-KIRP dataset, two with ChRCC from the TCGA-KICH dataset). Slices were processed by abdominal radiologists, and for each case, three photographs were selected randomly. To assess efficiency from different views, two accuracy values were calculated. 1) Case accuracy: if correctly identified photographs were >2, this case was regarded as correctly identified. Case accuracy was used to reflect the percentage of correct cases. 2) Sample accuracy: this was used to show the proportion of correct images among all images. The accuracy, sensitivity, and specificity of these models were computed. In order to show the efficiency of manual processing, two radiologists were invited to distinguish these cases. Objective measure indexes of manual prediction were also calculated.

**Table 2** Information of test sets, comparison result of automated model prediction, and the result of model performance in the validation dataset.
![](https://www.frontiersin.org/files/Articles/746750/fonc-11-746750-HTML-r1/image_m/fonc-11-746750-t002.jpg)

## Results

The model based on MobileNetV2 ([Table 3](http://gmade-studio.com/blog/publications/dl-based-classification/#t3) and [Figure 3](http://gmade-studio.com/blog/publications/dl-based-classification/#f3)) performed best for tumor subtype diagnosis. The automated method achieved 96.8640% accuracy in the validation dataset (99.3794% sensitivity, 94.0271% specificity). Due to all correctly matching, case accuracy, case sensitivity, and case specificity were all achieved 100%. For every single photograph, image accuracy achieved 93.3333% in the testing dataset (88.2353% sensitivity and 86.6667% specificity). The AUC was 0.9489, and the *p*-value was less than 0.001. Resource occupancy was less while training and predicting (less than 10 GB of accelerated graphics memory occupied), which means that this model can be applied to low-performance hardware. The manual method achieved 85% accuracy (100% sensitivity, 70% specificity) in the testing dataset. The results are provided in [Table 2](http://gmade-studio.com/blog/publications/dl-based-classification/#t2) and [Figure 4](http://gmade-studio.com/blog/publications/dl-based-classification/#f4).

**Table 3** The structure of MobileNetV2.

| **Layer(Funtions)**           | **Output Shape** | **Stride** | **Filter shape**  |
| ----------------------------- | ---------------- | ---------- | ----------------- |
| Input Layer                   | None,256,256,3   | /          | /                 |
| Conv1 (Conv+BN+ReLU6)         | None,128,128,32  | 2          | 3*3*32            |
| inverted_residual (Linear)    | None,128,128,16  | 1          | 1*1*32*16         |
| inverted_residual_1 (ReLU6)   | None,64,64,24    | 2          | 3*3*16*24         |
| inverted_residual_2 (Linear)  | None,64,64,24    | 1          | 1*1*24            |
| inverted_residual_3 (ReLU6)   | None,32,32,32    | 2          | 3*3*24*32         |
| inverted_residual_4 (Linear)  | None,32,32,32    | 1          | 1*1*32            |
| inverted_residual_5 (Linear)  | None,32,32,32    | 1          | 1*1*32            |
| inverted_residual_6 (ReLU6)   | None,16,16,64    | 2          | 3*3*32*64         |
| inverted_residual_7 (Linear)  | None,16,16,64    | 1          | 1*1*64            |
| inverted_residual_8 (Linear)  | None,16,16,64    | 1          | 1*1*64            |
| inverted_residual_9 (Linear)  | None,16,16,64    | 1          | 1*1*64            |
| inverted_residual_10 (Linear) | None,16,16,96    | 1          | 1*1*64*96         |
| inverted_residual_11 (Linear) | None,16,16,96    | 1          | 1*1*96            |
| inverted_residual_12 (Linear) | None,16,16,96    | 1          | 1*1*96            |
| inverted_residual_13 (ReLU6)  | None,8,8,160     | 2          | 3*3*96*160        |
| inverted_residual_14 (Linear) | None,8,8,160     | 1          | 1*1*160           |
| inverted_residual_15 (Linear) | None,8,8,160     | 1          | 1*1*160           |
| inverted_residual_16 (Linear) | None,8,8,320     | 1          | 1*1*160*320       |
| Conv (ReLU6)                  | None,8,8,1280    | 1          | 1*1*320*1280      |
| Global average pooling        | None,1280        | 1          | Pool 8*8          |
| Dropout                       | None,1280        | 1          | Probability = 0.2 |
| Clssifier(ReLU)               | None,2           | /          | Classifier        |

![](https://www.frontiersin.org/files/Articles/746750/fonc-11-746750-HTML-r1/image_m/fonc-11-746750-g003.jpg)

**Figure 3** The visual structure of MobileNetV2.

![](https://www.frontiersin.org/files/Articles/746750/fonc-11-746750-HTML-r1/image_m/fonc-11-746750-g004.jpg)

**Figure 4** The performance measure of this model, including the ROC curve, AUC (0.949), and confidence intervals (0.849, 1.000).

## Discussion

Before a clinical treatment strategy is developed, the gold standard for the differentiation of subtypes is pathological diagnosis by histological biopsy. Nevertheless, this invasive operation may increase the possibility of needle tract implantation and the metastasis of malignant tumors, as well as the risks of bleeding, infection, and damage to surrounding organs caused by puncture operations. Furthermore, the missed diagnosis rate is approximately 30% ([Soulen, 2018](http://gmade-studio.com/blog/publications/dl-based-classification/#B21)). An ideal renal tumor diagnosis method should avoid unnecessary damage to patients and potential risks as much as possible while ensuring high accuracy and a high detection rate, which points to the need to further improve auxiliary examination image processing technology to increase sensitivity and accuracy, as it has great prospects.

The accuracy and sensitivity of a manual imaging diagnosis cannot meet current clinical diagnosis and treatment needs. In addition, there is still a lack of clinical and radiological features that can accurately predict histology. The current imaging diagnostic method has significant limitations. The accuracy and sensitivity of the manual classification of PRCC/ChRCC according to existing reports are 61.8% and 84.5% ([Sun et al., 2020](http://gmade-studio.com/blog/publications/dl-based-classification/#B10)), which are significantly lower than those of our model. The average accuracy, sensitivity, and specificity of manual classification by our radiologists of these subtypes are 85% (90% and 80%), 100%, and 70% (80% and 60%), which are also lower than those of our model. Our MobileNet-based model also showed better efficacy than manual processing. This result provides an automated approach to the dilemma of diagnosing subtypes with radiological data and may affect the selection of surgical methods and clinical decisions.

As a typical DL algorithm, due to their interlayer parameter sharing characteristics and sparse connection characteristics of the model architecture, CNNs can realize the automated extraction of pixel-level image features without the need to establish and engineer large-scale features in advance, and due to the real-time nature of the model itself, features such as flexibility, associative information storage, and backpropagation algorithm change weights can achieve higher processing accuracy with manual data than traditional machine learning, prompting high-throughput automation based on the feasibility of CNN/DCNN models for imaging and omics analyses. The application of comprehensive digitized clinical data, radiological images, and pathological data has paved the way for automated processing methods based on AI for radiological data processing in the future. In recent years, various studies have started utilizing complete digital radiological and clinical data for segmentation and classification ([Cicek et al., 2016](http://gmade-studio.com/blog/publications/dl-based-classification/#B22); [Zhou et al., 2016](http://gmade-studio.com/blog/publications/dl-based-classification/#B23)), verifying the feasibility of this scheme. In nephrology oncology, study interests that incorporated AI started focusing on subtype classification. [Tanaka et al. (2020)](http://gmade-studio.com/blog/publications/dl-based-classification/#B24), based on the Inception-v3 CNN model and MR images, identified benign and malignant renal masses (≤4 cm) on images with an accuracy rate of 88%. Based on a CNN model and CT images, [Baghdadi et al. (2020)](http://gmade-studio.com/blog/publications/dl-based-classification/#B25) identified benign renal oncocytoma and ChRCC on images with an accuracy rate of 95%. [Zhou et al. (2019)](http://gmade-studio.com/blog/publications/dl-based-classification/#B26) applied transfer learning to classify benign and malignant kidney tumors with CT datasets, and the accuracy of the difference was reported to be 0.95. [Lee et al. (2018)](http://gmade-studio.com/blog/publications/dl-based-classification/#B27) developed a model that combined DL and manual feature machine learning to classify specific kidney tumor types, and the accuracy was 0.77. These studies prove that the imaging differentiation of kidney tumors based on DL and dichotomy is feasible but lacks utility and requires high-performance hardware, limiting the research results to the clinic. The present models show the possibility of using a high-confidence DL-based diagnostic method for the radiological classification of PRCC/ChRCC and provide a feasible low-performance hardware program with high accuracy for different medical devices that can be applied even to a gaming laptop or a mobile workstation.

There were some new findings obtained during training and validation that have not been reported in research in the same field. First, according to the experimental results, we speculate that the valuable features of PRCC/ChRCC on CT images are commonly overlooked, which indicates that the fewer trainable parameters the model has, the better the accuracy it achieves. Although the feature capacity of the models is correlated linearly with the number of parameters, the number of parameters is seemingly correlated with fitting situations in a parabola. In the lightest model, ShuffleNet, performance is the worst in these coverage models. The best performance is from the MobileNetV2, with a bigger capacity of parameters than ShuffleNet. However, as the number of parameters is continuously increasing, the accuracy is decreasing (ResNet-34). Importantly, too many trainable parameters in this task can cause model under-/overfitting (ResNet-50/ResNet-101). The relation between accuracy and parameters during the classification of small datasets needs further explanation and selection. However, this interesting finding shows the importance of feature capacity assessment of datasets and the right choice of models with a suitable size before promoting performances. Finally, we noticed that extreme data augmentation has little effect on training. We tried several ways to augment and amplify datasets to increase their size, which obviously did not affect the accuracy of the validation dataset.

This study had two main aims: 1) to make the automated classification methods easy to use with broad applicability to provide a highly accurate method that can be used in basic health units and deployed in medical centers with low-performance hardware and 2) to combine these methods with those used in federal studies, which can be used for multicenter studies and to increase model accuracy without the need to gather all the data. The deployment of such a model in devices at health centers will promote clinical treatment. Our future goal is to migrate this processing paradigm to other RCC subtypes. Although this study provides the first automated method for the radiological classification of PRCC/ChRCC subtypes, there are still some limitations. 1) The main limitation is the lack of multicenter validation, and the other limitations include the sizes of the training, validation, and testing datasets, which will be considered in future studies. Our methods used to avoid overfitting included data augmentation and ConvBNReLU but should have been more diverse. Also, due to the limited dataset capacity, the ROC curve was unsmoothed. 2) The underutilization of digital clinical data is another limitation. The conjunctive use of clinical and radiological data can further improve the prediction accuracy. 3) The underuse of multiphase sequences could be considered another limitation of our study. In our study, we exported images based on one patient–one phase. 4) Our dataset was mainly obtained from East Asian patients, and since a population-based analysis reported that racial disparities exist between black and white people in kidney cancer ([Chung et al., 2015](http://gmade-studio.com/blog/publications/dl-based-classification/#B28)), the upshot of our study would have bias in the East Asian population. Multiple factors including race, gender, and age could be taken into consideration for further exploration. 5) Our validation dataset was based on a dataset from our hospital, but it was not the best choice and had a certain effect on the results of training. The ideal validation dataset should be based on three or more datasets from different institutes. The small size of the testing dataset could also have led to a controversy about the results of MobileNetV2, which need to be further tested in multiple centers. 6) Processing of datasets by experts may not be regarded as the best method. Ideally, an automated segmentation procedure contained in the pipeline may be a better choice. However, there were some barriers laid that could hardly be bypassed. We tried two proposals: individual tumor output and area output. We applied U-Net-based methods to draw ROIs and found that the methods of existing reports ([Fabian & Maier-Hein, 2019](http://gmade-studio.com/blog/publications/dl-based-classification/#B29); [Hou et al., 2019](http://gmade-studio.com/blog/publications/dl-based-classification/#B31); [Ma, 2019](http://gmade-studio.com/blog/publications/dl-based-classification/#B30)) could not fit the need. In studies, tumor Dice scores were lower than 0.85 generally, which meant that some parts of tumor pixels could not be contained in the processed images and some radiological characters were lost unavoidably. The reason why we finally did not use this method was that this automated segmentation/classification-combined model had a performance lower than expected. Unless the method to improve the tumor Dice score obviously is developed, the automated segmentation–classification model efficiency has a rare possibility to reach the baseline of clinical application. We also tried YOLO-v3-based detection and area segmentation; however, it did not show better performances compared with existing ML-based methods, which finally led to its abandonment. Besides the technological challenges, the main reason why we did not introduce an automated segmentation into the pipeline was that in this study we focused more on the classification, and the key point was realizing the classification of subtypes with low capacity under a smaller feature engineering preprocessing and more automated processing compared with ML-based classification methods. As a challenge in DL-based radiomics, automated segmentation is our next study orientation. We are developing a possible method to realize our proposed DL-based radiological processing series, and we are also trying to integrate several models into a DL-based radiomics workstation ([Figure 5](http://gmade-studio.com/blog/publications/dl-based-classification/#f5)).

![](https://www.frontiersin.org/files/Articles/746750/fonc-11-746750-HTML-r1/image_m/fonc-11-746750-g005.jpg)

**Figure 5** A demo of a DL-based radiomics workstation (next study).

Overall, although there may be limitations in this study such as a small dataset and differences in races as well as in imaging single-center protocol, the research results may be biased to some extent. However, based on the result that a CNN-assisted diagnosis model with high diagnostic accuracy was developed in a single center of this study, it suggests that the AI research and development model adopted in this study has high clinical application potential in improving the accuracy of differential diagnosis of PRCC and ChRCC, at least in a single regional center. In the future, although there will be some difficult challenges in developing AI high diagnostic accuracy which was caused by some objective factors such as subtle potential differences in image feature led by the discrepancy between race and region and inability in high homogeneity in the imaging method, we still expect that the AI auxiliary renal tumor imaging diagnostic research can expand into different regions, different centers, and different races, together with bigger sample data to validate our conclusion, and can accurately classify as well as precisely and automatically segment multiple pathological types of renal tumor, with the aim of making it an auxiliary diagnostic imaging tool with wide clinical application prospects.

## Conclusions

To the best of our knowledge, this study provides the first automated framework for differentiating PRCC and ChRCC that could produce reliable results. This approach may be useful in improving the radiological diagnostic accuracy of RCC and, thus, benefit patients.

## Data Availability Statement

The original contributions presented in the study are included in the article/supplementary material. Further inquiries can be directed to the corresponding authors.

## Ethics Statement

Written informed consent was obtained from the individual(s) for the publication of any potentially identifiable images or data included in this article.

## Author Contributions

TZ and YZ: conceptualization, project administration, writing—original draft, and writing—review and editing. LH and TC: data curation, formal analysis, software, and visualization. BZ, JY, XL, RL, JB, SS, YW, SYZ, and SZ: investigation, methodology, and writing—review and editing. LW and JC: conceptualization, data curation, funding acquisition, investigation, project administration, supervision, validation, writing—original draft, and writing—review and editing. All authors contributed to the article and approved the submitted version.

## Funding

This work was supported by grants from the Natural Science Foundation of Fujian Province (2019J01153) and the Startup Fund for Scientific Research, Fujian Medical University (2019QH1053).

## Conflict of Interest

The authors declare that the research was conducted in the absence of any commercial or financial relationships that could be construed as a potential conflict of interest.

## Publisher’s Note

All claims expressed in this article are solely those of the authors and do not necessarily represent those of their affiliated organizations, or those of the publisher, the editors and the reviewers. Any product that may be evaluated in this article, or claim that may be made by its manufacturer, is not guaranteed or endorsed by the publisher.

## References

Baghdadi, A., Aldhaam, N. A., Elsayed, A. S., Hussein, A. A., Cavuoto, L. A., Kauffman, E., & Guru, K. A. (2020). Automated differentiation of benign renal oncocytoma and chromophobe renal cell carcinoma on computed tomography using deep learning [Article]. *Bju International*, *125*(4), 553-560. https://doi.org/10.1111/bju.14985

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/31901213/) | [CrossRef Full Text](https://doi.org/10.1111/bju.14985) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=A+Baghdadi&author=NA+Aldhaam&author=AS+Elsayed&author=AA+Hussein&author=LA+Cavuoto&author=E+Kauffman&publication_year=2020&title=Automated%20Differentiation%20of%20Benign%20Renal%20Oncocytoma%20and%20Chromophobe%20Renal%20Cell%20Carcinoma%20on%20Computed%20Tomography%20Using%20Deep%20Learning&journal=BJU+Int&volume=125&pages=553-60)

Chung, B. I., Leow, J. J., Gelpi-Hammerschmidt, F., Wang, Y., Del Giudice, F., De, S., Chou, E. P., Song, K. H., Almario, L., & Chang, S. L. (2015). Racial Disparities in Postoperative Complications After Radical Nephrectomy: A Population-based Analysis [Article]. *Urology*, *85*(6), 1411-1416. [Redirecting](https://doi.org/10.1016/j.urology.2015.03.001)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/25881864/) | [CrossRef Full Text](https://doi.org/10.1016/j.urology.2015.03.001) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=BI+Chung&author=JJ+Leow&author=F+Gelpi-Hammerschmidt&author=Y+Wang&author=F+Del%20Giudice&author=S+De&publication_year=2015&title=Racial%20Disparities%20in%20Postoperative%20Complications%20After%20Radical%20Nephrectomy%3A%20A%20Population-Based%20Analysis&journal=Urology&volume=85&pages=1411-6)

Çiçek, Ö., Abdulkadir, A., Lienkamp, S. S., Brox, T., & Ronneberger, O. (2016). *3D U-Net: learning dense volumetric segmentation from sparse annotation*. https://doi.org/10.1007/978-3-319-46723-8_49

[Google Scholar](http://scholar.google.com/scholar_lookup?author=%C3%96+%C3%87i%C3%A7ek&author=A+Abdulkadir&author=SS+Lienkamp&author=T+Brox&author=O+Ronneberger&publication_year=2016&title=3d%20U-Net%3A%20Learning%20Dense%20Volumetric%20Segmentation%20From%20Sparse%20Annotation&book=Proceedings+of+the+Medical+Image+Computing+and+Computer-Assisted+Intervention.+In:+Lecture+Notes+in+Computer+Science&volume=9901&pages=424-32)

Cruz-Roa, A., Gilmore, H., Basavanhally, A., Feldman, M., Ganesan, S., Shih, N. N. C., Tomaszewski, J., Gonzalez, F. A., & Madabhushi, A. (2017). Accurate and reproducible invasive breast cancer detection in whole-slide images: A Deep Learning approach for quantifying tumor extent [Article]. *Scientific Reports*, *7*, 14, Article 46450. [Accurate and reproducible invasive breast cancer detection in whole-slide images: A Deep Learning approach for quantifying tumor extent | Scientific Reports](https://doi.org/10.1038/srep46450)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/28418027/) | [CrossRef Full Text](https://doi.org/10.1038/srep46450) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=A+Cruz-Roa&author=H+Gilmore&author=A+Basavanhally&author=M+Feldman&author=S+Ganesan&author=NNC+Shih&publication_year=2017&title=Accurate%20and%20Reproducible%20Invasive%20Breast%20Cancer%20Detection%20in%20Whole-Slide%20Images%3A%20A%20Deep%20Learning%20Approach%20for%20Quantifying%20Tumour%20Extent&journal=Sci+Rep&volume=7&pages=46450)

Fabian, I., & Maier-Hein, K. H. (2019). An attempt at beating the 3D U-Net. *arXiv preprint arXiv:1908.02182*.

[CrossRef Full Text](https://doi.org/10.24926/548719.001) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=I+Fabian&author=KH+.%20Maier-Hein&title=An%20Attempt%20at%20Beating%20the%203D%20U-Net&journal=arXiv&volume=1908.02182v2%20[eess.IV]&)

He, K. M., Zhang, X. Y., Ren, S. Q., Sun, J., & Ieee. (2016, Jun 27-30). Deep Residual Learning for Image Recognition.*IEEE Conference on Computer Vision and Pattern Recognition* [2016 ieee conference on computer vision and pattern recognition (cvpr)]. 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Seattle, WA.

[Google Scholar](http://scholar.google.com/scholar_lookup?author=K+He&author=X+Zhang&author=S+Ren&author=J+Sun&title=Deep%20Residual%20Learning%20for%20Image%20Recognition&book=IEEE+Conference+on+Computer+Vision+&+Pattern+Recognition+IEEE+Computer+Society&)

Hosny, A., Parmar, C., Quackenbush, J., Schwartz, L. H., & Aerts, H. (2018). Artificial intelligence in radiology [Review]. *Nature Reviews Cancer*, *18*(8), 500-510. [Artificial intelligence in radiology | Nature Reviews Cancer](https://doi.org/10.1038/s41568-018-0016-5)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/29777175/) | [CrossRef Full Text](https://doi.org/10.1038/s41568-018-0016-5) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=A+Hosny&author=C+Parmar&author=J+Quackenbush&author=LH+Schwartz&author=HJ+Aerts&publication_year=2018&title=Artificial%20Intelligence%20in%20Radiology&journal=Nat+Rev+Cancer&volume=18&pages=500-10)

Hou, X., Xie, C., Li, F., & Nan, Y. (2019). Cascaded semantic segmentation for kidney and tumor. *Submissions to the*.

[CrossRef Full Text](https://doi.org/10.24926/548719.002) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=X+Hou&author=C+Xie&author=F+Li&author=Y+Nan&title=Cascaded%20Semantic%20Segmentation%20for%20Kidney%20and%20Tumour&)

Howard, A. G., Zhu, M., Chen, B., Kalenichenko, D., Wang, W., Weyand, T., Andreetto, M., & Adam, H. (2017). Mobilenets: Efficient convolutional neural networks for mobile vision applications. *arXiv preprint arXiv:1704.04861*.

[Google Scholar](http://scholar.google.com/scholar_lookup?author=AG+Howard&author=M+Zhu&author=B+Chen&author=D+Kalenichenko&author=W+Wang&author=T+Weyand&publication_year=2017&title=Mobilenets%3A%20Efficient%20Convolutional%20Neural%20Networks%20for%20Mobile%20Vision%20Applications&journal=arXiv&)

Lakhani, P., & Sundaram, B. (2017). Deep Learning at Chest Radiography: Automated Classification of Pulmonary Tuberculosis by Using Convolutional Neural Networks [Article]. *Radiology*, *284*(2), 574-582. https://doi.org/10.1148/radiol.2017162326

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/28436741/) | [CrossRef Full Text](https://doi.org/10.1148/radiol.2017162326) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=P+Lakhani&author=B+Sundaram&publication_year=2017&title=Deep%20Learning%20at%20Chest%20Radiography%3A%20Automated%20Classification%20of%20Pulmonary%20Tuberculosis%20by%20Using%20Convolutional%20Neural%20Networks&journal=Radiology&volume=284&pages=574-82)

Lee, H., Hong, H., Kim, J., & Jung, D. C. (2018). Deep feature classification of angiomyolipoma without visible fat and renal cell carcinoma in abdominal contrast-enhanced CT images with texture image patches and hand-crafted feature concatenation [Article]. *Medical Physics*, *45*(4), 1550-1561. https://doi.org/10.1002/mp.12828

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/29474742/) | [CrossRef Full Text](https://doi.org/10.1002/mp.12828) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=H+Lee&author=H+Hong&author=J+Kim&author=DC+Jung&publication_year=2018&title=Deep%20Feature%20Classification%20of%20Angiomyolipoma%20Without%20Visible%20Fat%20and%20Renal%20Cell%20Carcinoma%20in%20Abdominal%20Contrast-%20Enhanced%20CT%20Images%20With%20Texture%20Image%20Patches%20and%20Hand-%20Crafted%20Feature%20Concatenation&journal=Med+Phys&volume=45&pages=1550-61)

Lehman, C. D., Yala, A., Schuster, T., Dontchos, B., Bahl, M., Swanson, K., & Barzilay, R. (2019). Mammographic Breast Density Assessment Using Deep Learning: Clinical Implementation [Article]. *Radiology*, *290*(1), 52-58. https://doi.org/10.1148/radiol.2018180694

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/30325282/) | [CrossRef Full Text](https://doi.org/10.1148/radiol.2018180694) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=CD+Lehman&author=A+Yala&author=T+Schuster&author=B+Dontchos&author=M+Bahl&author=K+Swanson&publication_year=2018&title=Mammographic%20Breast%20Density%20Assessment%20Using%20Deep%20Learning%3A%20Clinical%20Implementation&journal=Radiology&volume=290&pages=52-8)

Li, Y., Luo, Q. Y., Li, Z., Wang, Y., Zhu, C. Y., Li, T. Q., & Li, X. D. (2020). Long Non-coding RNAIRAINInhibits VEGFA Expression via Enhancing Its DNA Methylation Leading to Tumor Suppression in Renal Carcinoma [Article]. *Frontiers in Oncology*, *10*, 14, Article 1082. https://doi.org/10.3389/fonc.2020.01082

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/32983957/) | [CrossRef Full Text](https://doi.org/10.3389/fonc.2020.01082) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=Y+Li&author=Q+Luo&author=Z+Li&author=Y+Wang&author=C+Zhu&author=T+Li&publication_year=2020&title=Long%20Non-Coding%20RNA%20IRAIN%20Inhibits%20VEGFA%20Expression%20via%20Enhancing%20Its%20DNA%20Methylation%20Leading%20to%20Tumour%20Suppression%20in%20Renal%20Carcinoma&journal=Front+Oncol&volume=10&)

Linehan, W. M., Spellman, P. T., Ricketts, C. J., Creighton, C. J., Fei, S. S., Davis, C., Wheeler, D. A., Murray, B. A., Schmidt, L., Vocke, C. D., Peto, M., Al Mamun, A. A. M., Shinbrot, E., Sethi, A., Brooks, S., Rathmell, W. K., Brooks, A. N., Hoadley, K. A., Robertson, A. G., . . . Canc Genome Atlas Res, N. (2016). Comprehensive Molecular Characterization of Papillary Renal-Cell Carcinoma [Article]. *New England Journal of Medicine*, *374*(2), 135-145. [Comprehensive Molecular Characterization of Papillary Renal-Cell Carcinoma &#124; NEJM](https://doi.org/10.1056/NEJMoa1505917)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/26536169/) | [CrossRef Full Text](https://doi.org/10.1056/NEJMoa1505917) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=WM+Linehan&author=PT+Spellman&author=CJ+Ricketts&author=CJ+Creighton&author=SS+Fei&author=C+Davis&publication_year=2016&title=Comprehensive%20Molecular%20Characterization%20of%20Papillary%20Renal-Cell%20Carcinoma&journal=N+Engl+J+Med&volume=374&pages=135)

Litjens, G., Kooi, T., Bejnordi, B. E., Setio, A. A. A., Ciompi, F., Ghafoorian, M., van der Laak, J., van Ginneken, B., & Sanchez, C. I. (2017). A survey on deep learning in medical image analysis [Article]. *Medical Image Analysis*, *42*, 60-88. [Redirecting](https://doi.org/10.1016/j.media.2017.07.005)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/28778026/) | [CrossRef Full Text](https://doi.org/10.1016/j.media.2017.07.005) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=G+Litjens&author=T+Kooi&author=BE+Bejnordi&author=AAA+Setio&author=F+Ciompi&author=M+Ghafoorian&publication_year=2017&title=A%20Survey%20on%20Deep%20Learning%20in%20Medical%20Image%20Analysis&journal=Med+Image+Anal&volume=42&pages=60)

Ljungberg, B., Albiges, L., Abu-Ghanem, Y., Bensalan, K., Dabestani, S., Montes, S. F. P., Giles, R. H., Hofmann, F., Hora, M., Kuczyk, M. A., Kuusk, T., Lam, T. B., Marconi, L., Merseburger, A. S., Powles, T., Staehler, M., Tahbaz, R., Volpe, A., & Bex, A. (2019). European Association of Urology Guidelines on Renal Cell Carcinoma: The 2019 Update [Article]. *European Urology*, *75*(5), 799-810. [Redirecting](https://doi.org/10.1016/j.eururo.2019.02.011)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/30803729/) | [CrossRef Full Text](https://doi.org/10.1016/j.eururo.2019.02.011) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=B+Ljungberg&author=L+Albiges&author=Y+Abu-Ghanem&author=K+Bensalah&author=S+Dabestani&author=S+Fern%C3%A1ndez-Pello&publication_year=2019%20&title=European%20Association%20of%20Urology%20Guidelines%20on%20Renal%20Cell%20Carcinoma%3A%20The%202019%20Update&journal=Eur+Urol&volume=75&pages=799)

Ma, J. (2019). Solution to the kidney tumor segmentation challenge 2019.

[CrossRef Full Text](https://doi.org/10.24926/548719.005) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=J+Ma&publication_year=2019&title=Solution%20to%20the%20Kidney%20Tumour%20Segmentation%20Challenge%202019%5BC%5D%2F%2F&journal=2019+Kidney+Tumour+Segmentation+Challenge:+KiTS19&)

Ma, N., Zhang, X., Zheng, H.-T., & Sun, J. (2018). Shufflenet v2: Practical guidelines for efficient cnn architecture design. Proceedings of the European conference on computer vision (ECCV),. Cham: Springer (2018).

[Google Scholar](http://scholar.google.com/scholar_lookup?author=N+Ma&author=X+Zhang&author=H-T+Zheng&author=J+Sun&publication_year=2018&title=ShuffleNet%20V2%3A%20Practical%20Guidelines%20for%20Efficient%20CNN%20Architecture%20Design&book=European+Conference+on+Computer+Vision&)

Moch, H., Cubilla, A. L., Humphrey, P. A., Reuter, V. E., & Ulbright, T. M. (2016). The 2016 WHO Classification of Tumours of the Urinary System and Male Genital Organs-Part A: Renal, Penile, and Testicular Tumours [Article]. *European Urology*, *70*(1), 93-105. https://doi.org/10.1016/j.eururo.2016.02.029

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/26935559/) | [CrossRef Full Text](https://doi.org/10.1016/j.eururo.2016.02.029) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=H+Moch&author=AL+Cubilla&author=PA+Humphrey&author=VE+Reuter&author=TM+Ulbright&publication_year=2016&title=The%202016%20WHO%20Classification%20of%20Tumours%20of%20the%20Urinary%20System%20and%20Male%20Genital%20Organs-Part%20A%3A%20Renal%2C%20Penile%2C%20and%20Testicular%20Tumours&journal=Eur+Urol&volume=70&pages=93)

Richard, P. O., Jewett, M. A. S., Bhatt, J. R., Kachura, J. R., Evans, A. J., Zlotta, A. R., Hermanns, T., Juvet, T., & Finelli, A. (2015). Renal Tumor Biopsy for Small Renal Masses: A Single-center 13-year Experience [Article]. *European Urology*, *68*(6), 1007-1013. [Redirecting](https://doi.org/10.1016/j.eururo.2015.04.004)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/25900781/) | [CrossRef Full Text](https://doi.org/10.1016/j.eururo.2015.04.004) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=PO+Richard&author=MAS+Jewett&author=JR+Bhatt&author=JR+Kachura&author=AJ+Evans&author=AR+Zlotta&publication_year=2015&title=Renal%20Tumour%20Biopsy%20for%20Small%20Renal%20Masses%3A%20A%20Single-Center%2013-Year%20Experience&journal=Eur+Urol&volume=68&pages=1007-13)

Rossi, S. H., Prezzi, D., Kelly-Morland, C., & Goh, V. (2018). Imaging for the diagnosis and response assessment of renal tumours [Review]. *World Journal of Urology*, *36*(12), 1927-1942. [Imaging for the diagnosis and response assessment of renal tumours | SpringerLink](https://doi.org/10.1007/s00345-018-2342-3)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/29948048/) | [CrossRef Full Text](https://doi.org/10.1007/s00345-018-2342-3) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=SH+Rossi&author=D+Prezzi&author=C+Kelly-Morland&author=V+Goh&publication_year=2018&title=Imaging%20for%20the%20Diagnosis%20and%20Response%20Assessment%20of%20Renal%20Tumours&journal=World+J+Urol&volume=36&pages=1927-42)

Soulen, M. C. (2018). Small Renal Masses: Challenges for the Radiologist [Editorial Material]. *Radiology*, *288*(1), 91-92. https://doi.org/10.1148/radiol.2018180602

[CrossRef Full Text](https://doi.org/10.1148/radiol.2018180602) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=MC+Soulen&publication_year=2018&title=Small%20Renal%20Masses%3A%20Challenges%20for%20the%20Radiologist&journal=Radiol&volume=288&pages=91-2)

Sun, X. Y., Feng, Q. X., Xu, X., Zhang, J., Zhu, F. P., Yang, Y. H., & Zhang, Y. D. (2020). Radiologic-Radiomic Machine Learning Models for Differentiation of Benign and Malignant Solid Rena Masses: Comparison With Expert-Level Radiologists [Article]. *American Journal of Roentgenology*, *214*(1), W44-W54. https://doi.org/10.2214/ajr.19.21617

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/31553660/) | [CrossRef Full Text](https://doi.org/10.2214/AJR.19.21617) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=XY+Sun&author=QX+Feng&author=X+Xu&author=J+Zhang&author=F-P+Zhu&author=Y-H+Yang&publication_year=2020&title=Radiologic-Radiomic%20Machine%20Learning%20Models%20for%20Differentiation%20of%20Benign%20and%20Malignant%20Solid%20Renal%20Masses%3A%20Comparison%20With%20Expert-Level%20Radiologists&journal=AJR+Am+J+Roentgenol&volume=214&pages=W44-54)

Tan, M. X., & Le, Q. V. (2019, Jun 09-15). EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks.*Proceedings of Machine Learning Research* [International conference on machine learning, vol 97]. 36th International Conference on Machine Learning (ICML), Long Beach, CA.

[Google Scholar](http://scholar.google.com/scholar_lookup?author=M+Tan&author=QV+Le&publication_year=2019&title=EfficientNet%3A%20Rethinking%20Model%20Scaling%20for%20Convolutional%20Neural%20Networks&book=arXiv&)

Tanaka, T., Huang, Y., Marukawa, Y., Tsuboi, Y., Masaoka, Y., Kojima, K., Iguchi, T., Hiraki, T., Gobara, H., Yanai, H., Nasu, Y., & Kanazawa, S. (2020). Differentiation of Small (<= 4 cm) Renal Masses on Multiphase Contrast-Enhanced CT by Deep Learning [Article]. *American Journal of Roentgenology*, *214*(3), 605-612. https://doi.org/10.2214/ajr.19.22074

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/31913072/) | [CrossRef Full Text](https://doi.org/10.2214/AJR.19.22074) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=T+Tanaka&author=Y+Huang&author=Y+Marukawa&author=Y+Tsuboi&author=Y+Masaoka&author=K+Kojima&publication_year=2020&title=Differentiation%20of%20Small%20%28%E2%89%A4%204%20Cm%29%20Renal%20Masses%20on%20Multiphase%20Contrast-Enhanced%20CT%20by%20Deep%20Learning%20%5BPublished%20Correction%20Appears%20in%20AJR%20Am%20J%20Roentgenol&journal=AJR+Am+J+Roentgenol&volume=214&pages=605-12)

Turajlic, S., Swanton, C., & Boshoff, C. (2018). Kidney cancer: The next decade [Editorial Material]. *Journal of Experimental Medicine*, *215*(10), 2477-2479. [Kidney cancer: The next decade | Journal of Experimental Medicine | Rockefeller University Press](https://doi.org/10.1084/jem.20181617)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/30217855/) | [CrossRef Full Text](https://doi.org/10.1084/jem.20181617) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=S+Turajlic&author=C+Swanton&author=C+Boshoff&publication_year=2018&title=Kidney%20Cancer%3A%20The%20Next%20Decade&journal=J+Exp+Med&volume=215&pages=2477-9)

Wang, D., Huang, X. Y., Bai, L. C., Zhang, X. L., Wei, J. Y., & Zhou, J. L. (2020). Differential diagnosis of chromophobe renal cell carcinoma and papillary renal cell carcinoma with dual-energy spectral computed tomography [Article]. *Acta Radiologica*, *61*(11), 1562-1569, Article 0284185120903447. [Differential diagnosis of chromophobe renal cell carcinoma and papillary renal cell carcinoma with dual-energy spectral computed tomography - Dan Wang, Xiaoyu Huang, Liangcai Bai, Xueling Zhang, Jinyan Wei, Junlin Zhou, 2020](https://doi.org/10.1177/0284185120903447)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/32088966/) | [CrossRef Full Text](https://doi.org/10.1177/0284185120903447) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=D+Wang&author=X+Huang&author=L+Bai&author=X+Zhang&author=J+Wei&author=J+Zhou&publication_year=2020&title=Differential%20Diagnosis%20of%20Chromophobe%20Renal%20Cell%20Carcinoma%20and%20Papillary%20Renal%20Cell%20Carcinoma%20With%20Dual-Energy%20Spectral%20Computed%20Tomography&journal=Acta+Radiol&volume=61&pages=1562-9)

Yang, Y., Xie, L., Zheng, J. L., Tan, Y. T., Zhang, W., & Xiang, Y. B. (2013). Incidence Trends of Urinary Bladder and Kidney Cancers in Urban Shanghai, 1973-2005 [Article]. *Plos One*, *8*(12), 9, Article e82430. https://doi.org/10.1371/journal.pone.0082430

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/24324788/) | [CrossRef Full Text](https://doi.org/10.1371/journal.pone.0082430) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=Y+Yang&author=L+Xie&author=JL+Zheng&author=YT+Tan&author=W+Zhang&author=YB+Xiang&publication_year=2013&title=Incidence%20Trends%20of%20Urinary%20Bladder%20and%20Kidney%20Cancers%20in%20Urban%20Shanghai%2C%201973-2005&journal=PLoS+One&volume=8&pages=e82430)

Yasaka, K., Akai, H., Abe, O., & Kiryu, S. (2018). Deep Learning with Convolutional Neural Network for Differentiation of Liver Masses at Dynamic Contrast-enhanced CT: A Preliminary Study [Article]. *Radiology*, *286*(3), 899-908. [Deep Learning with Convolutional Neural Network for Differentiation of Liver Masses at Dynamic Contrast-enhanced CT: A Preliminary Study | Radiology](https://doi.org/10.1148/radiol.2017170706)

[PubMed Abstract](https://pubmed.ncbi.nlm.nih.gov/29059036/) | [CrossRef Full Text](https://doi.org/10.1148/radiol.2017170706) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=K+Yasaka&author=H+Akai&author=O+Abe&author=S+Kiryu&publication_year=2017&title=Deep%20Learning%20With%20Con-%20Volutional%20Neural%20Network%20for%20Differentiation%20of%20Liver%20Masses%20at%20Dynamic%20Contrast-Enhanced%20CT%3A%20A%20Preliminary%20Study&journal=Radiology&volume=286&pages=887-96)

Zhou, L. L., Zhang, Z. H., Chen, Y. C., Zhao, Z. Y., Yin, X. D., & Jiang, H. B. (2019). A Deep Learning-Based Radiomics Model for Differentiating Benign and Malignant Renal Tumors [Article]. *Translational Oncology*, *12*(2), 292-300. [Redirecting](https://doi.org/10.1016/j.tranon.2018.10.012)

[CrossRef Full Text](https://doi.org/10.1016/j.tranon.2018.10.012) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=L+Zhou&author=Z+Zhang&author=Y-C+Chen&author=Z-Y+Zhao&author=X-D+Yin&author=H-B+Jiang&publication_year=2019&title=A%20Deep%20Learning-Based%20Radiomics%20Model%20for%20Differentiating%20Benign%20and%20Malignant%20Renal%20Tumours&journal=Translationaloncology&volume=12&pages=292)

Zhou, X. R., Ito, T., Takayama, R., Wang, S., Hara, T., & Fujita, H. (2016, Oct 21). Three-Dimensional CT Image Segmentation by Combining 2D Fully Convolutional Network with 3D Majority Voting.*Lecture Notes in Computer Science* [Deep learning and data labeling for medical applications]. 2nd International Workshop on Deep Learning in Medical Image Analysis (DLMIA) / 1st International Workshop on Large-Scale Annotation of Biomedical Data and Expert Label Synthesis (LABELS), Athens, GREECE.

[CrossRef Full Text](https://doi.org/10.1007/978-3-319-46976-8_12) | [Google Scholar](http://scholar.google.com/scholar_lookup?author=X+Zhou&author=T+Ito&author=R+Takayama&author=S+Wang&author=T+Hara&author=H+Fujita&publication_year=2016&title=Threedimensional%20CT%20Image%20Segmentation%20by%20Combining%202D%20Fully%20Convolutional%20Network%20With%203D%20Majority%20Voting&journal=In:+Proc+Deep+Learn+Med+Image+Anal+(DLMIA)+In:+Lecture+Notes+Comput+Sci&volume=10%200%2008&pages=111-20)
