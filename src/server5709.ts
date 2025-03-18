
const express = require('express')
import {handler5709} from "./handler5709";
const app = express()
app.get('/5709', handler5709)
app.listen(3000, () => {})
        