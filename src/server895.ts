
const express = require('express')
import {handler895} from "./handler895";
const app = express()
app.get('/895', handler895)
app.listen(3000, () => {})
        