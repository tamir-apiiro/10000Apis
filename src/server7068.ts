
const express = require('express')
import {handler7068} from "./handler7068";
const app = express()
app.get('/7068', handler7068)
app.listen(3000, () => {})
        