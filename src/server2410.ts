
const express = require('express')
import {handler2410} from "./handler2410";
const app = express()
app.get('/2410', handler2410)
app.listen(3000, () => {})
        