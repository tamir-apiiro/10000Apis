
const express = require('express')
import {handler7341} from "./handler7341";
const app = express()
app.get('/7341', handler7341)
app.listen(3000, () => {})
        