
const express = require('express')
import {handler132} from "./handler132";
const app = express()
app.get('/132', handler132)
app.listen(3000, () => {})
        