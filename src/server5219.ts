
const express = require('express')
import {handler5219} from "./handler5219";
const app = express()
app.get('/5219', handler5219)
app.listen(3000, () => {})
        