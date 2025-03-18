
const express = require('express')
import {handler7819} from "./handler7819";
const app = express()
app.get('/7819', handler7819)
app.listen(3000, () => {})
        