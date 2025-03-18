
const express = require('express')
import {handler7443} from "./handler7443";
const app = express()
app.get('/7443', handler7443)
app.listen(3000, () => {})
        