
const express = require('express')
import {handler442} from "./handler442";
const app = express()
app.get('/442', handler442)
app.listen(3000, () => {})
        