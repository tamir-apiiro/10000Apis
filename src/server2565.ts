
const express = require('express')
import {handler2565} from "./handler2565";
const app = express()
app.get('/2565', handler2565)
app.listen(3000, () => {})
        