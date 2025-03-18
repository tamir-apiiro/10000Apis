
const express = require('express')
import {handler2512} from "./handler2512";
const app = express()
app.get('/2512', handler2512)
app.listen(3000, () => {})
        