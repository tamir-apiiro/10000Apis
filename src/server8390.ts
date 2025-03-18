
const express = require('express')
import {handler8390} from "./handler8390";
const app = express()
app.get('/8390', handler8390)
app.listen(3000, () => {})
        