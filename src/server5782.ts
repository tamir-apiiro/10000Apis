
const express = require('express')
import {handler5782} from "./handler5782";
const app = express()
app.get('/5782', handler5782)
app.listen(3000, () => {})
        