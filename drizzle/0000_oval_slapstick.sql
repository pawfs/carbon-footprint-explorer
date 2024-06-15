CREATE TABLE `carbon-footprint-explorer_bookmarks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256),
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` integer,
	`text` text
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `carbon-footprint-explorer_bookmarks` (`name`);