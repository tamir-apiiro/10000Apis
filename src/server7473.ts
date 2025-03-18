
const express = require('express')
import {handler7473} from "./handler7473";
const app = express()
app.get('/7473', handler7473)
app.listen(3000, () => {})
        