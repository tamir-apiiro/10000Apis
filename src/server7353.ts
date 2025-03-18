
const express = require('express')
import {handler7353} from "./handler7353";
const app = express()
app.get('/7353', handler7353)
app.listen(3000, () => {})
        