
const express = require('express')
import {handler7562} from "./handler7562";
const app = express()
app.get('/7562', handler7562)
app.listen(3000, () => {})
        