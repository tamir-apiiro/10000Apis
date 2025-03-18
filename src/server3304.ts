
const express = require('express')
import {handler3304} from "./handler3304";
const app = express()
app.get('/3304', handler3304)
app.listen(3000, () => {})
        