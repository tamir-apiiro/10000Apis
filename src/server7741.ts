
const express = require('express')
import {handler7741} from "./handler7741";
const app = express()
app.get('/7741', handler7741)
app.listen(3000, () => {})
        