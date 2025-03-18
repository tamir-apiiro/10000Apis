
const express = require('express')
import {handler2437} from "./handler2437";
const app = express()
app.get('/2437', handler2437)
app.listen(3000, () => {})
        