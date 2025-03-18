
const express = require('express')
import {handler7687} from "./handler7687";
const app = express()
app.get('/7687', handler7687)
app.listen(3000, () => {})
        