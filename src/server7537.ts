
const express = require('express')
import {handler7537} from "./handler7537";
const app = express()
app.get('/7537', handler7537)
app.listen(3000, () => {})
        