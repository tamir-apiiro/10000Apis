
const express = require('express')
import {handler7559} from "./handler7559";
const app = express()
app.get('/7559', handler7559)
app.listen(3000, () => {})
        