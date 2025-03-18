
const express = require('express')
import {handler5887} from "./handler5887";
const app = express()
app.get('/5887', handler5887)
app.listen(3000, () => {})
        