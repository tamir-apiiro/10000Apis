
const express = require('express')
import {handler2033} from "./handler2033";
const app = express()
app.get('/2033', handler2033)
app.listen(3000, () => {})
        