
const express = require('express')
import {handler7807} from "./handler7807";
const app = express()
app.get('/7807', handler7807)
app.listen(3000, () => {})
        