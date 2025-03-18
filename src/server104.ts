
const express = require('express')
import {handler104} from "./handler104";
const app = express()
app.get('/104', handler104)
app.listen(3000, () => {})
        