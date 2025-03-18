
const express = require('express')
import {handler7048} from "./handler7048";
const app = express()
app.get('/7048', handler7048)
app.listen(3000, () => {})
        