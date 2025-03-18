
const express = require('express')
import {handler5304} from "./handler5304";
const app = express()
app.get('/5304', handler5304)
app.listen(3000, () => {})
        