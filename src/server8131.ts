
const express = require('express')
import {handler8131} from "./handler8131";
const app = express()
app.get('/8131', handler8131)
app.listen(3000, () => {})
        