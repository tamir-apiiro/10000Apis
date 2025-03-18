
const express = require('express')
import {handler7295} from "./handler7295";
const app = express()
app.get('/7295', handler7295)
app.listen(3000, () => {})
        