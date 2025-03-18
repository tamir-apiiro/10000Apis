
const express = require('express')
import {handler2789} from "./handler2789";
const app = express()
app.get('/2789', handler2789)
app.listen(3000, () => {})
        