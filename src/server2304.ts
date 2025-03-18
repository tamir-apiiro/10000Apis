
const express = require('express')
import {handler2304} from "./handler2304";
const app = express()
app.get('/2304', handler2304)
app.listen(3000, () => {})
        