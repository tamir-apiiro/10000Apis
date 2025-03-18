
const express = require('express')
import {handler7270} from "./handler7270";
const app = express()
app.get('/7270', handler7270)
app.listen(3000, () => {})
        