
const express = require('express')
import {handler5447} from "./handler5447";
const app = express()
app.get('/5447', handler5447)
app.listen(3000, () => {})
        