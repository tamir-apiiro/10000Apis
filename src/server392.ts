
const express = require('express')
import {handler392} from "./handler392";
const app = express()
app.get('/392', handler392)
app.listen(3000, () => {})
        