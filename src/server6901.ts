
const express = require('express')
import {handler6901} from "./handler6901";
const app = express()
app.get('/6901', handler6901)
app.listen(3000, () => {})
        