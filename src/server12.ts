
const express = require('express')
import {handler12} from "./handler12";
const app = express()
app.get('/12', handler12)
app.listen(3000, () => {})
        