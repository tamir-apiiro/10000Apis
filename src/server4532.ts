
const express = require('express')
import {handler4532} from "./handler4532";
const app = express()
app.get('/4532', handler4532)
app.listen(3000, () => {})
        