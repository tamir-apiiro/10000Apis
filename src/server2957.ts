
const express = require('express')
import {handler2957} from "./handler2957";
const app = express()
app.get('/2957', handler2957)
app.listen(3000, () => {})
        