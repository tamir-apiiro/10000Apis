
const express = require('express')
import {handler7753} from "./handler7753";
const app = express()
app.get('/7753', handler7753)
app.listen(3000, () => {})
        