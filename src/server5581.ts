
const express = require('express')
import {handler5581} from "./handler5581";
const app = express()
app.get('/5581', handler5581)
app.listen(3000, () => {})
        