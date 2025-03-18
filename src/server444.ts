
const express = require('express')
import {handler444} from "./handler444";
const app = express()
app.get('/444', handler444)
app.listen(3000, () => {})
        