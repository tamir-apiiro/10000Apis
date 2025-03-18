
const express = require('express')
import {handler7512} from "./handler7512";
const app = express()
app.get('/7512', handler7512)
app.listen(3000, () => {})
        