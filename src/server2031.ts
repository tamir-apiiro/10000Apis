
const express = require('express')
import {handler2031} from "./handler2031";
const app = express()
app.get('/2031', handler2031)
app.listen(3000, () => {})
        