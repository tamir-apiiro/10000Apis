
const express = require('express')
import {handler7434} from "./handler7434";
const app = express()
app.get('/7434', handler7434)
app.listen(3000, () => {})
        