
const express = require('express')
import {handler466} from "./handler466";
const app = express()
app.get('/466', handler466)
app.listen(3000, () => {})
        