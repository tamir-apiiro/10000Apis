
const express = require('express')
import {handler7840} from "./handler7840";
const app = express()
app.get('/7840', handler7840)
app.listen(3000, () => {})
        