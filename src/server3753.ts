
const express = require('express')
import {handler3753} from "./handler3753";
const app = express()
app.get('/3753', handler3753)
app.listen(3000, () => {})
        