
const express = require('express')
import {handler7041} from "./handler7041";
const app = express()
app.get('/7041', handler7041)
app.listen(3000, () => {})
        