# Azure Webapp Boilerplate
This is a short & sweet setup to create Azure Webapps using typescript.

## To Use
Simply clone/fork this repository, then rename and extend to your hearts content.

## To Deploy to Azure
To deploy your project, create a default webapp on Azure, then set your git repo as the deployment location in "Deployment Options" in your new webapp.

## Dev Dependancies vs Dependancies
Use devDependancies for any frontend libraries you are using (these will be packed into the webpack bundle so they don't need to exist in the prod enviroment). Use regular dependancies for any libraries the backend will require.