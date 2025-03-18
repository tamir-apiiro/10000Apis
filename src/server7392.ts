
const express = require('express')
import {handler7392} from "./handler7392";
const app = express()
app.get('/7392', handler7392)
app.listen(3000, () => {})
        