
const express = require('express')
import {handler2435} from "./handler2435";
const app = express()
app.get('/2435', handler2435)
app.listen(3000, () => {})
        