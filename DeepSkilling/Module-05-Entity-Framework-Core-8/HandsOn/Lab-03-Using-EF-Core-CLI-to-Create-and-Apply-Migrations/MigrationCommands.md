# EF Core CLI Commands

## Install EF CLI

```bash
dotnet tool install --global dotnet-ef
```

---

## Create Migration

```bash
dotnet ef migrations add InitialCreate
```

---

## Apply Migration

```bash
dotnet ef database update
```

---

## Remove Migration

```bash
dotnet ef migrations remove
```

---

## List Migrations

```bash
dotnet ef migrations list
```