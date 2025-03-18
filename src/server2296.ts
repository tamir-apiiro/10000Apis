
const express = require('express')
import {handler2296} from "./handler2296";
const app = express()
app.get('/2296', handler2296)
app.listen(3000, () => {})
        