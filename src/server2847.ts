
const express = require('express')
import {handler2847} from "./handler2847";
const app = express()
app.get('/2847', handler2847)
app.listen(3000, () => {})
        