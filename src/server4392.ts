
const express = require('express')
import {handler4392} from "./handler4392";
const app = express()
app.get('/4392', handler4392)
app.listen(3000, () => {})
        