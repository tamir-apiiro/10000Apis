
const express = require('express')
import {handler2893} from "./handler2893";
const app = express()
app.get('/2893', handler2893)
app.listen(3000, () => {})
        