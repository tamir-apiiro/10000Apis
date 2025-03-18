
const express = require('express')
import {handler8210} from "./handler8210";
const app = express()
app.get('/8210', handler8210)
app.listen(3000, () => {})
        