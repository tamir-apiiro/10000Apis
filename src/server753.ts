
const express = require('express')
import {handler753} from "./handler753";
const app = express()
app.get('/753', handler753)
app.listen(3000, () => {})
        