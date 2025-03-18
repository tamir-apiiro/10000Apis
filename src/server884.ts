
const express = require('express')
import {handler884} from "./handler884";
const app = express()
app.get('/884', handler884)
app.listen(3000, () => {})
        