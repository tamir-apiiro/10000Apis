
const express = require('express')
import {handler3577} from "./handler3577";
const app = express()
app.get('/3577', handler3577)
app.listen(3000, () => {})
        