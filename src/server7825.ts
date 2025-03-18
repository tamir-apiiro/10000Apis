
const express = require('express')
import {handler7825} from "./handler7825";
const app = express()
app.get('/7825', handler7825)
app.listen(3000, () => {})
        