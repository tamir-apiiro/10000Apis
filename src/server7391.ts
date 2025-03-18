
const express = require('express')
import {handler7391} from "./handler7391";
const app = express()
app.get('/7391', handler7391)
app.listen(3000, () => {})
        