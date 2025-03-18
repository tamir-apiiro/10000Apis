
const express = require('express')
import {handler290} from "./handler290";
const app = express()
app.get('/290', handler290)
app.listen(3000, () => {})
        