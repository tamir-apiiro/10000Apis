
const express = require('express')
import {handler7652} from "./handler7652";
const app = express()
app.get('/7652', handler7652)
app.listen(3000, () => {})
        