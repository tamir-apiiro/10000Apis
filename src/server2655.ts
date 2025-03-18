
const express = require('express')
import {handler2655} from "./handler2655";
const app = express()
app.get('/2655', handler2655)
app.listen(3000, () => {})
        