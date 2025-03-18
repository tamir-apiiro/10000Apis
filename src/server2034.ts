
const express = require('express')
import {handler2034} from "./handler2034";
const app = express()
app.get('/2034', handler2034)
app.listen(3000, () => {})
        