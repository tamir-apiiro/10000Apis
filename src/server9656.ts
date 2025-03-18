
const express = require('express')
import {handler9656} from "./handler9656";
const app = express()
app.get('/9656', handler9656)
app.listen(3000, () => {})
        