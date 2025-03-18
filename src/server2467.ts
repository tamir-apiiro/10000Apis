
const express = require('express')
import {handler2467} from "./handler2467";
const app = express()
app.get('/2467', handler2467)
app.listen(3000, () => {})
        