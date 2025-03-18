
const express = require('express')
import {handler7018} from "./handler7018";
const app = express()
app.get('/7018', handler7018)
app.listen(3000, () => {})
        