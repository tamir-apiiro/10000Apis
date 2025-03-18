
const express = require('express')
import {handler49} from "./handler49";
const app = express()
app.get('/49', handler49)
app.listen(3000, () => {})
        