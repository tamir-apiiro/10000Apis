
const express = require('express')
import {handler7988} from "./handler7988";
const app = express()
app.get('/7988', handler7988)
app.listen(3000, () => {})
        