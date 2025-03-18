
const express = require('express')
import {handler700} from "./handler700";
const app = express()
app.get('/700', handler700)
app.listen(3000, () => {})
        