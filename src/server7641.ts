
const express = require('express')
import {handler7641} from "./handler7641";
const app = express()
app.get('/7641', handler7641)
app.listen(3000, () => {})
        