
const express = require('express')
import {handler72} from "./handler72";
const app = express()
app.get('/72', handler72)
app.listen(3000, () => {})
        