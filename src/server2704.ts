
const express = require('express')
import {handler2704} from "./handler2704";
const app = express()
app.get('/2704', handler2704)
app.listen(3000, () => {})
        