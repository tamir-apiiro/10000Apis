
const express = require('express')
import {handler503} from "./handler503";
const app = express()
app.get('/503', handler503)
app.listen(3000, () => {})
        