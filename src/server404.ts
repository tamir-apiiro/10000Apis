
const express = require('express')
import {handler404} from "./handler404";
const app = express()
app.get('/404', handler404)
app.listen(3000, () => {})
        