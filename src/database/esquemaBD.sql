-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para pedbox_temas
CREATE DATABASE IF NOT EXISTS `pedbox_temas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `pedbox_temas`;

-- Volcando estructura para tabla pedbox_temas.reddit_listing
CREATE TABLE IF NOT EXISTS `reddit_listing` (
  `listing_id` varchar(50) NOT NULL,
  `kind` varchar(50) NOT NULL,
  `after` varchar(50) DEFAULT NULL,
  `before` varchar(50) DEFAULT NULL,
  `modhash` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`listing_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla pedbox_temas.subreddits
CREATE TABLE IF NOT EXISTS `subreddits` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `public_description` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `description_html` text DEFAULT NULL,
  `submit_text` text DEFAULT NULL,
  `submit_text_html` text DEFAULT NULL,
  `submit_link_label` varchar(255) DEFAULT NULL,
  `submit_text_label` varchar(255) DEFAULT NULL,
  `subreddit_type` varchar(50) DEFAULT NULL,
  `lang` varchar(10) DEFAULT NULL,
  `community_icon` varchar(255) DEFAULT NULL,
  `banner_img` varchar(255) DEFAULT NULL,
  `header_img` varchar(255) DEFAULT NULL,
  `icon_img` varchar(255) DEFAULT NULL,
  `mobile_banner_image` varchar(255) DEFAULT NULL,
  `banner_background_color` varchar(10) DEFAULT NULL,
  `header_title` varchar(255) DEFAULT NULL,
  `key_color` varchar(10) DEFAULT NULL,
  `primary_color` varchar(10) DEFAULT NULL,
  `advertiser_category` varchar(50) DEFAULT NULL,
  `link_flair_position` varchar(50) DEFAULT NULL,
  `user_flair_position` varchar(50) DEFAULT NULL,
  `suggested_comment_sort` varchar(50) DEFAULT NULL,
  `wls` int(11) DEFAULT NULL,
  `subscribers` int(11) DEFAULT NULL,
  `accounts_active` int(11) DEFAULT NULL,
  `active_user_count` int(11) DEFAULT NULL,
  `comment_score_hide_mins` int(11) DEFAULT NULL,
  `prediction_leaderboard_entry_type` int(11) DEFAULT NULL,
  `videostream_links_count` int(11) DEFAULT NULL,
  `notification_level` varchar(50) DEFAULT NULL,
  `created_utc` int(11) DEFAULT NULL,
  `created` int(11) DEFAULT NULL,
  `over18` tinyint(1) DEFAULT NULL,
  `quarantine` tinyint(1) DEFAULT NULL,
  `is_crosspostable_subreddit` tinyint(1) DEFAULT NULL,
  `can_assign_link_flair` tinyint(1) DEFAULT NULL,
  `can_assign_user_flair` tinyint(1) DEFAULT NULL,
  `free_form_reports` tinyint(1) DEFAULT NULL,
  `spoilers_enabled` tinyint(1) DEFAULT NULL,
  `accept_followers` tinyint(1) DEFAULT NULL,
  `hide_ads` tinyint(1) DEFAULT NULL,
  `show_media_preview` tinyint(1) DEFAULT NULL,
  `show_media` tinyint(1) DEFAULT NULL,
  `collapse_deleted_comments` tinyint(1) DEFAULT NULL,
  `community_reviewed` tinyint(1) DEFAULT NULL,
  `disable_contributor_requests` tinyint(1) DEFAULT NULL,
  `restrict_commenting` tinyint(1) DEFAULT NULL,
  `restrict_posting` tinyint(1) DEFAULT NULL,
  `should_archive_posts` tinyint(1) DEFAULT NULL,
  `should_show_media_in_comments_setting` tinyint(1) DEFAULT NULL,
  `has_menu_widget` tinyint(1) DEFAULT NULL,
  `emojis_enabled` tinyint(1) DEFAULT NULL,
  `all_original_content` tinyint(1) DEFAULT NULL,
  `original_content_tag_enabled` tinyint(1) DEFAULT NULL,
  `allow_discovery` tinyint(1) DEFAULT NULL,
  `allow_galleries` tinyint(1) DEFAULT NULL,
  `allow_images` tinyint(1) DEFAULT NULL,
  `allow_polls` tinyint(1) DEFAULT NULL,
  `allow_predictions` tinyint(1) DEFAULT NULL,
  `allow_prediction_contributors` tinyint(1) DEFAULT NULL,
  `allow_predictions_tournament` tinyint(1) DEFAULT NULL,
  `allow_talks` tinyint(1) DEFAULT NULL,
  `allow_videogifs` tinyint(1) DEFAULT NULL,
  `allow_videos` tinyint(1) DEFAULT NULL,
  `accounts_active_is_fuzzed` tinyint(1) DEFAULT NULL,
  `public_traffic` tinyint(1) DEFAULT NULL,
  `user_flair_enabled_in_sr` tinyint(1) DEFAULT NULL,
  `user_sr_theme_enabled` tinyint(1) DEFAULT NULL,
  `wiki_enabled` tinyint(1) DEFAULT NULL,
  `is_enrolled_in_new_modmail` tinyint(1) DEFAULT NULL,
  `user_can_flair_in_sr` tinyint(1) DEFAULT NULL,
  `user_flair_background_color` varchar(10) DEFAULT NULL,
  `user_flair_css_class` varchar(255) DEFAULT NULL,
  `user_flair_template_id` varchar(255) DEFAULT NULL,
  `user_flair_text` varchar(255) DEFAULT NULL,
  `user_flair_text_color` varchar(10) DEFAULT NULL,
  `user_has_favorited` tinyint(1) DEFAULT NULL,
  `user_is_banned` tinyint(1) DEFAULT NULL,
  `user_is_contributor` tinyint(1) DEFAULT NULL,
  `user_is_moderator` tinyint(1) DEFAULT NULL,
  `user_is_muted` tinyint(1) DEFAULT NULL,
  `user_is_subscriber` tinyint(1) DEFAULT NULL,
  `user_is_guest` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla pedbox_temas.subreddit_comments_media
CREATE TABLE IF NOT EXISTS `subreddit_comments_media` (
  `subreddit_id` varchar(50) NOT NULL,
  `media_type` varchar(50) NOT NULL,
  PRIMARY KEY (`subreddit_id`,`media_type`),
  CONSTRAINT `subreddit_comments_media_ibfk_1` FOREIGN KEY (`subreddit_id`) REFERENCES `subreddits` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla pedbox_temas.subreddit_comment_settings
CREATE TABLE IF NOT EXISTS `subreddit_comment_settings` (
  `subreddit_id` varchar(50) NOT NULL,
  `allowed_media_types` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`subreddit_id`),
  CONSTRAINT `subreddit_comment_settings_ibfk_1` FOREIGN KEY (`subreddit_id`) REFERENCES `subreddits` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla pedbox_temas.subreddit_flair_richtext
CREATE TABLE IF NOT EXISTS `subreddit_flair_richtext` (
  `flair_richtext_id` int(11) NOT NULL AUTO_INCREMENT,
  `subreddit_id` varchar(50) NOT NULL,
  `e` varchar(50) DEFAULT NULL,
  `t` text DEFAULT NULL,
  PRIMARY KEY (`flair_richtext_id`),
  KEY `subreddit_flair_richtext_ibfk_1` (`subreddit_id`),
  CONSTRAINT `subreddit_flair_richtext_ibfk_1` FOREIGN KEY (`subreddit_id`) REFERENCES `subreddits` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla pedbox_temas.subreddit_sizes
CREATE TABLE IF NOT EXISTS `subreddit_sizes` (
  `subreddit_id` varchar(50) NOT NULL,
  `size_type` varchar(20) NOT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  PRIMARY KEY (`subreddit_id`,`size_type`),
  CONSTRAINT `subreddit_sizes_ibfk_1` FOREIGN KEY (`subreddit_id`) REFERENCES `subreddits` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
