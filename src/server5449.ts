
const express = require('express')
import {handler5449} from "./handler5449";
const app = express()
app.get('/5449', handler5449)
app.listen(3000, () => {})
        