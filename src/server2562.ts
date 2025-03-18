
const express = require('express')
import {handler2562} from "./handler2562";
const app = express()
app.get('/2562', handler2562)
app.listen(3000, () => {})
        