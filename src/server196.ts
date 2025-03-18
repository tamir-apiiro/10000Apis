
const express = require('express')
import {handler196} from "./handler196";
const app = express()
app.get('/196', handler196)
app.listen(3000, () => {})
        