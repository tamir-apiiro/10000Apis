
const express = require('express')
import {handler304} from "./handler304";
const app = express()
app.get('/304', handler304)
app.listen(3000, () => {})
        