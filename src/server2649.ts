
const express = require('express')
import {handler2649} from "./handler2649";
const app = express()
app.get('/2649', handler2649)
app.listen(3000, () => {})
        