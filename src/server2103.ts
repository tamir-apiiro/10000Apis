
const express = require('express')
import {handler2103} from "./handler2103";
const app = express()
app.get('/2103', handler2103)
app.listen(3000, () => {})
        