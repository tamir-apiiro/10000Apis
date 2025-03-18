
const express = require('express')
import {handler497} from "./handler497";
const app = express()
app.get('/497', handler497)
app.listen(3000, () => {})
        