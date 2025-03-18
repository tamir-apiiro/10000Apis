
const express = require('express')
import {handler7374} from "./handler7374";
const app = express()
app.get('/7374', handler7374)
app.listen(3000, () => {})
        