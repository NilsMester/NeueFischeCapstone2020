FROM openjdk:15-oracle

MAINTAINER Nils Mester <n-mester@mailbox.org>

ADD backend/target/tablog.jar app.jar

CMD ["sh" , "-c", "java -jar -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URI -Djwt.secretkey=$JWT_SECRETKEY app.jar"]
