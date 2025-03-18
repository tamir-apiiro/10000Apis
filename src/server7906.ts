
const express = require('express')
import {handler7906} from "./handler7906";
const app = express()
app.get('/7906', handler7906)
app.listen(3000, () => {})
        