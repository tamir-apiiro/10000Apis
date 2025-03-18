
const express = require('express')
import {handler7279} from "./handler7279";
const app = express()
app.get('/7279', handler7279)
app.listen(3000, () => {})
        