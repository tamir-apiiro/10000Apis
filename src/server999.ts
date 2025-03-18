
const express = require('express')
import {handler999} from "./handler999";
const app = express()
app.get('/999', handler999)
app.listen(3000, () => {})
        