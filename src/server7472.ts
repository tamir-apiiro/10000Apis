
const express = require('express')
import {handler7472} from "./handler7472";
const app = express()
app.get('/7472', handler7472)
app.listen(3000, () => {})
        