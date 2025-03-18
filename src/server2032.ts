
const express = require('express')
import {handler2032} from "./handler2032";
const app = express()
app.get('/2032', handler2032)
app.listen(3000, () => {})
        