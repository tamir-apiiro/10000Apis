
const express = require('express')
import {handler7289} from "./handler7289";
const app = express()
app.get('/7289', handler7289)
app.listen(3000, () => {})
        