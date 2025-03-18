
const express = require('express')
import {handler432} from "./handler432";
const app = express()
app.get('/432', handler432)
app.listen(3000, () => {})
        