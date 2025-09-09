const database = require('./database');


// Método para consultar los temas desde base de datos
const getTemasBD = async (temaId = null) => {

    let connection;
    try {


       //Se isntancia la conexión a la base de datos.
        connection = await database.createConnection();

        let query = `
            SELECT 
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
            FROM subreddits
        `;

        // Si se envia el temaId, agregamos la condición WHERE id = ?
        if (temaId) {
            query += ` WHERE id = ?`;  
        } else {
            query += ` LIMIT 25`; 
        }

        const [rows] = await connection.execute(query, temaId ? [temaId] : []);

        if (rows.length === 0) {
            console.log('No se encontraron registros.');
        } else {
            console.log(`Consulta ejecutada correctamente, se encontraron ${rows.length} registros.`);
        }

        return rows;

    } catch (error) {
        console.error('Error al obtener los temas:', error.message);
        return null;
    } finally {
        if (connection) {
            
            //Cierra la conexión
            connection.release();
        }
    }
};

// Función para obtener todas los temas
const getAllTemas = async () => {
    try {
        const subreddits = await getTemasBD();
        if (subreddits) {
        } else {
            console.log('No se encontraron datos de los temas.');
        }
        return subreddits;
    } catch (error) {
        console.error('Error al consultar los temas desde la base de datos:', error.message);
        return null;
    }
};



// Función para obtener un tema por id

const getTemaById = async (temaId) => {
    try {
        // Aquí asumo que `Temas.getTemaById` devuelve una promesa que resuelve el tema encontrado
        const temaById = await getTemasBD(temaId);

        if (!temaById) {
            throw new Error('Tema no encontrado');
        }

        return temaById; // Retorna el tema si es encontrado
    } catch (error) {
        console.error('Error al obtener tema:', error);
        throw error;  // Lanzamos el error para que el controlador pueda manejarlo
    }
};



module.exports = { getAllTemas, getTemaById };





//Prueba para traer la información desde la url
/*const getAllTareas = async () => {
    try {
        const response = await axios.get(url);

        console.log(response.data);

        return response.data;

    } catch (error) {
        console.error('Error al consumir la URL:', error.message);
        return null;
    }
};

module.exports = { getAllTareas };*/



//Prueba
// Función para obtener un tema por su ID
/*const getTemaById = async (temaId) => {
    try {
        const subreddits = await getTemasBD(temaId);
        if (subreddits && subreddits.length > 0) {
        } else {
            console.log('No se encontró el tema con el Id:', temaId);
        }
        return subreddits;
    } catch (error) {
        console.error('Error al consultar el tema desde la base de datos:', error.message);
        return null;
    }
};*/