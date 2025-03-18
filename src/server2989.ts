
const express = require('express')
import {handler2989} from "./handler2989";
const app = express()
app.get('/2989', handler2989)
app.listen(3000, () => {})
        