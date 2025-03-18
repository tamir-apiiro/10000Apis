
const express = require('express')
import {handler7413} from "./handler7413";
const app = express()
app.get('/7413', handler7413)
app.listen(3000, () => {})
        