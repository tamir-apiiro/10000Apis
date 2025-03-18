
const express = require('express')
import {handler7461} from "./handler7461";
const app = express()
app.get('/7461', handler7461)
app.listen(3000, () => {})
        