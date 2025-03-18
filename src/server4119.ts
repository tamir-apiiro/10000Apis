
const express = require('express')
import {handler4119} from "./handler4119";
const app = express()
app.get('/4119', handler4119)
app.listen(3000, () => {})
        