
const express = require('express')
import {handler7328} from "./handler7328";
const app = express()
app.get('/7328', handler7328)
app.listen(3000, () => {})
        