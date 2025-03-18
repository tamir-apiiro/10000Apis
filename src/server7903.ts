
const express = require('express')
import {handler7903} from "./handler7903";
const app = express()
app.get('/7903', handler7903)
app.listen(3000, () => {})
        