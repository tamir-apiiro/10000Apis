
const express = require('express')
import {handler5957} from "./handler5957";
const app = express()
app.get('/5957', handler5957)
app.listen(3000, () => {})
        