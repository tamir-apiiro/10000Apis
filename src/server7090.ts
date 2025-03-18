
const express = require('express')
import {handler7090} from "./handler7090";
const app = express()
app.get('/7090', handler7090)
app.listen(3000, () => {})
        