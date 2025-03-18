
const express = require('express')
import {handler2541} from "./handler2541";
const app = express()
app.get('/2541', handler2541)
app.listen(3000, () => {})
        