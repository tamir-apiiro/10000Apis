
const express = require('express')
import {handler7690} from "./handler7690";
const app = express()
app.get('/7690', handler7690)
app.listen(3000, () => {})
        