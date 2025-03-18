
const express = require('express')
import {handler3087} from "./handler3087";
const app = express()
app.get('/3087', handler3087)
app.listen(3000, () => {})
        