
const express = require('express')
import {handler2590} from "./handler2590";
const app = express()
app.get('/2590', handler2590)
app.listen(3000, () => {})
        