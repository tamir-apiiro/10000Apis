
const express = require('express')
import {handler7227} from "./handler7227";
const app = express()
app.get('/7227', handler7227)
app.listen(3000, () => {})
        