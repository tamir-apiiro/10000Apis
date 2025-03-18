
const express = require('express')
import {handler2095} from "./handler2095";
const app = express()
app.get('/2095', handler2095)
app.listen(3000, () => {})
        