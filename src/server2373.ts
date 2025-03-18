
const express = require('express')
import {handler2373} from "./handler2373";
const app = express()
app.get('/2373', handler2373)
app.listen(3000, () => {})
        