/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company and XSK contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Apache License, v2.0
 * which accompanies this distribution, and is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-FileCopyrightText: 2022 SAP SE or an SAP affiliate company and XSK contributors
 * SPDX-License-Identifier: Apache-2.0
 */
exports.getHdiFilePlugins = function () {
    return {
        file_suffixes: {
            hdbconstraint: {
                plugin_name: "com.sap.hana.di.constraint",
            },
            hdbsynonym: {
                plugin_name: "com.sap.hana.di.synonym",
            },
            hdbview: {
                plugin_name: "com.sap.hana.di.view",
            },
            hdbcalculationview: {
                plugin_name: "com.sap.hana.di.calculationview",
            },
            calculationview: {
                plugin_name: "com.sap.hana.di.calculationview",
            },
            hdbanalyticprivilege: {
                plugin_name: "com.sap.hana.di.analyticprivilege",
            },
            analyticprivilege: {
                plugin_name: "com.sap.hana.di.analyticprivilege",
            },
            hdbtabledata: {
                plugin_name: "com.sap.hana.di.tabledata.properties",
            },
            csv: {
                plugin_name: "com.sap.hana.di.tabledata.properties",
            },
            hdbapplicationtime: {
                plugin_name: "com.sap.hana.di.applicationtime",
            },
            txt: {
                plugin_name: "com.sap.hana.di.copyonly",
            },
            hdbcollection: {
                plugin_name: "com.sap.hana.di.collection",
            },
            hdblogicalschema: {
                plugin_name: "com.sap.hana.di.logicalschema",
            },
            hdblibrary: {
                plugin_name: "com.sap.hana.di.library",
            },
            hdbindex: {
                plugin_name: "com.sap.hana.di.index",
            },
            hdbgraphworkspace: {
                plugin_name: "com.sap.hana.di.graphworkspace",
            },
            hdbfunction: {
                plugin_name: "com.sap.hana.di.function",
            },
            hdbflowgraph: {
                plugin_name: "com.sap.hana.di.flowgraph",
            },
            hdbeshconfig: {
                plugin_name: "com.sap.hana.di.eshconfig",
            },
            hdbtable: {
                plugin_name: "com.sap.hana.di.table",
            },
            hdbdropcreatetable: {
                plugin_name: "com.sap.hana.di.dropcreatetable",
            },
            hdbcollectionindex: {
                plugin_name: "com.sap.hana.di.collection.index",
            },
            hdbmigrationtable: {
                plugin_name: "com.sap.hana.di.table.migration",
            },
            hdbprocedure: {
                plugin_name: "com.sap.hana.di.procedure",
            },
            hdbprojectionview: {
                plugin_name: "com.sap.hana.di.projectionview",
            },
            hdbprojectionviewconfig: {
                plugin_name: "com.sap.hana.di.projectionview.config",
            },
            hdbpublicsynonym: {
                plugin_name: "com.sap.hana.di.publicsynonym",
            },
            hdbreptask: {
                plugin_name: "com.sap.hana.di.reptask",
            },
            hdbrole: {
                plugin_name: "com.sap.hana.di.role",
            },
            hdbroleconfig: {
                plugin_name: "com.sap.hana.di.role.config",
            },
            hdbsearchruleset: {
                plugin_name: "com.sap.hana.di.searchruleset",
            },
            hdbsequence: {
                plugin_name: "com.sap.hana.di.sequence",
            },
            hdbsynonymconfig: {
                plugin_name: "com.sap.hana.di.synonym.config",
            },
            hdbstatistics: {
                plugin_name: "com.sap.hana.di.statistics",
            },
            hdbstructuredprivilege: {
                plugin_name: "com.sap.hana.di.structuredprivilege",
            },
            hdbsystemversioning: {
                plugin_name: "com.sap.hana.di.systemversioning",
            },
            properties: {
                plugin_name: "com.sap.hana.di.tabledata.properties",
            },
            tags: {
                plugin_name: "com.sap.hana.di.tabledata.properties",
            },
            hdbtabletype: {
                plugin_name: "com.sap.hana.di.tabletype",
            },
            hdbtrigger: {
                plugin_name: "com.sap.hana.di.trigger",
            },
            hdbvirtualfunction: {
                plugin_name: "com.sap.hana.di.virtualfunction",
            },
            hdbvirtualfunctionconfig: {
                plugin_name: "com.sap.hana.di.virtualfunction.config",
            },
            hdbvirtualpackagehadoop: {
                plugin_name: "com.sap.hana.di.virtualpackage.hadoop",
            },
            hdbvirtualpackagesparksql: {
                plugin_name: "com.sap.hana.di.virtualpackage.sparksql",
            },
            hdbvirtualprocedure: {
                plugin_name: "com.sap.hana.di.virtualprocedure",
            },
            hdbvirtualtable: {
                plugin_name: "com.sap.hana.di.virtualtable",
            },
            hdbvirtualtableconfig: {
                plugin_name: "com.sap.hana.di.virtualtable.config",
            },
        },
    };
};
