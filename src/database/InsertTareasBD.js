const axios = require('axios');
const database = require('./database');
const url = 'https://www.reddit.com/reddits.json';


//Método para consultar los temas
const consultarTemas = async () => {
    let connection;
    try {
        const response = await axios.get(url);
        const redditData = response.data.data;

        connection = await database.createConnection();
        await connection.beginTransaction();

        const listingId = redditData.modhash || `listing-${Date.now()}`;
        await connection.execute(
            `INSERT INTO reddit_listing (listing_id, kind, after, \`before\`, modhash) VALUES (?, ?, ?, ?, ?)`,
            [listingId, response.data.kind ?? null, redditData.after ?? null, redditData.before ?? null, redditData.modhash ?? null]
        );

        // Se itera los datos para ingresarlos a la tabla de subreddits
        const subreddits = redditData.children;
        for (const child of subreddits) {
            const subreddit = child.data;

            await connection.execute(
                `INSERT INTO subreddits (
                    id, name, display_name, title, url, public_description, description,
                    description_html, submit_text, submit_text_html, submit_link_label,
                    submit_text_label, subreddit_type, lang, community_icon, banner_img,
                    header_img, icon_img, mobile_banner_image, banner_background_color,
                    header_title, key_color, primary_color, advertiser_category,
                    link_flair_position, user_flair_position, suggested_comment_sort,
                    wls, subscribers, accounts_active, active_user_count,
                    comment_score_hide_mins, prediction_leaderboard_entry_type,
                    videostream_links_count, notification_level, created_utc, created,
                    over18, quarantine, is_crosspostable_subreddit, can_assign_link_flair,
                    can_assign_user_flair, free_form_reports, spoilers_enabled,
                    accept_followers, hide_ads, show_media_preview, show_media,
                    collapse_deleted_comments, community_reviewed, disable_contributor_requests,
                    restrict_commenting, restrict_posting, should_archive_posts,
                    should_show_media_in_comments_setting, has_menu_widget, emojis_enabled,
                    all_original_content, original_content_tag_enabled, allow_discovery,
                    allow_galleries, allow_images, allow_polls, allow_predictions,
                    allow_prediction_contributors, allow_predictions_tournament,
                    allow_talks, allow_videogifs, allow_videos, accounts_active_is_fuzzed,
                    public_traffic, user_flair_enabled_in_sr, user_sr_theme_enabled,
                    wiki_enabled, is_enrolled_in_new_modmail, user_can_flair_in_sr,
                    user_flair_background_color, user_flair_css_class, user_flair_template_id,
                    user_flair_text, user_flair_text_color, user_has_favorited,
                    user_is_banned, user_is_contributor, user_is_moderator,
                    user_is_muted, user_is_subscriber, user_is_guest
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    subreddit.id, subreddit.name, subreddit.display_name, subreddit.title ?? null, subreddit.url ?? null,
                    subreddit.public_description ?? null, subreddit.description ?? null, subreddit.description_html ?? null,
                    subreddit.submit_text ?? null, subreddit.submit_text_html ?? null, subreddit.submit_link_label ?? null,
                    subreddit.submit_text_label ?? null, subreddit.subreddit_type ?? null, subreddit.lang ?? null,
                    subreddit.community_icon ?? null, subreddit.banner_img ?? null, subreddit.header_img ?? null,
                    subreddit.icon_img ?? null, subreddit.mobile_banner_image ?? null, subreddit.banner_background_color ?? null,
                    subreddit.header_title ?? null, subreddit.key_color ?? null, subreddit.primary_color ?? null,
                    subreddit.advertiser_category ?? null, subreddit.link_flair_position ?? null, subreddit.user_flair_position ?? null,
                    subreddit.suggested_comment_sort ?? null, subreddit.wls ?? null, subreddit.subscribers ?? null,
                    subreddit.accounts_active ?? null, subreddit.active_user_count ?? null, subreddit.comment_score_hide_mins ?? null,
                    subreddit.prediction_leaderboard_entry_type ?? null, subreddit.videostream_links_count ?? null,
                    subreddit.notification_level ?? null, subreddit.created_utc ?? null, subreddit.created ?? null,
                    subreddit.over18 ?? null, subreddit.quarantine ?? null, subreddit.is_crosspostable_subreddit ?? null,
                    subreddit.can_assign_link_flair ?? null, subreddit.can_assign_user_flair ?? null,
                    subreddit.free_form_reports ?? null, subreddit.spoilers_enabled ?? null, subreddit.accept_followers ?? null,
                    subreddit.hide_ads ?? null, subreddit.show_media_preview ?? null, subreddit.show_media ?? null,
                    subreddit.collapse_deleted_comments ?? null, subreddit.community_reviewed ?? null,
                    subreddit.disable_contributor_requests ?? null, subreddit.restrict_commenting ?? null,
                    subreddit.restrict_posting ?? null, subreddit.should_archive_posts ?? null,
                    subreddit.should_show_media_in_comments_setting ?? null, subreddit.has_menu_widget ?? null,
                    subreddit.emojis_enabled ?? null, subreddit.all_original_content ?? null,
                    subreddit.original_content_tag_enabled ?? null, subreddit.allow_discovery ?? null,
                    subreddit.allow_galleries ?? null, subreddit.allow_images ?? null, subreddit.allow_polls ?? null,
                    subreddit.allow_predictions ?? null, subreddit.allow_prediction_contributors ?? null,
                    subreddit.allow_predictions_tournament ?? null, subreddit.allow_talks ?? null,
                    subreddit.allow_videogifs ?? null, subreddit.allow_videos ?? null, subreddit.accounts_active_is_fuzzed ?? null,
                    subreddit.public_traffic ?? null, subreddit.user_flair_enabled_in_sr ?? null,
                    subreddit.user_sr_theme_enabled ?? null, subreddit.wiki_enabled ?? null,
                    subreddit.is_enrolled_in_new_modmail ?? null, subreddit.user_can_flair_in_sr ?? null,
                    subreddit.user_flair_background_color ?? null, subreddit.user_flair_css_class ?? null,
                    subreddit.user_flair_template_id ?? null, subreddit.user_flair_text ?? null,
                    subreddit.user_flair_text_color ?? null, subreddit.user_has_favorited ?? null,
                    subreddit.user_is_banned ?? null, subreddit.user_is_contributor ?? null,
                    subreddit.user_is_moderator ?? null, subreddit.user_is_muted ?? null,
                    subreddit.user_is_subscriber ?? null, subreddit.user_is_guest ?? null
                ]
            );

            //Se inserta a las otras tablas
            try {
                const sizes = {
                    'banner_size': subreddit.banner_size,
                    'header_size': subreddit.header_size,
                    'icon_size': subreddit.icon_size,
                    'emojis_custom_size': subreddit.emojis_custom_size
                };

                let sizesInserted = false;
                for (const type in sizes) {
                    if (sizes[type]) {
                        await connection.execute(
                            `INSERT INTO subreddit_sizes (subreddit_id, size_type, width, height) VALUES (?, ?, ?, ?)`,
                            [subreddit.id, type, sizes[type][0], sizes[type][1]]
                        );
                        sizesInserted = true;
                    }
                }
                if (sizesInserted) {
                    console.log(`Se insertaron los datos en subreddit_sizes del tema con id: ${subreddit.id}.`);
                } else {
                    console.log(`No se encontraron datos de tamaños para insertar en subreddit_sizes: ${subreddit.id}.`);
                }

            } catch (sizeError) {
                console.error(`Error al insertar datos de tamaños para subreddit_sizes: ${subreddit.id}:`, sizeError.message);
            }
            
            try {
                if (subreddit.allowed_media_in_comments && subreddit.allowed_media_in_comments.length > 0) {
                    for (const media_type of subreddit.allowed_media_in_comments) {
                        await connection.execute(
                            `INSERT INTO subreddit_comments_media (subreddit_id, media_type) VALUES (?, ?)`,
                            [subreddit.id, media_type]
                        );
                    }
                    console.log(`Se insertaron los datos en subreddit_comments_media del tema:${subreddit.id}.`);
                } else {
                    console.log(`No se encontraron datos de medios de comentarios para insertar en subreddit_comments_media: ${subreddit.id}.`);
                }
            } catch (mediaError) {
                console.error(`Error al insertar datos de medios de comentarios para subreddit_comments_media:${subreddit.id}:`, mediaError.message);
            }

            try {
                if (subreddit.user_flair_richtext && subreddit.user_flair_richtext.length > 0) {
                    for (const flair of subreddit.user_flair_richtext) {
                        await connection.execute(
                            `INSERT INTO subreddit_flair_richtext (subreddit_id, e, t) VALUES (?, ?, ?)`,
                            [subreddit.id, flair.e ?? null, flair.t ?? null]
                        );
                    }
                    console.log(`Se insertaron los datos en subreddit_flair_richtext del tema: ${subreddit.id}.`);
                } else {
                    console.log(`No se encontraron datos de flair richtext para insertar en subreddit_flair_richtext: ${subreddit.id}.`);
                }
            } catch (flairError) {
                console.error(`Error al insertar datos de flair richtext para subreddit_flair_richtext: ${subreddit.id}:`, flairError.message);
            }
            
            try {
                if (subreddit.comment_contribution_settings) {
                    await connection.execute(
                        `INSERT INTO subreddit_comment_settings (subreddit_id, allowed_media_types) VALUES (?, ?)`,
                        [subreddit.id, subreddit.comment_contribution_settings.allowed_media_types ?? null]
                    );
                    console.log(`Se insertrn los datos en subreddit_comment_settings del tema: ${subreddit.id}.`);
                } else {
                    console.log(`No se encontraron datos de configuración de comentarios para insertar en subreddit_comment_settings: ${subreddit.id}.`);
                }
            } catch (settingsError) {
                console.error(`Error al insertar datos de configuración de comentarios para subreddit_comment_settings: ${subreddit.id}:`, settingsError.message);
            }
        }

        await connection.commit();
        console.log('Datos guardados exitosamente.');
        return true;

    } catch (error) {
        if (connection) {
            await connection.rollback();
        }
        console.error('Error al consumir o guardar los datos:', error);
        return false;
    } finally {
        if (connection) {
            connection.end();
        }
    }
};

        

consultarTemas();
