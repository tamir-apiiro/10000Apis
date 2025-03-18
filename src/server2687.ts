
const express = require('express')
import {handler2687} from "./handler2687";
const app = express()
app.get('/2687', handler2687)
app.listen(3000, () => {})
        