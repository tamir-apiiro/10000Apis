
const express = require('express')
import {handler7038} from "./handler7038";
const app = express()
app.get('/7038', handler7038)
app.listen(3000, () => {})
        