
const express = require('express')
import {handler194} from "./handler194";
const app = express()
app.get('/194', handler194)
app.listen(3000, () => {})
        