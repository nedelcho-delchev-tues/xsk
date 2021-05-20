/*
 * Copyright (c) 2019-2021 SAP SE or an SAP affiliate company and XSK contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Apache License, v2.0
 * which accompanies this distribution, and is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-FileCopyrightText: 2019-2021 SAP SE or an SAP affiliate company and XSK contributors
 * SPDX-License-Identifier: Apache-2.0
 */
package com.sap.xsk.auditlog.client.messages;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(Include.NON_NULL)
public class DataAccess extends AuditLogMessage {

  @JsonProperty(value = "object", required = true)
  private final AuditedObject object;
  @JsonProperty(value = "data_subject", required = true)
  private final AuditedDataSubject subject;
  @JsonProperty(value = "attributes", required = true)
  private final List<Attribute> attributes;
  @JsonProperty("attachments")
  private final List<Attachment> attachments;
  @JsonProperty(value = "channel")
  private final String channel;

  public DataAccess(DataAccessDetail accessDetails, AuditLogDetail logDetails) {
    super(logDetails);
    this.object = accessDetails.object;
    this.subject = accessDetails.subject;
    this.attributes = accessDetails.attributes;
    this.attachments = accessDetails.attachments;
    this.channel = accessDetails.channel;
  }

  public String getChannel() {
    return this.channel;
  }

  public List<Attribute> getAttributes() {
    return this.attributes;
  }

  public List<Attachment> getAttachments() {
    return this.attachments;
  }

  @JsonIgnore
  @Override
  public AuditLogCategory getCategory() {
    return AuditLogCategory.DATA_ACCESS;
  }

  public static class DataAccessDetail {

    private final AuditedObject object;
    private final AuditedDataSubject subject;
    private final List<Attribute> attributes;

    private String channel;
    private List<Attachment> attachments;

    public DataAccessDetail(AuditedObject object, AuditedDataSubject subject, List<Attribute> attributes) {
      this.object = object;
      this.subject = subject;
      this.attributes = new ArrayList<>(attributes);
    }

    public void setChannel(String channel) {
      this.channel = channel;
    }

    public void setAttachments(List<Attachment> attachments) {
      this.attachments = new ArrayList<>(attachments);
    }
  }
}

