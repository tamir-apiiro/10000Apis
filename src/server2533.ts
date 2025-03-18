
const express = require('express')
import {handler2533} from "./handler2533";
const app = express()
app.get('/2533', handler2533)
app.listen(3000, () => {})
        