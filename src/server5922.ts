
const express = require('express')
import {handler5922} from "./handler5922";
const app = express()
app.get('/5922', handler5922)
app.listen(3000, () => {})
        