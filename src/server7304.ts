
const express = require('express')
import {handler7304} from "./handler7304";
const app = express()
app.get('/7304', handler7304)
app.listen(3000, () => {})
        