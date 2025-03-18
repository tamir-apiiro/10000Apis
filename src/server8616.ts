
const express = require('express')
import {handler8616} from "./handler8616";
const app = express()
app.get('/8616', handler8616)
app.listen(3000, () => {})
        