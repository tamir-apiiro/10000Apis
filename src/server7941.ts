
const express = require('express')
import {handler7941} from "./handler7941";
const app = express()
app.get('/7941', handler7941)
app.listen(3000, () => {})
        