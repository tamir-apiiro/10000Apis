
const express = require('express')
import {handler5067} from "./handler5067";
const app = express()
app.get('/5067', handler5067)
app.listen(3000, () => {})
        