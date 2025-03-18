
const express = require('express')
import {handler2338} from "./handler2338";
const app = express()
app.get('/2338', handler2338)
app.listen(3000, () => {})
        