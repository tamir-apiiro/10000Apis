
const express = require('express')
import {handler933} from "./handler933";
const app = express()
app.get('/933', handler933)
app.listen(3000, () => {})
        