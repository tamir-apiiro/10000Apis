
const express = require('express')
import {handler634} from "./handler634";
const app = express()
app.get('/634', handler634)
app.listen(3000, () => {})
        