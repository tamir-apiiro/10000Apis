
const express = require('express')
import {handler847} from "./handler847";
const app = express()
app.get('/847', handler847)
app.listen(3000, () => {})
        