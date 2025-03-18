
const express = require('express')
import {handler2990} from "./handler2990";
const app = express()
app.get('/2990', handler2990)
app.listen(3000, () => {})
        