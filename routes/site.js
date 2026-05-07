import express from "express";
const router = express.Router();
router.get('/', (req,res)=>res.render('pages/home',{pageTitle:res.locals.settings.metaTitle||'Prediksi Bola',pageDescription:res.locals.settings.metaDescription||'',activePage:'home',styles:['/assets/css/styles.css'],scripts:['/assets/js/home.js']}));
router.get('/live', (req,res)=>res.render('pages/live',{pageTitle:`Live Score • ${res.locals.settings.siteName||'Bandar Toto'}`,pageDescription:res.locals.settings.metaDescription||'',activePage:'live',styles:['/assets/css/styles.css','/assets/css/live.css'],scripts:['/assets/js/live.js']}));
export default router;
