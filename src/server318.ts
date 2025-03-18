
const express = require('express')
import {handler318} from "./handler318";
const app = express()
app.get('/318', handler318)
app.listen(3000, () => {})
        