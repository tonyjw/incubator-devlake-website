"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[97431],{33396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(61839);const i={title:"Python Plugin Implementation",sidebar_position:3,description:"Python Plugin Implementation\n"},l=void 0,r={unversionedId:"DeveloperManuals/PythonPluginImplementation",id:"DeveloperManuals/PythonPluginImplementation",title:"Python Plugin Implementation",description:"Python Plugin Implementation\n",source:"@site/docs/DeveloperManuals/PythonPluginImplementation.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/PythonPluginImplementation",permalink:"/zh/docs/next/DeveloperManuals/PythonPluginImplementation",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/DeveloperManuals/PythonPluginImplementation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Python Plugin Implementation",sidebar_position:3,description:"Python Plugin Implementation\n"},sidebar:"docsSidebar",previous:{title:"Plugin Implementation",permalink:"/zh/docs/next/DeveloperManuals/PluginImplementation"},next:{title:"DB Migration",permalink:"/zh/docs/next/DeveloperManuals/DBMigration"}},s={},p=[{value:"Create the plugin project",id:"create-the-plugin-project",level:2},{value:"Create <code>main</code> file",id:"create-main-file",level:2},{value:"Connection parameters",id:"connection-parameters",level:3},{value:"Scope config",id:"scope-config",level:3},{value:"Tool scope type",id:"tool-scope-type",level:3},{value:"Implement domain_scopes method",id:"implement-domain_scopes-method",level:3},{value:"Implement <code>remote_scope</code> and <code>remote_scope_groups</code> method",id:"implement-remote_scope-and-remote_scope_groups-method",level:3},{value:"Implement <code>test_connection</code> method",id:"implement-test_connection-method",level:3},{value:"Add a new data stream",id:"add-a-new-data-stream",level:2},{value:"Create a tool model",id:"create-a-tool-model",level:3},{value:"Migration of tool models",id:"migration-of-tool-models",level:4},{value:"Migration operations",id:"migration-operations",level:5},{value:"Create the stream class",id:"create-the-stream-class",level:3},{value:"Substreams",id:"substreams",level:4},{value:"Create an API wrapper",id:"create-an-api-wrapper",level:3},{value:"Request and response hook",id:"request-and-response-hook",level:4},{value:"Pagination",id:"pagination",level:4},{value:"Substreams",id:"substreams-1",level:2},{value:"Test the plugin standalone",id:"test-the-plugin-standalone",level:2},{value:"Automated tests",id:"automated-tests",level:2},{value:"Debugging Python plugins",id:"debugging-python-plugins",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will help you create a new plugin for DevLake in python."),(0,o.kt)("h2",{id:"create-the-plugin-project"},"Create the plugin project"),(0,o.kt)("p",null,"Make sure you have ",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/#installation"},"Poetry")," installed.\nMove to ",(0,o.kt)("inlineCode",{parentName:"p"},"python/plugins")," and execute ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry new myplugin"),".\nThis will generate a new directory for your plugin."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file and add the following line at the end of the ",(0,o.kt)("inlineCode",{parentName:"p"},"[tool.poetry.dependencies]")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pydevlake = { path = "../../pydevlake", develop = true }\n')),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"poetry install"),"."),(0,o.kt)("h2",{id:"create-main-file"},"Create ",(0,o.kt)("inlineCode",{parentName:"h2"},"main")," file"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from typing import Iterable\n\nimport pydevlake as dl\n\n\nclass MyPluginConnection(dl.Connection):\n    pass\n\n\nclass MyPluginScopeConfig(dl.ScopeConfig):\n    pass\n\n\nclass MyPluginToolScope(dl.ToolScope):\n    pass\n\n\nclass MyPlugin(dl.Plugin):\n    connection_type = MyPluginConnection\n    tool_scope_type = MyPluginToolScope\n    scope_config_type = MyPluginScopeConfig\n    streams = []\n\n    def domain_scopes(self, tool_scope: MyScope) -> Iterable[dl.DomainScope]:\n        ...\n\n    def remote_scope_groups(self, connection: MyPluginConnection) -> Iterable[dl.RemoteScopeGroup]:\n        ...\n\n    def remote_scopes(self, connection, group_id: str) -> Iterable[MyPluginToolScope]:\n        ...\n\n    def test_connection(self, connection: MyPluginConnection) -> dl.TestConnectionResult:\n        ...\n\n\nif __name__ == '__main__':\n    MyPlugin.start()\n")),(0,o.kt)("p",null,"This file is the entry point to your plugin.\nIt specifies three datatypes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A connection that groups the parameters that your plugin needs to collect data, e.g. the url and credentials to connect to the datasource"),(0,o.kt)("li",{parentName:"ul"},"A tool layer scope type that represents the top-level entity of this plugin, e.g. a board, a repository, a project, etc."),(0,o.kt)("li",{parentName:"ul"},"A scope config that contains the domain entities for a given scope and the the parameters that your plugin uses to convert some data, e.g. regexes to match issue type from name.")),(0,o.kt)("p",null,"The plugin class declares what are its connection, tool scope, and scope config types.\nIt also declares its list of streams, and is responsible to define 4 methods that we'll cover hereafter."),(0,o.kt)("p",null,"We also need to create two shell scripts in the plugin root directory to build and run the plugin.\nCreate a ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\ncd "$(dirname "$0")"\npoetry install\n')),(0,o.kt)("p",null,"And a ",(0,o.kt)("inlineCode",{parentName:"p"},"run.sh")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\ncd "$(dirname "$0")"\npoetry run python myplugin/main.py "$@"\n')),(0,o.kt)("p",null,"Make sure to make both files executable: ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x build.sh run.sh"),".\nThe first script is called by DevLake at startup to build the plugin.\nThe second script is called each time DevLake needs to run one of the plugin commands."),(0,o.kt)("h3",{id:"connection-parameters"},"Connection parameters"),(0,o.kt)("p",null,"The parameters of your plugin are split between those that are required to connect to the datasource that are\ngrouped in your connection class and those that are used to customize conversion to domain models that are grouped in your scope config class.\nFor example, to add ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," parameter, edit ",(0,o.kt)("inlineCode",{parentName:"p"},"MyPluginConnection")," as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydantic import SecretStr\n\nclass MyPluginConnection(Connection):\n    url: str\n    token: SecretStr\n")),(0,o.kt)("p",null,"Using type ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretStr")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"str")," will encode the value in the database.\nTo get the ",(0,o.kt)("inlineCode",{parentName:"p"},"str")," value, you need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"get_secret_value()"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"connection.token.get_secret_value()"),".\nAll plugin methods that have a connection parameter will be called with an instance of this class.\nNote that you should not define ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__"),"."),(0,o.kt)("h3",{id:"scope-config"},"Scope config"),(0,o.kt)("p",null,"A scope config contains the list of domain entities to collect and optionally some parameters used to customize the conversion of data from the tool layer to the domain layer. For example, you can define a regex to match issue type from issue name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyPluginScopeConfig(ScopeConfig):\n    issue_type_regex: str\n")),(0,o.kt)("p",null,"If your plugin does not require any such conversion parameter, you can omit this class and the ",(0,o.kt)("inlineCode",{parentName:"p"},"scope_config_type")," plugin attribute."),(0,o.kt)("h3",{id:"tool-scope-type"},"Tool scope type"),(0,o.kt)("p",null,"The tool scope type is the top-level entity type of your plugin.\nFor example, a board, a repository, a project, etc.\nA scope is connected to a connection, and all other collected entities are related to a scope.\nFor example, a plugin for Jira will have a tool scope type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Board"),", and all other entities, such as issues, will belong to a single board."),(0,o.kt)("h3",{id:"implement-domain_scopes-method"},"Implement domain_scopes method"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"domain_scopes")," method should return the list of domain scopes that are related to a given tool scope. Usually, this consists of a single domain scope, but it can be more than one for plugins that collect data from multiple domains."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydevlake.domain_layer.devops import CicdScope\n...\n\nclass MyPlugin(dl.Plugin):\n    ...\n\n    def domain_scopes(self, tool_scope: MyPluginToolScope) -> list[dl.DomainScope]:\n        yield CicdScope(\n            name=tool_scope.name,\n            description=tool_scope.description,\n            url=tool_scope.url,\n        )\n\n")),(0,o.kt)("h3",{id:"implement-remote_scope-and-remote_scope_groups-method"},"Implement ",(0,o.kt)("inlineCode",{parentName:"h3"},"remote_scope")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"remote_scope_groups")," method"),(0,o.kt)("p",null,"Those two methods are used by DevLake to list the available scopes in the datasource.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"remote_scope_groups"),' method should return a list of scope "groups" and the ',(0,o.kt)("inlineCode",{parentName:"p"},"remote_scopes")," method should return the list of tool scopes in a given group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyPlugin(dl.Plugin):\n    ...\n\n    def remote_scope_groups(self, connection: MyPluginConnection) -> Iterable[dl.RemoteScopeGroup]:\n        api = ...\n        response = ...\n        for raw_group in response:\n            yield RemoteScopeGroup(\n                id=raw_group.id,\n                name=raw_group.name,\n            )\n\n    def remote_scopes(self, connection, group_id: str) -> Iterable[MyPluginToolScope]:\n        api = ...\n        response = ...\n        for raw_scope in response:\n            yield MyPluginToolScope(\n                id=raw_scope['id'],\n                name=raw_scope['name'],\n                description=raw_scope['description'],\n                url=raw_scope['url'],\n            )\n")),(0,o.kt)("h3",{id:"implement-test_connection-method"},"Implement ",(0,o.kt)("inlineCode",{parentName:"h3"},"test_connection")," method"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"test_connection")," method is used to test if a given connection is valid.\nIt should check that the connection credentials are valid.\nIt should make an authenticated request to the API and return a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestConnectionResult"),".\nThere is a convenience static method ",(0,o.kt)("inlineCode",{parentName:"p"},"from_api_response")," to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestConnectionResult")," object from an API response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyPlugin(dl.Plugin):\n    ...\n\n    def test_connection(self, connection: MyPluginConnection) -> dl.TestConnectionResult:\n        api = ... # Create API client\n        response = ... # Make authenticated request to API\n        return dl.TestConnection.from_api_response(response)\n")),(0,o.kt)("h2",{id:"add-a-new-data-stream"},"Add a new data stream"),(0,o.kt)("p",null,"A data stream groups the logic for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"collecting the raw data from the datasource"),(0,o.kt)("li",{parentName:"ul"},"extracting this raw data into a tool-specific model"),(0,o.kt)("li",{parentName:"ul"},"converting the tool model into an equivalent ",(0,o.kt)("a",{parentName:"li",href:"https://devlake.apache.org/docs/next/DataModels/DevLakeDomainLayerSchema"},"DevLake domain model"))),(0,o.kt)("h3",{id:"create-a-tool-model"},"Create a tool model"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"models.py")," file.\nThen create a class that modelizes the data your stream is going to collect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydevlake.model import ToolModel\n\nclass User(ToolModel, table=True):\n    id: str = Field(primary_key=True)\n    name: str\n    email: str\n")),(0,o.kt)("p",null,"Your tool model must declare at least one attribute as a primary key, like ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," in the example above.\nIt must inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"ToolModel"),", which in turn inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLModel"),", the base class of an ",(0,o.kt)("a",{parentName:"p",href:"https://sqlmodel.tiangolo.com/"},"ORM of the same name"),".\nYou can use ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLModel")," features like ",(0,o.kt)("a",{parentName:"p",href:"https://sqlmodel.tiangolo.com/tutorial/relationship-attributes/"},"declaring relationships with other models"),".\nDo not forget ",(0,o.kt)("inlineCode",{parentName:"p"},"table=True"),", otherwise no table will be created in the database. You can omit it for abstract model classes."),(0,o.kt)("p",null,"To facilitate or even eliminate extraction, your tool models should be close to the raw data you collect. Note that if you collect data from a JSON REST API that uses camelCased properties, you can still define snake_cased attributes in your model. The camelCased attributes aliases will be generated, so no special care is needed during extraction."),(0,o.kt)("h4",{id:"migration-of-tool-models"},"Migration of tool models"),(0,o.kt)("p",null,"Tool models, connection, scope and scope config types are stored in the DevLake database.\nWhen you change the definition of one of those types, the database needs to be migrated.\nAutomatic migration takes care of most modifications, but some changes require manual migration. For example, automatic migration never drops columns. Another example is adding a column to the primary key of a table, you need to write a script that remove the primary key constraint and add a new compound primary key."),(0,o.kt)("p",null,"To declare a new migration script, you decorate a function with the ",(0,o.kt)("inlineCode",{parentName:"p"},"migration")," decorator. The function name should describe what the script does. The ",(0,o.kt)("inlineCode",{parentName:"p"},"migration")," decorator takes a version number that should be a 14 digits timestamp in the format ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYYMMDDhhmmss"),". The function takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"MigrationScriptBuilder")," as a parameter. This builder exposes methods to execute migration operations."),(0,o.kt)("h5",{id:"migration-operations"},"Migration operations"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MigrationScriptBuilder")," exposes the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"execute(sql: str, dialect: Optional[Dialect])"),": execute a raw SQL statement. The ",(0,o.kt)("inlineCode",{parentName:"li"},"dialect")," parameter is used to execute the SQL statement only if the database is of the given dialect. If ",(0,o.kt)("inlineCode",{parentName:"li"},"dialect")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),", the statement is executed unconditionally."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"drop_column(table: str, column: str)"),": drop a column from a table"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"drop_table(table: str)"),": drop a table")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydevlake.migration import MigrationScriptBuilder, migration, Dialect\n\n@migration(20230524181430)\ndef add_build_id_as_job_primary_key(b: MigrationScriptBuilder):\n    table = Job.__tablename__\n    b.execute(f'ALTER TABLE {table} DROP PRIMARY KEY', Dialect.MYSQL)\n    b.execute(f'ALTER TABLE {table} DROP CONSTRAINT {table}_pkey', Dialect.POSTGRESQL)\n    b.execute(f'ALTER TABLE {table} ADD PRIMARY KEY (id, build_id)')\n")),(0,o.kt)("h3",{id:"create-the-stream-class"},"Create the stream class"),(0,o.kt)("p",null,"Create a new file for your first stream in a ",(0,o.kt)("inlineCode",{parentName:"p"},"streams")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydevlake import Stream, DomainType\nimport pydevlake.domain_layer.crossdomain as cross\n\nfrom myplugin.models import User\n\n\nclass Users(Stream):\n    tool_model = ToolUser\n    domain_models = [cross.User]\n\n    def collect(self, state, context) -> Iterable[Tuple[object, dict]]:\n        pass\n\n    def extract(self, raw_data) -> ToolUser:\n        pass\n\n    def convert(self, user: ToolUser, context) -> Iterable[DomainUser]:\n        pass\n")),(0,o.kt)("p",null,"This stream will collect raw user data, e.g. as parsed JSON objects, extract this raw data as your\ntool-specific user model, then convert them into domain-layer user models."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tool_model")," class attribute declares the tool model class that is extracted by this stream.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"domain_domain")," class attribute is a list of domain models that are converted from the tool model.\nMost of the time, you will convert a tool model into a single domain model, but need to convert it into multiple domain models."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"collect")," method takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," dictionary and a context object and yields tuples of raw data and new state.\nThe last state that the plugin yielded for a given connection will be reused during the next collection.\nThe plugin can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," to store information necessary to perform incremental collection of data."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"extract")," method takes a raw data object and returns a tool model.\nThis method has a default implementation that populates an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tool_model")," class with the raw data.\nWhen you need to extract a nested value from JSON raw data, you can specify a JSON pointer (see RFC 6901) in the as ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," argument to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Field")," declaration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class User(ToolModel, table=True):\n    id: str = Field(primary_key=True)\n    name: str\n    email: str\n    address: str = Field(source="/contactInfo/address")\n')),(0,o.kt)("p",null,"Here the address field will be populated with the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"contactInfo")," object property of the JSON object."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"convert")," method takes a tool-specific user model and convert it into domain level user models.\nHere the two models align quite well, the conversion is trivial:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def convert(self, user: ToolUser, context: Context) -> Iterable[DomainUser]:\n    yield DomainUser(\n        id=user.id,\n        name=user.name\n        email=user.email\n    )\n")),(0,o.kt)("h4",{id:"substreams"},"Substreams"),(0,o.kt)("p",null,"Sometimes, a datasource is organized hierarchically. For example, in Jira an issue have many comments.\nIn this case, you can create a substream to collect the comments of an issue.\nA substream is a stream that is executed for each element of a parent stream.\nThe parent tool model, in our example an issue, is passed to the substream ",(0,o.kt)("inlineCode",{parentName:"p"},"collect")," method as the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pydevlake as dl\nimport pydevlake.domain_layer.ticket as ticket\n\nfrom myplugin.streams.issues import Issues\n\nclass Comments(dl.Substream):\n    tool_model = IssueComment\n    domain_models = [ticket.IssueComment]\n    parent_stream = Issues\n\n    def collect(self, state, context, parent: Issue) -> Iterable[Tuple[object, dict]]:\n        ...\n")),(0,o.kt)("h3",{id:"create-an-api-wrapper"},"Create an API wrapper"),(0,o.kt)("p",null,"Lets assume that your datasource is a REST API.\nWe can create the following class to define it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydevlake.api import API\n\n\nclass MyAPI(API):\n    def __init__(self, url: str):\n        self.url = url\n\n    def users(self):\n        return self.get(f'{self.url}/users')\n")),(0,o.kt)("p",null,"By inheriting ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," you get access to facilities to wrap REST APIs.\nHere the ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," method will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," object that contains the results of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"<url>/users"),"."),(0,o.kt)("p",null,"Now we can go back to our stream file and implement ",(0,o.kt)("inlineCode",{parentName:"p"},"collect"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from myplugin.api import MyAPI\n\n...\n\n    def collect(self, state, context) -> Iterable[Tuple[object, dict]]:\n        api = MyAPI(context.connection.url)\n        for user in api.users().json:\n            yield user, state\n\n...\n")),(0,o.kt)("p",null,"If the API responds with a list of JSON object with properties matching your ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," model attributes, you're done!.\nIndeed extraction has a default implementation that takes of this common case.\nThis is why it is important to make tool models that align with the data you collect."),(0,o.kt)("p",null,"If this is not the case, e.g. the attribute case mismatch, you can redefine the ",(0,o.kt)("inlineCode",{parentName:"p"},"extract")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'...\n\nclass Users(Stream):\n    ...\n\n    def extract(self, raw_data: dict) -> ToolModel:\n        return ToolUser(\n            id=raw_data["ID"],\n            name=raw_data["Name"],\n            email=raw_data["Email"]\n        )\n\n    ...\n')),(0,o.kt)("h4",{id:"request-and-response-hook"},"Request and response hook"),(0,o.kt)("p",null,"For each request sent and response received by your API wrapper,\nyou can register hooks. Hooks allows you to implement\nauthentication, pagination, and generic API error handling."),(0,o.kt)("p",null,"For example, lets assume that we are dealing with an API that\nrequire user to authenticate via a token set in a request header."),(0,o.kt)("p",null,"A request hook is declared in your API with a ",(0,o.kt)("inlineCode",{parentName:"p"},"@request_hook")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"...\nclass MyAPI(API):\n    def __init__(self, url, token):\n        self.url = url\n        self.token = token\n\n    ...\n    @request_hook\n    def authenticate(self, request):\n        if self.token:\n            request.headers['Token'] = self.token\n    ...\n")),(0,o.kt)("p",null,"Here the method ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticate")," is a hook that is run on each request.\nSimilarly you can declare response hooks with ",(0,o.kt)("inlineCode",{parentName:"p"},"@response_hook"),".\nMultiple hooks are executed in the order of their declaration.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," base class declares some hooks that are executed first."),(0,o.kt)("h4",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,"One usage of a response hook is for handling paginated results.\nA response hook can be used to wrap the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," object in a\n",(0,o.kt)("inlineCode",{parentName:"p"},"PagedResponse")," object that support iteration and fetching other pages.\nThis response hook is actually defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," base class and expect\nyour API wrapper to declare a ",(0,o.kt)("inlineCode",{parentName:"p"},"paginator")," property."),(0,o.kt)("p",null,"You can subclass ",(0,o.kt)("inlineCode",{parentName:"p"},"Paginator")," to provide API specific logic or reuse an\nexisting implementation such as ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenPaginator"),".\nA token paginator assumes the API paginated responses are JSON object with one\nproperty that is an array of items and another that contains the token to the next\npage."),(0,o.kt)("p",null,"For example, the following paginator fetch items from the ",(0,o.kt)("inlineCode",{parentName:"p"},"'results'")," attribute,\nthe next page from the ",(0,o.kt)("inlineCode",{parentName:"p"},"'nextPage'")," attribute and will issue requests with a ",(0,o.kt)("inlineCode",{parentName:"p"},"page"),"\nquery parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\nclass MyAPI(API):\n    ...\n    paginator = TokenPaginator(\n        items_attr='results',\n        next_page_token_attr='nextPage',\n        next_page_token_param='page'\n    )\n    ...\n")),(0,o.kt)("h2",{id:"substreams-1"},"Substreams"),(0,o.kt)("p",null,"With REST APIs, you often need to fetch a stream of items, and then to collect additional\ndata for each of those items."),(0,o.kt)("p",null,"For example you might want to collect all ",(0,o.kt)("inlineCode",{parentName:"p"},"UserComments")," written by each user collected via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Users")," stream."),(0,o.kt)("p",null,"To handle such cases, ",(0,o.kt)("inlineCode",{parentName:"p"},"UserComments")," would inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"Substream")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream"),".\nA substream needs to specify which is his parent stream. The ",(0,o.kt)("inlineCode",{parentName:"p"},"collect")," method\nof a substream will be called with each item collected from the parent stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'...\nfrom pydevlake import Substream\nfrom myplugin.streams.users import Users\n\nclass UserComments(Substream):\n    parent_stream = Users # Must specify the parent stream\n    ...\n    def collect(self, state: dict, context, user: User):\n        """\n        This method will be called for each user collected from parent stream Users.\n        """\n        api = MyPluginAPI(context.connection.token.get_secret_value())\n        for json in api.user_comments(user.id):\n            yield json, state\n    ...\n')),(0,o.kt)("h2",{id:"test-the-plugin-standalone"},"Test the plugin standalone"),(0,o.kt)("p",null,"To test your plugin manually, you can run your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," file with different commands.\nYou can find all those commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," cli flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"poetry run myplugin/main.py --help\n")),(0,o.kt)("p",null,"For testing, the interesting commands are ",(0,o.kt)("inlineCode",{parentName:"p"},"collect"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"extract"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"convert"),".\nEach takes a context and a stream name.\nThe context is a JSON object that must at least contain:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"db_url"),", e.g. you can use ",(0,o.kt)("inlineCode",{parentName:"li"},'"sqlite+pysqlite:///:memory:"')," for an in-memory DB"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"connection")," object containing the same attributes than your plugin connection type")),(0,o.kt)("p",null,"Also, python plugins communicate with go side over an extra file descriptor 3, so you should\nredirect to stdout when testing your plugin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'console\nCTX=\'{"db_url":"sqlite+pysqlite:///:memory:", "connection": {...your connection attrs here...}}\'\npoetry run myplugin/main.py $CTX users 3>&1\n')),(0,o.kt)("h2",{id:"automated-tests"},"Automated tests"),(0,o.kt)("p",null,"Make sure you have unit-tests written for your plugin code. The test files should end with ",(0,o.kt)("inlineCode",{parentName:"p"},"_test.py"),", and are discovered and\nexecuted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"run_tests.sh")," script by the CICD automation. The test files should be placed inside the plugin project directory."),(0,o.kt)("h2",{id:"debugging-python-plugins"},"Debugging Python plugins"),(0,o.kt)("p",null,"You need to have a Python remote-debugger installed to debug the Python code. This capability is controlled by the environment\nvariable ",(0,o.kt)("inlineCode",{parentName:"p"},"USE_PYTHON_DEBUGGER")," which is empty by default. The allowed debuggers as of now are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pycharm")),(0,o.kt)("p",null,"You will further have to set the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHON_DEBUG_HOST")," (The hostname/IP on which your debugger is running relative to the environment\nin which the plugin is running) and ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHON_DEBUG_PORT")," (The corresponding debugger port). The variables should be set in the\nGo integration tests written in ",(0,o.kt)("inlineCode",{parentName:"p"},"backend/test/integration/remote")," or Docker container/server env configuration. Once done,\nset breakpoints in the Python plugin code in your IDE, turn on the debugger in it, and those breakpoints should get hit."))}c.isMDXComponent=!0}}]);