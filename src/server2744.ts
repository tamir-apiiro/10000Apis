
const express = require('express')
import {handler2744} from "./handler2744";
const app = express()
app.get('/2744', handler2744)
app.listen(3000, () => {})
        