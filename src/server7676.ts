
const express = require('express')
import {handler7676} from "./handler7676";
const app = express()
app.get('/7676', handler7676)
app.listen(3000, () => {})
        