
const express = require('express')
import {handler848} from "./handler848";
const app = express()
app.get('/848', handler848)
app.listen(3000, () => {})
        