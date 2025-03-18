
const express = require('express')
import {handler1224} from "./handler1224";
const app = express()
app.get('/1224', handler1224)
app.listen(3000, () => {})
        