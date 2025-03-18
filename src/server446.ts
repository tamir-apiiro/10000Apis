
const express = require('express')
import {handler446} from "./handler446";
const app = express()
app.get('/446', handler446)
app.listen(3000, () => {})
        