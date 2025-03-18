
const express = require('express')
import {handler7966} from "./handler7966";
const app = express()
app.get('/7966', handler7966)
app.listen(3000, () => {})
        