NodeJs19


# Sequelize
### Generate sequelize config file
```npx sequelize-cli init --force```

### Create a new model file
```npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string```

### Create a new migration file
```npx sequelize-cli migration:generate --name add-age-to-users```


### Run migrations
```npx sequelize-cli db:migrate```

### Undo migrations
```npx sequelize-cli db:migrate:undo```

### Undo all migrations
```npx sequelize-cli db:migrate:undo:all```

# Vercel CLI
### Install Vercel CLI
```npm i -g vercel```

### Login to Vercel
```vercel login```