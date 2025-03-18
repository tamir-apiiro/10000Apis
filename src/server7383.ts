
const express = require('express')
import {handler7383} from "./handler7383";
const app = express()
app.get('/7383', handler7383)
app.listen(3000, () => {})
        