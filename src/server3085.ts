
const express = require('express')
import {handler3085} from "./handler3085";
const app = express()
app.get('/3085', handler3085)
app.listen(3000, () => {})
        