
const express = require('express')
import {handler725} from "./handler725";
const app = express()
app.get('/725', handler725)
app.listen(3000, () => {})
        