
const express = require('express')
import {handler67} from "./handler67";
const app = express()
app.get('/67', handler67)
app.listen(3000, () => {})
        