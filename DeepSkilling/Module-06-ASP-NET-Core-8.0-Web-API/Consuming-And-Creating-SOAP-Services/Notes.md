# Consuming and Creating SOAP Services

## Overview

SOAP (Simple Object Access Protocol) is a protocol used to exchange structured information between applications over a network. It is XML-based and widely used in enterprise applications. Windows Communication Foundation (WCF) is a Microsoft framework used to build SOAP services.

---

# Learning Objectives

After completing this topic, you will be able to:

- Understand SOAP Web Services.
- Understand WCF Architecture.
- Consume SOAP services in ASP.NET Core.
- Create SOAP services using WCF.
- Compare SOAP and REST APIs.

---

# What is SOAP?

SOAP (Simple Object Access Protocol) is an XML-based messaging protocol used for communication between applications.

Characteristics

- XML Based
- Platform Independent
- Language Independent
- Secure
- Standardized Protocol

---

# SOAP Architecture

Client

↓

SOAP Request (XML)

↓

SOAP Service (WCF)

↓

SOAP Response (XML)

---

# SOAP Message Structure

A SOAP message contains:

- Envelope
- Header
- Body
- Fault

Example

```xml
<soap:Envelope>
    <soap:Header/>
    <soap:Body>
        <GetEmployee/>
    </soap:Body>
</soap:Envelope>
```

---

# What is WCF?

Windows Communication Foundation (WCF) is a Microsoft framework used for building secure service-oriented applications.

Features

- SOAP Support
- Security
- Transactions
- Reliable Messaging
- Multiple Transport Protocols

---

# Consuming SOAP Services

Steps

1. Add Service Reference.
2. Generate Proxy Classes.
3. Call SOAP Methods.
4. Process Response.

---

# Creating SOAP Service

Steps

1. Create Service Contract.
2. Create Data Contract.
3. Implement Service.
4. Host the Service.
5. Consume the Service.

---

# SOAP vs REST

| Feature | SOAP | REST |
|----------|------|------|
| Protocol | Yes | No |
| Data Format | XML | JSON/XML |
| Performance | Slower | Faster |
| Security | WS-Security | HTTPS/JWT |
| Flexibility | Less | High |

---

# Advantages of SOAP

- Enterprise Ready
- Highly Secure
- Reliable Messaging
- ACID Transactions
- Standardized

---

# Applications

- Banking
- Healthcare
- Insurance
- Government Systems
- Enterprise Applications

---

# Conclusion

SOAP and WCF remain important technologies for enterprise applications requiring strong security, reliability, and standardized communication.