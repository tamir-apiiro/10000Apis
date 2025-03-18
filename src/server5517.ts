
const express = require('express')
import {handler5517} from "./handler5517";
const app = express()
app.get('/5517', handler5517)
app.listen(3000, () => {})
        