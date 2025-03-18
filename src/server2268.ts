
const express = require('express')
import {handler2268} from "./handler2268";
const app = express()
app.get('/2268', handler2268)
app.listen(3000, () => {})
        