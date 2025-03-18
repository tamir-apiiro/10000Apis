
const express = require('express')
import {handler7639} from "./handler7639";
const app = express()
app.get('/7639', handler7639)
app.listen(3000, () => {})
        