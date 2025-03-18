
const express = require('express')
import {handler2806} from "./handler2806";
const app = express()
app.get('/2806', handler2806)
app.listen(3000, () => {})
        