
const express = require('express')
import {handler7489} from "./handler7489";
const app = express()
app.get('/7489', handler7489)
app.listen(3000, () => {})
        