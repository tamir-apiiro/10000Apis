
const express = require('express')
import {handler7117} from "./handler7117";
const app = express()
app.get('/7117', handler7117)
app.listen(3000, () => {})
        