
const express = require('express')
import {handler7017} from "./handler7017";
const app = express()
app.get('/7017', handler7017)
app.listen(3000, () => {})
        