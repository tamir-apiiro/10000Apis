
const express = require('express')
import {handler822} from "./handler822";
const app = express()
app.get('/822', handler822)
app.listen(3000, () => {})
        