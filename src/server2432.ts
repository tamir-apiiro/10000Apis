
const express = require('express')
import {handler2432} from "./handler2432";
const app = express()
app.get('/2432', handler2432)
app.listen(3000, () => {})
        