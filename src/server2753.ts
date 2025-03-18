
const express = require('express')
import {handler2753} from "./handler2753";
const app = express()
app.get('/2753', handler2753)
app.listen(3000, () => {})
        