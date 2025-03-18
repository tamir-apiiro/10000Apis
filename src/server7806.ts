
const express = require('express')
import {handler7806} from "./handler7806";
const app = express()
app.get('/7806', handler7806)
app.listen(3000, () => {})
        