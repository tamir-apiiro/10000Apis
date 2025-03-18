
const express = require('express')
import {handler2477} from "./handler2477";
const app = express()
app.get('/2477', handler2477)
app.listen(3000, () => {})
        