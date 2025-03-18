
const express = require('express')
import {handler7685} from "./handler7685";
const app = express()
app.get('/7685', handler7685)
app.listen(3000, () => {})
        