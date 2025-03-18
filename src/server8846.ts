
const express = require('express')
import {handler8846} from "./handler8846";
const app = express()
app.get('/8846', handler8846)
app.listen(3000, () => {})
        