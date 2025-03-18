
const express = require('express')
import {handler856} from "./handler856";
const app = express()
app.get('/856', handler856)
app.listen(3000, () => {})
        