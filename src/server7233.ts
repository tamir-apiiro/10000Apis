
const express = require('express')
import {handler7233} from "./handler7233";
const app = express()
app.get('/7233', handler7233)
app.listen(3000, () => {})
        