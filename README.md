# Learning Backend
This is a basic project of replication of two features of instagram, one to create a post and other to see the post with very minimal front-end cause it was backend centric. This is very basic but made me understand about how a single click made goes from many different operations and databases.
Learnt about schema and model creation for a database.
Learnt about cors(Cross-Origin Resource Sharing), which is used to allow the different servers communicate with each other.
## Flow
1) Post creation: First the user uploads a caption and a file, the caption goes directly to database, but file, first goes to a cloud service provider where the image is stored and then the link from that would be stored in the database
2) Feed viewing: The database shows caption from direct database, but for image, we would access the image from the link onto the database


## packages used
express, router, mongoose, dotenv, ImageKit(cloud storage provider), multer, cors
