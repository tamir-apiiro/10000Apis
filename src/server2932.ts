
const express = require('express')
import {handler2932} from "./handler2932";
const app = express()
app.get('/2932', handler2932)
app.listen(3000, () => {})
        