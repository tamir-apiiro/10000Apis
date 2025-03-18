
const express = require('express')
import {handler7153} from "./handler7153";
const app = express()
app.get('/7153', handler7153)
app.listen(3000, () => {})
        