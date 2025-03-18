
const express = require('express')
import {handler5901} from "./handler5901";
const app = express()
app.get('/5901', handler5901)
app.listen(3000, () => {})
        