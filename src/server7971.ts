
const express = require('express')
import {handler7971} from "./handler7971";
const app = express()
app.get('/7971', handler7971)
app.listen(3000, () => {})
        