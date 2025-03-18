
const express = require('express')
import {handler7878} from "./handler7878";
const app = express()
app.get('/7878', handler7878)
app.listen(3000, () => {})
        