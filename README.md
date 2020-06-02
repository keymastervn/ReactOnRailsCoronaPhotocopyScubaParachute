# rails-examination

I made rails 5.2.3 to work with react-on-rails with ajaxify datatable.
It was a joy!

### Migrate

```config/application.yml
RDS_DB_NAME: rails-examination_development
RDS_USERNAME: postgres
RDS_PASSWORD: postgres
RDS_HOSTNAME: localhost
RDS_PORT: 5432
SECRET_KEY_BASE: 'insert here' # rails credentials:edit
RAILS_ENV: development
```

Then

```
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

### Serve

Run separately

```
$ rails s
$ ./bin/webpack-dev-server
```

or with `foreman` as [described](https://github.com/shakacode/react_on_rails/blob/master/docs/tutorial.md#setting-up-your-environment)

```
// Then run server with static client side files:
$ foreman start -f Procfile.dev
// To run with the webpack-dev-server:
$ foreman start -f Procfile.dev-server
```
