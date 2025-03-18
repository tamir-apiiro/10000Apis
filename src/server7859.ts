
const express = require('express')
import {handler7859} from "./handler7859";
const app = express()
app.get('/7859', handler7859)
app.listen(3000, () => {})
        