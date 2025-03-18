
const express = require('express')
import {handler7132} from "./handler7132";
const app = express()
app.get('/7132', handler7132)
app.listen(3000, () => {})
        