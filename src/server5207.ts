
const express = require('express')
import {handler5207} from "./handler5207";
const app = express()
app.get('/5207', handler5207)
app.listen(3000, () => {})
        