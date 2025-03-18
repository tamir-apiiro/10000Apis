
const express = require('express')
import {handler6304} from "./handler6304";
const app = express()
app.get('/6304', handler6304)
app.listen(3000, () => {})
        