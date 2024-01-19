import database from "src/infra/database";

export default async function StatusAPI(request, response) {
  const updatedAt = new Date().toISOString();

  const rawMaxConnections = await database.query(`
    SHOW max_connections;
  `);
  const maxConnections = rawMaxConnections.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const rawOpenedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;",
    values: [databaseName],
  });
  const openedConnections = rawOpenedConnections.rows[0].count;

  const rawVersion = await database.query(`
    SHOW server_version;
  `);
  const version = rawVersion.rows[0].server_version;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        max_connections: parseInt(maxConnections),
        opened_connections: openedConnections,
        version: version,
      },
    },
  });
}
