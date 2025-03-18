
const express = require('express')
import {handler2629} from "./handler2629";
const app = express()
app.get('/2629', handler2629)
app.listen(3000, () => {})
        