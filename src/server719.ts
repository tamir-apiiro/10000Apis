
const express = require('express')
import {handler719} from "./handler719";
const app = express()
app.get('/719', handler719)
app.listen(3000, () => {})
        