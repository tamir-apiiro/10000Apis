
const express = require('express')
import {handler2473} from "./handler2473";
const app = express()
app.get('/2473', handler2473)
app.listen(3000, () => {})
        