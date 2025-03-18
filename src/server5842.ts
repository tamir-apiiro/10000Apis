
const express = require('express')
import {handler5842} from "./handler5842";
const app = express()
app.get('/5842', handler5842)
app.listen(3000, () => {})
        