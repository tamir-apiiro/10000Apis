
const express = require('express')
import {handler7129} from "./handler7129";
const app = express()
app.get('/7129', handler7129)
app.listen(3000, () => {})
        