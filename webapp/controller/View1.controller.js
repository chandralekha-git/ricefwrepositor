sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/ui/export/library',
    'sap/ui/export/Spreadsheet'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, exportLibrary, Spreadsheet) {
        "use strict";
        var EdmType = exportLibrary.EdmType;

        return Controller.extend("ricefwestimator.controller.View1", {
            onInit: function () {

                var oModel1 = new JSONModel();
                var oModel2 = new JSONModel();
                var oModel3 = new JSONModel();

                this.getView().byId('table0').setModel(oModel1, "model1");
                this.getView().byId('table1').setModel(oModel2, "model2");
                this.getView().byId('table3').setModel(oModel3, "model3");
                

                var rows = [];

                var row1 = {};
                row1.complexity = "";
                row1.R = 0;
                row1.I = 0;
                row1.C = 0;
                row1.E = 0;
                row1.F = 0;
                row1.W = 0;
                row1.T = 0;
                row1.EF = 0;

                rows.push(row1);

                var row2 = {};
                row2.complexity = "";
                row2.R = 0;
                row2.I = 0;
                row2.C = 0;
                row2.E = 0;
                row2.F = 0;
                row2.W = 0;
                row2.T = 0;
                row2.EF = 0;

                rows.push(row2);

                var row3 = {};
                row3.complexity = "";
                row3.R = 0;
                row3.I = 0;
                row3.C = 0;
                row3.E = 0;
                row3.F = 0;
                row3.W = 0;
                row3.T = 0;
                row3.EF = 0;

                rows.push(row3);

                var row4 = {};
                row4.complexity = "";
                row4.R = 0;
                row4.I = 0;
                row4.C = 0;
                row4.E = 0;
                row4.F = 0;
                row4.W = 0;
                row4.T = 0;
                row4.EF = 0;

                rows.push(row4);

                var row5 = {};
                row5.complexity = "";
                row5.R = 0;
                row5.I = 0;
                row5.C = 0;
                row5.E = 0;
                row5.F = 0;
                row5.W = 0;
                row5.T = 0;
                row5.EF = 0;

                rows.push(row5);


                oModel1.setData(rows);


                var newEntry = [];

                var newEntry1 = {};
                newEntry1.complexity = "";
                newEntry1.R = 0;
                newEntry1.I = 0;
                newEntry1.C = 0;
                newEntry1.E = 0;
                newEntry1.F = 0;
                newEntry1.W = 0;
                newEntry1.T = 0;
                newEntry1.EF = 0;

                newEntry.push(newEntry1);

                var newEntry2 = {};
                newEntry2.complexity = "";
                newEntry2.R = 0;
                newEntry2.I = 0;
                newEntry2.C = 0;
                newEntry2.E = 0;
                newEntry2.F = 0;
                newEntry2.W = 0;
                newEntry2.T = 0;
                newEntry2.EF = 0;

                newEntry.push(newEntry2);

                var newEntry3 = {};
                newEntry3.complexity = "";
                newEntry3.R = 0;
                newEntry3.I = 0;
                newEntry3.C = 0;
                newEntry3.E = 0;
                newEntry3.F = 0;
                newEntry3.W = 0;
                newEntry3.T = 0;
                newEntry3.EF = 0;

                newEntry.push(newEntry3);

                var newEntry4 = {};
                newEntry4.complexity = "";
                newEntry4.R = 0;
                newEntry4.I = 0;
                newEntry4.C = 0;
                newEntry4.E = 0;
                newEntry4.F = 0;
                newEntry4.W = 0;
                newEntry4.T = 0;
                newEntry4.EF = 0;

                newEntry.push(newEntry4);

                var newEntry5 = {};
                newEntry5.complexity = "";
                newEntry5.R = 0;
                newEntry5.I = 0;
                newEntry5.C = 0;
                newEntry5.E = 0;
                newEntry5.F = 0;
                newEntry5.W = 0;
                newEntry5.T = 0;
                newEntry5.EF = 0;

                newEntry.push(newEntry5);

                oModel2.setData(newEntry);


                oModel1.setData(newEntry);


                var m3s = [];

                var m31 = {};
                m31.complexity = "Low";
                m31.inp = true;
                m31.text = false;
                m31.R = 0;
                m31.I = 0;
                m31.C = 0;
                m31.E = 0;
                m31.F = 0;
                m31.W = 0;
                m31.T = 0;
                m31.EF = 0;

                m3s.push(m31);

                var m32 = {};
                m32.complexity = "Medium";
                m32.inp = true;
                m32.text = false;
                m32.R = 0;
                m32.I = 0;
                m32.C = 0;
                m32.E = 0;
                m32.F = 0;
                m32.W = 0;
                m32.T = 0;
                m32.EF = 0;

                m3s.push(m32);

                var m33 = {};
                m33.complexity = "High";
                m33.inp = true;
                m33.text = false;
                m33.R = 0;
                m33.I = 0;
                m33.C = 0;
                m33.E = 0;
                m33.F = 0;
                m33.W = 0;
                m33.T = 0;
                m33.EF = 0;

                m3s.push(m33);

                var m34 = {};
                m34.complexity = "Very High";
                m34.inp = true;
                m34.text = false;
                m34.R = 0;
                m34.I = 0;
                m34.C = 0;
                m34.E = 0;
                m34.F = 0;
                m34.W = 0;
                m34.T = 0;
                m34.EF = 0;

                m3s.push(m34);

                var m35 = {};
                m35.complexity = "Total";
                m35.inp = false;
                m35.text = true;
                m35.R = 0;
                m35.I = 0;
                m35.C = 0;
                m35.E = 0;
                m35.F = 0;
                m35.W = 0;
                m35.T = 0;
                m35.EF = 0;

                m3s.push(m35);


                oModel3.setData(m3s);


                // var oTable1 = this.getView().byId("table0");
                // oTable1.setModel(oModel1);

                // console.log(rows);
                // console.log(oModel1);
                rows = oModel1.getData();
                rows[0].complexity = "Low";
                rows[0].R = 0;
                rows[0].I = 0;
                rows[0].C = 0;
                rows[0].E = 0;
                rows[0].F = 0;
                rows[0].W = 0;
                rows[0].T = 0;
                rows[0].EF = 0;

                rows[1].complexity = "Medium";
                rows[1].R = 0;
                rows[1].I = 0;
                rows[1].C = 0;
                rows[1].E = 0;
                rows[1].F = 0;
                rows[1].W = 0;
                rows[1].T = 0;
                rows[1].EF = 0;

                rows[2].complexity = "High";
                rows[2].R = 0;
                rows[2].I = 0;
                rows[2].C = 0;
                rows[2].E = 0;
                rows[2].F = 0;
                rows[2].W = 0;
                rows[2].T = 0;
                rows[2].EF = 0;

                rows[3].complexity = "Very High";
                rows[3].R = 0;
                rows[3].I = 0;
                rows[3].C = 0;
                rows[3].E = 0;
                rows[3].F = 0;
                rows[3].W = 0;
                rows[3].T = 0;
                rows[3].EF = 0;

                rows[4].complexity = "Total";
                rows[4].R = 0;
                rows[4].I = 0;
                rows[4].C = 0;
                rows[4].E = 0;
                rows[4].F = 0;
                rows[4].W = 0;
                rows[4].T = 0;
                rows[4].EF = 0;

                oModel1.setData(rows);


                var rows2 = oModel2.getData();
                rows2[0].complexity = "Low";
                rows2[0].R = 0;
                rows2[0].I = 0;
                rows2[0].C = 0;
                rows2[0].E = 0;
                rows2[0].F = 0;
                rows2[0].W = 0;
                rows2[0].T = 0;
                rows2[0].EF = 0;

                rows2[1].complexity = "Medium";
                rows2[1].R = 0;
                rows2[1].I = 0;
                rows2[1].C = 0;
                rows2[1].E = 0;
                rows2[1].F = 0;
                rows2[1].W = 0;
                rows2[1].T = 0;
                rows2[1].EF = 0;

                rows2[2].complexity = "High";
                rows2[2].R = 0;
                rows2[2].I = 0;
                rows2[2].C = 0;
                rows2[2].E = 0;
                rows2[2].F = 0;
                rows2[2].W = 0;
                rows2[2].T = 0;
                rows2[2].EF = 0;

                rows2[3].complexity = "Very High";
                rows2[3].R = 0;
                rows2[3].I = 0;
                rows2[3].C = 0;
                rows2[3].E = 0;
                rows2[3].F = 0;
                rows2[3].W = 0;
                rows2[3].T = 0;
                rows2[3].EF = 0;

                rows2[4].complexity = "Total";
                rows2[4].R = 0;
                rows2[4].I = 0;
                rows2[4].C = 0;
                rows2[4].E = 0;
                rows2[4].F = 0;
                rows2[4].W = 0;
                rows2[4].T = 0;
                rows2[4].EF = 0;

                oModel2.setData(rows2);


                // this.getView().byId("item0").setModel(oModel1);
                // this.getView().byId("item0").bindElement({
                //     path: "/"
                // });

                // this.getView().byId("item1").setModel(oModel1);
                // this.getView().byId("item1").bindElement({
                //     path: "/"
                // });

                // this.getView().byId("item2").setModel(oModel1);
                // this.getView().byId("item2").bindElement({
                //     path: "/"
                // });
                // this.getView().byId("item3").setModel(oModel1);
                // this.getView().byId("item3").bindElement({
                //     path: "/"
                // });
                // this.getView().byId("item4").setModel(oModel1);
                // this.getView().byId("item4").bindElement({
                //     path: "/"
                // });







            },

            calculateEfforts: function (data) {
                var complexity = [];

                var low = {};
                low.R = 126;
                low.I = 198;
                low.C = 72;
                low.E = 72;
                low.F = 81;
                low.W = 126;
                complexity.push(low);

                var Medium = {};
                Medium.R = 198;
                Medium.I = 279;
                Medium.C = 135;
                Medium.E = 135;
                Medium.F = 135;
                Medium.W = 216;
                complexity.push(Medium);

                var high = {};
                high.R = 288;
                high.I = 378;
                high.C = 207;
                high.E = 207;
                high.F = 207;
                high.W = 324;
                complexity.push(high);

                var vhigh = {};
                vhigh.R = 378;
                vhigh.I = 495;
                vhigh.C = 297;
                vhigh.E = 297;
                vhigh.F = 288;
                vhigh.W = 432;
                complexity.push(vhigh);


                data[0].EF = data[0].R * complexity[0].R + data[0].I * complexity[0].I + data[0].C * complexity[0].C + data[0].E * complexity[0].E + data[0].F * complexity[0].F + data[0].W * complexity[0].W;

                data[1].EF = data[1].R * complexity[1].R + data[1].I * complexity[1].I + data[1].C * complexity[1].C + data[1].E * complexity[1].E + data[1].F * complexity[1].F + data[1].W * complexity[1].W;

                data[2].EF = data[2].R * complexity[2].R + data[2].I * complexity[2].I + data[2].C * complexity[2].C + data[2].E * complexity[2].E + data[2].F * complexity[2].F + data[2].W * complexity[2].W;

                data[3].EF = data[3].R * complexity[3].R + data[3].I * complexity[3].I + data[3].C * complexity[3].C + data[3].E * complexity[3].E + data[3].F * complexity[3].F + data[3].W * complexity[3].W;

                data[4].EF = data[0].EF  + data[1].EF + data[2].EF + data[3].EF;



                return data;
            },

            onInp1Submit: function () {


                var inp = this.getView().byId("inp1");
                var oModel1 = this.getView().byId('table0').getModel("model1");
                var data = oModel1.getData();

                // Generate RICEFW Classification




                data[4].T = inp.getValue();


                // Report 10%
                data[4].R = data[4].T * (10 / 100);
                data[4].R = parseInt(data[4].R);

                // Interface 40%
                data[4].I = data[4].T * (40 / 100);
                data[4].I = parseInt(data[4].I);


                // Conversion 10%
                data[4].C = data[4].T * (10 / 100);
                data[4].C = parseInt(data[4].C);

                // Enhancement 30%
                data[4].E = data[4].T * (30 / 100);
                data[4].E = parseInt(data[4].E);

                // Form 5%
                data[4].F = data[4].T * (5 / 100);
                data[4].F = parseInt(data[4].F);

                // Workflow 5%
                data[4].W = data[4].T * (5 / 100);
                data[4].W = parseInt(data[4].W);

                // Calculate Complexity for Report 

                if (data[4].R != 0) {

                    //low  data[0].R = 0;
                    data[0].R = data[4].R * (20 / 100);
                    data[0].R = parseInt(data[0].R);

                    //Medium  data[1].R = 0;

                    data[1].R = data[4].R * (30 / 100);
                    data[1].R = parseInt(data[1].R);

                    //High  data[2].R = 0;

                    data[2].R = data[4].R * (40 / 100);
                    data[2].R = parseInt(data[2].R);


                    //Very High  data[3].R = 0;


                    data[3].R = data[4].R * (10 / 100);
                    data[3].R = parseInt(data[3].R);



                }


                // Calculate Complexity for Interface

                if (data[4].I != 0) {

                    //low  data[0].I = 0;
                    data[0].I = data[4].I * (20 / 100);
                    data[0].I = parseInt(data[0].I);

                    //Medium  data[1].I = 0;

                    data[1].I = data[4].I * (30 / 100);
                    data[1].I = parseInt(data[1].I);

                    //High  data[2].I = 0;

                    data[2].I = data[4].I * (40 / 100);
                    data[2].I = parseInt(data[2].I);


                    //VeIy High  data[3].I = 0;


                    data[3].I = data[4].I * (10 / 100);
                    data[3].I = parseInt(data[3].I);



                }



                // Calculate Complexity for Converion

                if (data[4].C != 0) {
                    //low  data[0].C = 0;
                    data[0].C = data[4].C * (20 / 100);
                    data[0].C = parseInt(data[0].C);

                    //MedCum  data[1].C = 0;

                    data[1].C = data[4].C * (30 / 100);
                    data[1].C = parseInt(data[1].C);

                    //HCgh  data[2].C = 0;

                    data[2].C = data[4].C * (40 / 100);
                    data[2].C = parseInt(data[2].C);


                    //VeCy HCgh  data[3].C = 0;


                    data[3].C = data[4].C * (10 / 100);
                    data[3].C = parseInt(data[3].C);




                }
                // Calculate Complexity for Enhancement

                if (data[4].E != 0) {

                    //low  data[0].E = 0;
                    data[0].E = data[4].E * (20 / 100);
                    data[0].E = parseInt(data[0].E);

                    //MedEum  data[1].E = 0;

                    data[1].E = data[4].E * (30 / 100);
                    data[1].E = parseInt(data[1].E);

                    //HEgh  data[2].E = 0;

                    data[2].E = data[4].E * (40 / 100);
                    data[2].E = parseInt(data[2].E);


                    //VeEy HEgh  data[3].E = 0;


                    data[3].E = data[4].E * (10 / 100);
                    data[3].E = parseInt(data[3].E);



                }

                // Calculate Complexity for Forms

                if (data[4].F != 0) {

                    //low  data[0].F = 0;
                    data[0].F = data[4].F * (20 / 100);
                    data[0].F = parseInt(data[0].F);

                    //MFdFum  data[1].F = 0;

                    data[1].F = data[4].F * (30 / 100);
                    data[1].F = parseInt(data[1].F);

                    //HFgh  data[2].F = 0;

                    data[2].F = data[4].F * (40 / 100);
                    data[2].F = parseInt(data[2].F);


                    //VFFy HFgh  data[3].F = 0;


                    data[3].F = data[4].F * (10 / 100);
                    data[3].F = parseInt(data[3].F);



                }

                // Calculate Complexity for Workflow
                if (data[4].W != 0) {

                    //low  data[0].W = 0;
                    data[0].W = data[4].W * (20 / 100);
                    data[0].W = parseInt(data[0].W);

                    //MWdWum  data[1].W = 0;

                    data[1].W = data[4].W * (30 / 100);
                    data[1].W = parseInt(data[1].W);

                    //HWgh  data[2].W = 0;

                    data[2].W = data[4].W * (40 / 100);
                    data[2].W = parseInt(data[2].W);


                    //VWWy HWgh  data[3].W = 0;


                    data[3].W = data[4].W * (10 / 100);
                    data[3].W = parseInt(data[3].W);



                }
                // Total on rows 
                data[0].T = data[0].R + data[0].I + data[0].C + data[0].E + data[0].F + data[0].W;

                data[1].T = data[1].R + data[1].I + data[1].C + data[1].E + data[1].F + data[1].W;

                data[2].T = data[2].R + data[2].I + data[2].C + data[2].E + data[2].F + data[2].W;

                data[3].T = data[3].R + data[3].I + data[3].C + data[3].E + data[3].F + data[3].W;


                //  get Efforts

                data = this.calculateEfforts(data);

                oModel1.setData(data);


            },

            refresh: function () {

                var oModel1 = this.getView().byId("table0").getModel("model1");

                var rows = oModel1.getData();
                rows[0].complexity = "Low";
                rows[0].R = 0;
                rows[0].I = 0;
                rows[0].C = 0;
                rows[0].E = 0;
                rows[0].F = 0;
                rows[0].W = 0;
                rows[0].T = 0;
                rows[0].EF = 0;

                rows[1].complexity = "Medium";
                rows[1].R = 0;
                rows[1].I = 0;
                rows[1].C = 0;
                rows[1].E = 0;
                rows[1].F = 0;
                rows[1].W = 0;
                rows[1].T = 0;
                rows[1].EF = 0;

                rows[2].complexity = "High";
                rows[2].R = 0;
                rows[2].I = 0;
                rows[2].C = 0;
                rows[2].E = 0;
                rows[2].F = 0;
                rows[2].W = 0;
                rows[2].T = 0;
                rows[2].EF = 0;

                rows[3].complexity = "Very High";
                rows[3].R = 0;
                rows[3].I = 0;
                rows[3].C = 0;
                rows[3].E = 0;
                rows[3].F = 0;
                rows[3].W = 0;
                rows[3].T = 0;
                rows[3].EF = 0;

                rows[4].complexity = "Total";
                rows[4].R = 0;
                rows[4].I = 0;
                rows[4].C = 0;
                rows[4].E = 0;
                rows[4].F = 0;
                rows[4].W = 0;
                rows[4].T = 0;
                rows[4].EF = 0;

                oModel1.setData(rows);
                this.getView().byId("inp1").setValue(0);
            },
            onDataExport: function () {
                var aCols, oRowBinding, oSettings, oSheet, oTable;

                if (!this._oTable) {
                    this._oTable = this.byId('table0');
                }

                oTable = this._oTable;
                oRowBinding = oTable.getBinding('items');
                aCols = this.createColumnConfig();

                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: oRowBinding,
                    fileName: 'RICEFW.xlsx',
                    worker: false // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });


            },
            createColumnConfig: function () {
                var aCols = [];

                aCols.push({
                    label: 'Complexity',
                    property: 'complexity',
                    type: EdmType.String,

                });

                aCols.push({
                    label: 'Report',
                    type: EdmType.Number,
                    property: 'R',
                    scale: 0
                });
                aCols.push({
                    label: 'Interface',
                    type: EdmType.Number,
                    property: 'I',
                    scale: 0
                });
                aCols.push({
                    label: 'Conversion',
                    type: EdmType.Number,
                    property: 'C',
                    scale: 0
                });
                aCols.push({
                    label: 'Enhancement',
                    type: EdmType.Number,
                    property: 'E',
                    scale: 0
                });
                aCols.push({
                    label: 'Form',
                    type: EdmType.Number,
                    property: 'F',
                    scale: 0
                });
                aCols.push({
                    label: 'Workflow',
                    type: EdmType.Number,
                    property: 'R',
                    scale: 0
                });

                aCols.push({
                    label: 'Total Objects',
                    type: EdmType.Number,
                    property: 'T',
                    scale: 0
                });

                aCols.push({
                    label: 'Total Efforts(.hrs)',
                    type: EdmType.Number,
                    property: 'EF',
                    scale: 0
                });



                return aCols;
            },
            onInp2Submit: function () {


                var R = this.getView().byId("R");
                var I = this.getView().byId("I");
                var C = this.getView().byId("C");
                var E = this.getView().byId("E");
                var F = this.getView().byId("F");
                var W = this.getView().byId("W");

                var oModel2 = this.getView().byId('table1').getModel("model2");
                var data = oModel2.getData();

                // Generate RICEFW Classification







                // Report 10%
                data[4].R = R.getValue();
                if (data[4].R != 0) {
                    data[4].R = parseInt(data[4].R);
                }

                // Interface 40%
                data[4].I = I.getValue();
                if (data[4].I != 0) {
                    data[4].I = parseInt(data[4].I);
                }


                // Conversion 10%
                data[4].C = C.getValue();
                if (data[4].C != 0) {
                    data[4].C = parseInt(data[4].C);
                }

                // Enhancement 30%
                data[4].E = E.getValue();
                if (data[4].E != 0) {
                    data[4].E = parseInt(data[4].E);
                }

                // Form 5%
                data[4].F = F.getValue();
                if (data[4].F != 0) {
                    data[4].F = parseInt(data[4].F);
                }

                // Workflow 5%
                data[4].W = W.getValue();
                if (data[4].W != 0) {
                    data[4].W = parseInt(data[4].W);
                }

                data[4].T = Number(data[4].R) + Number(data[4].I) + Number(data[4].C) + Number(data[4].E) + Number(data[4].F) + Number(data[4].W);

                // Calculate Complexity for Report 

                if (data[4].R != 0) {

                    //low  data[0].R = 0;
                    data[0].R = data[4].R * (20 / 100);
                    data[0].R = parseInt(data[0].R);

                    //Medium  data[1].R = 0;

                    data[1].R = data[4].R * (30 / 100);
                    data[1].R = parseInt(data[1].R);

                    //High  data[2].R = 0;

                    data[2].R = data[4].R * (40 / 100);
                    data[2].R = parseInt(data[2].R);


                    //Very High  data[3].R = 0;


                    data[3].R = data[4].R * (10 / 100);
                    data[3].R = parseInt(data[3].R);



                }else{
                    data[0].R =  data[1].R =  data[2].R =  data[3].R = 0;


                }


                // Calculate Complexity for Interface

                if (data[4].I != 0) {

                    //low  data[0].I = 0;
                    data[0].I = data[4].I * (20 / 100);
                    data[0].I = parseInt(data[0].I);

                    //Medium  data[1].I = 0;

                    data[1].I = data[4].I * (30 / 100);
                    data[1].I = parseInt(data[1].I);

                    //High  data[2].I = 0;

                    data[2].I = data[4].I * (40 / 100);
                    data[2].I = parseInt(data[2].I);


                    //VeIy High  data[3].I = 0;


                    data[3].I = data[4].I * (10 / 100);
                    data[3].I = parseInt(data[3].I);



                }else{
                    data[0].I = data[1].I = data[2].I =  data[3].I = 0;


                }



                // Calculate Complexity for Converion

                if (data[4].C != 0) {
                    //low  data[0].C = 0;
                    data[0].C = data[4].C * (20 / 100);
                    data[0].C = parseInt(data[0].C);

                    //MedCum  data[1].C = 0;

                    data[1].C = data[4].C * (30 / 100);
                    data[1].C = parseInt(data[1].C);

                    //HCgh  data[2].C = 0;

                    data[2].C = data[4].C * (40 / 100);
                    data[2].C = parseInt(data[2].C);


                    //VeCy HCgh  data[3].C = 0;


                    data[3].C = data[4].C * (10 / 100);
                    data[3].C = parseInt(data[3].C);




                }else{
                    data[0].C = data[1].C = data[2].C =  data[3].C = 0;


                }
                // Calculate Complexity for Enhancement

                if (data[4].E != 0) {

                    //low  data[0].E = 0;
                    data[0].E = data[4].E * (20 / 100);
                    data[0].E = parseInt(data[0].E);

                    //MedEum  data[1].E = 0;

                    data[1].E = data[4].E * (30 / 100);
                    data[1].E = parseInt(data[1].E);

                    //HEgh  data[2].E = 0;

                    data[2].E = data[4].E * (40 / 100);
                    data[2].E = parseInt(data[2].E);


                    //VeEy HEgh  data[3].E = 0;


                    data[3].E = data[4].E * (10 / 100);
                    data[3].E = parseInt(data[3].E);



                }else{
                    data[0].E = data[1].E = data[2].E =  data[3].E = 0;


                }

                // Calculate Complexity for Forms

                if (data[4].F != 0) {

                    //low  data[0].F = 0;
                    data[0].F = data[4].F * (20 / 100);
                    data[0].F = parseInt(data[0].F);

                    //MFdFum  data[1].F = 0;

                    data[1].F = data[4].F * (30 / 100);
                    data[1].F = parseInt(data[1].F);

                    //HFgh  data[2].F = 0;

                    data[2].F = data[4].F * (40 / 100);
                    data[2].F = parseInt(data[2].F);


                    //VFFy HFgh  data[3].F = 0;


                    data[3].F = data[4].F * (10 / 100);
                    data[3].F = parseInt(data[3].F);



                }
                else{
                    data[0].F = data[1].F = data[2].F =  data[3].F = 0;


                }

                // Calculate Complexity for Workflow
                if (data[4].W != 0) {

                    //low  data[0].W = 0;
                    data[0].W = data[4].W * (20 / 100);
                    data[0].W = parseInt(data[0].W);

                    //MWdWum  data[1].W = 0;

                    data[1].W = data[4].W * (30 / 100);
                    data[1].W = parseInt(data[1].W);

                    //HWgh  data[2].W = 0;

                    data[2].W = data[4].W * (40 / 100);
                    data[2].W = parseInt(data[2].W);


                    //VWWy HWgh  data[3].W = 0;


                    data[3].W = data[4].W * (10 / 100);
                    data[3].W = parseInt(data[3].W);



                }
                else{
                    data[0].W = data[1].W = data[2].W =  data[3].W = 0;


                }
                // Total on rows 
                data[0].T = data[0].R + data[0].I + data[0].C + data[0].E + data[0].F + data[0].W;

                data[1].T = data[1].R + data[1].I + data[1].C + data[1].E + data[1].F + data[1].W;

                data[2].T = data[2].R + data[2].I + data[2].C + data[2].E + data[2].F + data[2].W;

                data[3].T = data[3].R + data[3].I + data[3].C + data[3].E + data[3].F + data[3].W;


                //  get Efforts

                data = this.calculateEfforts(data);

                oModel2.setData(data);


            },
            refresh1: function () {

                var oModel2 = this.getView().byId("table1").getModel("model2");

                var rows = oModel2.getData();
                rows[0].complexity = "Low";
                rows[0].R = 0;
                rows[0].I = 0;
                rows[0].C = 0;
                rows[0].E = 0;
                rows[0].F = 0;
                rows[0].W = 0;
                rows[0].T = 0;
                rows[0].EF = 0;

                rows[1].complexity = "Medium";
                rows[1].R = 0;
                rows[1].I = 0;
                rows[1].C = 0;
                rows[1].E = 0;
                rows[1].F = 0;
                rows[1].W = 0;
                rows[1].T = 0;
                rows[1].EF = 0;

                rows[2].complexity = "High";
                rows[2].R = 0;
                rows[2].I = 0;
                rows[2].C = 0;
                rows[2].E = 0;
                rows[2].F = 0;
                rows[2].W = 0;
                rows[2].T = 0;
                rows[2].EF = 0;

                rows[3].complexity = "Very High";
                rows[3].R = 0;
                rows[3].I = 0;
                rows[3].C = 0;
                rows[3].E = 0;
                rows[3].F = 0;
                rows[3].W = 0;
                rows[3].T = 0;
                rows[3].EF = 0;

                rows[4].complexity = "Total";
                rows[4].R = 0;
                rows[4].I = 0;
                rows[4].C = 0;
                rows[4].E = 0;
                rows[4].F = 0;
                rows[4].W = 0;
                rows[4].T = 0;
                rows[4].EF = 0;

                oModel2.setData(rows);
                this.getView().byId("R").setValue();
                this.getView().byId("I").setValue();
                this.getView().byId("C").setValue();
                this.getView().byId("E").setValue();
                this.getView().byId("F").setValue();
                this.getView().byId("W").setValue();

            },
            onDataExport1: function () {
                var aCols, oRowBinding, oSettings, oSheet, oTable;



                oTable = this.byId('table1');;
                oRowBinding = oTable.getBinding('items');
                aCols = this.createColumnConfig();

                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: oRowBinding,
                    fileName: 'RICEFW.xlsx',
                    worker: false // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });


            },
            onInp3Submit: function () {

                var oModel3 = this.getView().byId('table3').getModel("model3");
                var data = oModel3.getData();

                // Generate RICEFW Classification

             
                data[4].R = Number(data[0].R) + Number(data[1].R) + Number(data[2].R) + Number(data[3].R);

                data[4].I = Number(data[0].I) + Number(data[1].I) + Number(data[2].I) + Number(data[3].I);

                data[4].C = Number(data[0].C) + Number(data[1].C) + Number(data[2].C) + Number(data[3].C);

                data[4].E = Number(data[0].E) + Number(data[1].E) + Number(data[2].E) + Number(data[3].E);

                data[4].F = Number(data[0].F) + Number(data[1].F) + Number(data[2].F) + Number(data[3].F);


                data[4].W = Number(data[0].W) + Number(data[1].W) + Number(data[2].W) + Number(data[3].W);

                
               


                
                data[4].T = Number(data[4].R) + Number(data[4].I) + Number(data[4].C) + Number(data[4].E) + Number(data[4].F) + Number(data[4].W);

            
                // Total on rows 
                data[0].T = Number(data[0].R) + Number(data[0].I) + Number(data[0].C) + Number(data[0].E) + Number(data[0].F) + Number(data[0].W);

                data[1].T = Number(data[1].R) + Number(data[1].I) + Number(data[1].C) + Number(data[1].E) + Number(data[1].F) + Number(data[1].W);

                data[2].T = Number(data[2].R) + Number(data[2].I) + Number(data[2].C) + Number(data[2].E) + Number(data[2].F) + Number(data[2].W);

                data[3].T = Number(data[3].R) + Number(data[3].I) + Number(data[3].C) + Number(data[3].E) + Number(data[3].F) + Number(data[3].W);


                //  get Efforts

                data = this.calculateEfforts(data);

                oModel3.setData(data);


            },
            refresh2: function () {

                var oModel3 = this.getView().byId("table3").getModel("model3");

                var rows = oModel3.getData();
                rows[0].complexity = "Low";
                rows[0].inp = true;
                rows[0].text = false;
                rows[0].R = 0;
                rows[0].I = 0;
                rows[0].C = 0;
                rows[0].E = 0;
                rows[0].F = 0;
                rows[0].W = 0;
                rows[0].T = 0;
                rows[0].EF = 0;

                rows[1].complexity = "Medium";
                rows[1].inp = true;
                rows[1].text = false;
                rows[1].R = 0;
                rows[1].I = 0;
                rows[1].C = 0;
                rows[1].E = 0;
                rows[1].F = 0;
                rows[1].W = 0;
                rows[1].T = 0;
                rows[1].EF = 0;

                rows[2].complexity = "High";
                rows[1].inp = true;
                rows[1].text = false;
                rows[2].R = 0;
                rows[2].I = 0;
                rows[2].C = 0;
                rows[2].E = 0;
                rows[2].F = 0;
                rows[2].W = 0;
                rows[2].T = 0;
                rows[2].EF = 0;

                rows[3].complexity = "Very High";
                rows[1].inp = true;
                rows[1].text = false;
                rows[3].R = 0;
                rows[3].I = 0;
                rows[3].C = 0;
                rows[3].E = 0;
                rows[3].F = 0;
                rows[3].W = 0;
                rows[3].T = 0;
                rows[3].EF = 0;

                rows[4].complexity = "Total";
                rows[4].inp = false;
                rows[4].text = true;
                rows[4].R = 0;
                rows[4].I = 0;
                rows[4].C = 0;
                rows[4].E = 0;
                rows[4].F = 0;
                rows[4].W = 0;
                rows[4].T = 0;
                rows[4].EF = 0;

                oModel3.setData(rows);


            },
            onDataExport2: function () {
                var aCols, oRowBinding, oSettings, oSheet, oTable;



                oTable = this.byId('table3');;
                oRowBinding = oTable.getBinding('items');
                aCols = this.createColumnConfig();

                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: oRowBinding,
                    fileName: 'RICEFW.xlsx',
                    worker: false // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });


            }
        });
    });
