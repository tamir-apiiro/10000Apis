
const express = require('express')
import {handler7848} from "./handler7848";
const app = express()
app.get('/7848', handler7848)
app.listen(3000, () => {})
        